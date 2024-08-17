export class Player {
	constructor (name = "adam", characterImage, facingDirection = "down", playerX = 0, playerY = 0)
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
			if (this.playerY >= 0)
				this.playerY -= 100 ;
			this.box.src = "./img/gifmaker_me(3).gif"
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me(2).gif"} , 800);
		}
		if (direction == "RIGHT")
		{
			if (this.playerX <= 850)
				this.playerX += 100 ;
			this.box.src = "./img/gifmaker_me(7).gif"
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me(6).gif"} , 800);
		}
		if (direction == "DOWN")
		{
			if (this.playerY <= 850)
				this.playerY += 100 ;
			this.box.src = "./img/gifmaker_me(1).gif";
			setTimeout(() => {if (this.facingDirection == direction) this.box.src = "./img/gifmaker_me.gif"} , 800);

		}
		if (direction == "LEFT")
		{
			if (this.playerX >= 0)
				this.playerX -= 100 ;
			this.box.src = "./img/gifmaker_me(5).gif"
			setTimeout(() => {if (this.facingDirection == direction){this.box.src = "./img/gifmaker_me(4).gif"}} , 800);
		}
		this.box.style.top = this.playerY + "px";
		this.box.style.left = this.playerX + "px";
		console.log("cords: " + this.playerX + " , " + this.playerY);
	}
}
