import { Player } from "./Player.js";
const map = document.getElementById("map");

const player = new Player("steve", "./img/gifmaker_me.gif");

player.spawn(500 , 500, map);

document.onkeyup = (e) => {
	if (e.keyCode === 38) {
		player.move("UP");
	//   console.log('up arrow pressed');
	} else if (e.keyCode === 40) {
		player.move("DOWN");
	//   console.log('down arrow pressed');
	} else if (e.keyCode === 37) {
		player.move("LEFT");
	//   console.log('left arrow pressed')
	} else if (e.keyCode === 39) {
		player.move("RIGHT");
	//   console.log('right arrow pressed')
	}
  }
