let recipes = loadOrInitRecipes();
let users = ucitajKorisnike();
let searchString = "";

if (!!RECIPE_TYPE) {
    recipes = recipes.filter(recipe => recipe.type == RECIPE_TYPE);
}


function recipeItem(recipe) {
    let commentsNumber = recipe.comments.length;
    let user = users.find(user => user.id == recipe.idUser);
    
    let userName = user.ime + " " + user.prezime;

    let review = getReviewValue(recipe);
    let $div = $("<div>").addClass("col-12 recipe-item");
    let $header = $("<div>").addClass("col-11");
    $header.append($("<h3>").text(recipe.name));
    let $link = $("<a>")
        .addClass("row")
        .attr("href", messages.RECIPE_PAGE + "?id=" + recipe.id);
    let $hardness = $("<div>")
        .addClass("col-12")
        .text(messages.HARDNESS_LEVEL + recipe.level);
    let $review = $("<div>")
        .addClass("col-12")
        .text(messages.AVERAGE_REVIEW + review);
    
    let $commentsNumber = $("<span>")
        .text(commentsNumber)
        .addClass("broj-komentara");
    let $commentsDiv = $("<div>")
        .addClass("col-1 text-right")
        .append($commentsNumber);
    
    let $authorDiv = $("<div>").addClass("col-12").text(messages.AUTHOR + userName);
    
    $link.append($header);
    
    $link.append($commentsDiv);
    $link.append($hardness);
    $link.append($review);
    $link.append($authorDiv);
    $div.append($link);
    return $div;
}

function sortDefault(recipes) {
    return recipes;
}
function sortByHardness(recipes) {
    return recipes.sort((a,b)=>{
        return a.level - b.level;
    });
}
function sortByReview(recipes) {
    return recipes.sort((a,b)=>{
        return getReviewValue(b) - getReviewValue(a);
    });
}
let sortRecipes = sortDefault;

function filterRecipesSearch(recipes, needle) {
    needle = needle.toLowerCase();
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().indexOf(needle) > -1;
    });
}

function insertRecipes(recipes) {
    let $list = $("#recipe-list");
    let $recipes = recipes.map(recipeItem);
    $list.empty();
    $recipes.forEach($recipe => {
        $list.append($recipe);
    });
}
function showRecipes() {
    let r = sortRecipes(recipes.slice());
    if (searchString.length > 0) {
        r = filterRecipesSearch(recipes, searchString);
        if (r.length == 0) {
            let $list = $("#recipe-list");
            $list.empty();
            $list.append(
                $("<h3>")
                    .addClass("col-12 mt-5 text-center")
                    .text(messages.RECIPE_NOT_FOUND)
            );
            return;
        }
    }
    insertRecipes(r);
}
$(document).ready(()=>{
    let $recipeSort = $("#recipe-sort"); 
    let $recipeSearch = $("#recipe-search");   
    let $searchButton = $("#search-button");
    $recipeSort.on("change",()=>{
        let sortValue = $recipeSort.val();
        console.log(sortValue);
        switch (sortValue) {
            case "N":
                sortRecipes = sortDefault;
                break;
            case "L":
                sortRecipes = sortByHardness;
                break;    
            case "R":
                sortRecipes = sortByReview;
                break;
            default:
                sortRecipes = sortDefault;
                break;
        }
        showRecipes();
    });
    $searchButton.on("click", ()=>{
        searchString = $recipeSearch.val();
        showRecipes();
    });  

    showRecipes();
});
