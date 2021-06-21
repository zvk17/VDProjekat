let messages = {
    MIN_NAME_LENGTH: "Minimalna dužina naslova je 5 znaka.",
    DESCRIPTION_REQUIRED: "Potrebno je uneti uputstvo za recept",
    DURATION_REQUIRED: "Obavezno je uneti duzinu spremanja jela"
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

        
    });
});