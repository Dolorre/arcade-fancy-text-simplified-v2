namespace SpriteKind {
    export const FancyText = SpriteKind.create();
}

namespace fancyText {
    class FancyTextState {
        sprites: TextSprite[]

        constructor() {
            this.sprites = [];

            const eventContext = game.currentScene().eventContext;
        }
    }

    let stateStack: FancyTextState[];

    function init() {
        if (stateStack) return;
        stateStack = [new FancyTextState()];

        game.addScenePushHandler(() => {
            stateStack.push(new FancyTextState());
        });

        game.addScenePopHandler(() => {
            stateStack.pop();

            if (stateStack.length === 0) {
                stateStack.push(new FancyTextState());
            }
        });
    }

    function state() {
        init();
        return stateStack[stateStack.length - 1];
    }


    export class TextSprite extends sprites.ExtendableSprite {
        protected spans: Span[];
        protected lines: Line[];
        protected maxWidth: number;
        protected color: number;
        protected defaultFont: BaseFont;

        protected nextId: number;
        protected startLine: number;
        protected drawnLines: number;

        constructor(public text: string, kind: number) {
            super(img`1`, kind);

            this.color = 1;
            this.maxWidth = 0;
            this.nextId = 0;
            this.setText(text);
            this.startLine = 0;

            state().sprites.push(this);
        }

        draw(drawLeft: number, drawTop: number) {
            const font = this.defaultFont || getDefaultFont(this.text);
                drawFontText(
                    drawLeft,
                    drawTop,
                    this.text,
                    this.visibleLines(),
                    this.color,
                    font,
                    this.text.length
                );
        }

        length(): number {
            return calculateTextLength(this.lines, 0, this.lines.length);
        }

        setText(text: string) {
            this.text = text;
            this.spans = getSpans(text);
            this.recalculateLines();
        }

        getText() {
            return this.text;
        }

        setMaxWidth(maxWidth: number) {
            this.maxWidth = Math.max(maxWidth, 0) | 0;
            this.recalculateLines();
        }

        setColor(color: number) {
            this.color = color;
        }

        getColor(): number {
            return this.color;
        }

        setFont(font: BaseFont) {
            this.defaultFont = font;
            this.recalculateLines();
        }

        setMaxLines(lines: number) {
            this.drawnLines = lines;
        }

        setStartLine(line: number) {
            this.startLine = line;
            this.recalculateDimensions();
        }

        nextPage() {
            this.setStartLine(this.startLine + this.drawnLines);
        }

        hasNextPage() {
            if (this.drawnLines <= 0) return false;
            return this.startLine + this.drawnLines < this.lines.length
        }

        protected recalculateLines() {
            if (this.maxWidth) {
                this.lines = getLines(this.text, this.spans, this.maxWidth, this.defaultFont || getDefaultFont(this.text));
            }
            else {
                this.lines = getLines(this.text, this.spans, 0xffffffff, this.defaultFont || getDefaultFont(this.text));
            }

            this.recalculateDimensions();
        }

        protected recalculateDimensions() {
            let width = 0;
            let height = 0;

            for (const line of this.visibleLines()) {
                width = Math.max(line.width, width);
                height += line.height;
            }

            this.setDimensions(width, height)
        }

        protected visibleLines() {
            if (this.drawnLines > 0) {
                return this.lines.slice(this.startLine, this.startLine + this.drawnLines);
            }
            return this.lines;
        }
    }

    function getSpanAtOffset(lines: Line[], offset: number) {
        let i = 0;
        for (const line of lines) {
            for (const span of line.spans) {
                i += span.length;
                if (i > offset) {
                    return span;
                }
            }
        }
        return undefined;
    }

    function calculateTextLength(lines: Line[], startLine: number, endLine: number) {
        let length = 0;

        for (const line of lines.slice(startLine, endLine)) {
            for (const span of line.spans) {
                length += span.length
            }
        }

        return length;
    }

    export function getDefaultFont(text: string) {
        return new fancyText.LegacyFont(image.getFontForText(text));
    }
}