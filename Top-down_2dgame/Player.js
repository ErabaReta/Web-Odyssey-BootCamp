export class Player {
	constructor (name = "adam", characterImage = null, facingDirection = "down", playerX = 0, playerY = 0)
	{
		this.box = document.createElement("img");
		this.box.src = characterImage;
		this.box.classList.add("player");

		this.name = name;
		this.characterImage = characterImage;
		this.facingDirection = facingDirection;
	}
	spawn(x = 0, y = 0, map) {

		this.playerX = x;
		this.playerY = y;
		this.box.style.top = x + "px";
		this.box.style.left = y + "px";
		map.appendChild(this.box);
	}
	move(direction)
	{
		this.facingDirection = direction;
		if (direction == "UP")
		{
			if (this.playerY != 0)
				this.playerY -= 50 ;
		}
		if (direction == "RIGHT")
		{
			if (this.playerX != 850)
				this.playerX += 50 ;
		}
		if (direction == "DOWN")
		{
			if (this.playerY != 850)
				this.playerY += 50 ;
		}
		if (direction == "LEFT")
		{
			if (this.playerX != 0)
				this.playerX -= 50 ;
		}
		this.box.style.top = this.playerY + "px";
		this.box.style.left = this.playerX + "px";
		console.log("cords: " + this.playerX + " , " + this.playerY);
	}
}
