class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame")
    }
    create() {
        this.Player = this.add.image(0, 0, "player")
        this.Player.setOrigin(0, 0)
    }
}