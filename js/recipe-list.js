let messages = {
    HARDNESS_LEVEL: "Nivo težine: ",
    REVIEW: "Ocena: "
}
function recipeItem(recipe) {
    let commentsNumber = recipe.comments.length;
    let review = recipe.reviews.reduce((accum,review) => accum + review.mark, 0);
    if (recipe.reviews.length > 0) {
        review = Math.round((1.0 * review / recipe.reviews.length) * 10) / 10.0;
    }
    let $div = $("<div>").addClass("col-12 col-lg-9 col-md-10 recipe-item");
    let $header = $("<h3>").text(recipe.name);
    let $link = $("<a>")
        .addClass("row")
        .attr("href", "recept.html?idRecept=" + recipe.id);
    let $hardness = $("<div>").text(messages.HARDNESS_LEVEL + recipe.level);
    let $review = $("<div>").text(messages.REVIEW + review);
    let $commentsNumber = $("<span></span>").text(commentsNumber).addClass("broj-komentara");
    
    
    $link.append($header);
    
    $link.append($commentsNumber);
    $link.append($hardness);
    $link.append($review);
    $div.append($link);
    return $div;
}


$(document).ready(()=>{
    let $list = $("#recipe-list");
    let recipes = loadORInitRecipes();
    recipes = recipes.filter(recipe => recipe.type == RECIPE_TYPE);

    let $recipes = recipes.map(recipeItem);
    
    $recipes.forEach($recipe => {
        $list.append($recipe);
    });
    console.log(recipes);
});
