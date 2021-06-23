function ucitajKorisnike() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici == null) {
        korisnici = [
            {                
                ime: "Petar",
                prezime: "Petrović",
                korisnickoIme: "petar",
                lozinka: "petar123",
                id: 1
            },{                
                ime: "Marko",
                prezime: "Marković",
                korisnickoIme: "marko",
                lozinka: "marko123",
                id: 2
            }, {
                ime: "Marina",
                prezime: "Marinković",
                korisnickoIme: "marina",
                lozinka: "marina123",
                id: 3
            }, {
                ime: "Nikola",
                prezime: "Nikolić",
                korisnickoIme: "nikola",
                lozinka: "nikola123",
                id: 4
            } 
        ];
        localStorage.setItem("korisnici", JSON.stringify(korisnici));
    } else {
        korisnici = JSON.parse(korisnici);
    }
    return korisnici;
}