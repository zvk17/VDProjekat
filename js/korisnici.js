function ucitajKorisnike() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici == null) {
        korisnici = [
            {               
                id: 1, 
                ime: "Petar",
                prezime: "Petrovic",
                korisnickoIme: "petar",
                lozinka: "petar123"
            }
        ];
        localStorage.setItem("korisnici", JSON.stringify(korisnici));
    } else {
        korisnici = JSON.parse(korisnici);
    }
    return korisnici;
}