
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// myTextSprite.setColor(4)

let myTextSprite: fancyText.TextSprite = null
myTextSprite = fancyText.create(lorem)

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