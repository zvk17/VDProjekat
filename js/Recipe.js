function loadORInitRecipes() {
    let recipes = localStorage.getItem("recipes");
    if (recipes == null) {
        recipes = [
            {
                id: 1,
                name: "Losos na žaru",
                duration: "30min",
                description: "opis kako napraviti lososa na žaru",
                type: "G",
                level: 4,
                comments: [],
                reviews: [
                    {
                        idUser: 4,
                        mark: 3
                    }, {
                        idUser: 3,
                        mark: 3
                    }, {
                        idUser: 3,
                        mark: 5
                    }
                ]
            }, {
                id: 2,
                name: "Palačinke",
                duration: "15min",
                description: "opis kako napraviti palačinke",
                type: "D",
                level: 2,
                comments: [],
                reviews: []
            }, {
                id: 3,
                name: "Ćufte",
                duration: "45min",
                description: "opis kako spremiti ćufte",
                type: "G",
                level: 3,
                comments: [],
                reviews: [
                    {
                        idUser: 3,
                        mark: 2
                    }
                ]
            }, {
                id: 4,
                name: "Piletina sa šampinjonima",
                duration: "1h 30min",
                description: "opis kako spremiti piletinu",
                type: "G",
                level: 5,
                comments: [],
                reviews: []
            }
        ];
        localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
        recipes = JSON.parse(recipes);
    }
    return recipes;
}
function getReviewValue(recipe) {
    let review = recipe.reviews.reduce((accum,review) => accum + review.mark, 0);
    if (recipe.reviews.length > 0) {
        review = Math.round((1.0 * review / recipe.reviews.length) * 10) / 10.0;
    }
    return review;
}