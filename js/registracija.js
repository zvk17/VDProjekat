$(document).ready(function() {
    let korisnici = ucitajKorisnike();

    resetujGreske();    
    dodajDogadjaje();        

    function dodajDogadjaje() {
        $("#registracija").click(registrujSe);        
    }

    function resetujGreske() {
        $("#imeGreska").hide();
        $("#prezimeGreska").hide();
        $("#korisnickoImeGreska").hide();
        $("#lozinkaGreska").hide();
    }

    function registrujSe() {
        resetujGreske();

        let korisnickoIme = $("#korisnickoIme").val();
        let lozinka = $("#lozinka").val();
        let ime = $("#ime").val();
        let prezime = $("#prezime").val();

        let korisnickoGreska = null;
        let lozinkaGreska = null;
        let imeGreska = null;
        let prezimeGreska = null;
        
        if (korisnickoIme.length == 0) {
            korisnickoGreska = "Korisničko ime je obavezno polje."
        }
        if (lozinka.length == 0) {
            lozinkaGreska = "Lozinka je obavezno polje."
        }
        if (ime.length == 0) {
            imeGreska = "Ime je obavezno polje."
        }
        if (prezime.length == 0) {
            prezimeGreska = "Prezime je obavezno polje."
        }

        if (korisnickoGreska != null || lozinkaGreska != null || imeGreska != null || prezimeGreska != null) {
            if (korisnickoGreska != null) {
                $("#korisnickoImeGreska").text(korisnickoGreska);
                $("#korisnickoImeGreska").show();
            }
            if (lozinkaGreska != null) {
                $("#lozinkaGreska").text(lozinkaGreska);
                $("#lozinkaGreska").show();
            }
            if (imeGreska != null) {
                $("#imeGreska").text(imeGreska);
                $("#imeGreska").show();
            }
            if (prezimeGreska != null) {
                $("#prezimeGreska").text(prezimeGreska);
                $("#prezimeGreska").show();
            }
            return;
        }

        if (/^[a-zA-Z]*$/.test(ime) == false) {
            $("#imeGreska").text("Ime se sastoji samo od slova.");
            $("#imeGreska").show();
        } else if (/^[a-zA-Z]*$/.test(prezime) == false) {
            $("#prezimeGreska").text("Prezime se sastoji samo od slova.");
            $("#prezimeGreska").show();
        } else if (/^[a-zA-Z]*$/.test(korisnickoIme) == false) {
            $("#korisnickoImeGreska").text("Korisničko ime se sastoji samo od slova.");
            $("#korisnickoImeGreska").show();
        } else if (/.{8,}/.test(lozinka) == false) {
            $("#lozinkaGreska").text("Lozinka mora da ima bar 8 karaktera.");
            $("#lozinkaGreska").show();
        } else {
            let pronadjenKorisnik = null;
            for (let i = 0; i < korisnici.length; i++) {            
                if (korisnici[i].korisnickoIme == korisnickoIme) {
                    pronadjenKorisnik = korisnici[i];
                    break;
                }
            }        
            if (pronadjenKorisnik != null) {
                $("#korisnickoImeGreska").text("Korisničko ime već postoji.");
                $("#korisnickoImeGreska").show();
            } else {
                let novId = korisnici[korisnici.length - 1].id + 1;
                let noviKorisnik = {                    
                    ime: ime,
                    prezime: prezime,
                    korisnickoIme: korisnickoIme,
                    lozinka: lozinka,
                    id: novId
                };
                korisnici.push(noviKorisnik);

                localStorage.setItem("korisnici", JSON.stringify(korisnici));
                localStorage.setItem('tekuciKorisnik', JSON.stringify(noviKorisnik));
                
                window.location.href = "../../index.html";
            }
        }

    }

});