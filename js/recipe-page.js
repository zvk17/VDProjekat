let recipes = loadOrInitRecipes();
let users = ucitajKorisnike();
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
    let user = users.find(user => user.id == comment.idUser);
    let userName = user.ime + " "  + user.prezime;
    return $("<div></div>").addClass("col-12").text(userName);
}
function insertRecipes(comments) {
    let $list = $("#recipe-comments");
    let $comments = recipes.map(commentItem);
    $list.empty();
    $comments.forEach($comment => {
        $list.append($comment);
    });
}
function showComments() {
    let $commentList = $("#recipe-comments");
    $commentList.empty();

    let $comments = currentRecipe.comments.map(commentItem);
    $comments.forEach($comment => {
        $commentList.append($comment);
    });
}
$(document).ready(()=>{
    if (!currentRecipe) {
        let $recipeView = $("#recipe-view");
        $recipeView.empty();
        $recipeView
            .addClass("text-center")
            .append($("<h2>").text(messages.RECIPE_NOT_EXIST));
        return;
    }
    let author = users.find(user => user.id == currentRecipe.idUser);
    let $recipeName = $(".recipe-name");
    let $recipeDescription = $("#recipe-description");
    let $recipeDuration = $("#recipe-duration");
    let $recipeAuthor = $("#recipe-author");
    
    $recipeName.text(currentRecipe.name);
    $recipeDescription.text(currentRecipe.description);
    $recipeDuration.text(currentRecipe.duration);
    $recipeAuthor.text(author.ime + " " + author.prezime);

    showComments();
});