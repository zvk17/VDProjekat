let recipes = loadORInitRecipes();
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
    $("h1").text(getRecipeId());
})