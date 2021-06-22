$(document).ready(function(){
    //let max = 16777215;
    let max =   10000000;
    let colorNumber = Math.floor(Math.random() * max);
    let color = "#" + dopuniColorNumber(colorNumber.toString(16)); // Generisi random boju od #000000 do #FFFFFF
    let width = $("#circle-inicijali").css("width");
    $("#circle-inicijali").css({"height" : width,
                                        "font-size": (0.5 * parseFloat(width) + "px"),
                                        "line-height": width,
                                        "background-color": color});
    postaviInicijale();

    $(window).resize(function(){
        let width = $("#circle-inicijali").css("width");
        $("#circle-inicijali").css({"height" : width,
                                        "font-size": (0.5 * parseFloat(width) + "px"),
                                        "line-height": width,
                                        "background-color": color});
    });

    function postaviInicijale(){        
        let tekuciKorisnik = JSON.parse(localStorage.getItem("tekuciKorisnik"));
        if (tekuciKorisnik == null) {            
            return;
        }        
        let ime = tekuciKorisnik.ime;        
        let prezime = tekuciKorisnik.prezime;
        let inicijali = ime[0] + prezime[0];
        inicijali = inicijali.toUpperCase();        
        $("#circle-inicijali").text(inicijali);
        $("#desno-ime-prezime").text(ime + " " + prezime);
    }

    function dopuniColorNumber(colorNumber)
    {
        let brojCifara = 6;
        potrebanBrojNula = brojCifara - colorNumber.length;
        for(let i = 0; i < potrebanBrojNula; i++)
            colorNumber = "0" + colorNumber;
        return colorNumber;
    }
});