$(document).ready(function() {

    odjaviSe();
    sakrijLogout();

    function odjaviSe() {
        $("#odjava").click(function() {                        
            localStorage.removeItem("tekuciKorisnik");
        });
    }
    
    function sakrijLogout() {
        if (localStorage.getItem("tekuciKorisnik") == null) {
            $("#odjava-stavka").hide();
        } else {
            $("#odjava-stavka").show();
        }
    }

});