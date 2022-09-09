const cocktails = document.querySelector("div#cocktails")
const searchBar = document.querySelector(".searchBar")

document.addEventListener("DOMContentLoaded", () => {
  
    function getCocktail(name) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => response.json())
        .then((result) => {
          const data = result.drinks;
          for (let i = 0; i < 15; i++) {
            loadDrinks(data[i]);
            console.log(data[i]);
          }
        });
    }