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
            }, {
                id: 5,
                name: "Tiramisu",
                idUser: 1,
                duration: "40min",
                description: "Žumanjce izmiksati sa šećerom u prahu i staviti da se kuha na pari dok se ne zgusne….oko 15-20 minuta dok se ne zgusne.Kad se dobro ohladi dodati mascarpone sir i malo umutiti.Posebno umutiti slatko vrhnje te i to dodati predhodnoj smjesi i ponovo umutiti mikserom. " +
                             "Piškote umakati u procjeđenu crnu kafu kojoj se doda malo ruma i slagati na tacnu(pola piškota ide,dva reda po 12 komada)te na to stavimo kremu, pa opet natopljene piškote(dva reda po 12 komada) pa ostatak kreme.Sve to pospemo kakao prahom radi dekoracije. " +
                             "Ako pravite duplu mjeru nemojte fil zajedno mutiti za obe mjere, mutite odvojeno jer iz iskustva znam da neće krema biti čvrsta kako treba da bude.Jednom sam pravila duplu mjeru i krema mi je bila meksa.Valjda je veća količina pa se nemože dobro umutiti. Prijatno!",
                type: "D",
                level: 3,
                comments: [],
                reviews: [
                    {
                        userId: 2,
                        mark: 4.5
                    }
                ]
            }, {
                id: 6,
                name: "Piletina u bešamel sosu",
                idUser: 2,
                duration: "1h 20min",
                description: "Rernu uključi da se zagreje na 180 stepeni. Krompir očistiti i iseći na tanje krugove debljine 3 mm. Crni luk sitno iseckati, a papriku iseckati na kockice. U odgovarajuću posudu sa nelepljivim dnom (ja sam koristila posudu vel. 24cm) staviti isečeni krompir, posuti ga sa solju, mlevenim biberom, timijanom i preliti sa vrlo malo ulja. Rukom dobro promešati krompir, poređati ga kružno u posudi i staviti da se peče 20 minuta. " +
                             "U dubljem tiganju staviti dve kašike ulja da se zagreje. Na zagrejano ulje dodati na kockice iseckanu piletinu i na srednjoj temperaturi pržiti dok meso ne pobeli i dok ne ispari suvišna voda koju je meso pustilo. Zatim dodati iseckani crni luk, pržiti dva minuta pa ubaciti iseckanu papriku, izdrobljenu čili papriku (ko ne jede ljuti neka izostavi čili papriku) i paradajz pire. Promešati i pržiti 2-3 minuta uz mešanje. Posuti suvim biljnim začinom i mlevenim biberom po ukusu, dodati iseckani peršun, sve dobro promešati i skloniti sa vatre na stranu. " +
                             "Izvaditi posudu sa krompirom i preko preliti piletinu sa povrćem. Ravnomerno rasporediti smesu preko krompira. " +
                             "Bešamel sos: U odgovarajuću posudu staviti maslac i staviti posudu na šporet da se maslac otopi. U otopljeni maslac dodati brašno i mešati da se brašno sjedini sa masnoćom, da ne ostanu grudvice. Pržiti brašno na srednjoj temperaturi oko dva minuta pa sipati mleko. Žicom za mućenje mešati sve dok se sos ne zgusne. Skloniti ga sa vatre i dodati muskatni oraščić i suvi biljni začin i mleveni biber po ukusu. Preliti sos preko smese sa piletinom. Preko sosa rasporediti rendani kačkavalj. Vratiti u rernu na 180 stepeni još 20 minuta, odnosno dok kačkavalj ne dobije blago rumenu boju.",
                type: "G",
                level: 3,
                comments: [],
                reviews: [
                    {
                        userId: 2,
                        mark: 4.5
                    }, {
                        userId: 3,
                        mark: 4.8
                    }
                ]
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