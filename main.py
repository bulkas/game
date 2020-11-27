def on_button_pressed_a():
    sprite.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    sprite.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
sprite = game.create_sprite(3, 2)