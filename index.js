const mainp = {}

const config = {
  type: Phaser.AUTO,
  width: 700,
  height:600,
  backgroundColor: '#000000',
  scene: {
    create,
    preload,
    update
  }
}
var game = new Phaser.Game(config);
function create() {

}
function preload() {

}
function update() {

}

var platforms;

function create (){
  mainp.main = this.add.sprite(100,100,'player');
}
