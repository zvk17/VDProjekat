$(document).ready(function() {
    let korisnici = [
        {
            ime: "Petar",
            prezime: "Petrovic",
            korisnickoIme: "petar",
            lozinka: "petar123"
        }
    ]

    resetujGreske();
    inicijalizujPodatke();
    dodajDogadjaje();    

    function inicijalizujPodatke() {
        if (localStorage.getItem("korisnici") == null) {
            localStorage.setItem("korisnici", JSON.stringify(korisnici));
        } else {
            korisnici = JSON.parse(localStorage.getItem("korisnici"));
        }
    }

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
            imeGreska = "Korisničko ime je obavezno polje."
        }
        if (lozinka.length == 0) {
            lozinkaGreska = "Lozinka je obavezno polje."
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
            $("#korisnickoImeGreska").text("Korisničko ime ne postoji.");
            $("#korisnickoImeGreska").show();
            return;
        }

        if (pronadjenKorisnik.lozinka != lozinka) {
            $("#lozinkaGreska").text("Lozinka nije ispravna.");
            $("#lozinkaGreska").show();
            return;
        }

        localStorage.setItem('tekuciKorisnik', JSON.stringify(pronadjenKorisnik));

        window.location.href = "../../index.html";
    }

});