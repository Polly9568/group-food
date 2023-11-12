// i'm try to change the page using .innerHTML the button work alright
// however I can't make it work on the second click

alert("Welcome to our website! 🍰");

const button = document.getElementById("toggleRecipeButton");
const content = document.getElementById("content");

// one click switchiing to vegan version

function changeRecipe() {
  content.innerHTML = `<article id="veganRecipe" class="veganRecipe">
			<div>
				<h1>Vegan Victoria Sponge Cake </h1>
			</div>
			<button id="toggleRecipeButton">Dairy Version</button>
			<br>
			<div class="cake-pic">
				<img src="https://realfood.tesco.com/media/images/303-vegan-egg-free-victoria-sponge-LH--5fa0dbef-551c-4625-a5c1-7797a889929d-0-1400x919.jpg"
						alt="Victoria Sponge Cake">
			</div>
			<br>
			<br>
			<div>
				<p>Treat yourself to a slice of British nostalgia with our delightful Victoria sponge cake! This
						classic dessert is a pure
						slice of heaven, perfect for any occasion. Picture a light, fluffy sponge, generously filled
						with our luscious vegan
						vanilla buttercream and crowned with fresh, plump strawberries. It's a sweet sensation that's
						sure to make your taste
						buds dance.
				</p>
				<p>The Victoria sponge cake isn't just about satisfying your sweet tooth; it's about creating
						moments to cherish. Gather
						your loved ones, brew a pot of your favorite tea, and let the afternoon sun shine in. Slice by
						slice, savor the delicate
						flavors, share stories, and create memories that warm the heart.
				</p>
				<p>Whether it's a special celebration or simply a well-deserved treat, our Victoria sponge cake
						brings people together, and
						it's a delightful reminder of the simple joys in life. So go ahead, indulge in this timeless
						British classic and make every day extraordinary!
				</p>
			</div>
			<br>
			<hr>
			<br>
			<div class="ingredients-container">
				<h2>Ingredients</h2>
				<div class="recipe-details">
					<b>Serving:</b> 8-12 people || 433 calories per serving
					<br>
					<b>Preparation time:</b> 15-20 minutes || Cooking time: 30-45 minutes
					<br>
					<br>
					<b>Vegan | Vegetarian | Dairy-free</b>
				</div>
				<br>
				<ul>
					<li>400 grams of self-raising flour</li>
					<li>1 1/4 teaspoon of bicarbonate of soda</li>
					<li>250 grams of caster sugar</li>
					<li>115 milliliter of sunflower oil</li>
					<li>400 milliliter of almond milk</li>
					<li>3 tablespoon of golden syrup</li>
					<li>3 teaspoon of vanilla extract</li>
					<li>4 tablespoon of strawberry jam</li>
					<li>150 grams of sliced strawberries</li>
					<li>200 grams of dairy-free spread</li>
					<li>175 grams of icing sugar</li>
				</ul>
			</div>
			<br>
			<hr>
			<br>
			<div>
				<h2>
					Recipe Instructions
				</h2>
			</div>
			<div>
				<p>1.Pre-heat the oven to 170°C (150°C with a fan). Grease and flour the sides and line the base of 23cm loose-bottomed cake tins.</p>
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

				<p>5.Spread the jam evenly over one half of the cake, followed by the cream mixture. Top with the second cake, the remaining cream on top and decorate with the
					strawberries. Dust with the icing sugar and enjoy!</p>
        		<br>
				<div class="cake-pic">
					<img src="https://www.simplyrecipes.com/thmb/Pr_-OU8Jkj3Jat1f2cefjwTv5RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-VictoriaSponge-METHOD-10-03d636bcd43e4d22b39675a72474aaea.jpg"
						alt="jam">
        		</div>
			</div>
			<br>
			<hr>
	</article>`;
}

button.addEventListener("click", changeRecipe);

// user input for submit button

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

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", joinCommuity);

//onmouseover for recipe button

function mouseOver() {
  document.getElementById("toggleRecipeButton").style.backgroundColor =
    "palevioletred";
}
function mouseOut() {
  document.getElementById("toggleRecipeButton").style.backgroundColor = "";
}

document.getElementById("toggleRecipeButton").onmouseover = function () {
  mouseOver();
};
document.getElementById("toggleRecipeButton").onmouseout = function () {
  mouseOut();
};
