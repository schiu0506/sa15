function showIngredients(recipeNumber) {
    var ingredients = document.getElementById("ingredients" + recipeNumber);
    if (ingredients.style.display === "none") {
        ingredients.style.display = "block";
    } else {
        ingredients.style.display = "none";
    }
}