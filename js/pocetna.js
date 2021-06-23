$(document).ready(function() {            
    let tekuciRecepti = loadOrInitRecipes();

    popuniStranicu();

    function popuniStranicu() {
        let recept1 = null; 
        let recept2 = null; 
        let recept3 = null; 

        let ocena1 = 0.0;
        let ocena2 = 0.0;
        let ocena3 = 0.0;

        for (let i = 0; i < tekuciRecepti.length; i++) {
            let ocena = 0.0;            
            for (let j = 0; j < tekuciRecepti[i].reviews.length; j++) {                
                ocena += tekuciRecepti[i].reviews[j].mark;
            }            
            if (ocena > 0.0) {
                ocena /= parseFloat(tekuciRecepti[i].reviews.length);
            }                        
            if (recept1 == null || ocena > ocena1) {                
                ocena3 = ocena2;
                recept3 = recept2;
                ocena2 = ocena1;
                recept2 = recept1;
                recept1 = tekuciRecepti[i];
                ocena1 = ocena;                
            } else if (recept2 == null || ocena > ocena2) {                
                ocena3 = ocena2;
                recept3 = recept2;
                recept2 = tekuciRecepti[i];
                ocena2 = ocena;
            } else if (recept3 == null || ocena > ocena3) {
                recept3 = tekuciRecepti[i];
                ocena3 = ocena;
            }
        }        

        $("#rh1").text(recept1.name);
        $("#rh2").text(recept2.name);
        $("#rh3").text(recept3.name);

        // izmena
        $("#rp1").text("Ocena: " + ocena1.toFixed(1));
        $("#rp2").text("Ocena: " + ocena2.toFixed(1));
        $("#rp3").text("Ocena: " + ocena3.toFixed(1));
        
        let tip1 = dohvatiTip(recept1.type);
        let tip2 = dohvatiTip(recept2.type);
        let tip3 = dohvatiTip(recept3.type);
        
        $("#img-r1").attr("src", "slike/" + tip1 + "/" + recept1.name + ".jpg");                
        $("#img-r2").attr("src", "slike/" + tip2 + "/" + recept2.name + ".jpg");
        $("#img-r3").attr("src", "slike/" + tip3 + "/" + recept3.name + ".jpg");

        // izmena
        $("#l1").attr("href", "html/sr/" + messages.RECIPE_PAGE + "?id=" + recept1.id);
        $("#l2").attr("href", "html/sr/" + messages.RECIPE_PAGE + "?id=" + recept2.id);
        $("#l3").attr("href", "html/sr/" + messages.RECIPE_PAGE + "?id=" + recept3.id);
    }

    function dohvatiTip(tip) {
        if (tip == "G") {
            return "glavno jelo"
        } else if (tip == "D") {
            return "desert";
        } else if (tip == "P") {
            return "predjelo";
        } else if (tip == "U") {
            return "užina";
        }
    }
});