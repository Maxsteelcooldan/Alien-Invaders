const player = {}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height:600,
  x: 00,
  y: 200,
  backgroundColor: '#000000',
  physics: {default: 'arcade',
    arcade: {
      gravity: { y:200 },
      enableBody: true,
    }
  },
  scene: 
  {
    preload,
    create,
    update
  }
}
var game = new Phaser.Game(config);
function preload() 
{
  this.load.image('player', 'alien.png')
}

function create ()
{
  player.main = this.physics.add.sprite(200,200, 'player');
  player.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  player.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  player.cursors = this.input.keyboard.createCursorKeys();
  player.main.setCollideWorldBounds(true);
}

function update() {
  if(player.cursors.right.isDown || player.keyD.isDown) 
  {
    player.main.x += 5
  } 
  else if (player.cursors.left.isDown || player.keyA.isDown) 
  {
    player.main.x -= 5
  }
}
