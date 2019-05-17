const player = {}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height:600,
  x: 00,
  y: 100,
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
var score = 0;
var scoreText;

var game = new Phaser.Game(config);
function preload() 
{
  this.load.image('player', 'alien.png')
}

function create ()
{
  player.main = this.physics.add.sprite(235,500, 'player');
  player.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  player.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  player.cursors = this.input.keyboard.createCursorKeys();
  player.main.setScale(2)
  player.main.setCollideWorldBounds(true);
  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '18px', fill: '#fff' });
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







