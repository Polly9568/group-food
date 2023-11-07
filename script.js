// i'm try to change the page using .innerHTML
// the probleem is I don't know how to add all the entire of vegen recipe in it it seems very messy to do so
// but the button work alright

const button = document.getElementById("toggleRecipeButton");
const content = document.getElementById("content");

function changeRecipe() {
  content.innerHTML =
    "<h1>Vegan Victoria Sponge Cake</h1><button>Dairy Version</button>";
}

button.addEventListener("click", changeRecipe);
