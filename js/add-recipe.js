let messages = {
    MIN_NAME_LENGTH: "Minimalna dužina naslova je 5 znaka.",
    DESCRIPTION_REQUIRED: "Potrebno je uneti uputstvo za recept",
    DURATION_REQUIRED: "Obavezno je uneti duzinu spremanja jela",
    NOT_LOGGED_IN: "Morate biti prijavljeni da biste dodali recept"
}
$(document).ready(()=>{

    let $dishName = $("#dish-name");
    let $dishType = $("#dish-type");
    let $dishLevel = $("#dish-level");
    let $dishDescription = $("#dish-description");
    let $dishDuration = $("#dish-duration");
    let $dishError = $("#dish-error");
    let $dishSubmit = $("#dish-submit");

    $dishSubmit.on("click", ()=>{
        let name = $dishName.val();
        let type = $dishType.val();
        let level = $dishLevel.val();
        let description = $dishDescription.val();
        let duration = $dishDuration.val();
        let errorMessage = "";

        // TODO korisnik mora biti ulogovan
        console.error("Korisnik mora biti ulogovan");
        let currentUser = localStorage.getItem("tekuciKorisnik");

        if (currentUser == null) {
            errorMessage += messages.NOT_LOGGED_IN + "<br />";
        } else {
            currentUser = JSON.parse(currentUser);
        }

        if (name.length < 4) {
            errorMessage += messages.MIN_NAME_LENGTH + "<br />";
        }
        if (description.length == 0) {
            errorMessage += messages.DESCRIPTION_REQUIRED + "<br />";
        }
        if (duration.length == 0) {
            errorMessage += messages.DURATION_REQUIRED + "<br />";
        }
        
        if (errorMessage.length > 0) {
            
            $dishError.html(errorMessage);
            $dishError.removeClass("d-none");
            return;
        }
        $dishError.addClass("d-none");
        $dishError.empty();


        let recipes = loadORInitRecipes();
        let maxId = recipes.reduce(
            (max,recipe) => Math.max(max,recipe.id), 0
        );
        maxId++;
        recipes.push({
            id: maxId,
            name: name,
            duration: duration,
            description: description,
            type: type,
            level: parseInt(level),
            userId: currentUser.id,
            comments: [],
            reviews: []
        });
        localStorage.setItem("recipes", JSON.stringify(recipes));
    });

    
});