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

                let podaci = $("<div>").attr("class", "col-xl-9 col-lg-12 col-md-9");
                let link = $("<a>").addClass("recept-link").attr("href", messages.RECIPE_PAGE + "?id=" + recepti[i].id);
                let naziv = $("<h5>").text(recepti[i].name);
                let tezina = $("<div>").text(messages.HARDNESS_LEVEL + recepti[i].level);
                let ocena = $("<div>").text(messages.AVERAGE_REVIEW + prosek);

                link.append(naziv);
                podaci.append(link);
                podaci.append(tezina);
                podaci.append(ocena);

                let komentari = $("<div>").attr("class", "col-xl-3 col-lg-12 col-md-3 text-lg-right");
                let brojKomentara = $("<div>").attr("class", "broj-komentara bg-dark w-75").text(recepti[i].comments.length);
                let obrisi = $("<div>").append(
                    $("<button>").attr("class", "btn btn-outline-dark mt-3 ukloni-recept").attr("id", "b-" + recepti[i].id).text(messages.DELETE)
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
        for (let i = 0; i < recepti.length; i++) {
            let rld = false;
            if (recepti[i].id == id) {
                for (let j = 0; j < recepti[i].comments.length; j++) {
                    if (recepti[i].comments[j].idUser == korisnik.id) {
                        rld = true;
                        break;
                    }
                }

                recepti.splice(i, 1);
                localStorage.setItem("recipes", JSON.stringify(recepti));

                if (rld) {
                    location.reload();
                }

                break;
            }
        }
    }

    function popuniOcene() {
        for (let i = 0; i < recepti.length; i++) {
            for (let j = 0; j < recepti[i].reviews.length; j++) {
                if (recepti[i].reviews[j].idUser == korisnik.id) {
                    let kolona = $("<div>").attr("class", "col-12 bg-light p-2 mt-2");
                    let link = $("<a>").addClass("recept-link").attr("href", messages.RECIPE_PAGE + "?id=" + recepti[i].id);
                    let naziv = $("<h5>").text(recepti[i].name);

                    let zvezdice = [];
                    let ocena = recepti[i].reviews[j].mark;
                    for (let k = 0; k < ocena; k++) {
                        zvezdice.push($("<span>").attr("class", "fa fa-star"));
                    }

                    link.append(naziv);
                    kolona.append(link);
                    for (let k = 0; k < ocena; k++) {
                        kolona.append(zvezdice[k]);
                    }

                    $("#ocene-kolone").append(kolona);

                    break;
                }
            }
        }
    }

    function popuniKomentare() {
        for (let i = 0; i < recepti.length; i++) {
            for (let j = 0; j < recepti[i].comments.length; j++) {
                if (korisnik.id == recepti[i].comments[j].idUser) {
                    let red = $("<div>").attr("class", "col-12 bg-light mb-2 p-2");

                    let link = $("<a>").addClass("recept-link").attr("href", messages.RECIPE_PAGE + "?id=" + recepti[i].id);
                    let naziv = $("<h5>").text(recepti[i].name);

                    let komentar = $("<div>").text(recepti[i].comments[j].text);

                    link.append(naziv);
                    red.append(link);
                    red.append(komentar);

                    $("#komentari-red").append(red);
                }
            }
        }
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