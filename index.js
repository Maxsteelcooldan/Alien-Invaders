const player = {}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height:600,
  x: 00,
  y: 200,
  backgroundColor: '#000000',
  scene: {
    create,
    preload,
    update
  }
}
var game = new Phaser.Game(config);
function create (){
  player.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  player.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  player.main.setCollideWorldBounds(true)
  player.main = this.add.sprite(100,100,'player');
}
function preload() {
  this.load.image('player', 'alien.png')
}
function update() {

}

var platforms;

