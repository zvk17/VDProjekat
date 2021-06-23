let recipes = loadOrInitRecipes();
let recipeId = getRecipeId();
let currentRecipe = recipes.find(recipe=>recipe.id== recipeId);

function getRecipeId() {
    let queryString = location.search;
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");
    if (!!id) {
        return parseInt(id);
    }
    return -1;
}
function commentItem(comment) {
    
}
function insertRecipes(comments) {
    let $list = $("#recipe-comments");
    let $comments = recipes.map(commentItem);
    $list.empty();
    $comments.forEach($comment => {
        $list.append($comment);
    });
}
$(document).ready(()=>{
    if (!currentRecipe) {
        let $recipeView = $("#recipe-view");
        $recipeView.empty();
        $recipeView.append($("<h3>").text(messages.RECIPE_NOT_EXIST));
        return;
    }
    let $recipeName = $("#recipe-name");
    let $recipeDescription = $("#recipe-description");
    $recipeName.text(currentRecipe.name);
    $recipeDescription.text(currentRecipe.description);
});