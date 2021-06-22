let recipes = loadORInitRecipes();
recipes = recipes.filter(recipe => recipe.type == RECIPE_TYPE);

function recipeItem(recipe) {
    let commentsNumber = recipe.comments.length;
    let review = getReviewValue(recipe);
    let $div = $("<div>").addClass("col-12 recipe-item");
    let $header = $("<div>").addClass("col-11");
    $header.append($("<h3>").text(recipe.name));
    let $link = $("<a>")
        .addClass("row")
        .attr("href", "recept.html?idRecept=" + recipe.id);
    let $hardness = $("<div>")
        .addClass("col-12")
        .text(messages.HARDNESS_LEVEL + recipe.level);
    let $review = $("<div>")
        .addClass("col-12")
        .text(messages.REVIEW + review);

    let $commentsNumber = $("<span>")
        .text(commentsNumber)
        .addClass("broj-komentara");
    let $commentsDiv = $("<div>")
        .addClass("col-1 text-right")
        .append($commentsNumber);
    let $authorDiv = $("<div>").addClass("col-12").text(messages.AUTHOR + "HARDKODOVANO");
    
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
    insertRecipes(r);
}
$(document).ready(()=>{
    let $recipeSort = $("#recipe-sort");    
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
    showRecipes();
});
