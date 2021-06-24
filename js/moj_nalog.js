$(document).ready(function() {
    let recepti = loadOrInitRecipes();
    let korisnik = JSON.parse(localStorage.getItem("tekuciKorisnik"));

    if (korisnik == null) {
        return;
    }

    popuniRecepte();
    popuniOcene();
    popuniKomentare();

    function popuniRecepte() {        
        for (let i = 0; i < recepti.length; i++) {
            if (recepti[i].idUser == korisnik.id) {                
                let prosek = prosecnaOcena(recepti[i].reviews);

                let red = $("<div>").attr("class", "row bg-light p-2 mt-2 w-100").attr("id", "r" + recepti[i].id);

                let podaci = $("<div>").attr("class", "col-9");
                let link = $("<a>").addClass("recept-link").attr("href", messages.RECIPE_PAGE + "?id=" + recepti[i].id);                            
                let naziv = $("<h4>").text(recepti[i].name);                
                let tezina = $("<div>").text(messages.HARDNESS_LEVEL + recepti[i].level);
                let ocena = $("<div>").text(messages.REVIEW + prosek);

                link.append(naziv);
                podaci.append(link);
                podaci.append(tezina);
                podaci.append(ocena);

                let komentari = $("<div>").addClass("col-3");
                let brojKomentara = $("<div>").attr("class", "broj-komentara bg-dark w-75").text(recepti[i].comments.length);
                let obrisi = $("<div>").append(
                    $("<button>").attr("class", "btn btn-outline-dark mt-3").attr("id", "b-" + recepti[i].id).text(messages.DELETE)
                );                                

                komentari.append(brojKomentara);
                komentari.append(obrisi);

                red.append(podaci);
                red.append(komentari);

                $("#moji-recepti").append(red);

                $("#b-" + recepti[i].id).click(function() {                         
                    let id = $(this).attr("id").split("-")[1];

                    izbrisiRecept(parseInt(id));

                    $("#r" + id).remove();
                });
            }
        }
    }

    function izbrisiRecept(id) {

    }

    function popuniOcene() {

    }

    function popuniKomentare() {

    }

    function prosecnaOcena(recept) {
        let prosek = 0.0;
        for (let i = 0; i < recept.length; i++) {
            prosek += recept[i].mark;
        }
        if (prosek > 0) {
            prosek /= recept.length;
        }
        return prosek.toFixed(1);
    }

});