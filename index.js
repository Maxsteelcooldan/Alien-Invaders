const mainp = {}

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
 
  mainp.main = this.add.sprite(100,100,'player');
}
function preload() {

}
function update() {

}

var platforms;

