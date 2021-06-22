$(document).ready(function() {
    let recepti = [
        {

        }
    ];

    dohavtiRecepte();
    popuniStranicu();

    function dohavtiRecepte() {
        if (localStorage.getItem("recepti") != null) {
            recepti = JSON.parse(localStorage.getItem("recepti"));
        } else {
            localStorage.setItem("recepti", JSON.stringify(recepti));
        }
    }

    function popuniStranicu() {
        let recept1 = null;
        let recept2 = null;
        let recept3 = null;
        for (let i = 0; i < recepti.length; i++) {

        }
    }
});