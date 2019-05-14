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
  player.main = this.add.sprite(100,100,'player');
  player.main.setCollideWorldBounds(true)
}
function preload() {
  this.load.image('player', 'alien.png')
}
function update() {
  if(player.cursors.right.isDown || player.keyD.isDown) {
    player.main.x += 5
  } else if (player.cursors.left.isDown || player.keyA.isDown) {
    player.main.x -= 5
  } else if (player.cursors.up.isDown || player.keyW.isDown) {
    player.main.y -= 5
  } if(player.keyW.isDown && player.keyA.isDown || player.cursors.up.isDown && player.cursors.left.isDown) {
    player.main.y -= 5;
    player.main.x -= 5;
  } if(player.keyW.isDown && player.keyD.isDown || player.cursors.up.isDown && player.cursors.right.isDown) {
    player.main.y -= 5;
    player.main.x += 5;
  }
}

var platforms;


