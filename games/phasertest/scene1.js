class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    preload() {
        this.load.image("Player", "favicon.png")
    }
    create() {
        this.add.text(20, 20, "loading game...")
        this.scene.start("playGame")
    }
}