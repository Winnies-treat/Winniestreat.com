function showRecipe(recipeName) {
    let recipeDetail = document.getElementById("recipe-detail");

    if (recipeName === 'Chocolate Cake') {
        recipeDetail.innerHTML = `<h3>Chocolate Cake</h3><p>A rich and decadent chocolate cake that's perfect for any occasion. Ingredients: flour, sugar, cocoa powder, eggs, butter, milk.</p>`;
    } else if (recipeName === 'Blueberry Muffins') {
        recipeDetail.innerHTML = `<h3>Blueberry Muffins</h3><p>Fluffy and delicious blueberry muffins that are perfect for breakfast or as a snack. Ingredients: flour, sugar, blueberries, eggs, milk, butter.</p>`;
    } else if (recipeName === 'Banana Bread') {
        recipeDetail.innerHTML = `<h3>Banana Bread</h3><p>A moist and sweet banana bread that everyone loves. Ingredients: ripe bananas, flour, sugar, eggs, butter, baking soda.</p>`;
    }
}