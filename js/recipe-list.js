let messages = {
    HARDNESS_LEVEL: "Nivo težine"
}
function recipeItem(recipe) {
    let $div = $("<div>").addClass("col-12 col-lg-9");
    let $header = $("<h3>").text(recipe.name);
    let $link = $("<a>").attr("href", "recept.html?idRecept=" + recipe.id);
    let $div2 = $("<div>").text(messages.HARDNESS_LEVEL + ": " + recipe.level);
    $link.append($header);
    $div.append($link);
    $div.append($div2);
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
