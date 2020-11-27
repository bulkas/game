input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let sprite2 = game.createSprite(3, 2)
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    if (sprite.isTouching(sprite2)) {
        game.addScore(1)
        game.removeLife(1)
    }
    sprite2.move(randint(1, 3))
    basic.pause(100)
    sprite2.turn(Direction.Right, randint(0, 360))
})
