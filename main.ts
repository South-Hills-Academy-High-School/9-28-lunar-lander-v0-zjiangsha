namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -25
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    mySprite.setPosition(0, -1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = 20
})
let mySprite: Sprite = null
let angle = 0
tiles.setCurrentTilemap(tilemap`level1`)
effects.clouds.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    3 7 
    7 3 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(mySprite)
scaling.scaleByPercent(mySprite, -25, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
game.onUpdate(function () {
    mySprite2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Half, 2, 0)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    mySprite2.setPosition(mySprite.left, mySprite.top)
    mySprite3.setPosition(mySprite.x, mySprite.y)
})
