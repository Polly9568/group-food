// i'm try to change the page using .innerHTML the button work alright
// need to reverse back when click again tho

alert("Welcome to our website! 🍰");

const button = document.getElementById("toggleRecipeButton");
const content = document.getElementById("content");

function changeRecipe() {
  content.innerHTML = `
		<article id=" veganRecipe">
			<div>
				<h1>Vegan Victoria Sponge Cake </h1>
				<button id="dairy">Dairy Version</button>
			</div>

				<div class="cake-pic">
					<img src="https://realfood.tesco.com/media/images/303-vegan-egg-free-victoria-sponge-LH--5fa0dbef-551c-4625-a5c1-7797a889929d-0-1400x919.jpg"
						alt="heating">
				</div>
      	<br>
				<hr>
				<br>
			<div>
				<p>Induldge in yourself with this traditional British dessert. The Victoria sponge cake!
					Topped with fresh strawberries and filled with a generous layer of vegan vanilla buttercream,
					this is the perfect cake for any occasion. Enjoy this mouthwatering treat with your
					loved ones for afternoon tea.
				</p>
			</div>
			<div class="ingredients-container">
				<div>
					<h2>ingredients</h2>
					<ul>
						<li>400g of self-raising flour</li>
						<li>1 1/4 tsp of bicarbonate of soda</li>
						<li>250g of caster sugar</li>
						<li>115ml of sunflower oil</li>
						<li>400ml of almond milk</li>
						<li>3 tbsp of golden syrup</li>
						<li>3 tsp of vanilla extract</li>
						<li>4 tbsp of strawberry jam</li>
						<li>150g of sliced strawberries</li>
						<li>200g of dairy-free spread</li>
						<li>175g of icing sugar</li>
					</ul>
				</div>
			</div>
			<hr>
			<div>
				<h2>
					Recipe Instructions
				</h2>
			</div>
			<div>
				<p>1. Preheat the oven to gas 4, 180°C, fan 160°C. Grease and flour the sides and line the
					base of 23cm loose-bottomed cake tins.</p>
        <br>
				<div class="cake-pic">
					<img src="https://th.bing.com/th/id/R.6b5f609fbe5e8db2dee5e3ed08119d69?rik=hmPnu6%2bXPaE97A&riu=http%3a%2f%2fprod.static9.net.au%2f_%2fmedia%2f2018%2f04%2f11%2f12%2f28%2fhow-to-grease-a-cake-tin.jpg&ehk=fYWDbIZes3%2f2np%2f8CUw4xhhAKZUalKYPt8GxdHV9QD4%3d&risl=&pid=ImgRaw&r=0"
						alt="greasing">
				</div>
        <br>

				<p>2.Sift the flour, bicarbonate of soda and sugar into a large mixing bowl and mix together. Whisk
					together the sunflower oil, milk, syrup and vanilla in a jug and pour the mixture into the dry
					ingredients, then whisk using a hand-blender for 2 mins until thick and creamy. </p>
        <br>
				<div class="cake-pic">
					<img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/7._mixing_cake_mixture-c2106e0.jpg?quality=90&resize=620%2C310"
						alt="mixing">
				</div>
        <br>

				<p>3.Spoon the mixture into the prepared cake tins and bake for 35–45 mins until risen and
					cooked through. Remove from the oven and leave to cool for 15 mins in the tin, then remove and leave
					to cool completely on a wire rack.</p>
        <br>
				<div class="cake-pic">
					<img src="https://media.istockphoto.com/photos/pouring-cake-batter-into-baking-tin-picture-id1001007182?k=6&m=1001007182&s=170667a&w=0&h=-M4LLGYupM7-jBLAHi94ejQFQLeX_NIWcHNzOOUNRjg="
						alt="tins">
				</div>
        <br>

				<p>4.While the cakes are cooling, make the filling: beat together the spread, icing sugar
					and vanilla in a mixing bowl, cover and leave to firm up in the fridge until needed.</p>
        <br>
				<div class="cake-pic">
					<img src="https://th.bing.com/th/id/OIP.sxXknYrXvb4cFfPL1ZgR-wHaE6?pid=ImgDet&rs=1" alt="icing">
				</div>
        <br>

				<p>5.Spread the jam evenly over one half of the cake, followed by two-thirds of the cream
					mixture. Top with the second cake, spread the remaining cream on top and decorate with the
					strawberries</p>
        <br>
				<div class="cake-pic">
					<img src="https://www.simplyrecipes.com/thmb/Pr_-OU8Jkj3Jat1f2cefjwTv5RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-VictoriaSponge-METHOD-10-03d636bcd43e4d22b39675a72474aaea.jpg"
						alt="jam">
        <br>
				</div>
		</article>;`;
}

button.addEventListener("click", changeRecipe);

const dairyButton = getElementById("dairy");
dairyButton.content = "vegan";

function joinCommuity() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (name !== "" && email !== "") {
    alert(
      "Nice to meet you " +
        name +
        "! We will be in touch ASAP, in the meantime keep cooking 🍽️"
    );
  } else {
    alert("Please enter your name and email address 🚫");
  }
}
const submitButton = document.getElementById("SubmitButton");
submitButton.addEventListener("click", joinCommuity);

//Onmouse over to change button to pink when hovered over.

document.getElementById("toggleRecipeButton").onmouseover = function () {
  mouseOver();
};
document.getElementById("toggleRecipeButton").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementById("toggleRecipeButton").style.color = "pink";
}
function mouseOut() {
  document.getElementById("toggleRecipeButton").style.color = "black";
}
