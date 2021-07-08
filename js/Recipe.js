//deo tekstualnog sadržaja preuzet sa recepti.com
function loadOrInitRecipes() {
    let recipes = localStorage.getItem("recipes");
    if (recipes == null) {
        recipes = [
            {
                id: 1,
                language: "sr",
                name: "Losos na zaru",
                duration: "30min",
                description: "Postoji više različitih vrsta lososa a čak i u zavisnosti od njihovog životnog ciklusa, meso im može biti crveno, ružičasto ili narandžasto, čak sa više ili manje masnoće, različitih ukusa. Kalorijski gledano, spada u najzasitnije ribe upravo iz razloga bogatstva njihovog mesa masnoćama. Kako bi razjasnili ovu činjenicu, napominjemo da masnoće o kojima pričamo ne spadaju u grupu nepoželjnih već potpuno suprotno, bogatstvo esecijalnim omega 3 masnim kiselinama je ono što ovu ribu čini odličnim izborom. Energetska vrednost ove ribe je približno 120 kalorija na 100g fileta. Najbitnije je odabrati svežu i zdravu ribu. Kao i sva morska hrana, vrlo je osetljiva na nestručno skladištenje i dopremanje, pa vam savetujemo da se snabdevate isključivo kod proverenih dobavljača sa svim potrebnim sertifikatima u ovoj oblasti. Kako biste sačuvali potreban ukus i arome samog mesa, losos nemojte začinjavati jakim i intenzivnim začinima već samo limunom i maslinovim uljem. Bogatstvo masnoćom ga čini idealnim za pripremu na roštilju. Mnogi porede lososa sa biftekom vodenog sveta jer se i za njegovu pripremu mora biti stručan i pažljiv. Nikakav efekat nećemo postići ako željeni komad ostavimo suviše dugo na vatri jer onda dobijamo presušen komad koji je skoro pa neupotrebljiv. Nasuprot tome, ni suviše kratka termička obrada ne dopušta masnoćama da puste svoju potpunu aromu te ostajemo uskraćeni za bogatstvo ukusa koje ova riba nudi. Losos mora imati zapečenu koricu a sredina mora ostati blago ružičasta, sočna i blago kremasta. Uz meso lososa najbolje se slaže suvo belo vino, koje će svojim bukeom nadograditi i dopuniti svaki zalogaj.",
                type: "G",
                level: 4,
                idUser: 4,
                videos: ["https://www.youtube.com/embed/BWyX_8e0M5k"],
                images: ["losos1.jpg", "losos2.jpg", "losos3.jpg"],
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
                videos:["https://www.youtube.com/embed/L2iPXjXi5aA"],
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
            },
            {
                id: 3,
                language: "sr",
                name: "Ćufte u sosu",
                duration: "1h 30min",
                description: "Izmešati sve navedene sastojke za ćufte i ostaviti najmanje 1/2 sata u frižideru, zatim oblikovati loptice željene veličine. Sos: Propržiti malo brašno na ulju, dodati pasirani paradajz, izmešati i polako dodavati vodu (sami odrediti gustinu sosa), zatim dodati začine. Čim proključa, dodavati jednu po jednu lopticu mesa, smanjiti temperaturu (samo da krčka) i kuvati oko 40 minuta. Služiti uz pire krompir.",
                type: "G",
                level: 3,
                idUser: 3,
                videos: ["https://www.youtube.com/embed/o0Evcvzucrs"],
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
                videos:["https://www.youtube.com/embed/KkFSsJnmbdM"],
                comments: [
                    {
                        idUser: 2,
                        text: "Svaka cast, sve najbolje!"
                    }, {
                        idUser: 1,
                        text: "Savršen recept!"
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
                images: ["tiramisu1.jpg", "tiramisu2.jpg", "tiramisu3.jpg"],
                videos: ["https://www.youtube.com/embed/RfTXCpwS9To"],
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
                name: "Piletina u besamel sosu",
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
                images: ["rolnice1.jpg", "rolnice2.jpg", "rolnice3.jpg"],
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
            }, {
                id: 10,
                language: "sr",
                name: "Keks sa nutellom",
                duration: "35min",
                description: "U vanglicu razbiti jaje, dodati nutellu i mikserom umutiti. Ubaciti brašno i dobro sjediniti mikserom (ako treba poslužite se na kraju i špatulom ili kašikom). Testo prebaciti na providnu foliju i oblikovati duži valjak koji će se kasnije iseći na 20 jednakih delova. Testo uviti u foliju i ostaviti u frižider 20 minuta." +
                             "Preko velikog pleha od električnog šporeta staviti pek papir. Testo izvaditi iz frižidera i oštrim nožem ga podeliti na 20 jednakih delova. Svaki deo rukama oblikovati u kuglicu i poređati ih na pripremljeni pleh. Kuglice ređati na odstojanju jedne od drugih. Drškom od varjače pritisnuti svaku kuglicu da se napravi udubljenje za punjenje. Rernu uključiti da se zagreje na 180 stepeni." +
                             "Punjenje keksa: U kesu za zamrzivač sipati nutellu. Odseći vrh kese i napuniti keksiće. Po površini posuti iseckanim lešnicima. Staviti keks da se peče 10 minuta. Pazite da ih ne prepečete, jer će biti tvrdi (čim donji deo keksa malo očvrsne pečeni su). Ostaviti keks da se ohladi u plehu, pa ga prebaciti na tacnu za posluženje.",
                type: "D",
                level: 2,
                idUser: 3,
                comments: [
                    {
                        idUser: 2,
                        text: "Vrlo zanimljivo"
                    }
                ],
                reviews: []
            }, {
                id: 11,
                language: "sr",
                name: "Slane minjon kocke",
                duration: "25min",
                description: "Belanca odvojimo od žumanaca, belanca izlupamo u čvrst šam sa malo soli zati dodajemo jedno po jedno žumance, lagano mešajući dodajemo skuvani I usitnjeni španać zatim brašno sa praškom za pecivo. Smesu sipamo u pleh obložen pek papirom." +
                             "Pečemo na, 180C oko 15 minuta, kad se kora ohladi podelimo na dva jednaka dela." +
                             "Pavlaku sjedinimo sa krem sirom unapred spremljene palačinke premažemo namazom od pavlake i narendamo šunkaricu." +
                             "Koru premažemo polovinom fila i poređamo urolane palačinke po dužini. Popunimo filom prazninu između palačinke, a ostatak fila premažemo preko njih. Poklopimo drugim delom kore blago pritisnem i ostavim par sati da odstoji pre serviranja. Sečemo prvo po dužini 5 ako sa rez prolazi i među palačinke, a zati sečemo parčiće.",
                type: "U",
                level: 3,
                idUser: 1,
                comments: [
                    {
                        idUser: 3,
                        text: "Vrlo zanimljivo"
                    }
                ],
                reviews: []
            }, {
                id: 12,
                language: "sr",
                name: "Slane kuglice",
                duration: "25min",
                description: "Susam staviti na suvom tiganju i malo ga propržiti dok ne dobije boju. Ostaviti sa strane da se ohladi." +
                             "Feta sir izgnjeciti viljuskom. Krekere samleti u secka ili na mašini za orahe." +
                             "Pomešati feta sir, mlevene krekere i pavlaku. Napraviti ujednacenu smesu. Formirati kuglice pa svaku uvalhati u susam. Ostaviti da se dobro ohladi pa poslužiti.",
                type: "U",
                level: 2,
                idUser: 4,
                comments: [],
                reviews: []
            }, {
                id: 13,
                language: "sr",
                name: "Heljdini mafini sa sirom",
                duration: "15min",
                description: "Jaja umutiti malo žicom pa dodati jogurt, ulje, kiselu vodu, so, mleveni lan. Promešati vajračom, a zatim dodati brašno pomešanim sa praškom za pecivo. Sjediniti varjačom. Testi je ređe." +
                             "Puniti kalupe mafina smesom, stavljati po 1 kašiku smese, zatim staviti parče sira, a potom posuti sa semenkama golice." +
                             "Peći na 180C oko 20-ak minuta. Prijatno!",
                type: "U",
                level: 3,
                idUser: 4,
                comments: [],
                reviews: []
            }, {
                id: 14,
                language: "en",
                name: "Grilled salmon",
                duration: "30min",
                description: "There are several different types of salmon and even depending on their life cycle, their flesh can be red, pink or orange, even with more or less fat, different flavors. In terms of calories, it is one of the most saturated fish precisely because of the richness of their meat in fat. To clarify this fact, we note that the fats we are talking about do not belong to the group of undesirable, but on the contrary, the richness of essential omega 3 fatty acids is what makes this fish a great choice. The energy value of this fish is approximately 120 calories per 100g of fillet. The most important thing is to choose fresh and healthy fish. Like all seafood, it is very sensitive to unprofessional storage and delivery, so we advise you to obtain only from verified suppliers with all the necessary certificates in this area. To preserve the necessary taste and aroma of the meat itself, do not season the salmon with strong and intense spices, but only with lemon and olive oil. The richness of fat makes it ideal for grilling. Many people compare salmon to the steak of the water world, because you have to be professional and careful to prepare it. We will not achieve any effect if we leave the desired piece on the fire for too long, because then we get a dried piece that is almost unusable. In contrast, even too short a heat treatment does not allow fats to release their full aroma and we are deprived of the richness of flavors that this fish offers. The salmon must have a baked crust and the middle must remain slightly pink, juicy and slightly creamy. Dry white wine goes best with salmon meat, which will upgrade and supplement every bite with its bouquet.",
                type: "G",
                level: 4,
                idUser: 4,
                videos: ["https://www.youtube.com/embed/BWyX_8e0M5k"],
                images: ["losos1.jpg", "losos2.jpg", "losos3.jpg"],
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
                id: 15,
                language: "en",
                name: "Pancakes",
                duration: "15min",
                description: "Take a deeper plastic bowl and pour flour into it, add eggs and about 2 dl of milk. Try whipping and if it doesn't work, add a little more milk. Tip: you can make the dough only with water or only with milk. It is best when you put half mineral water and half milk. It is important that the dough is thick and that you knead it until it becomes smooth, without lumps, then add more milk, then a little sour water and so on until you get a dough that looks like soup. Add about 1 dl of oil to the kneaded dough and mix well. Tip: the dough will be better if you let it stand for 20-30 minutes. Pour the oil into the pan and when it heats up, hand out the oil so that the pan remains only greasy. Return it to the hob and then pour the dough with a ladle, which should be evenly distributed on the pan. The temperature at which the pancakes are baked must be high. Leave it on the hob for a few moments, then turn it over with a knife or throw it up. As soon as one side of the pancake is baked, turn it over to the other side and bake as much as the first (about 1 minute). Put the finished pancakes on a shallow plate and fill.",
                type: "D",
                level: 2,
                idUser: 1,
                videos:["https://www.youtube.com/embed/L2iPXjXi5aA"],
                comments: [
                    {
                        idUser: 2,
                        text: "one comment from me"
                    }, {
                        idUser:1,
                        text: "second comment"
                    }, {
                        idUser: 3,
                        text: "very good pancakes"
                    }
                ],
                reviews: []
            }, {
                id: 16,
                language: "en",
                name: "Tiramisu",
                duration: "40min",
                description: "Mix the egg yolks with powdered sugar and cook on steam until it thickens oko .about 15-20 minutes until it thickens. When it cools down well, add mascarpone cheese and whisk a little. Whip the sweet cream separately and add it to the previous mixture and beat again with a mixer." +
                             "Dip the biscuits in the strained black coffee to which a little rum is added and place on a tray (half a biscuit goes, two rows of 12 pieces) and put the cream on it, then the soaked biscuits again (two rows of 12 pieces) and the rest of the cream. cocoa powder for decoration." +
                             "If you make a double measure, do not stir the filling together for both measures, stir separately because I know from experience that the cream will not be as firm as it should be. I made a double measure once and the cream was softer. I guess it's a larger amount so it can't be whipped well. Pleasant!",
                type: "D",
                level: 3,
                idUser: 1,
                images: ["tiramisu1.jpg", "tiramisu2.jpg", "tiramisu3.jpg"],
                videos: ["https://www.youtube.com/embed/RfTXCpwS9To"],
                comments: [
                    {
                        idUser: 4,
                        text: "great recipe"
                    },
                    {
                        idUser: 2,
                        text: "excellent recipe."
                    }
                ],
                reviews: [
                    {

                        idUser: 2,
                        mark: 4
                    }
                ]
            }, {
                id: 17,
                language: "en",
                name: "Chicken in bechamel sauce",
                duration: "1h 20min",
                description: "Turn on the oven to heat to 180 degrees. Peel a squash, grate it and cut it into 3 mm thick circles. Finely chop the onion and dice the paprika. Put sliced potatoes in a suitable bowl with a non-stick bottom (I used a bowl, size 24 cm), sprinkle it with salt, ground pepper, thyme and pour very little oil over it. Stir the potatoes well by hand, arrange them in a circle in a bowl and bake for 20 minutes." +
                             "Put two tablespoons of oil in a deeper pan to heat. Add the diced chicken to the heated oil and fry at a medium temperature until the meat turns white and the excess water released by the meat evaporates. Then add the chopped onion, fry for two minutes, then add the chopped paprika, crushed chili peppers (those who do not eat hot, omit the chili peppers) and tomato puree. Stir and fry for 2-3 minutes, stirring. Sprinkle with dry vegetable spice and ground pepper to taste, add chopped parsley, mix everything well and remove from the heat to the side." +
                             "Take out the bowl with the potatoes and pour the chicken and vegetables over it. Spread the mixture evenly over the potatoes." +
                             "Bechamel sauce: Put butter in a suitable bowl and place the bowl on the stove to melt the butter. Add flour to the melted butter and mix to combine the flour with the fat so that no lumps remain. Fry the flour at a medium temperature for about two minutes, then pour in the milk. Stir with a whisk until the sauce thickens. Remove from the heat and add the nutmeg and dry herbs and ground pepper to taste. Pour the sauce over the chicken mixture. Arrange the grated cheese over the sauce. Return to the oven at 180 degrees for another 20 minutes, or until the cheese turns slightly yellow.",
                type: "G",
                level: 3,
                idUser: 2,
                comments: [
                    {
                        idUser: 3,
                        text: "delicious!!!"
                    },
                    {
                        idUser: 2,
                        text: "thank you for great comments!"
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
                id: 18,
                language: "en",
                name: "Ham and cheese apple wraps",
                duration: "1h",
                description: "Ham and cheese apple wraps are a delicious combination of savory and sweet that you can pack in the lunchbox or serve for a high-protein snack! I’ve made grilled ham & cheese sandwiches for years, but these apple wraps are a low-carb version that’s light and satisfying with crunchy, tangy-sweet flavors. Ham and cheese apple wraps are a delicious combination of savory and sweet that you can pack in the lunchbox or serve for a high-protein snack! I’ve made grilled ham & cheese sandwiches for years, but these apple wraps are a low-carb version that’s light and satisfying with crunchy, tangy-sweet flavors. lunch container with blueberries and snap peas. Largest part of the container holds apple and cheese slices wrapped with ham. These apple wraps are an easy lunch option that will fill you up without weighing you down, and they’re quick to assemble. Since apples are notorious for browning, use my trick to prevent apple slices from browning before wrapping them with cheese and ham. You can also swap the ham for sliced deli turkey and use any cheese that pairs well with fruit. My favorite options are Gouda, Cheddar, and Colby Jack. These apple wraps can be prepared the night before and packed into lunch containers along with a boiled egg for additional protein, whole-grain crackers, veggies, and hummus for dipping.",
                type: "P",
                level: 2,
                idUser: 3,
                comments: [],
                reviews: [
                    {
                        idUser: 3,
                        mark: 2
                    }, {
                        idUser: 3,
                        mark: 4
                    }
                ]
            }, {
                id: 19,
                language: "en",
                name: "Spanish tortilla",
                duration: "50min",
                description: "This classic Spanish dish is very versatile and quick to whip up. The tortilla (or Spanish omelette) can be served hot or cold and is a fantastic way of using up all kinds of ingredients – simply add in any leftover vegetables, crumbled or grated cheese, jarred red peppers or cooked sausage. They’ll all taste great, so get experimenting! Peel the potatoes using a speed-peeler, then carefully cut them into thin slices. Pat the potato slices dry with a clean tea towel.  Peel and finely slice the onion. Drizzle 2 tablespoons of oil into a small frying pan over a medium heat, then add the onion and potatoes. Turn the heat down to low and cook for 25 to 30 minutes, or until the onions are turning golden and the potato slices are cooked through. Try not to stir it too much or the potatoes will break up – just use a fish slice to flip them over halfway through. Crack the eggs into a mixing bowl, season with a tiny pinch of sea salt and black pepper, then whisk together with a fork. When the onions and potatoes are cooked, remove the pan from the heat and carefully tip them into the eggs. Transfer the mixture back into the frying pan and place it over a low heat. Cook for around 20 minutes, or until there’s almost no runny egg on top.  Use a fish slice to slightly lift and loosen the sides of the tortilla. Carefully flip the pan over a dinner plate and tip out the tortilla, then slide it back into the pan and cook for another 5 minutes, or until golden and cooked through. Turn out the tortilla onto a serving board, then cut into 6 wedges and serve hot or cold with a simple green salad.",
                type: "U",
                level: 1,
                idUser: 2,
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