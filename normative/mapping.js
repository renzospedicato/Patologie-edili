/* ============================================================================
   NORMATIVE, strato dati 2 di 2: MAPPING PROBLEMA -> NORME
   ----------------------------------------------------------------------------
   La lingua comune sono le 42 FAMIGLIE del catalogo delle patologie edilizie
   (D:\Desktop\Lesioni\catalogo-patologie-edilizie.html). Stesse famiglie, stessi
   nomi: così il mapping si innesta nel catalogo per copia, senza rifare nulla.

   Ogni collegamento famiglia -> norma porta la MOTIVAZIONE (perché). Un
   collegamento senza motivo verificabile non entra.

   Campi famiglia:
     fam    nome della famiglia (come nel catalogo)
     slug   id stabile
     stato  "censita"   = dominio verificato voce per voce nei registri
            "parziale"  = alcune norme verificate, altre ancora da censire
            "quadro"    = solo riferimento quadro (NTC/Eurocodici), dettaglio da censire
            "da-censire"= nessuna norma verificata in registro: si dichiara, non si riempie
     nota   avvertenza sul perimetro della famiglia
     voci   [{ n: id-norma, fase, perche }]

   Fasi: diagnosi | progetto | prodotti | esecuzione | collaudo
   ============================================================================ */

window.FASI = [
  { id:"diagnosi",  label:"Diagnosi e misura",   desc:"Riconoscere il fenomeno, misurarlo, escludere le cause concorrenti." },
  { id:"progetto",  label:"Progetto e strategia",desc:"Scegliere la strategia di intervento e i requisiti da rispettare." },
  { id:"prodotti",  label:"Prodotti e materiali",desc:"Requisiti e classificazione dei materiali da impiegare." },
  { id:"esecuzione",label:"Esecuzione e posa",   desc:"Come si esegue, chi è qualificato a farlo." },
  { id:"collaudo",  label:"Collaudo e verifica", desc:"Come si dimostra che l'intervento ha funzionato." }
];

window.MAPPING = [

/* ---- 1 ------------------------------------------------------------------ */
{ fam:"Fessure per geometria (quadro fessurativo classico)", slug:"fessure-geometria", stato:"parziale",
  nota:"Censita la parte diagnostica (classificazione del danno, prove sulla muratura). Il dettaglio di calcolo strutturale resta al quadro NTC/Eurocodici.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Classifica la gravità del danno per ampiezza di fessura (categorie 0-5): è il riferimento che trasforma una descrizione in un giudizio confrontabile." },
    { n:"astm-martinetti", fase:"diagnosi", perche:"Martinetto piatto singolo per lo stato di sforzo e doppio per la deformabilità: misura in sito quello che la fessura lascia solo supporre." },
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico per descrivere la fessura e le alterazioni associate in modo standard, non a parole proprie." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per la verifica di sicurezza dell'elemento fessurato." },
    { n:"eurocodici", fase:"progetto", perche:"EC6 per la muratura, EC2 per il calcestruzzo: il calcolo che sostiene o smentisce l'ipotesi di meccanismo." }
  ]},

/* ---- 2 ------------------------------------------------------------------ */
{ fam:"Carichi statici: compressione, taglio, flessione", slug:"carichi-statici", stato:"quadro",
  nota:"Famiglia strutturale: nei registri abbiamo verificato le prove diagnostiche, non il dettaglio di calcolo. Riferimento quadro; il dettaglio va citato dal progetto strutturale.",
  voci:[
    { n:"astm-martinetti", fase:"diagnosi", perche:"Misura lo stato di sforzo reale della muratura compressa, invece di stimarlo dai carichi teorici." },
    { n:"en-12504-2", fase:"diagnosi", perche:"Indice sclerometrico per la stima non distruttiva della resistenza superficiale del calcestruzzo." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente delle verifiche agli stati limite." },
    { n:"eurocodici", fase:"progetto", perche:"EC2/EC3/EC6 per il calcolo dell'elemento secondo il materiale." }
  ]},

/* ---- 3 ------------------------------------------------------------------ */
{ fam:"Spinte ed elementi spingenti", slug:"spinte", stato:"quadro",
  nota:"Famiglia strutturale non ancora censita nel dettaglio: qui solo il quadro cogente.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Classifica il danno prodotto dal cinematismo (fuori piombo, lesioni d'angolo) su scala confrontabile." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente; per gli esistenti in muratura il capitolo 8 e la Circolare 2019." },
    { n:"eurocodici", fase:"progetto", perche:"EC6 muratura ed EC8 per i meccanismi locali di collasso." }
  ]},

/* ---- 4 ------------------------------------------------------------------ */
{ fam:"Cedimenti fondali e movimenti del terreno", slug:"cedimenti", stato:"parziale",
  nota:"Censita la parte di indagine (danno, argille, falda). Il calcolo geotecnico resta al quadro EC7/NTC.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Scala del danno da cedimento: è il riferimento più citato per dire se una lesione è estetica o strutturale." },
    { n:"bre-240", fase:"diagnosi", perche:"Classi di plasticità delle argille rigonfianti (basso <20, medio 20-40, alto 40-60, molto alto >60): serve a legare il cedimento stagionale al terreno reale." },
    { n:"iso-22475-1-2021", fase:"diagnosi", perche:"Metodi di campionamento del terreno e misura della falda: la quota di falda va misurata, non dedotta." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per le verifiche geotecniche." },
    { n:"en-1997-1", fase:"progetto", perche:"EC7 per la progettazione geotecnica, incluse le verifiche di tipo idraulico." }
  ]},

/* ---- 5 ------------------------------------------------------------------ */
{ fam:"Azioni sismiche", slug:"sisma", stato:"quadro",
  nota:"Famiglia strutturale non censita nel dettaglio: le soglie e i coefficienti sismici non sono stati verificati voce per voce nei nostri registri. Qui solo il quadro.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per l'azione sismica e la valutazione della sicurezza degli esistenti (cap. 7 e 8)." },
    { n:"eurocodici", fase:"progetto", perche:"EC8 per la progettazione in zona sismica e i meccanismi locali." },
    { n:"bre-251", fase:"diagnosi", perche:"Utile per graduare il danno rilevato, ma nato per il danno da cedimento: in ambito sismico si usano le schede di rilievo del danno dedicate." }
  ]},

/* ---- 6 ------------------------------------------------------------------ */
{ fam:"Dissesti e deformazioni globali", slug:"dissesti-globali", stato:"quadro",
  nota:"Famiglia strutturale: quadro cogente più la scala del danno.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Gradua il danno d'insieme su scala confrontabile." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per la valutazione della sicurezza." },
    { n:"eurocodici", fase:"progetto", perche:"Calcolo dell'organismo secondo il materiale." }
  ]},

/* ---- 7 ------------------------------------------------------------------ */
{ fam:"Deformazioni termiche e ritiro", slug:"termico-ritiro", stato:"parziale",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Descrive in modo standard il quadro fessurativo superficiale (cavillature, fessure da ritiro)." },
    { n:"uni-10349-1-2016", fase:"diagnosi", perche:"Medie mensili di temperatura: serve per legare l'escursione reale del sito alla deformazione osservata." },
    { n:"en-1992-3-2006", fase:"progetto", perche:"Fissa le aperture di fessura ammissibili quando l'elemento deve restare a tenuta (wk1 0,20 mm fino a 0,05 mm secondo il rapporto hD/h)." },
    { n:"eurocodici", fase:"progetto", perche:"EC2 per il controllo della fessurazione da ritiro e variazione termica." },
    { n:"en-206-2021", fase:"prodotti", perche:"Specifica del calcestruzzo: la composizione governa il ritiro." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206, richiamate dalle NTC." }
  ]},

/* ---- 8 ------------------------------------------------------------------ */
{ fam:"Reazioni espansive e chimiche nel calcestruzzo e nelle murature", slug:"reazioni-espansive", stato:"parziale",
  nota:"Censita la parte analitica (sali, classi di esposizione). Le prove specifiche di reattività alcali-aggregato non sono ancora nei nostri registri.",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico standard per descrivere il quadro visibile (rigonfiamenti, essudati, map cracking)." },
    { n:"en-16455-2014", fase:"diagnosi", perche:"Estrazione e determinazione dei sali solubili: distingue un attacco solfatico da un'efflorescenza banale." },
    { n:"en-772-5-2016", fase:"diagnosi", perche:"Sali solubili attivi nel laterizio: attribuisce al mattone la sorgente del sale." },
    { n:"en-206-2021", fase:"progetto", perche:"Classi di esposizione XA per l'attacco chimico: definisce cosa il calcestruzzo doveva sopportare." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane per l'applicazione della EN 206: è il testo su cui si misura la conformità della miscela in Italia." },
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo fessurato, con le tre funzioni (forze, duttile, rigonfiante)." }
  ]},

/* ---- 9 ------------------------------------------------------------------ */
{ fam:"Patologie da umidità", slug:"umidita", stato:"censita",
  nota:"Famiglia con il perimetro più verificato: risalita, condensa, infiltrazione, interrati. Attenzione alle due norme ritirate segnalate sotto: circolano ancora nelle relazioni.",
  voci:[
    { n:"wta-4-5-99", fase:"diagnosi", perche:"Procedura standardizzata di diagnostica della muratura umida: è l'impianto metodologico che precede qualunque scelta di intervento." },
    { n:"uni-11085-2003", fase:"diagnosi", perche:"Contenuto d'acqua col metodo ponderale: è la misura di riferimento, quella che regge in contraddittorio." },
    { n:"uni-11086-2003", fase:"diagnosi", perche:"Contenuto d'acqua di equilibrio: serve a dire se il valore misurato è un eccesso o la condizione normale del materiale." },
    { n:"en-16682-2017", fase:"diagnosi", perche:"Guida ai metodi di misura dell'umidità nel patrimonio costruito: inquadra quali metodi sono assoluti e quali solo relativi." },
    { n:"uni-11121-2004", fase:"diagnosi", perche:"AVVISO. È il metodo al carburo di calcio, ancora diffusissimo in campo: se la controparte lo cita come norma vigente, non lo è più. Resta un riferimento metodologico storico, e la misura che regge in contraddittorio è quella ponderale della UNI 11085." },
    { n:"bs-6576", fase:"diagnosi", perche:"Procedura britannica di diagnosi della risalita, con la mappatura delle esclusioni differenziali: è il testo che impone di escludere le altre cause prima di dire risalita." },
    { n:"bre-245", fase:"diagnosi", perche:"Diagnosi e trattamento della risalita: richiamata dal CAM 2.3.13 come base documentale." },
    { n:"iso-13788-2013", fase:"diagnosi", perche:"Serve a ESCLUDERE la condensa: fRsi e verifica Glaser dicono se l'umidità viene da dentro invece che da sotto." },
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia dell'involucro: individua le irregolarità termiche e le zone umide, e supera la vecchia EN 13187." },
    { n:"en-16302-2013", fase:"diagnosi", perche:"Tubo di Karsten: misura in sito quanta acqua assorbe la superficie, utile a separare assorbimento di facciata e risalita." },
    { n:"bs-8104", fase:"diagnosi", perche:"Esposizione della parete alla pioggia battente: quantifica la causa quando il sospetto è l'infiltrazione di facciata." },
    { n:"iso-22475-1-2021", fase:"diagnosi", perche:"Misura del livello di falda: la quota di falda va misurata, non dedotta dalla vicinanza del fiume." },
    { n:"iso-5667-serie", fase:"diagnosi", perche:"Campionamento delle acque: rende difendibile il prelievo quando si vuole attribuire l'acqua a una sorgente." },
    { n:"en-1610-2015", fase:"diagnosi", perche:"Prova di tenuta degli scarichi: esclude o conferma la fogna come sorgente." },
    { n:"en-13508-2", fase:"diagnosi", perche:"Codifica dell'ispezione CCTV delle reti di scarico: documenta il difetto trovato in modo standard." },
    { n:"en-806-4", fase:"diagnosi", perche:"Prove di pressione: esclude o conferma la rottura di un impianto in pressione." },
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico per descrivere le alterazioni associate (efflorescenze, distacchi, patina biologica)." },
    { n:"cam-2025", fase:"progetto", perche:"Criterio 2.3.13: negli appalti pubblici il risanamento della risalita deve poggiare su diagnosi documentata (UNI 11085, BRE 245, BS 6576, WTA), non su una scelta di prodotto." },
    { n:"bs-8102-2022", fase:"progetto", perche:"Quando il problema è l'interrato: i tre tipi di protezione (A barriera, B struttura integrale, C intercapedine drenata) e i gradi d'uso 1a, 1b, 2, 3." },
    { n:"din-18533-2026", fase:"progetto", perche:"Classi di sollecitazione idrica (W1-E ... W4-E): dice quale impermeabilizzazione serve secondo l'acqua che c'è davvero." },
    { n:"bs-5250-2021", fase:"progetto", perche:"Gestione integrata dell'umidità: impedisce di risolvere un fronte e spostare il problema su un altro." },
    { n:"din-4108-3-2024", fase:"progetto", perche:"Protezione dall'umidità legata al clima, incluse le solette a contatto col terreno: è il testo tedesco che affianca la verifica igrotermica alla difesa dall'acqua del suolo." },
    { n:"emerisda", fase:"progetto", perche:"Rassegna europea dell'efficacia reale dei metodi contro la risalita: utile per motivare la scelta oltre la promessa commerciale." },
    { n:"nit-252", fase:"progetto", perche:"Nota tecnica belga su diagnosi e famiglie di trattamento della risalita." },
    { n:"en-998-1-2016", fase:"prodotti", perche:"Classifica le malte da intonaco, inclusa la R da risanamento per murature umide e salinizzate." },
    { n:"wta-2-9-20", fase:"prodotti", perche:"Requisiti prestazionali veri dell'intonaco di risanamento: i numeri stanno qui, non nella EN 998-1." },
    { n:"wta-4-10", fase:"esecuzione", perche:"Iniezione della barriera chimica: fissa il criterio di applicabilità al grado di saturazione (95%), che non è il contenuto d'acqua in massa." },
    { n:"wta-4-7-02", fase:"esecuzione", perche:"Taglio meccanico della muratura: è questa la regola del taglio, non la 4-10 (che è l'iniezione)." },
    { n:"uni-11333", fase:"esecuzione", perche:"Qualificazione degli addetti alla posa delle membrane: in capitolato si può pretendere chi posa, non solo cosa si posa." },
    { n:"en-16322-2013", fase:"collaudo", perche:"Proprieta' di asciugatura: da' il metodo per dire se il muro sta davvero asciugando." },
    { n:"albanesi-asciugatura", fase:"collaudo", perche:"Stima del tempo di asciugatura dallo spessore pieno: serve a fissare aspettative realistiche dopo la barriera (non è una norma)." },
    { n:"iicrc-s500", fase:"collaudo", perche:"Prassi per il ripristino dopo danno da acqua: categorie dell'acqua e classi di evaporazione." },
    { n:"astm-d5957", fase:"collaudo", perche:"Collaudo per allagamento delle impermeabilizzazioni orizzontali." },
    { n:"astm-d7877", fase:"collaudo", perche:"Localizzazione elettronica delle perdite: trova il buco invece di cercarlo a demolizioni." }
  ]},

/* ---- 10 ----------------------------------------------------------------- */
{ fam:"Degrado salino", slug:"sali", stato:"censita",
  nota:"Attenzione alla UNI 11087: ritirata dal 2016 ma ancora citata di frequente.",
  voci:[
    { n:"en-16455-2014", fase:"diagnosi", perche:"Estrazione e determinazione di anioni e cationi: è il riferimento vigente per l'analisi dei sali." },
    { n:"uni-11087-2003", fase:"diagnosi", perche:"AVVISO. Resta un riferimento metodologico storico ma non è più vigente: per l'analisi dei sali oggi si cita la EN 16455:2014, che però non la sostituisce formalmente (il ritiro è avvenuto senza sostituzione)." },
    { n:"en-772-5-2016", fase:"diagnosi", perche:"Sali solubili attivi nel laterizio: attribuisce la sorgente del sale al materiale." },
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico delle forme di alterazione: distingue efflorescenza, subefflorescenza, croste, alveolizzazione." },
    { n:"uni-11085-2003", fase:"diagnosi", perche:"Contenuto d'acqua: senza acqua i sali non migrano, e la lettura del carico salino va accoppiata a quella dell'umidità." },
    { n:"wta-4-5-99", fase:"diagnosi", perche:"Diagnostica della muratura: definisce come si preleva e si valuta il carico salino insieme all'umidità." },
    { n:"wta-2-9-20", fase:"progetto", perche:"Sistemi di intonaco di risanamento e soglie WTA di carico sali basso/medio/alto: è il testo che lega la classe di carico alla scelta." },
    { n:"cam-2025", fase:"progetto", perche:"Negli appalti pubblici il criterio 2.3.13 pretende la diagnosi documentata anche quando il quadro è salino." },
    { n:"en-998-1-2016", fase:"prodotti", perche:"Definisce la classe R (risanamento) tra le malte da intonaco." },
    { n:"en-12370-2020", fase:"prodotti", perche:"Prova di resistenza alla cristallizzazione dei sali: qualifica la pietra o l'elemento che si intende reimpiegare." },
    { n:"en-12370-2020", fase:"collaudo", perche:"Serve anche come prova di durabilità su campione, per confrontare due materiali candidati." }
  ]},

/* ---- 11 ----------------------------------------------------------------- */
{ fam:"Degrado materico superficiale (lessico UNI 11182 / Glossario ICOMOS-ISCS)", slug:"degrado-materico", stato:"censita",
  nota:"Qui la norma non prescrive un intervento: fornisce il LESSICO. È esattamente ciò che serve perché due tecnici descrivano la stessa cosa con lo stesso nome.",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"È la norma della famiglia: glossario standardizzato delle forme di alterazione e degrado dei materiali lapidei." },
    { n:"icomos-iscs", fase:"diagnosi", perche:"Glossario internazionale illustrato: complementare alla UNI 11182, utile quando si dialoga fuori dall'Italia o si cerca l'immagine di riscontro." },
    { n:"en-16302-2013", fase:"diagnosi", perche:"Tubo di Karsten: misura quanto la superficie degradata assorbe acqua, cioè quantifica il degrado invece di descriverlo soltanto." },
    { n:"en-16455-2014", fase:"diagnosi", perche:"Quando la forma di degrado è compatibile con i sali, l'analisi dice se il sale c'è davvero e quale." },
    { n:"en-12370-2020", fase:"prodotti", perche:"Resistenza alla cristallizzazione dei sali per la pietra di sostituzione." }
  ]},

/* ---- 12 ----------------------------------------------------------------- */
{ fam:"Biodeterioramento", slug:"biodeteriogeni", stato:"censita",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico per patina biologica, colonizzazione, croste: descrive il visibile in modo standard." },
    { n:"iso-16000-serie", fase:"diagnosi", perche:"Campionamento e conteggio delle muffe nell'aria: 16000-16/-17 per coltura, 16000-20 per la conta microscopica totale (sono cose diverse, non vanno confuse)." },
    { n:"lim-sedlbauer", fase:"diagnosi", perche:"Isopleta LIM e Mould Index: legano temperatura, umidità e tempo alla probabilità reale di crescita, invece di fermarsi al 'c'è muffa'." },
    { n:"who-dampness-2009", fase:"diagnosi", perche:"Linee guida OMS su umidità e muffe: inquadrano il rilievo sanitario del fenomeno." },
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: trova il ponte termico che genera la superficie fredda su cui la muffa cresce." },
    { n:"iso-13788-2013", fase:"progetto", perche:"Verifica fRsi della condensa superficiale: è il calcolo che dice se il rischio muffa è un difetto di progetto e non di gestione." },
    { n:"en-15026-2023", fase:"progetto", perche:"Simulazione igrotermica transitoria quando il metodo Glaser non basta." },
    { n:"en-16790-2016", fase:"progetto", perche:"Gestione integrata dei parassiti (IPM) quando il contesto è conservativo." },
    { n:"en-16798-1-2019", fase:"progetto", perche:"Parametri d'ambiente interno e ricambi: la muffa si combatte anche con la ventilazione, non solo col biocida." },
    { n:"en-14885-2022", fase:"prodotti", perche:"Quadro delle prove da pretendere da un disinfettante chimico secondo il campo d'impiego." },
    { n:"en-15457-15458", fase:"prodotti", perche:"Resistenza del film di pittura a funghi (15457) e alghe (15458)." }
  ]},

/* ---- 13 ----------------------------------------------------------------- */
{ fam:"Degrado del legno", slug:"legno", stato:"parziale",
  nota:"Censiti durabilità e misura dell'umidità. Le norme di classificazione dell'attacco da insetti e le prove sui preservanti non sono ancora nei nostri registri.",
  voci:[
    { n:"en-16682-2017", fase:"diagnosi", perche:"Misura dell'umidità del legno: il legno marcisce sopra una soglia di umidità, quindi la misura viene prima della diagnosi." },
    { n:"en-350-legno", fase:"diagnosi", perche:"Classi di durabilità naturale verso funghi e insetti: dice se quella specie legnosa doveva reggere in quel contesto." },
    { n:"en-16790-2016", fase:"progetto", perche:"Gestione integrata degli infestanti in ambito conservativo." },
    { n:"iso-13788-2013", fase:"progetto", perche:"Il legno degrada dove condensa: la verifica igrotermica individua la causa a monte." }
  ]},

/* ---- 14 ----------------------------------------------------------------- */
{ fam:"Degrado dei metalli", slug:"metalli", stato:"parziale",
  nota:"Censito il vocabolario della corrosione. Le norme di protezione (cicli di verniciatura, zincatura) non sono ancora censite.",
  voci:[
    { n:"iso-8044-2024", fase:"diagnosi", perche:"Vocabolario della corrosione: dare il nome giusto al meccanismo (pitting, fessurante, galvanica) è il primo atto della diagnosi." },
    { n:"eurocodici", fase:"progetto", perche:"EC3 per le strutture in acciaio e la durabilità degli elementi." }
  ]},

/* ---- 15 ----------------------------------------------------------------- */
{ fam:"Degrado di intonaci, finiture e pitture", slug:"intonaci-finiture", stato:"parziale",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico standard di distacchi, scagliature, cavillature, efflorescenze sul rivestimento." },
    { n:"en-16302-2013", fase:"diagnosi", perche:"Tubo di Karsten: misura l'assorbimento della finitura, cioè quanto ha perso la sua funzione." },
    { n:"en-16455-2014", fase:"diagnosi", perche:"Quando il distacco è compatibile col sale, l'analisi dice se il sale c'è." },
    { n:"en-998-1-2016", fase:"prodotti", perche:"Classificazione delle malte da intonaco (GP, LW, CR, OC, R, T): sceglie l'intonaco per la situazione, non per abitudine." },
    { n:"en-15457-15458", fase:"prodotti", perche:"Resistenza del film a funghi e alghe, quando il degrado è biologico." },
    { n:"iso-13788-2013", fase:"progetto", perche:"Il rivestimento si stacca dove condensa: la verifica dice se la sequenza degli strati è sbagliata." }
  ]},

/* ---- 16 ----------------------------------------------------------------- */
{ fam:"Coperture e impermeabilizzazioni", slug:"coperture", stato:"censita",
  nota:"Include l'impermeabilizzazione controterra: nel catalogo gli interrati sono trasversali, qui trovano il loro quadro insieme alle coperture.",
  voci:[
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: individua l'infiltrazione e l'isolante bagnato sotto il manto senza demolire." },
    { n:"bs-5250-2021", fase:"diagnosi", perche:"Gestione dell'umidità: aiuta a distinguere l'infiltrazione dalla condensa sotto il manto." },
    { n:"uni-8178-2019", fase:"progetto", perche:"Progettazione ed esecuzione delle coperture: continue (parte 2) e discontinue (parte 1)." },
    { n:"bs-8102-2022", fase:"progetto", perche:"Per l'interrato: tipi A, B, C e gradi d'uso 1a, 1b, 2, 3. Fissa quale ambiente interno va garantito prima di scegliere il sistema." },
    { n:"din-18533-2026", fase:"progetto", perche:"Classi di sollecitazione idrica W1-E ... W4-E per l'impermeabilizzazione controterra." },
    { n:"en-1992-3-2006", fase:"progetto", perche:"Quando la struttura stessa è la tenuta (vasca bianca): classi di tenuta e aperture di fessura ammissibili." },
    { n:"en-13707-2013", fase:"prodotti", perche:"Specifica delle membrane bituminose armate per coperture (norma armonizzata)." },
    { n:"en-13967", fase:"prodotti", perche:"Fogli flessibili contro l'umidità del terreno, incluso il tipo T." },
    { n:"ead-030378", fase:"prodotti", perche:"Membrane pre-getto: è qui la prova di migrazione laterale (water creep), il vero discrimine tra un manto adeso e uno che separa soltanto." },
    { n:"uni-11333", fase:"esecuzione", perche:"Qualificazione degli addetti alla posa (P2 bituminose, P3 sintetiche): non è un prontuario di dettagli, è chi può posare." },
    { n:"astm-d5957", fase:"collaudo", perche:"Prova di allagamento 24-72 h: il collaudo che dimostra la tenuta prima di coprire." },
    { n:"astm-d7877", fase:"collaudo", perche:"Localizzazione elettronica delle perdite sulla membrana." }
  ]},

/* ---- 17 ----------------------------------------------------------------- */
{ fam:"Solai in laterocemento e calcestruzzo armato", slug:"solai", stato:"parziale",
  voci:[
    { n:"en-12504-2", fase:"diagnosi", perche:"Indice sclerometrico per la resistenza superficiale del calcestruzzo (il pacometro per le armature è BS 1881-204)." },
    { n:"bre-251", fase:"diagnosi", perche:"Gradua il danno fessurativo dell'intradosso su scala confrontabile." },
    { n:"iso-8044-2024", fase:"diagnosi", perche:"Vocabolario della corrosione: nomina correttamente il meccanismo che sta espellendo il copriferro." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente della verifica; il punto 11.2.11 rinvia a EN 206 e UNI 11104 per le classi di esposizione." },
    { n:"eurocodici", fase:"progetto", perche:"EC2 per il calcolo e il controllo della fessurazione." },
    { n:"en-206-2021", fase:"prodotti", perche:"Classi di esposizione (XC carbonatazione, XD/XS cloruri): dicono cosa il calcestruzzo doveva sopportare." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206, richiamate dalle NTC." },
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo: le tre funzioni (trasmissione di forze, duttile, rigonfiante) non sono intercambiabili." }
  ]},

/* ---- 18 ----------------------------------------------------------------- */
{ fam:"Agenti esterni e ambientali", slug:"agenti-esterni", stato:"parziale",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico per croste nere, dilavamento, patine: descrive l'effetto dell'agente sul materiale." },
    { n:"bs-8104", fase:"diagnosi", perche:"Esposizione alla pioggia battente: converte l'esposizione del sito in un dato, non in un'impressione." },
    { n:"uni-10349-1-2016", fase:"diagnosi", perche:"Medie mensili climatiche del sito: lega il degrado osservato al clima reale, non a quello percepito." },
    { n:"en-12370-2020", fase:"prodotti", perche:"Resistenza alla cristallizzazione dei sali per i materiali esposti (compreso l'aerosol marino)." },
    { n:"en-16302-2013", fase:"diagnosi", perche:"Tubo di Karsten: misura quanto la superficie esposta assorbe." }
  ]},

/* ---- 19 ----------------------------------------------------------------- */
{ fam:"Fondazioni speciali e pali", slug:"pali", stato:"quadro",
  nota:"Famiglia geotecnica non censita nel dettaglio: le norme di esecuzione dei pali (serie EN 1536 e affini) non sono ancora nei nostri registri.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per le verifiche geotecniche e strutturali delle fondazioni profonde." },
    { n:"en-1997-1", fase:"progetto", perche:"EC7 per la progettazione geotecnica." },
    { n:"iso-22475-1-2021", fase:"diagnosi", perche:"Campionamento del terreno e misura della falda a monte del progetto." }
  ]},

/* ---- 20 ----------------------------------------------------------------- */
{ fam:"Strutture in acciaio", slug:"acciaio", stato:"quadro",
  voci:[
    { n:"iso-8044-2024", fase:"diagnosi", perche:"Vocabolario della corrosione: distingue i meccanismi (uniforme, per vaiolatura, galvanica, fessurante)." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente." },
    { n:"eurocodici", fase:"progetto", perche:"EC3 per il calcolo delle strutture in acciaio, incluse fatica e durabilità." }
  ]},

/* ---- 21 ----------------------------------------------------------------- */
{ fam:"Calcestruzzo armato precompresso", slug:"precompresso", stato:"quadro",
  nota:"Famiglia non censita nel dettaglio: le norme sui trefoli, le guaine e le iniezioni dei cavi post-tesi non sono nei nostri registri.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente." },
    { n:"eurocodici", fase:"progetto", perche:"EC2 per il calcolo delle strutture precompresse." },
    { n:"en-206-2021", fase:"prodotti", perche:"Specifica del calcestruzzo e classi di esposizione." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206." }
  ]},

/* ---- 22 ----------------------------------------------------------------- */
{ fam:"Pilastri snelli e instabilità", slug:"instabilita", stato:"quadro",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per le verifiche di stabilità." },
    { n:"eurocodici", fase:"progetto", perche:"EC2/EC3 per gli effetti del secondo ordine." },
    { n:"en-12504-2", fase:"diagnosi", perche:"Stima non distruttiva della resistenza superficiale del calcestruzzo dell'elemento." }
  ]},

/* ---- 23 ----------------------------------------------------------------- */
{ fam:"Facciate ventilate e rivestimenti aggrappati", slug:"facciate-ventilate", stato:"da-censire",
  nota:"Nessuna norma verificata nei nostri registri per questa famiglia (ancoraggi, sottostrutture, EOTA di sistema). Da censire: si dichiara il vuoto, non si riempie a sensazione.",
  voci:[
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: rileva i distacchi e le anomalie della camera ventilata, ma NON copre il quadro normativo della famiglia." },
    { n:"bs-8104", fase:"diagnosi", perche:"Esposizione alla pioggia battente della facciata: dato utile, ma parziale rispetto alla famiglia." }
  ]},

/* ---- 24 ----------------------------------------------------------------- */
{ fam:"Intonaci armati e cappotti termici", slug:"cappotti", stato:"parziale",
  nota:"Censita la parte igrotermica (che è la causa di gran parte dei difetti). Le norme di sistema ETICS (EAD/ETA, rasature, tasselli) non sono ancora censite.",
  voci:[
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: rende visibili i tasselli, i giunti aperti e i distacchi del sistema." },
    { n:"iso-13788-2013", fase:"progetto", perche:"Verifica di condensa interstiziale: è qui che si vede se l'isolamento è stato messo dal lato sbagliato." },
    { n:"dm-28-10-2025", fase:"progetto", perche:"Requisiti minimi: All.1 punto 2.3 codifica la verifica di condensazione (nessun residuo a fine ciclo annuale) e concede la deroga di 10 cm alle altezze per l'isolamento dall'interno in ristrutturazione." },
    { n:"en-15026-2023", fase:"progetto", perche:"Simulazione igrotermica transitoria quando Glaser non basta (isolamento interno, murature massive)." },
    { n:"wta-6-2", fase:"progetto", perche:"Simulazione igrotermica accoppiata (calore e umidita in transitorio): e il riferimento della VERIFICA di condensazione del pacchetto, non una norma di prodotto del cappotto. Serve quando la scelta di isolamento va difesa con la simulazione oltre il metodo di Glaser." },
    { n:"uni-10351-2021", fase:"progetto", perche:"Valori di progetto di lambda e mu dei materiali: la verifica vale quanto i dati che le si danno in pasto." },
    { n:"uni-10349-1-2016", fase:"progetto", perche:"Dati climatici mensili del sito per la verifica su 12 mesi." },
    { n:"iso-6946-2018", fase:"progetto", perche:"Calcolo di resistenza termica e trasmittanza del pacchetto." }
  ]},

/* ---- 25 ----------------------------------------------------------------- */
{ fam:"Manti ceramici e di pietra", slug:"manti-ceramici", stato:"da-censire",
  nota:"Nessuna norma verificata nei registri per posa e collanti (serie EN 12004, EN 14411 e affini). Da censire.",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico delle alterazioni della pietra, se il manto è lapideo." },
    { n:"en-12370-2020", fase:"prodotti", perche:"Resistenza alla cristallizzazione dei sali della pietra impiegata." }
  ]},

/* ---- 26 ----------------------------------------------------------------- */
{ fam:"Pavimentazioni, sottofondi e vespai", slug:"vespai", stato:"censita",
  nota:"Il vespaio è un mosaico comunale, non una soglia nazionale: solo FVG, Lombardia (dove recepito) e Sicilia hanno un numero regionale. Attenzione al DM 5/7/1975, citato di continuo ma che il vespaio non lo nomina.",
  voci:[
    { n:"dm-5-7-1975", fase:"progetto", perche:"AVVISO: è la fonte più citata a torto. Ha 9 articoli e NON nomina il vespaio. La prescrizione storica sta nelle Istruzioni ministeriali 20 giugno 1896 (artt. 57 e 61) e oggi passa per il regolamento edilizio e d'igiene comunale." },
    { n:"dpr-380-2001", fase:"progetto", perche:"Rinvia ai regolamenti edilizi e d'igiene comunali: è lì che va cercata la soglia cogente del vespaio." },
    { n:"lr-fvg-44-1985", fase:"progetto", perche:"Friuli-Venezia Giulia: intercapedine minima 20 cm adeguatamente aerata, calpestio 15 cm sopra terreno, impermeabilizzazione 80 cm. Nessun rapporto numerico di aperture." },
    { n:"rli-milano", fase:"progetto", perche:"Lombardia (dove recepito): 1/100 della superficie con grigliati a pavimento, riducibile a 1/200 con ventilazione perimetrale a finestrelle. Il 1/200 è testo normativo, non prassi da blog." },
    { n:"dprs-sicilia-2022", fase:"progetto", perche:"Sicilia: vespaio 0,50 m, riducibile a 0,25 m con aerazione 1/50 (griglie orizzontali) o 1/100 (verticali), per l'agibilità dei seminterrati." },
    { n:"arpat-radon-vespaio", fase:"progetto", perche:"Raccomandazione ARPAT: almeno 1500 mm2 per metro di muro perimetrale in chiave di mitigazione radon. È consiglio tecnico, non norma vincolante." },
    { n:"dlgs-101-2020", fase:"diagnosi", perche:"Il vespaio è anche difesa dal radon: i livelli di riferimento (300 e 200 Bq/m3) si misurano nell'ambiente abitato, non nel vespaio." },
    { n:"iso-13370-2018", fase:"progetto", perche:"Scambio termico col terreno (punto 7.2 e App. G). ATTENZIONE: è termica, NON è la norma dei drenaggi né dell'aerazione, dove viene citata a torto." },
    { n:"iso-13788-2013", fase:"progetto", perche:"Punto di rugiada nel vespaio: la ventilazione può portare dentro aria che condensa." },
    { n:"uni-11085-2003", fase:"diagnosi", perche:"Contenuto d'acqua del sottofondo o del massetto prima della posa del rivestimento." }
  ]},

/* ---- 27 ----------------------------------------------------------------- */
{ fam:"Balconi e aggetti", slug:"balconi", stato:"da-censire",
  nota:"Nessuna norma di famiglia verificata nei registri (impermeabilizzazione di balconi, soglie, parapetti). Da censire.",
  voci:[
    { n:"iso-8044-2024", fase:"diagnosi", perche:"Vocabolario della corrosione dell'armatura del balcone (il meccanismo tipico di espulsione del copriferro)." },
    { n:"en-206-2021", fase:"prodotti", perche:"Classi di esposizione dell'elemento esterno (XC4, XF): dicono cosa il calcestruzzo doveva sopportare." },
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo, se il quadro è fessurativo." }
  ]},

/* ---- 28 ----------------------------------------------------------------- */
{ fam:"Serramenti e infissi", slug:"serramenti", stato:"parziale",
  voci:[
    { n:"en-14351-1-2016", fase:"prodotti", perche:"Norma di prodotto: tenuta all'acqua, permeabilità all'aria, resistenza al vento sono le prestazioni dichiarate, quindi esigibili." },
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: rende visibile lo spiffero e il ponte termico del controtelaio." },
    { n:"iso-13788-2013", fase:"diagnosi", perche:"Verifica fRsi sul nodo: la condensa sul serramento è spesso un difetto di posa del nodo, non del serramento." },
    { n:"iso-717-serie", fase:"diagnosi", perche:"Indici di valutazione dell'isolamento acustico, quando il difetto lamentato è il rumore." },
    { n:"iso-16283-serie", fase:"collaudo", perche:"Misura in opera dell'isolamento di facciata (parte 3): il valore di laboratorio non è il valore in opera." }
  ]},

/* ---- 29 ----------------------------------------------------------------- */
{ fam:"Canne fumarie e camini", slug:"canne-fumarie", stato:"parziale",
  nota:"Censita la parte gas/ventilazione. Le norme di prodotto dei camini (serie EN 1443, EN 13384 per il dimensionamento) non sono ancora nei registri.",
  voci:[
    { n:"uni-7129-2015", fase:"progetto", perche:"Impianti a gas per uso domestico: parte 2 ventilazione e aerazione dei locali, parte 3 evacuazione dei prodotti della combustione." },
    { n:"iso-16000-serie", fase:"diagnosi", perche:"Misura degli inquinanti dell'aria interna, quando si sospetta un reflusso dei fumi." },
    { n:"en-16798-1-2019", fase:"progetto", perche:"Parametri d'ambiente interno e portate d'aria del locale." }
  ]},

/* ---- 30 ----------------------------------------------------------------- */
{ fam:"Giunti strutturali e di dilatazione", slug:"giunti", stato:"parziale",
  voci:[
    { n:"iso-11600-2011", fase:"prodotti", perche:"Classificazione dei sigillanti (es. tipo F classe 25LM): il giunto va sigillato con la classe di movimento giusta. La 'classe BG' non esiste." },
    { n:"astm-c920", fase:"prodotti", perche:"Specifica dei sigillanti elastomerici per giunti." },
    { n:"en-1992-3-2006", fase:"progetto", perche:"Quando il giunto deve garantire la tenuta ai liquidi: classi di tenuta e limiti di apertura." },
    { n:"eurocodici", fase:"progetto", perche:"EC2 per la posizione e il dimensionamento dei giunti di dilatazione." }
  ]},

/* ---- 31 ----------------------------------------------------------------- */
{ fam:"Murature storiche e affreschi", slug:"murature-storiche", stato:"parziale",
  nota:"Ben coperta sul versante diagnostico e microclimatico (è il dominio dei beni culturali, dove le UNI che usiamo sono nate). Il versante strutturale resta al quadro.",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"È la norma nata per questo: lessico delle forme di alterazione dei materiali lapidei naturali e artificiali." },
    { n:"icomos-iscs", fase:"diagnosi", perche:"Glossario internazionale illustrato del degrado della pietra." },
    { n:"wta-4-5-99", fase:"diagnosi", perche:"Diagnostica della muratura umida come atto preliminare al progetto di risanamento." },
    { n:"uni-11085-2003", fase:"diagnosi", perche:"Contenuto d'acqua col metodo ponderale, nel suo campo di applicazione nativo (beni culturali)." },
    { n:"en-16455-2014", fase:"diagnosi", perche:"Sali solubili: sull'affresco il sale è il nemico principale." },
    { n:"en-16682-2017", fase:"diagnosi", perche:"Metodi di misura dell'umidità nel patrimonio costruito: distingue metodi assoluti e relativi." },
    { n:"uni-10829-1999", fase:"progetto", perche:"Condizioni ambientali di conservazione: temperatura e umidità relativa per i beni di interesse storico." },
    { n:"en-15757-2010", fase:"progetto", perche:"Fasce di T e UR ammissibili per i materiali igroscopici: è il testo che impedisce di imporre a un affresco il clima di un ufficio." },
    { n:"en-16242-2013", fase:"diagnosi", perche:"Misura dell'umidità dell'aria per la conservazione." },
    { n:"ashrae-musei", fase:"progetto", perche:"Classi di controllo AA/A/B/C/D (AA la più stretta): graduano il rischio ammesso." },
    { n:"en-16790-2016", fase:"progetto", perche:"Gestione integrata dei parassiti in ambito conservativo." },
    { n:"astm-martinetti", fase:"diagnosi", perche:"Martinetti piatti sulla muratura storica: stato di sforzo e deformabilità senza distruggere." },
    { n:"ntc-2018", fase:"progetto", perche:"Cap. 8 (costruzioni esistenti) e Circolare 2019 per la valutazione della sicurezza." }
  ]},

/* ---- 32 ----------------------------------------------------------------- */
{ fam:"Rinforzi e consolidamenti", slug:"rinforzi", stato:"parziale",
  nota:"Censita l'iniezione del calcestruzzo. I materiali compositi (FRP/FRCM, Linea Guida CSLLPP e CNR-DT) non sono ancora nei registri.",
  voci:[
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo: le tre funzioni (trasmissione di forze, duttile, rigonfiante) rispondono a esigenze diverse e non sono intercambiabili." },
    { n:"ntc-2018", fase:"progetto", perche:"Cap. 8: la valutazione della sicurezza precede e giustifica il rinforzo." },
    { n:"eurocodici", fase:"progetto", perche:"Calcolo dell'elemento rinforzato secondo il materiale." },
    { n:"en-12504-2", fase:"diagnosi", perche:"Stima della resistenza superficiale del supporto su cui il rinforzo dovrebbe aderire." }
  ]},

/* ---- 33 ----------------------------------------------------------------- */
{ fam:"Strutture e opere speciali", slug:"opere-speciali", stato:"quadro",
  nota:"Famiglia eterogenea non censita: qui solo il quadro cogente.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente." },
    { n:"eurocodici", fase:"progetto", perche:"Parte pertinente secondo il tipo di opera." }
  ]},

/* ---- 34 ----------------------------------------------------------------- */
{ fam:"Difetti di esecuzione e posa (workmanship)", slug:"workmanship", stato:"parziale",
  nota:"Famiglia trasversale: la norma qui serve soprattutto a dire chi può posare e cosa si pretende in capitolato.",
  voci:[
    { n:"uni-11333", fase:"esecuzione", perche:"Qualificazione degli addetti alla posa delle membrane (P2 bituminose, P3 sintetiche): il difetto di posa si previene pretendendo il posatore qualificato." },
    { n:"en-206-2021", fase:"prodotti", perche:"Specifica, produzione e conformità del calcestruzzo: molti difetti di getto sono difetti di conformità." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206." },
    { n:"astm-d5957", fase:"collaudo", perche:"Prova di allagamento: il collaudo che intercetta il difetto di posa prima che venga coperto." },
    { n:"astm-d7877", fase:"collaudo", perche:"Localizzazione elettronica delle perdite sulla membrana posata." }
  ]},

/* ---- 35 ----------------------------------------------------------------- */
{ fam:"Qualità dell'aria interna e gas dal suolo", slug:"iaq", stato:"censita",
  nota:"Attenzione alla UNI 10339: ritirata dal 2024 ma ancora citata come se fosse la norma delle portate.",
  voci:[
    { n:"dlgs-101-2020", fase:"diagnosi", perche:"Art. 12: livelli di riferimento 300 Bq/m3 (esistenti e luoghi di lavoro) e 200 Bq/m3 (abitazioni costruite dopo il 31/12/2024). Livello di riferimento non vuol dire limite." },
    { n:"iso-11665-serie", fase:"diagnosi", perche:"Metodi di misura del radon: ogni parte corrisponde a uno strumento diverso, e abbinare la parte sbagliata è un errore frequente." },
    { n:"iso-16000-serie", fase:"diagnosi", perche:"Campionamento e analisi di COV, aldeidi e muffe: la parte 6 è adozione ISO diretta (senza EN)." },
    { n:"who-dampness-2009", fase:"diagnosi", perche:"Linee guida OMS su umidità e muffe indoor." },
    { n:"en-16798-1-2019", fase:"progetto", perche:"Parametri d'ambiente interno e categorie di qualità dell'aria: è il riferimento che ha preso il posto della UNI 10339." },
    { n:"en-16798-3-2025", fase:"progetto", perche:"Requisiti dei sistemi di ventilazione degli edifici non residenziali." },
    { n:"uni-10339-1995", fase:"progetto", perche:"AVVISO. Era la base storica delle portate d'aria e la si trova ancora citata in progetti e relazioni: quel riferimento non regge più, il posto lo ha preso la UNI EN 16798-1/-3." },
    { n:"pnar-2024", fase:"progetto", perche:"Piano Nazionale d'Azione per il Radon: indirizzi tecnici, non obblighi tecnici." },
    { n:"cam-2025", fase:"progetto", perche:"Criterio 2.3.11: negli appalti pubblici la prevenzione radon (obiettivo 200 Bq/m3) vale a prescindere dalla zona, anche in ristrutturazione a contatto col terreno." },
    { n:"ansi-aarst", fase:"progetto", perche:"Buona pratica USA sulla mitigazione (nessuna norma UNI/EN/ISO copre le TECNICHE: solo la misura). CCAH par. 601 fissa le geometrie di scarico." },
    { n:"iso-16890-1-2017", fase:"prodotti", perche:"Classificazione dei filtri per efficienza ePM1/ePM2,5/ePM10. Attenzione: EN 16890 senza ISO sono i materassi per culle." },
    { n:"astm-c920", fase:"prodotti", perche:"Sigillanti elastomerici per chiudere le vie d'ingresso del gas dal suolo." },
    { n:"iso-11600-2011", fase:"prodotti", perche:"Classificazione dei sigillanti per giunti in edilizia." },
    { n:"ansi-aarst", fase:"esecuzione", perche:"Regole di esecuzione della depressurizzazione del suolo e degli scarichi." },
    { n:"en-12599-2012", fase:"collaudo", perche:"Prove e misure di consegna degli impianti di ventilazione: il progetto va verificato in opera." },
    { n:"dlgs-101-2020", fase:"collaudo", perche:"La verifica dell'efficacia si fa con la misura della concentrazione media annua, non con la dichiarazione dell'installatore." }
  ]},

/* ---- 36 ----------------------------------------------------------------- */
{ fam:"Degrado e difetti prestazionali acustici", slug:"acustica", stato:"censita",
  nota:"Il valore di laboratorio non è il valore in opera: la trasmissione laterale peggiora di alcuni dB. Attenzione alla UNI 11444, ritirata nel 2025.",
  voci:[
    { n:"iso-16283-serie", fase:"diagnosi", perche:"Misura in opera dell'isolamento: aereo (-1), calpestio (-2), facciata (-3). È la misura che fa fede nel contenzioso, non la scheda del prodotto." },
    { n:"iso-717-serie", fase:"diagnosi", perche:"Indici di valutazione (Rw, D2m,nT,w, Ln,w) e termini di adattamento spettrale C e Ctr." },
    { n:"iso-3382-2", fase:"diagnosi", perche:"Misura del tempo di riverberazione negli ambienti ordinari." },
    { n:"dpcm-5-12-1997", fase:"progetto", perche:"Requisiti acustici passivi cogenti per categoria d'uso. Nota: la Tab.B e l'Allegato A si contraddicono sul LAeq (35 vs 25): in perizia si usa 25 cautelativo dichiarando entrambi." },
    { n:"legge-447-1995", fase:"progetto", perche:"Legge quadro: istituisce il Tecnico Competente in Acustica e demanda i requisiti passivi ai DPCM." },
    { n:"uni-11367-2023", fase:"progetto", perche:"Classificazione acustica in quattro classi. I valori numerici della revisione 2023 non sono verificabili da fonti gratuite: per uso peritale stretto serve il testo UNI ufficiale." },
    { n:"uni-11444-2012", fase:"progetto", perche:"AVVISO. Erano le linee guida applicative della classificazione acustica: i criteri sono stati assorbiti nella UNI 11367:2023, quindi oggi si cita quella e non più questa." },
    { n:"uni-11532-2-2020", fase:"progetto", perche:"Acustica interna delle scuole: riverbero, STI, C50, rumore impianti. Richiamata dai CAM." },
    { n:"iso-12354-serie", fase:"progetto", perche:"Previsione delle prestazioni dai dati dei prodotti, con la trasmissione laterale: è il calcolo che spiega perché in opera si perdono dB." },
    { n:"cam-2025", fase:"progetto", perche:"Negli appalti pubblici i CAM richiedono almeno la classe II UNI 11367 per gli elementi e la UNI 11532-2 per le scuole." },
    { n:"iso-16283-serie", fase:"collaudo", perche:"Il collaudo si fa in opera con queste procedure: è il momento in cui il valore dichiarato viene messo alla prova." }
  ]},

/* ---- 37 ----------------------------------------------------------------- */
{ fam:"Danno da incendio (valutazione post-fuoco)", slug:"incendio", stato:"da-censire",
  nota:"Nessuna norma verificata nei nostri registri per questa famiglia (Eurocodici parte fuoco, DM prevenzione incendi, valutazione del danno post-fuoco). Da censire prima di usare questa scheda in perizia.",
  voci:[
    { n:"en-12504-2", fase:"diagnosi", perche:"Stima non distruttiva della resistenza superficiale residua del calcestruzzo. Serve, ma NON copre la valutazione post-fuoco, che ha metodi propri." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per la verifica della sicurezza dopo il danno." }
  ]},

/* ---- 38 ----------------------------------------------------------------- */
{ fam:"Sistemi fotovoltaici integrati (BIPV)", slug:"bipv", stato:"da-censire",
  nota:"Nessuna norma verificata nei registri (serie CEI EN 61215/61730, EN 50583 per il BIPV). Da censire.",
  voci:[] },

/* ---- 39 ----------------------------------------------------------------- */
{ fam:"Pannelli sandwich e sistemi a strati compositi", slug:"sandwich", stato:"da-censire",
  nota:"Nessuna norma di prodotto verificata nei registri (EN 14509 e affini). Da censire.",
  voci:[
    { n:"iso-13788-2013", fase:"progetto", perche:"Verifica di condensa interstiziale nel pacchetto: è la causa tipica del degrado dell'anima. Copre la fisica, non il quadro di prodotto." },
    { n:"iso-6781-1-2023", fase:"diagnosi", perche:"Termografia: rende visibile l'anima bagnata o il giunto aperto." }
  ]},

/* ---- 40 ----------------------------------------------------------------- */
{ fam:"Sistemi a secco (cartongesso e orditure metalliche)", slug:"sistemi-secco", stato:"da-censire",
  nota:"Nessuna norma di sistema verificata nei registri (EN 520, EN 13964, UNI 11424 posa). Da censire.",
  voci:[
    { n:"iso-717-serie", fase:"diagnosi", perche:"Indici di isolamento acustico, quando il difetto lamentato è il rumore attraverso la parete a secco." },
    { n:"iso-16283-serie", fase:"collaudo", perche:"Misura in opera: sui sistemi a secco il divario laboratorio-opera è il cuore del contenzioso." }
  ]},

/* ---- 41 ----------------------------------------------------------------- */
{ fam:"Fessurazioni e distacchi di tramezzi e tamponamenti", slug:"tramezzi", stato:"parziale",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Gradua la fessura del tramezzo su scala confrontabile (spesso è danno estetico, e dirlo con un riferimento vale più che dirlo a parole)." },
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Lessico per descrivere il quadro (cavillature, distacchi del rivestimento)." },
    { n:"eurocodici", fase:"progetto", perche:"EC6 per gli elementi non strutturali di muratura ed EC8 per il loro comportamento sismico." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente, incluse le verifiche degli elementi non strutturali." }
  ]},

/* ---- 42 ----------------------------------------------------------------- */
{ fam:"Guasti e degradi delle reti impiantistiche con effetti sull'edificio", slug:"impianti", stato:"parziale",
  voci:[
    { n:"en-1610-2015", fase:"diagnosi", perche:"Prova di tenuta delle condotte di scarico: accerta la perdita invece di ipotizzarla." },
    { n:"en-13508-2", fase:"diagnosi", perche:"Codifica standard dell'ispezione CCTV: documenta il difetto in modo confrontabile." },
    { n:"en-806-4", fase:"diagnosi", perche:"Prove di pressione: accertano la rottura dell'impianto in pressione." },
    { n:"iso-5667-serie", fase:"diagnosi", perche:"Campionamento delle acque: rende difendibile il prelievo in contraddittorio." },
    { n:"uni-7129-2015", fase:"progetto", perche:"Impianti a gas domestici: ventilazione dei locali ed evacuazione dei prodotti della combustione." },
    { n:"iicrc-s500", fase:"collaudo", perche:"Prassi per il ripristino dopo il danno da acqua: categoria dell'acqua e classe di evaporazione." }
  ]}

];
