import ExternalServices from './ExternalServices.js';
import RecipeDetails from './RecipeDetails.js';
import { loadHeaderFooter } from './utils.js';

const newService = new ExternalServices();
const recipe = new RecipeDetails(recipeId, dataSource);

recipe.renderRecipeDetails();
newService.submit();
loadHeaderFooter();

document.querySelector('#recipeSubmit').addEventListener('click', (e) => {
    e.preventDefault();
  });

// hamburger menu

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }  else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

      hamburger.addEventListener("click", toggleMenu);

      menuItems.forEach( 
        function(menuItem) { 
          menuItem.addEventListener("click", toggleMenu);
  }
)