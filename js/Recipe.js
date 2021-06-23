function loadORInitRecipes() {
    let recipes = localStorage.getItem("recipes");
    if (recipes == null) {
        recipes = [
            {
                id: 1,
                name: "Losos na žaru",
                duration: "30min",
                description: "Postoji više različitih vrsta lososa a čak i u zavisnosti od njihovog životnog ciklusa, meso im može biti crveno, ružičasto ili narandžasto, čak sa više ili manje masnoće, različitih ukusa. Kalorijski gledano, spada u najzasitnije ribe upravo iz razloga bogatstva njihovog mesa masnoćama. Kako bi razjasnili ovu činjenicu, napominjemo da masnoće o kojima pričamo ne spadaju u grupu nepoželjnih već potpuno suprotno, bogatstvo esecijalnim omega 3 masnim kiselinama je ono što ovu ribu čini odličnim izborom. Energetska vrednost ove ribe je približno 120 kalorija na 100 g fileta. Najbitnije je odabrati svežu i zdravu ribu. Kao i sva morska hrana, vrlo je osetljiva na nestručno skladištenje i dopremanje, pa vam savetujemo da se snabdevate isključivo kod proverenih dobavljača sa svim potrebnim sertifikatima u ovoj oblasti. Kako biste sačuvali potreban ukus i arome samog mesa, losos nemojte začinjavati jakim i intenzivnim začinima već samo limunom i maslinovim uljem. Bogatstvo masnoćom ga čini idealnim za pripremu na roštilju. Mnogi porede lososa sa biftekom vodenog sveta jer se i za njegovu pripremu mora biti stručan i pažljiv. Nikakav efekat nećemo postići ako željeni komad ostavimo suviše dugo na vatri jer onda dobijamo presušen komad koji je skoro pa neupotrebljiv. Nasuprot tome, ni suviše kratka termička obrada ne dopušta masnoćama da puste svoju potpunu aromu te ostajemo uskraćeni za bogatstvo ukusa koje ova riba nudi. Losos mora imati zapečenu koricu a sredina mora ostati blago ružičasta, sočna i blago kremasta. Uz meso lososa najbolje se slaže suvo belo vino, koje će svojim bukeom nadograditi i dopuniti svaki zalogaj.",
                type: "G",
                level: 4,
                comments: [],
                reviews: [
                    {
                        idUser: 4,
                        mark: 3
                    }, {
                        idUser: 3,
                        mark: 3
                    }, {
                        idUser: 3,
                        mark: 5
                    }
                ]
            }, {
                id: 2,
                name: "Palačinke",
                duration: "15min",
                description: "opis kako napraviti palačinke",
                type: "D",
                level: 2,
                comments: [],
                reviews: []
            }, {
                id: 3,
                name: "Ćufte",
                duration: "45min",
                description: "opis kako spremiti ćufte",
                type: "G",
                level: 3,
                comments: [],
                reviews: [
                    {
                        idUser: 3,
                        mark: 2
                    }
                ]
            }, {
                id: 4,
                name: "Piletina sa šampinjonima",
                duration: "1h 30min",
                description: "opis kako spremiti piletinu",
                type: "G",
                level: 5,
                comments: [],
                reviews: []
            }
        ];
        localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
        recipes = JSON.parse(recipes);
    }
    return recipes;
}
function getReviewValue(recipe) {
    let review = recipe.reviews.reduce((accum,review) => accum + review.mark, 0);
    if (recipe.reviews.length > 0) {
        review = Math.round((1.0 * review / recipe.reviews.length) * 10) / 10.0;
    }
    return review;
}