$(document).ready(function() {
    let korisnici = ucitajKorisnike();

    resetujGreske();
    dodajDogadjaje();

    function dodajDogadjaje() {
        $("#prijava").click(prijaviSe);
    }

    function resetujGreske() {
        $("#korisnickoImeGreska").hide();
        $("#lozinkaGreska").hide();
    }

    function prijaviSe() {
        resetujGreske();
        let korisnickoIme = $("#korisnickoIme").val();
        let lozinka = $("#lozinka").val();

        let imeGreska = null;
        let lozinkaGreska = null;

        if (korisnickoIme.length == 0) {
            imeGreska = messages.LOGIN_USERNAME_REQUIRED;
        }
        if (lozinka.length == 0) {
            lozinkaGreska = messages.LOGIN_PASSWORD_REQUIRED;
        }

        if (imeGreska != null || lozinkaGreska != null) {
            if (imeGreska != null) {
                $("#korisnickoImeGreska").text(imeGreska);
                $("#korisnickoImeGreska").show();
            }
            if (lozinkaGreska != null) {
                $("#lozinkaGreska").text(lozinkaGreska);
                $("#lozinkaGreska").show();
            }
            return;
        }

        let pronadjenKorisnik = null;
        for (let i = 0; i < korisnici.length; i++) {
            if (korisnici[i].korisnickoIme == korisnickoIme) {
                pronadjenKorisnik = korisnici[i];
                break;
            }
        }

        if (pronadjenKorisnik == null) {
            $("#korisnickoImeGreska").text(messages.LOGIN_USERNAME_NOT_EXISTS);
            $("#korisnickoImeGreska").show();
            return;
        }

        if (pronadjenKorisnik.lozinka != lozinka) {
            $("#lozinkaGreska").text(messages.LOGIN_PASSWORD_ERROR);
            $("#lozinkaGreska").show();
            return;
        }

        localStorage.setItem('tekuciKorisnik', JSON.stringify(pronadjenKorisnik));

        window.location.href = "../../" + messages.HOME_PAGE;
    }

});