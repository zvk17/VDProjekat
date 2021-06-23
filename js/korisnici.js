function ucitajKorisnike() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici == null) {
        korisnici = [
            {                
                ime: "Petar",
                prezime: "Petrovic",
                korisnickoIme: "petar",
                lozinka: "petar123"
            }
        ];
        localStorage.setItem("korisnici", JSON.parse(korisnici));
    } else {
        korisnici = JSON.parse(korisnici);
    }
    return korisnici;
}