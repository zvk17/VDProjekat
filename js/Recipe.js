function loadORInitRecipes() {
    let recipes = localStorage.getItem("recipes");
    if (recipes == null) {
        recipes = [
            {
                id: 1,
                name: "Losos na zaru",
                duration: "30min",
                description: "opis kako napraviti lososa na žaru",
                type: "G",
                level: 4,
                comments: []
            }, {
                id: 2,
                name: "Palačinke",
                duration: "15min",
                description: "opis kako napraviti palačinke",
                type: "D",
                level: 2,
                comments: []
            }, {
                id: 3,
                name: "Ćufte",
                duration: "45min",
                description: "opis kako spremiti ćufte",
                type: "G",
                level: 3,
                comments: []
            }, {
                id: 4,
                name: "Piletina sa šampinjonima",
                duration: "1h 30min",
                description: "opis kako spremiti piletinu",
                type: "G",
                level: 5,
                comments: []
            }
        ];
        localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
        recipes = JSON.parse(recipes);
    }
    return recipes;
}

/*
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

}*/