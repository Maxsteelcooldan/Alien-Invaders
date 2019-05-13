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
  if(hero.cursors.right.isDown || hero.keyD.isDown) {
    hero.main.x += 5
  } else if (hero.cursors.left.isDown || hero.keyA.isDown) {
    hero.main.x -= 5
  } else if (hero.cursors.up.isDown || hero.keyW.isDown) {
    hero.main.y -= 5
  } if(hero.keyW.isDown && hero.keyA.isDown || hero.cursors.up.isDown && hero.cursors.left.isDown) {
    hero.main.y -= 5;
    hero.main.x -= 5;
  } if(hero.keyW.isDown && hero.keyD.isDown || hero.cursors.up.isDown && hero.cursors.right.isDown) {
    hero.main.y -= 5;
    hero.main.x += 5;
  }
}

var platforms;

