sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 2 . . . . . . . . . . . . . .
        . f f . . . . . . f . . . . . .
        . . f 2 2 2 2 2 2 f f . . . . .
        . . . f f f f f f f f f . . . .
        . . f 2 2 2 2 2 2 f f . . . . .
        . f f . . . . . . f . . . . . .
        . 2 . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 . . . . . . . .
    . . . . . 1 1 1 1 . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . 1 1 1 1 1 1 1 . . . .
    . . . . . 1 1 1 1 1 1 1 1 . . .
    2 2 2 f a a a a a a a a a a a .
    2 2 2 f a f a f a f a f a f a f
    2 2 2 f a a a a a a a a a a a f
    2 2 2 f a a a a a a a a a a a .
    . . . . . 1 1 1 1 1 1 1 1 . . .
    . . . . . 1 1 1 1 1 1 1 . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . 1 1 1 1 . . . . . . .
    . . . . . 1 1 1 . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 2 . . . . . 2 . . .
        . . . . . . . 2 . . . 2 . . . .
        . . . . . . . . 2 . 2 . . . . .
        . . . . . . . . 2 2 2 . . . . .
        . . . . . . . 2 2 f 2 2 . . . .
        . . . . . . . . 2 2 2 . . . . .
        . . . . . . . . 2 . 2 . . . . .
        . . . . . . . 2 . . . 2 . . . .
        . . . . . . 2 . . . . . 2 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(8, 112))
})
