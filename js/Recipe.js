class Recipe {
    constructor(name, duration, description, level) {
        this.comments = [];
        this.name = name;
        this.duration = duration;
        this.description = description;
        this.level = level;
    }
    static recipes = [];
    static save() {
        localStorage.setItem("recipes", JSON.stringify(Recipe.recipes));
    }
    static load() {
        let r = localStorage.getItem("recipes");
        if (r != null) {
            let recipes = [];
            r = JSON.parse(r);
            for (let recipe of recipes) {
                let newRecipe = new Recipe(
                    recipe.name,
                    recipe.duration, 
                    recipe.description,
                    recipe.level                
                );
                newRecipe.comments = comments;
            }
        }
    }

}