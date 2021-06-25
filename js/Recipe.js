//deo tekstualnog sadržaja preuzet sa recepti.com
function loadOrInitRecipes() {
    let recipes = localStorage.getItem("recipes");
    if (recipes == null) {
        recipes = [
            {
                id: 1,
                language: "sr",
                name: "Losos na žaru",                
                duration: "30min",
                description: "Postoji više različitih vrsta lososa a čak i u zavisnosti od njihovog životnog ciklusa, meso im može biti crveno, ružičasto ili narandžasto, čak sa više ili manje masnoće, različitih ukusa. Kalorijski gledano, spada u najzasitnije ribe upravo iz razloga bogatstva njihovog mesa masnoćama. Kako bi razjasnili ovu činjenicu, napominjemo da masnoće o kojima pričamo ne spadaju u grupu nepoželjnih već potpuno suprotno, bogatstvo esecijalnim omega 3 masnim kiselinama je ono što ovu ribu čini odličnim izborom. Energetska vrednost ove ribe je približno 120 kalorija na 100g fileta. Najbitnije je odabrati svežu i zdravu ribu. Kao i sva morska hrana, vrlo je osetljiva na nestručno skladištenje i dopremanje, pa vam savetujemo da se snabdevate isključivo kod proverenih dobavljača sa svim potrebnim sertifikatima u ovoj oblasti. Kako biste sačuvali potreban ukus i arome samog mesa, losos nemojte začinjavati jakim i intenzivnim začinima već samo limunom i maslinovim uljem. Bogatstvo masnoćom ga čini idealnim za pripremu na roštilju. Mnogi porede lososa sa biftekom vodenog sveta jer se i za njegovu pripremu mora biti stručan i pažljiv. Nikakav efekat nećemo postići ako željeni komad ostavimo suviše dugo na vatri jer onda dobijamo presušen komad koji je skoro pa neupotrebljiv. Nasuprot tome, ni suviše kratka termička obrada ne dopušta masnoćama da puste svoju potpunu aromu te ostajemo uskraćeni za bogatstvo ukusa koje ova riba nudi. Losos mora imati zapečenu koricu a sredina mora ostati blago ružičasta, sočna i blago kremasta. Uz meso lososa najbolje se slaže suvo belo vino, koje će svojim bukeom nadograditi i dopuniti svaki zalogaj.",
                type: "G",
                level: 4,
                idUser: 4,
                comments: [
                    {
                        idUser: 3,
                        text: "Odličan recept"
                    }, {
                        idUser: 2,
                        text: "Baš dobar recept"
                    }, {
                        idUser: 2,
                        text: "brzo se sprema"
                    }, {
                        idUser: 1,
                        text:"ovaj losos je baš ukusan"
                    }
                ],
                reviews: [
                    {
                        idUser: 2,
                        mark: 3
                    }, {
                        idUser: 3,
                        mark: 3
                    }, {
                        idUser: 4,
                        mark: 5
                    }
                ]
            }, {
                id: 2,
                language: "sr",
                name: "Palačinke",
                duration: "15min",
                description: "Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka. Savet: testo možete napraviti samo sa vodom ili samo sa mlekom. Najbolje je kada stavite pola mineralne vode i pola mleka. Važno je da testo bude gusto i da ga mutite dok ne postane glatko, bez grudvica, potom dodajte još mleka, pa malo kisele vode i tako dok ne dobijete testo koje liči na čorbu. U umućeno testo dodajte oko 1 dl ulja i dobro promešajte. Savet: testo će biti bolje ako ga pustite da odstoji 20-30 minuta. U tiganj sipajte ulje pa kad se zagreje izručite ulje, tako da tiganj ostane samo masan. Vratite ga na ringlu i onda sipajte kutlačom testo, koje treba da bude ravnomerno raspoređeno po tiganju. Temperatura na kojoj se palačinke peku mora biti visoka. Ostavite nekoliko trenutaka na ringli, a onda prevrnite nožem ili bacite u vis. Čim se ispeče jedna strana palačinke, okrenite je na drugu stranu i pecite isto koliko i prvu (otprilike oko 1 minut). Gotove palačinke izbacite na plitak tanjir i filujte.",
                type: "D",
                level: 2,
                idUser: 1,
                comments: [
                    {
                        idUser: 2,
                        text: "evo jedan komentar i od mene"
                    }, {
                        idUser:1,
                        text: "drugi komentar"
                    }, {                        
                        idUser: 3,
                        text: "mnogo dobre palačinke"
                    }
                ],
                reviews: []
            }, {
                id: 3,         
                language: "sr",       
                name: "Ćufte u sosu",
                duration: "1h 30min",
                description: "Izmešati sve navedene sastojke za ćufte i ostaviti najmanje 1/2 sata u frižideru, zatim oblikovati loptice željene veličine. Sos: Propržiti malo brašno na ulju, dodati pasirani paradajz, izmešati i polako dodavati vodu (sami odrediti gustinu sosa), zatim dodati začine. Čim proključa, dodavati jednu po jednu lopticu mesa, smanjiti temperaturu (samo da krčka) i kuvati oko 40 minuta. Služiti uz pire krompir.",
                type: "G",                
                level: 3,
                idUser: 3,
                comments: [
                    {
                        idUser: 4,
                        text: "Odličan recept"
                    }
                ],
                reviews: [
                    {
                        idUser: 3,
                        mark: 2
                    }
                ]
            }, {
                id: 4,
                language: "sr",
                name: "Piletina sa šampinjonima",
                duration: "45min",
                description: "Piletinu isecite na šnicle i začinite. Premažite senfom i ostavite da stoji i malo pokupi sve ukuse. Za to vreme na crnom i belom luku ispržite šampinjone iseckane na listiće, pa kada sva voda ispari dodajte pavlaku za kuvanje. Začinite. Kada malo uvri, sklonite sa vatre i dodajte svež peršunov list. Piletinu uvaljajte u brašno sa obe strane pa propržite kratko na ulju, tek da porumeni. U podmazanu đuvečaru poređajte piletinu, pa zalijte sosom od pečuraka. Pecite u rerni oko dvadesetak minuta na 200 stepeni.",
                type: "G",                
                level: 5,
                idUser: 3,
                comments: [
                    {
                        idUser: 2,
                        text: "Svaka cast, sve najbolje!"
                    }, {
                        idUser: 1,
                        text: "Savrsen recept!"
                    }
                ],
                reviews: []
            }, {
                id: 5,
                language: "sr",
                name: "Tiramisu",                
                duration: "40min",
                description: "Žumance izmiksati sa šećerom u prahu i staviti da se kuva na pari dok se ne zgusne….oko 15-20 minuta dok se ne zgusne.Kad se dobro ohladi dodati maskarpone sir i malo umutiti. Posebno umutiti slatko vrhnje te i to dodati predhodnoj smeeši i ponovo umutiti mikserom. " +
                             "Piškote umakati u proceđenu crnu kafu kojoj se doda malo ruma i slagati na tacnu(pola piškota ide,dva reda po 12 komada)te na to stavimo kremu, pa opet natopljene piškote(dva reda po 12 komada) pa ostatak kreme.Sve to pospemo kakao prahom radi dekoracije. " +
                             "Ako pravite duplu meru nemojte fil zajedno mutiti za obe mere, mutite odvojeno jer iz iskustva znam da neće krema biti čvrsta kako treba da bude. Jednom sam pravila duplu meru i krema mi je bila mekša. Valjda je veća količina pa se nemože dobro umutiti. Prijatno!",
                type: "D",
                level: 3,
                idUser: 1,
                comments: [
                    {
                        idUser: 4,
                        text: "Savrsen recept bravo"
                    },
                    {
                        idUser: 2,
                        text: "Odlican recept. Bas onako kako treba da se radi. Sve pohvale."
                    }
                ],
                reviews: [
                    {

                        idUser: 2,
                        mark: 4
                    }
                ]
            }, {
                id: 6,
                language: "sr",
                name: "Piletina u bešamel sosu",                
                duration: "1h 20min",
                description: "Rernu uključi da se zagreje na 180 stepeni. Krompir očistiti i iseći na tanje krugove debljine 3 mm. Crni luk sitno iseckati, a papriku iseckati na kockice. U odgovarajuću posudu sa nelepljivim dnom (ja sam koristila posudu vel. 24cm) staviti isečeni krompir, posuti ga sa solju, mlevenim biberom, timijanom i preliti sa vrlo malo ulja. Rukom dobro promešati krompir, poređati ga kružno u posudi i staviti da se peče 20 minuta. " +
                             "U dubljem tiganju staviti dve kašike ulja da se zagreje. Na zagrejano ulje dodati na kockice iseckanu piletinu i na srednjoj temperaturi pržiti dok meso ne pobeli i dok ne ispari suvišna voda koju je meso pustilo. Zatim dodati iseckani crni luk, pržiti dva minuta pa ubaciti iseckanu papriku, izdrobljenu čili papriku (ko ne jede ljuti neka izostavi čili papriku) i paradajz pire. Promešati i pržiti 2-3 minuta uz mešanje. Posuti suvim biljnim začinom i mlevenim biberom po ukusu, dodati iseckani peršun, sve dobro promešati i skloniti sa vatre na stranu. " +
                             "Izvaditi posudu sa krompirom i preko preliti piletinu sa povrćem. Ravnomerno rasporediti smesu preko krompira. " +
                             "Bešamel sos: U odgovarajuću posudu staviti maslac i staviti posudu na šporet da se maslac otopi. U otopljeni maslac dodati brašno i mešati da se brašno sjedini sa masnoćom, da ne ostanu grudvice. Pržiti brašno na srednjoj temperaturi oko dva minuta pa sipati mleko. Žicom za mućenje mešati sve dok se sos ne zgusne. Skloniti ga sa vatre i dodati muskatni oraščić i suvi biljni začin i mleveni biber po ukusu. Preliti sos preko smese sa piletinom. Preko sosa rasporediti rendani kačkavalj. Vratiti u rernu na 180 stepeni još 20 minuta, odnosno dok kačkavalj ne dobije blago rumenu boju.",
                type: "G",
                level: 3,
                idUser: 2,
                comments: [
                    {
                        idUser: 3,
                        text: "Isprobano i samo mogu reći svaka čast sve je kako pise!!!"
                    },
                    {
                        idUser: 2,
                        text: "Hvala svima na lepim komentarima!"
                    }
                ],
                reviews: [
                    {
                        idUser: 2,
                        mark: 4
                    }, {
                        idUser: 3,
                        mark: 4
                    }
                ]
            }, {
                id: 7,
                language: "sr",
                name: "Koktel rolnice sa sirom",                
                duration: "2h",
                description: "Koktel rolnice sa sirom su predviđene za sve vrste rođendana ili kada vam dolazi društvance, pa kao grickalica. Brzo se prave i od ove količine se dobije dva puna pleha od rerne, plus jedan mali, jer preostane nekih 6 – 8 komada. Ja sam ih pravila od dva pakovanja kora, tačnije kilograma, pa ću tu meru i pisati. Ova mera je nekako i pogodna za neko okupljanje, naravno uz još neko pecivo ili piticu.",
                type: "P",
                level: 4,
                idUser: 4,
                comments: [],
                reviews: [
                    {
                        idUser: 2,
                        mark: 2
                    }, {
                        idUser: 3,
                        mark: 5
                    }
                ]
            }, {
                id: 8,
                language: "sr",
                name: "Hladno predjelo od jogurta",                
                duration: "2h",
                description: "Prelepo, dekorativno hladno predjelo u kojem je osnovni sastojak jogurt. Nemojte se plašiti želatina, ako postupate po uputstvu ne može da omane. Možete čak i da napravite probu od pola mere, onako za sebe, da vidite kako će da ispadne, isprobate i onda vidite za sledeći put. Meni se izuzetno dopada jer se pravi ranije, onda mi ostaje vremena da radim nešto drugo, pripremam neke druge djakonije. Odličan je u vreme proslava, rodjendan, slava, prazika, generalno svih svečanosti.  Šargarepu skuvati i iseckati na kolutiće. Jaja obariti pa i njih iseći na kolutove, isto tako iseckati i krastavce. Želatin potopiti u malo hladne vode ( 50 ml ) i ostaviti da nabubri. Stavite sve u malo veću posudu od one koju ste planirali za želatin da pored njega može da stane još nekih 100 ml. Pomešati jogurt, majonez i so pa zagrevati do tačke ključanja, taman dok želatin nabubri. Kada je jogurt skoro provrio skloniti ga sa vatre, pa uzeti jednu kutlaču te mase i dodati u želatin. Mešati da se želatin otopi. Otopljen je kada nema tvrdih delova, nema granulica u masi i sve je fino glatko. Sada tu masu vratiti u jogurt i dobro izmešati. Možete probati da vidite da li je dovoljno slano. Uzeti pleh dimenzija 25 x 40 ili 30 x 35 ili tako nekih sličnih. Ne veliki od rerne, malo manji. Na dno poslagati pola praške šunke, kutlačom staviti deo jogurta, pa poslagati red šargarepe, pa opet jogurt, krastavci, jogurt, pa jaja, opet jogurt i red šunkarice, na kraju završiti ostatakom jogurta. Možete slagati i redom koji vi želite, kao i dodavati i oduzimati sastojke koje vi volite. Ostaviti preko noći u frižideru, pa sutradan ili prekosutra seći i služiti. Kada se u frižideru  jogurt stegne poklopite nečim. Folijom, nekom daskom za sečenje mesa ili nečim sličnim. Prijatno.",
                type: "P",
                level: 1,
                idUser: 3,
                comments: [],
                reviews: [
                    {
                        idUser: 4,
                        mark: 2
                    }, {
                        idUser: 1,
                        mark: 5
                    }
                ]
            }, {
                id: 9,
                language: "sr",
                name: "Brza posna čorba",                
                duration: "1h",
                description: "Jednostavna i brza posna čorba, ili čorbica bez mesa. Odlična je i zimi, a i leti, možda uz dodatak jajeta i pavlake, onda baš osvežava. Za post preporučujem posne čorbice neke ćuftice od povrća i sočni krompir iz rerne, a za dane kada nije post neko mesice i salaticu. Home » Čorbe » Brza posna čorba Brza posna čorba in Čorbe, Posna jela, Posna jela Mar 26, 2021 5,004 Views Jednostavna i brza posna čorba, ili čorbica bez mesa. Odlična je i zimi, a i leti, možda uz dodatak jajeta i pavlake, onda baš osvežava. Za post preporučujem posne čorbice neke ćuftice od povrća i sočni krompir iz rerne, a za dane kada nije post neko mesice i salaticu. brza posna corba Sastojci: 1 glavica crnog luka 100 ml ulja ( ako pravite na vodi, izuzmite ) 1 kašika suvog začina, so i biber 1 kg mešanog povrća, ja sam koristila za rusku salatu ( svo povrće može biti i sveže, ali kada se nema puno vremena ili povrća najlakše je iskoristiti već pomenutu mešavinu ) 1 kašika brašna Priprema: iseckati glavicu crnog luka, dodati so i ulje, pa na srednjoj vatri malo prodinstati, da zastakli, a onda naliti čašu vode i ostaviti da se još dodatno prodinsta i omekani. Na luk dodati mešavinu povrća, naliti vode da prelije povrće i kuvati oko 30 minuta uz proveravanje količine vode. Dodavati ukoliko je potrebno vrelu vodu, da se proces kuvanja ne prekida. Kada je povrće skuvano sami regulišete količinu vode, zavisno da li volite gušće ili redje. Na počeku je najbolje da imate manje vode, da vam se ne desi da želite manje čorbe a imate previše i onda morate da odlivate ili kuvate dok ne ispari pa tako raskuvate povrće. Posle regulisanja količine vode u jednoj maloj posudi umutite brašno sa 100 ml vode, da nema grudvica, sklonite sa vatre lonac sa čorbom, istresite brašno i brzo mešajte. Vratite na vatru da se kuva još 5 minuta, kako bi se brašno ukuvalo. Na kraju možete da dosolite, dodate bibera ili začina po ukusu, peršuna ili mirođije.",
                type: "P",
                level: 2,
                idUser: 2,
                comments: [],
                reviews: [
                    {
                        idUser: 3,
                        mark: 2
                    }, {
                        idUser: 1,
                        mark: 4
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