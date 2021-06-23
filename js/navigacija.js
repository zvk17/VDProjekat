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
            $("#odjava").text(messages.LOGIN);
            $("#moj-nalog").hide();
        } else {
            $("#odjava").text(messages.LOGOUT);
            $("#moj-nalog").show();
        }
    }

});