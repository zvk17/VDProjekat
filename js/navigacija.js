$(document).ready(function() {

    odjaviSe();

    function odjaviSe() {
        $("#odjava").click(function() {            
            localStorage.removeItem("tekuciKorisnik");
        });
    }
    
});