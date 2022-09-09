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
    getCocktail();
    searchBar.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInput = searchBar["search"].value;
        cocktails.innerHTML = "";
        getCocktail(userInput);
        searchBar.reset();
      });
      function loadDrinks(drink) {
        const imgdiv = document.createElement("div");
        const img = `
        <section id="cocktails">
            <div class="card">
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" height="350px" width="350px">
            <h3 id ="imagelabel" > ${drink.strDrink} </h3>
            <div id="info"> </div>
            </div>
            </section>
            `;
            imgdiv.innerHTML = img;
            cocktails.appendChild(imgdiv);
            const infoDiv = imgdiv.querySelector("div#info");
            imgdiv.addEventListener("click", () => {
              getInfo(drink, infoDiv);
            });
          }
          function getInfo(drink, container) {
            container.innerHTML = `<h2> List of ingredients:</h2>
                <ul> <li> ${drink.strIngredient1} </li>
                <li> ${drink.strIngredient2} </li>
                <li> ${drink.strIngredient3} </li>
                </ul>
                <h2> <em>Instructions</em> </h2>
                <h2>${drink.strInstructions}</h2>`;
          }
      });           