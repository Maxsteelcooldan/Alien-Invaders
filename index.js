const mainp = {}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height:650,
  backgroundColor: '#000000',
  scene: {
    create,
    preload,
    update
  }
}
function create() {

}
function preload() {

}
function update() {

}

var platforms;

function create ()
{
  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}
