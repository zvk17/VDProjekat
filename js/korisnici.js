function ucitajKorisnike() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici == null) {
        korisnici = [
            {                               
                ime: "Petar",
                prezime: "Petrovic",
                korisnickoIme: "petar",
                lozinka: "petar123",
                id: novId,
            }
        ];
        localStorage.setItem("korisnici", JSON.stringify(korisnici));
    } else {
        korisnici = JSON.parse(korisnici);
    }
    return korisnici;
}