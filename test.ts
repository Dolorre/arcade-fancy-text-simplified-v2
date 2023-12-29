
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


// myTextSprite.setFrame(testFrame)
// // myTextSprite.setFrame(img`123
// // 456
// // 789`)

// myTextSprite.animateAtSpeed(8)
// pause(myTextSprite.remainingAnimationTime());
// myTextSprite.setColor(4)

let myTextSprite: fancyText.TextSprite = null
myTextSprite = fancyText.create(lorem)
myTextSprite.setTextFlag(fancyText.Flag.ChangeHeightWhileAnimating, false)
myTextSprite.setTextFlag(fancyText.Flag.AlwaysOccupyMaxWidth, true)
myTextSprite.setTextFlag(fancyText.Flag.ChangeWidthWhileAnimating, false)

myTextSprite.setMaxLines(3)

controller.moveSprite(myTextSprite)

fancyText.setMaxWidth(myTextSprite, 160)

myTextSprite.x = 80;
myTextSprite.y = 60;

// fancyText.setColor(myTextSprite, 15)
// game.onUpdate(function () {
//     myTextSprite.bottom = 120
//     myTextSprite.left = 0
// })

game.stats = true


// function Dialog (Label: string, Text: string) {
//     // let DIALOG_LABEL = fancyText.create(".", 140, 1)
//     let DIALOG_TEXT = fancyText.create(".", 132, 15)
//     // DIALOG_LABEL.setKind(SpriteKind.Player)
//     // DIALOG_TEXT.setKind(SpriteKind.Player)
//     // fancyText.setFrame(DIALOG_LABEL, img`
//     //     . 6 6 6 6 6 6 6 6 6 6 6 . . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     6 6 6 6 6 6 6 6 6 6 6 6 6 . .
//     //     . 6 6 6 6 6 6 6 6 6 6 6 . . .
//     //     . . . . . . . . . . . . . . .
//     //     . . . . . . . . . . . . . . .
//     //     `)
//     // fancyText.setFrame(DIALOG_TEXT, img`
//     //     . 1 1 1 1 1 1 1 1 1 1 1 . . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     1 1 1 1 1 1 1 1 1 1 1 1 1 . .
//     //     . 1 1 1 1 1 1 1 1 1 1 1 . . .
//     //     . . . . . . . . . . . . . . .
//     //     . . . . . . . . . . . . . . .
//     //     `)
//     // fancyText.setTextFlag(DIALOG_LABEL, fancyText.Flag.ChangeHeightWhileAnimating, true)
//     // fancyText.setTextFlag(DIALOG_LABEL, fancyText.Flag.ChangeWidthWhileAnimating, true)
//     // fancyText.setTextFlag(DIALOG_TEXT, fancyText.Flag.ChangeHeightWhileAnimating, true)
//     fancyText.setTextFlag(DIALOG_TEXT, fancyText.Flag.ChangeWidthWhileAnimating, true)
//     // fancyText.animateAtSpeed(DIALOG_TEXT, fancyText.TextSpeed.Fast, fancyText.AnimationPlayMode.InBackground)
//     // DIALOG_LABEL.setPosition(40, 52)
//     // DIALOG_TEXT.setPosition(45, 68)
//     // DIALOG_LABEL.setFlag(SpriteFlag.RelativeToCamera, true)
//     // DIALOG_TEXT.setFlag(SpriteFlag.RelativeToCamera, true)
//     // fancyText.setText(DIALOG_LABEL, Label)
//     fancyText.setText(DIALOG_TEXT, Text)
//     // fancyText.animateForTime(DIALOG_LABEL, 1000, fancyText.AnimationPlayMode.UntilDone)
//     fancyText.animateAtSpeed(DIALOG_TEXT, fancyText.TextSpeed.VeryFast, fancyText.AnimationPlayMode.UntilDone)
// }

// controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
//     Dialog("Cone-Guy", "Hey Bon! What's Up?")
// })