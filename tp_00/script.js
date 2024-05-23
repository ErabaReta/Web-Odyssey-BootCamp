let g_filter = 63;
let parent = document.getElementById("parent");

function renderElements(target_parent, data, filter) {
  for (piece of data)
  {
		if (((filter & 1) != 1) && piece.category == "smartphones")
		{
			continue;
		} 
		else if ((((filter >> 1) & 1) != 1) && piece.category == "laptops")
		{
			continue;
		} 
		else if ((((filter >> 2) & 1) != 1) && piece.category == "fragrances")
		{
			continue;
		} 
		else if ((((filter >> 3) & 1) != 1) && piece.category == "skincare")
		{
			continue;
		} 
		else if ((((filter >> 4) & 1) != 1) && piece.category == "groceries")
		{
			continue;
		} 
		else if ((((filter >> 5) & 1) != 1) && piece.category == "home-decoration")
		{
			continue;
		} 
		else {
			let element = document.createElement("div");
			element.classList.add("element");
		element.innerHTML = `
		
		
			<span>category: </span><span>${piece.category}</span>
			<img src="${piece.thumbnail}"/>
			<div class="info">
				<h2>${piece.title}</h2>
				<p>${piece.description}</p><br>
			</div>
			<div class="pricing">
				<span>price:</span><span class="price">${(piece.price - piece.price * Number(piece.discountPercentage / 100)).toFixed(2)}</span><span class="discount"><del>${piece.price}<del></span><br>
				<button>Buy</button>
				<span>${piece.stock} left</span>
			</div>
			
			
			`;
		target_parent.appendChild(element);
		}
  }
}

fetch("./data.json")
  .then((res) => res.json())
  .then((json_data) => {
    renderElements(document.getElementById("parent"), json_data, g_filter);
  })
  .catch((err) => console.log(err));

function rerender(checkbox) {
  parent.innerHTML = "";
  if (checkbox.checked == true)
   g_filter += Number(checkbox.value);
  else
   g_filter -= Number(checkbox.value);
  console.log(g_filter);
  fetch("./data.json")
    .then((res) => res.json())
    .then((json_data) => {
      renderElements(document.getElementById("parent"), json_data, g_filter);
    })
    .catch((err) => console.log(err));
}