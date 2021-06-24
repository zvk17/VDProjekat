let recipes = loadOrInitRecipes();
let users = ucitajKorisnike();
let recipeId = getRecipeId();
let currentRecipe = recipes.find(recipe=>recipe.id== recipeId);
let currentUser = localStorage.getItem("tekuciKorisnik");
let colorMap = loadColors(users);


if (currentUser != null)
    currentUser = JSON.parse(currentUser);

function loadColors(users) {
    let colorMap = new Map();
    users.forEach(user => {
        colorMap.set(user.id, kreirajBojuNasumicno());
    })
    return colorMap;
}

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
    let color = colorMap.get(comment.idUser);
    let userName = user.ime + " "  + user.prezime;
    let initials = dohvatiInicijale(user.ime, user.prezime);
    let $initials = $("<div>").addClass("col-2 col-md-1");
    $initials.append(
        $("<div>").addClass("comment-initials").text(initials).css({"background":color})
    );
    let $div2 = $("<div>").addClass("col-9 col-md-10 comment-text");
    let $row = $("<div>").addClass("row");
    $div2.append($row);

    let $text = $("<div>").addClass("col-12").text(comment.text);
    let $user = $("<div>").addClass("col-12 font-weight-bold").text(userName); 
    $row.append($user).append($text);
    return $("<div>").addClass("row comment-item").append($initials).append($div2);
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
    let $commentAndReview = $("#comment-and-review");
    let $cannotCommentAndReview = $("#cannot-comment-and-review")
    let $commentTextArea = $("#comment-text-area");
    let $commentButton = $("#comment-add-button");

    $recipeName.text(currentRecipe.name);
    $recipeDescription.text(currentRecipe.description);
    $recipeDuration.text(currentRecipe.duration);
    $recipeAuthor.text(author.ime + " " + author.prezime);


    if (!!currentUser) {
        $commentAndReview.removeClass("d-none");
    } else {
        $cannotCommentAndReview.removeClass("d-none");
    }
    $commentButton.on("click", ()=>{
        let comment = $commentTextArea.val();
        if (comment.length == 0) {
            return;
        }
        $commentTextArea.val("");

        currentRecipe.comments.unshift({
            idUser:currentUser.id,
            text: comment
        });
        localStorage.setItem("recipes", JSON.stringify(recipes));
        showComments();
    });

    showComments();
});