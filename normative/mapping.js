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
    { n:"eurocodici", fase:"progetto", perche:"EC6 per la muratura, EC2 per il calcestruzzo: il calcolo che sostiene o smentisce l'ipotesi di meccanismo." },
    { n:"uni-9916-2014", fase:"diagnosi", perche:"È la domanda più frequente in perizia su un quadro fessurativo: le fessure le ha fatte il cantiere vicino, il traffico o la ferrovia? La norma assume la velocità di picco come parametro di riferimento e tratta proprio il danno di soglia (fessure, distacchi di intonaco), non il danno strutturale o sismico." },
    { n:"iso-4866-2010", fase:"diagnosi", perche:"È il riferimento da cui discendono UNI 9916 e DIN 4150-3, e copre esplicitamente le strutture di valore archeologico e storico, caso in cui le soglie per gli edifici correnti non valgono e vanno abbassate. Serve per classificare l'edificio e giustificare strumentazione e catena di misura prima di applicare qualunque soglia: applicare i valori guida a un edificio storico senza averlo classificato è l'errore tipico." },
    { n:"bre-digest-361-2014-revision-why-do-buil", fase:"diagnosi", perche:"Il registro ha il Digest 251, che classifica la gravità del danno ma solo con riferimento ai movimenti di fondazione: manca il documento che risponde alla domanda a monte, cioè da cosa nasce questa fessura. Il 361 copre ritiro (indicato come la forma più comune di fessurazione negli edifici), dilatazione termica, solfati, reazione alcali-silice e corrosione delle armature con espansione quadrupla del volume: sono le cause che il 251 non tratta e che vanno escluse prima di attribuire il quadro a un cedimento." },
    { n:"bre-digest-343-1989", fase:"diagnosi", perche:"Classificare una fessura con il Digest 251 non dice se è attiva o quiescente, che è il vero quesito peritale: serve il protocollo di monitoraggio. Il 343 fissa come posizionare i capisaldi, quale precisione attendersi dai fessurimetri e come costruire e leggere la serie temporale, cioè la prova su cui regge o cade la tesi di un dissesto in atto." }
  ]},

/* ---- 2 ------------------------------------------------------------------ */
{ fam:"Carichi statici: compressione, taglio, flessione", slug:"carichi-statici", stato:"parziale",
  nota:"Censita la diagnostica sull'esistente (Circolare 7/2019 con livelli di conoscenza e fattori di confidenza, prove sul calcestruzzo in opera). Il dettaglio di calcolo resta al quadro NTC/Eurocodici.",
  voci:[
    { n:"astm-martinetti", fase:"diagnosi", perche:"Misura lo stato di sforzo reale della muratura compressa, invece di stimarlo dai carichi teorici." },
    { n:"en-12504-2", fase:"diagnosi", perche:"Indice sclerometrico per la stima non distruttiva della resistenza superficiale del calcestruzzo." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente delle verifiche agli stati limite." },
    { n:"eurocodici", fase:"progetto", perche:"EC2/EC3/EC6 per il calcolo dell'elemento secondo il materiale." },
    { n:"circolare-21-01-2019-n-7-c-s-ll-pp", fase:"diagnosi", perche:"Il registro cita le NTC 2018 ma non le istruzioni che le rendono applicabili a un edificio già fessurato. Il §C8.5 fissa i livelli di conoscenza LC1-LC3 e i fattori di confidenza FC, e la Tabella C8.5.I dà i parametri meccanici delle murature esistenti." },
    { n:"uni-en-13791-2019", fase:"diagnosi", perche:"Il registro collega la UNI EN 12504-2 (sclerometro) alle verifiche statiche, ma lo sclerometro restituisce solo un indice di rimbalzo: la 13791 è la norma che stabilisce se e come quell'indice diventa una resistenza, imponendo la taratura su carote." },
    { n:"uni-en-12504-1-2021", fase:"diagnosi", perche:"La UNI EN 12504-1:2021 è il metodo diretto per prelievo, esame e prova di compressione delle carote: è la prova di riferimento per la resistenza reale in opera del calcestruzzo, su cui si tarano i metodi indiretti (sclerometro UNI EN 12504-2, ultrasuoni UNI EN 12504-4) e a cui si ancora la valutazione secondo UNI EN 13791." }
  ]},

/* ---- 3 ------------------------------------------------------------------ */
{ fam:"Spinte ed elementi spingenti", slug:"spinte", stato:"quadro",
  nota:"Famiglia strutturale non ancora censita nel dettaglio: qui solo il quadro cogente.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Classifica il danno prodotto dal cinematismo (fuori piombo, lesioni d'angolo) su scala confrontabile." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente; per gli esistenti in muratura il capitolo 8 e la Circolare 2019." },
    { n:"eurocodici", fase:"progetto", perche:"EC6 muratura ed EC8 per i meccanismi locali di collasso." },
    { n:"direttiva-p-c-m-9-02-2011", fase:"diagnosi", perche:"È il documento che codifica l'analisi dei meccanismi locali di collasso: ribaltamento della facciata, spinta di archi e volte, spinta della copertura. In un edificio storico il quadro fessurativo si legge come attivazione di un cinematismo, e questa è la fonte che lega la singola lesione al meccanismo e giustifica i presidi (catene, tiranti, cerchiature)." },
    { n:"uni-11119-2004", fase:"diagnosi", perche:"Le coperture spingenti (puntoni senza catena, capriate manomesse, catene rimosse) sono quasi sempre lignee, e prima di attribuire la spinta allo schema statico va escluso che il degrado dell'elemento o del suo appoggio ne sia la causa o la concausa." }
  ]},

/* ---- 4 ------------------------------------------------------------------ */
{ fam:"Cedimenti fondali e movimenti del terreno", slug:"cedimenti", stato:"parziale",
  nota:"Censita la parte di indagine (danno, argille, falda). Il calcolo geotecnico resta al quadro EC7/NTC.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Scala del danno da cedimento: è il riferimento più citato per dire se una lesione è estetica o strutturale." },
    { n:"bre-240", fase:"diagnosi", perche:"Classi di plasticità delle argille rigonfianti (basso <20, medio 20-40, alto 40-60, molto alto >60): serve a legare il cedimento stagionale al terreno reale." },
    { n:"iso-22475-1-2021", fase:"diagnosi", perche:"Metodi di campionamento del terreno e misura della falda: la quota di falda va misurata, non dedotta." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per le verifiche geotecniche." },
    { n:"en-1997-1", fase:"progetto", perche:"EC7 per la progettazione geotecnica, incluse le verifiche di tipo idraulico." },
    { n:"uni-en-1997-2-2007", fase:"diagnosi", perche:"Il registro ha la Parte 1 (regole di progetto) ma non la Parte 2, che e quella che dice come si indaga il sottosuolo. In una perizia su cedimenti il punto debole e quasi sempre la campagna di indagine: numero e profondita dei sondaggi, scelta delle prove, passaggio dal valore misurato al valore caratteristico." },
    { n:"circolare-21-01-2019-n-7-c-s-ll-pp", fase:"progetto", perche:"Le NTC 2018 sono rese applicabili e vigenti dal DM 17/01/2018 (in vigore dal 22/03/2018), non dalla Circolare. La Circolare 7/2019 non le \"rende applicabili\": ne fornisce le istruzioni esplicative per un'applicazione uniforme. Il suo Capitolo C6 commenta la progettazione geotecnica del Cap." },
    { n:"bre-digest-343-1989", fase:"diagnosi", perche:"Il registro ha gia il BRE Digest 251, che classifica il DANNO in categorie 0-5 sulla base dell'ampiezza delle fessure, ma non ha il documento che dice COME si misura quell'ampiezza e come si dimostra se il quadro fessurativo e attivo o quiescente." },
    { n:"bre-digest-344-1995", fase:"diagnosi", perche:"Completa il 343: le fessure sono il sintomo, il cedimento e il fuori piombo sono la grandezza che qualifica il meccanismo. Serve per distinguere cedimento (subsidence) da sollevamento (heave), che e la discriminante diagnostica su terreni argillosi e che cambia radicalmente l'intervento." },
    { n:"uni-en-iso-18674-3-2020", fase:"diagnosi", perche:"Quando il movimento del terreno ha una componente orizzontale (frana lenta, scavo adiacente, spinta su fondazioni) l'inclinometro e lo strumento che dimostra se il terreno si sta ancora muovendo e a che quota e la superficie di scorrimento." },
    { n:"uni-9916-2014", fase:"diagnosi", perche:"UNI 9916:2014 e la norma italiana per misurare e valutare gli effetti delle vibrazioni sugli edifici. In un contenzioso su fessure attribuite a cedimento fondale e lo strumento della fase diagnostica per escludere le vibrazioni (cantiere, traffico, infissione di pali) come causa del cosiddetto danno soglia (fessure, cavillature, distacchi di intonaco)." },
    { n:"uni-en-iso-22476-1-2023", fase:"diagnosi", perche:"La CPT/CPTU e la prova in sito piu usata in Italia per ricostruire la stratigrafia e stimare i parametri di deformabilita da cui si calcolano i cedimenti. Il registro copre il campionamento (UNI EN ISO 22475-1) ma non le prove penetrometriche: manca l'anello che collega il sondaggio al numero usato nel calcolo del cedimento." },
    { n:"bre-digest-298-1999", fase:"diagnosi", perche:"Il registro ha gia il BRE Digest 240 (edifici bassi su argille ritirabili) ma non il documento specifico sull'innesco piu frequente su questi terreni: l'assorbimento idrico delle radici (ritiro, cedimento) e il recupero di umidita dopo l'abbattimento (rigonfiamento, sollevamento)." }
  ]},

/* ---- 5 ------------------------------------------------------------------ */
{ fam:"Azioni sismiche", slug:"sisma", stato:"parziale",
  nota:"Censiti i riferimenti di rilievo e valutazione del danno sismico (scala EMS-98, microzonazione, schede di valutazione). Le soglie e i coefficienti di calcolo restano al quadro NTC/EC8.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per l'azione sismica e la valutazione della sicurezza degli esistenti (cap. 7 e 8)." },
    { n:"eurocodici", fase:"progetto", perche:"EC8 per la progettazione in zona sismica e i meccanismi locali." },
    { n:"bre-251", fase:"diagnosi", perche:"Utile per graduare il danno rilevato, ma nato per il danno da cedimento: in ambito sismico si usano le schede di rilievo del danno dedicate." },
    { n:"circolare-21-gennaio-2019-n-7-c-s-ll-pp", fase:"diagnosi", perche:"Le NTC 2018 al cap. 8 enunciano il principio, ma il metodo operativo per valutare un edificio esistente danneggiato sta nel C8 della Circolare: livelli di conoscenza LC1-LC3, fattori di confidenza FC, prove richieste per ogni livello, e soprattutto la trattazione dei meccanismi locali di collasso della muratura." },
    { n:"dpcm-8-07-2014", fase:"diagnosi", perche:"E' lo strumento ufficiale italiano che il dominio richiede e che oggi manca del tutto: la Sezione 4 della scheda classifica il danno per componente strutturale (strutture verticali, solai, scale, copertura, tamponature) incrociando livello di danno D0-D5 ed estensione ( 2/3), e porta agli esiti di agibilita' A-F." },
    { n:"dpcm-14-01-2015", fase:"diagnosi", perche:"La AeDES ordinaria non descrive i meccanismi che governano il danno dei prefabbricati: perdita di appoggio di travi e tegoli, ribaltamento dei pannelli di tamponamento, collasso delle connessioni trave-pilastro. Sono esattamente i cinismi osservati in Emilia 2012 e riguardano tutto il patrimonio industriale e commerciale." },
    { n:"ems-98-european-macroseismic-scale-1998-", fase:"diagnosi", perche:"EMS-98 è la scala macrosismica europea di intensità (12 gradi, I-XII) della European Seismological Commission. Tra i suoi elementi definisce 6 classi di vulnerabilità (A-F) e una classificazione del danno in 5 gradi, distinta per muratura e per c.a." },
    { n:"opcm-3274-del-20-03-2003", fase:"diagnosi", perche:"OPCM 3274/2003 fissa i criteri della riclassificazione sismica del 2003; la classificazione del singolo comune fu poi recepita dalle Regioni (spesso tra 2003 e 2006). In perizia serve a documentare da quando il comune rientra in zona sismica: se l'edificio e anteriore e il comune prima non era classificato, non e stato progettato con azione sismica, e cio pesa sul danno piu della scossa." },
    { n:"fema-306-1998-con-fema-307-e-fema-308", fase:"diagnosi", perche:"Manuali FEMA/ATC (buona pratica estera, non cogenti, non standard di consenso) per la valutazione e riparazione post-sisma dei soli edifici a pareti in c.a. e muratura. FEMA 306 classifica il danno per componente e per meccanismo (fessurazione da taglio o flessione, scorrimento del giunto, schiacciamento del puntone) e distingue il danno che riduce la capacita da quello che non la riduce, per stimare la capacita residua dell'elemento." },
    { n:"uni-en-13791-2019", fase:"diagnosi", perche:"Norma UNI EN sulla valutazione della resistenza a compressione in opera del calcestruzzo: definisce come elaborare carote e prove indirette per stimare la resistenza in sito, dato che concorre alla caratterizzazione dei materiali richiesta per il livello di conoscenza e il fattore di confidenza del C8 della Circolare 7/2019." },
    { n:"icms-2008-indirizzi-e-criteri-per-la-mic", fase:"diagnosi", perche:"Il motivo è sostanzialmente corretto. Precisazione asciutta: ICMS 2008 è il riferimento metodologico che definisce come si producono gli studi di microzonazione sismica (3 livelli di approfondimento) e classifica il sito in zone stabili, zone suscettibili di amplificazione locale (stratigrafica e morfologica, effetti di bordo valle) e zone suscettibili di instabilità, incluse le faglie attive." },
    { n:"cnr-dt-200-r2-2026", fase:"esecuzione", perche:"Copre le fasi prodotti, esecuzione e controllo, oggi scoperte in questa famiglia: nella riparazione post-sisma degli elementi lesionati il rinforzo con compositi fibrorinforzati (fasciature, confinamento pilastri, nodi trave-pilastro, taglio) e una delle tecniche principali, e questo documento fissa qualificazione dei materiali, delimitazione delle zone di ancoraggio, preparazione del supporto e controlli di accettazione." }
  ]},

/* ---- 6 ------------------------------------------------------------------ */
{ fam:"Dissesti e deformazioni globali", slug:"dissesti-globali", stato:"quadro",
  nota:"Famiglia strutturale: quadro cogente più la scala del danno.",
  voci:[
    { n:"bre-251", fase:"diagnosi", perche:"Gradua il danno d'insieme su scala confrontabile." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per la valutazione della sicurezza." },
    { n:"eurocodici", fase:"progetto", perche:"Calcolo dell'organismo secondo il materiale." },
    { n:"bre-digest-344-1995", fase:"diagnosi", perche:"Errore sull'anno: il Digest 344 e del 1989 (autore I. Longworth, BRE), non del 1995. Il 1995 e l'anno del solo Supplemento ai Digest 343 e 344 (specifiche e fornitori delle attrezzature): la candidata confonde il Digest con il suo supplemento." },
    { n:"uni-tr-11634-2016", fase:"diagnosi", perche:"Il riferimento italiano per il monitoraggio strutturale (SHM): fissa i criteri di progetto dei sistemi di monitoraggio, le classi e tipologie strutturali per cui e raccomandato, i requisiti dei componenti, la raccolta e analisi dei dati e i metodi di identificazione del danno." },
    { n:"uni-en-iso-22476-2-2012-e-uni-en-iso-224", fase:"diagnosi", perche:"Il registro ha la UNI EN ISO 22475-1 sul prelievo dei campioni ma nessuna norma sulle prove in sito: quando il dissesto è attribuito a un cedimento fondale servono i parametri del terreno, e la serie 22476 è il metodo di riferimento richiamato dall'Eurocodice 7 (già presente nel registro)." }
  ]},

/* ---- 7 ------------------------------------------------------------------ */
{ fam:"Deformazioni termiche e ritiro", slug:"termico-ritiro", stato:"parziale",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"Descrive in modo standard il quadro fessurativo superficiale (cavillature, fessure da ritiro)." },
    { n:"uni-10349-1-2016", fase:"diagnosi", perche:"Medie mensili di temperatura: serve per legare l'escursione reale del sito alla deformazione osservata." },
    { n:"en-1992-3-2006", fase:"progetto", perche:"Fissa le aperture di fessura ammissibili quando l'elemento deve restare a tenuta (wk1 0,20 mm fino a 0,05 mm secondo il rapporto hD/h)." },
    { n:"eurocodici", fase:"progetto", perche:"EC2 per il controllo della fessurazione da ritiro e variazione termica." },
    { n:"en-206-2021", fase:"prodotti", perche:"Specifica del calcestruzzo: la composizione governa il ritiro." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206, richiamate dalle NTC." },
    { n:"ciria-c766-2018", fase:"progetto", perche:"E lo strumento di calcolo che manca alla famiglia: gli Eurocodici danno il criterio di ampiezza della fessura ma non il metodo per stimare il salto termico di idratazione, il grado di vincolo e l armatura minima anti-fessura. In perizia serve per stabilire se una fessura da ritiro impedito era prevedibile e prevenibile in progetto." },
    { n:"uni-en-12390-16-2019", fase:"collaudo", perche:"La famiglia censisce il ritiro come patologia ma non ha il metodo che lo misura. E la prova da richiedere quando si contesta un calcestruzzo troppo ritirante: separa il ritiro autogeno (colpa della miscela, alto dosaggio di cemento o basso rapporto a/c) da quello da essiccamento (colpa della maturazione in cantiere), cioe distingue la responsabilita del fornitore da quella dell impresa." },
    { n:"uni-11307-2008", fase:"collaudo", perche:"Resta in vigore e coesiste con la UNI EN 12390-16, quindi capita di trovarla richiamata in capitolati e certificati di laboratorio meno recenti: va saputa leggere e confrontare. Utile segnalare che le letture arrivano a 90 giorni contro i 56 della norma europea, quindi i due dati non sono direttamente sovrapponibili in contraddittorio." }
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
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo fessurato, con le tre funzioni (forze, duttile, rigonfiante)." },
    { n:"uni-8520-22-2020", fase:"prodotti", perche:"È la norma italiana che qualifica l'aggregato rispetto alla reazione alcali-silice (ASR): assegna una categoria di reattività. Attenzione: l'edizione 2020 classifica in classi RA0, RA1, RA2, RA3, RA3s, non più con il vecchio giudizio NR/PR delle edizioni precedenti." },
    { n:"uni-11530-2023", fase:"diagnosi", perche:"UNI 11530:2023 e un metodo di esame petrografico dell'aggregato come materiale, per stabilirne la potenziale reattivita agli alcali; e un tassello delle procedure di qualifica (UNI 8520-22), quindi prevenzione/caratterizzazione della materia prima, non diagnosi differenziale sul manufatto." },
    { n:"uni-11504-2021", fase:"diagnosi", perche:"Prova accelerata di espansione su barre di malta (analoga ad ASTM C1260): in circa due settimane misura la potenziale reattivita alcali-silice dell'aggregato, confermando o smentendo il sospetto emerso dall'esame petrografico senza attendere l'anno della prova su prismi di calcestruzzo." },
    { n:"uni-11604-2020", fase:"diagnosi", perche:"È la prova su prisma di calcestruzzo (espansione accelerata, circa un anno, soglia 0,04% a 365 giorni) che la UNI 8520-22 impone come dirimente quando esame petrografico e prova sulle barre di malta danno esiti discordanti. Fornisce la soglia numerica più difendibile in contraddittorio perché misurata sul comportamento del calcestruzzo reale, ma non è l'unica con un valore numerico (anche la prova accelerata sulle barre di malta ha le sue soglie)." },
    { n:"uni-11417-2-2022", fase:"progetto", perche:"E l anello che manca fra la diagnosi e la responsabilita: stabilisce cosa il progettista avrebbe dovuto prescrivere per prevenire l AAR. In perizia serve esattamente a questo, misurare la condotta tenuta contro il livello di precauzione che l opera richiedeva." },
    { n:"uni-11834-2021", fase:"prodotti", perche:"La prevenzione dell AAR si gioca su due fronti, l aggregato e gli alcali del cemento; il registro non ha nulla sul secondo. Questa norma da il criterio per verificare se il cemento impiegato era a basso contenuto di alcali, cioe se la misura preventiva richiesta dalla UNI 11417-2 e stata davvero adottata in cantiere." },
    { n:"bre-special-digest-1-2005-3rd-edition", fase:"progetto", perche:"SD1:2005 (3a ed., emend. feb. 2017) fornisce la procedura di classificazione dell'aggressivita chimica del sito (sistema ACEC) e le prescrizioni di miscela conseguenti (classi DC richiamate da BS 8500), incluso il trattamento dell'attacco solfatico nella forma della tumasite su calcestruzzi interrati (fondazioni, muri controterra)." }
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
    { n:"astm-d7877", fase:"collaudo", perche:"Localizzazione elettronica delle perdite: trova il buco invece di cercarlo a demolizioni." },
    { n:"uni-en-iso-12570-2018", fase:"diagnosi", perche:"Il registro copre il metodo ponderale solo con UNI 11085:2003, che e una norma per beni culturali su materiali lapidei. Su laterizio, malta e intonaco di una muratura ordinaria il riferimento gravimetrico e questo. E la misura contro cui si tarano igrometri, sonde e metodo al carburo: senza, la percentuale di umidita scritta in perizia non e ancorata a nulla di verificabile." },
    { n:"uni-en-iso-15148-2016", fase:"diagnosi", perche:"EN ISO 15148 misura in laboratorio il coefficiente di assorbimento d'acqua per capillarita (Aw, kg/m2 per radice del secondo), cioe il parametro fisico della suzione. E pertinente alle patologie da umidita come caratterizzazione del materiale: serve a modellare il trasporto capillare e a qualificare intonaci di risanamento e idrofobizzanti prima di prescriverli." },
    { n:"uni-en-1015-18-2004", fase:"diagnosi", perche:"EN 1015-18 misura in laboratorio, su provini prismatici, il coefficiente di assorbimento d'acqua per capillarità della sola malta indurita. È una caratterizzazione del materiale, utile in diagnosi perché il giunto di malta è spesso la via capillare preferenziale; ma da sola non dice quale dei due materiali (malta o elemento murario) conduce l'acqua (serve il dato analogo sull'elemento, con altra norma) né decide l'idoneità di un intonaco di risanamento." },
    { n:"uni-en-772-11-2011", fase:"diagnosi", perche:"Complementare alla EN 1015-18 sul lato elemento. Insieme chiudono il quadro della suzione della muratura: malta piu laterizio o pietra. L'IRA del laterizio in particolare spiega i casi in cui la risalita e concentrata nei corsi e non nei giunti, e orienta la scelta tra barriera chimica e intervento sull'intonaco." },
    { n:"uni-en-iso-12572-2024", fase:"progetto", perche:"La verifica di condensa interstiziale con UNI EN ISO 13788 (gia in registro) e la simulazione con UNI EN 15026 girano su mu e Sd: questa e la norma che quei valori li misura. Senza, il diagramma di Glaser usa dati solo dichiarati dal produttore e la verifica non e opponibile." },
    { n:"uni-en-iso-10211-2018", fase:"progetto", perche:"La muffa d'angolo e condensa superficiale su ponte termico. La UNI EN ISO 13788 fornisce il criterio (fRsi ammissibile) ma non la temperatura superficiale reale di quel nodo: quella si calcola qui, col modello numerico. E il passaggio che manca oggi tra il rilievo della muffa e la dimostrazione che il nodo era sotto soglia, e senza di esso l'isopleto di Sedlbauer/LIM gia in registro non ha un input difendibile." },
    { n:"uni-10329-2018", fase:"collaudo", perche:"UNI 10329:2018 (in vigore, ha sostituito l'ed. 1994) è il riferimento italiano per la misura dell'umidità residua nei massetti e sottofondi (cementizi, a leganti speciali, a base solfato di calcio) prima della posa dei rivestimenti." },
    { n:"astm-f2170-19a", fase:"collaudo", perche:"La sonda in situ ASTM F2170 misura l'umidita relativa di equilibrio in profondita (foro al 40% dello spessore per essiccazione monofacciale, 20% per bifacciale): rivela l'umidita interna che riemerge in superficie dopo la posa di un rivestimento impermeabile, quando le sole letture superficiali/elettriche non la vedono." },
    { n:"uni-en-12390-8-2019", fase:"collaudo", perche:"Per gli interrati in calcestruzzo a tenuta (vasca bianca, tipo B secondo BS 8102) la profondita di penetrazione sotto pressione e il parametro di accettazione del conglomerato. Il registro ha la prescrizione (UNI 11104:2025, UNI EN 206:2021, UNI EN 1992-3) ma non la prova che la verifica: manca l'anello tra cio che era prescritto e cio che e stato gettato." },
    { n:"uni-en-13969-2007-recepimento-di-en-1396", fase:"prodotti", perche:"Il registro ha la UNI EN 13967 (membrane plastiche e di gomma contro l'umidita del terreno) ma non la gemella bituminosa, che copre buona parte dell'impermeabilizzazione controterra effettivamente posata in Italia. Senza, in un contenzioso su un interrato manca la norma di prodotto del materiale che si trova davvero in opera e non se ne puo contestare la conformita." },
    { n:"uni-en-1504-2-2005", fase:"prodotti", perche:"EN 1504-2 e' la norma di prodotto dei sistemi di protezione superficiale del calcestruzzo (impregnazione idrofobica, impregnazione, rivestimenti; principi PI, MC, IR). Qualifica questi prodotti quando la protezione dall'umidita di un interrato prevede il trattamento superficiale del calcestruzzo, come complemento della strategia di impermeabilizzazione (piu vicina all'approccio integrale, tipo B secondo BS 8102), non come sua realizzazione completa; per il tipo C a drenaggio d'intercapedine non e' pertinente." },
    { n:"uni-en-14891-2017", fase:"prodotti", perche:"Le infiltrazioni da bagni, docce e terrazzi, una delle voci piu frequenti in perizia, passano quasi sempre dall'impermeabilizzazione liquida sotto piastrella. Questa e la norma che dice se il prodotto posato era idoneo, inclusa la capacita di crack-bridging che discrimina il caso in cui la guaina ha ceduto su una fessura del supporto." },
    { n:"uni-11673-1-2017", fase:"esecuzione", perche:"Molte infiltrazioni imputate al serramento nascono nel giunto di posa, non nel prodotto (conforme alla UNI EN 14351-1). La UNI 11673-1:2017 fissa requisiti e criteri di verifica della PROGETTAZIONE della posa: e la base per imputare il difetto a un progetto di posa carente." },
    { n:"uni-en-1027-2016", fase:"collaudo", perche:"E il metodo di prova che sta dietro la classe di tenuta all'acqua dichiarata in marcatura CE secondo UNI EN 14351-1, gia in registro. Senza di esso la classe dichiarata resta un'etichetta di cui non si puo discutere la genesi, e in perizia non si sa a quale sollecitazione idrica il serramento fosse stato effettivamente qualificato." },
    { n:"uni-en-12208-2000", fase:"collaudo", perche:"Traduce l'esito della UNI EN 1027 in una classe. Serve per confrontare la tenuta dichiarata del serramento con l'esposizione reale alla pioggia battente della facciata, stimata con BS 8104 gia in registro: e il confronto che dimostra se il serramento era sottodimensionato per quel sito o se il difetto sta altrove." },
    { n:"astm-e1105-15-2023", fase:"collaudo", perche:"Prova in sito di tenuta all'acqua su serramento/facciata gia posati (Proc. A pressione statica uniforme, Proc. B ciclica; spruzzo 5 gph/ft2). Rispetto a EN 1027/EN 12208, che sono prove di laboratorio su campione nuovo, riproduce l'infiltrazione contestata sull'opera reale e aiuta a localizzare il punto di ingresso." },
    { n:"uni-en-1996-2-2006", fase:"progetto", perche:"Parte 2 dell'Eurocodice 6 (Considerazioni progettuali, selezione dei materiali ed esecuzione delle murature). Fissa in fase di progetto: le classi di esposizione all'umidità (MX1 asciutto - MX5), la selezione dei materiali per durabilità in funzione dell'esposizione e, alla clausola 3.8, l'obbligo di barriere anticapillari (damp proof courses) che resistano al passaggio dell'acqua." }
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
    { n:"en-12370-2020", fase:"collaudo", perche:"Serve anche come prova di durabilità su campione, per confrontare due materiali candidati." },
    { n:"wta-3-13-19-d", fase:"esecuzione", perche:"Impacco desalinizzante (Kompresse): trattamento di elezione, normato, per estrarre i sali solubili dal supporto quando la subefflorescenza disgrega il materiale e l'intonaco sacrificale non basta. Il Merkblatt WTA 3-13-19/D fissa procedura, scelta di materiali e impacchi, condizioni al contorno e controllo quantitativo dell'efficacia." },
    { n:"uni-en-771-1-2015-recepimento-di-en-771-", fase:"prodotti", perche:"Il registro ha gia il metodo di prova (UNI EN 772-5:2016) ma non la norma che dice cosa farsene del risultato: le classi S0/S1/S2 stanno qui. Serve nei casi in cui l efflorescenza non viene dalla risalita ma e nativa del mattone, cioe sali gia presenti nel laterizio: in perizia e la norma che permette di dire se il produttore ha fornito un elemento della categoria prescritta o no, e quindi di spostare la responsabilita dal posatore al fornitore." },
    { n:"uni-en-16085-2012", fase:"diagnosi", perche:"EN 16085 detta le REGOLE GENERALI di campionamento dei materiali dei beni culturali: giustificazione, autorizzazione, rappresentativita, dimensione del campione, documentazione e conservazione. E il presupposto metodologico del prelievo che UNI EN 16455 (analisi dei sali) da per gia eseguito, quindi il collegamento alla diagnosi del degrado salino regge a questo livello." },
    { n:"uni-en-16581-2015", fase:"prodotti", perche:"Metodo di prova di laboratorio (CEN/TC 346) per qualificare le prestazioni degli idrorepellenti su materiali inorganici porosi: riduzione dell'assorbimento d'acqua, permeabilita al vapore, durabilita dopo invecchiamento. Nel degrado salino serve a due cose: qualificare il prodotto quando l'idrorepellente e ammissibile, e ricordare il limite esplicito della norma, il contenuto di sali richiede valutazione caso per caso oltre la prova di laboratorio." },
    { n:"rilem-tc-271-asc-2023", fase:"prodotti", perche:"Copre esattamente il buco lasciato da UNI EN 12370:2020, che vale solo per la pietra naturale con porosita aperta oltre il 5% e non per il laterizio. Questa raccomandazione include invece gli elementi in laterizio cotto, ed e nata dichiaratamente per superare i limiti di affidabilita delle prove esistenti: riproduce il danno vero da trasporto capillare ed evaporazione, non un ciclo convenzionale." },
    { n:"uni-en-15803-2010", fase:"collaudo", perche:"EN 15803 è un metodo di prova: misura la permeabilità al vapore d'acqua (delta p) dei materiali inorganici porosi e ne consente il confronto prima/dopo trattamento. Fornisce quindi il dato oggettivo per verificare che un protettivo o un intonaco non riduca la traspirazione del supporto (che spingerebbe il fronte di cristallizzazione all'interno, con subefflorescenza), ma non fissa la soglia di accettazione: quella va dal capitolato o da altre norme di prodotto (es. UNI 10921 per gli idrorepellenti)." },
    { n:"uni-en-17187-2020", fase:"diagnosi", perche:"La caratterizzazione mineralogico-chimica della malta ex EN 17187 (dissoluzione acida, ione-cromatografia sui sali solubili) identifica tipologia e contenuto salino della malta: e' il dato d'ingresso per capire se la malta cementizia di rappezzo e' sorgente interna di solfati/alcali o vittima della cristallizzazione." },
    { n:"wta-3-17-10-d-2010-06-merkblatt-3-17-aus", fase:"progetto", perche:"WTA 3-17 non è una norma sul degrado salino: è una norma di idrofobizzazione (protezione superficiale dall'acqua di materiali minerali, escluso il calcestruzzo, Referat 3 Naturstein). Nel progetto del degrado salino è pertinente solo come riferimento di ESCLUSIONE, non come trattamento." }
  ]},

/* ---- 11 ----------------------------------------------------------------- */
{ fam:"Degrado materico superficiale (lessico UNI 11182 / Glossario ICOMOS-ISCS)", slug:"degrado-materico", stato:"censita",
  nota:"Qui la norma non prescrive un intervento: fornisce il LESSICO. È esattamente ciò che serve perché due tecnici descrivano la stessa cosa con lo stesso nome.",
  voci:[
    { n:"uni-11182-2006", fase:"diagnosi", perche:"È la norma della famiglia: glossario standardizzato delle forme di alterazione e degrado dei materiali lapidei." },
    { n:"icomos-iscs", fase:"diagnosi", perche:"Glossario internazionale illustrato: complementare alla UNI 11182, utile quando si dialoga fuori dall'Italia o si cerca l'immagine di riscontro." },
    { n:"en-16302-2013", fase:"diagnosi", perche:"Tubo di Karsten: misura quanto la superficie degradata assorbe acqua, cioè quantifica il degrado invece di descriverlo soltanto." },
    { n:"en-16455-2014", fase:"diagnosi", perche:"Quando la forma di degrado è compatibile con i sali, l'analisi dice se il sale c'è davvero e quale." },
    { n:"en-12370-2020", fase:"prodotti", perche:"Resistenza alla cristallizzazione dei sali per la pietra di sostituzione." },
    { n:"uni-en-15898-2019", fase:"diagnosi", perche:"E' la norma su cui poggiano sia UNI CEN/TS 17135 sia le relazioni redatte secondo EN 16095/16096. Distingue 'alterazione' (modifica non necessariamente peggiorativa, es. patina) da 'degrado' (perdita di valore): confondere le due voci in perizia significa qualificare come danno una patina di ossalati da proteggere." },
    { n:"uni-cen-ts-17135-2021", fase:"diagnosi", perche:"UNI 11182 copre il lessico del degrado solo per i materiali lapidei naturali e artificiali. Quando sullo stesso manufatto il degrado interessa anche materiali non lapidei (metalli di ancoraggio, elementi lignei, finiture), la CEN/TS 17135 e' il lessico che copre il vuoto restando allineata a EN 15898." },
    { n:"uni-en-16085-2012", fase:"diagnosi", perche:"Il registro prescrive analisi che richiedono materia prelevata (EN 16455 estrae i sali solubili dalla pietra, UNI 11085 pesa il campione per il contenuto d'acqua) ma non dice come si arriva legittimamente al campione. EN 16085 impone che il prelievo sia micro-invasivo, motivato, rappresentativo della morfologia di degrado e preceduto dalla verifica che un metodo non invasivo non dia la stessa informazione." },
    { n:"uni-en-15801-2010", fase:"collaudo", perche:"Metodo di prova (CEN/TC 346) per misurare l'assorbimento d'acqua per capillarita' dei materiali inorganici porosi dei beni culturali, applicabile a provini non trattati e a trattati/invecchiati. In collaudo quantifica la riduzione dell'assorbimento capillare prima/dopo trattamento: dimostra soprattutto l'efficacia di idrorepellenti e protettivi." },
    { n:"uni-en-15803-2010", fase:"collaudo", perche:"Il danno tipico dopo un idrorepellente mal scelto e' il distacco di scaglie subito dietro la fascia trattata: il prodotto chiude l'uscita del vapore e i sali cristallizzano sotto la superficie. EN 15803 e' la misura che verifica il requisito 'minima variazione della permeabilita' al vapore' richiesto da EN 16581." },
    { n:"uni-en-15886-2010", fase:"collaudo", perche:"Trasforma 'la pulitura ha slavato la superficie' o 'il protettivo ha ingiallito la pietra' da giudizio soggettivo a delta E misurato prima e dopo. E' il collaudo cromatico della pulitura e della protezione, ed e' anche il parametro con cui EN 16581 valuta se un idrorepellente e' accettabile." },
    { n:"uni-en-16581-2015", fase:"prodotti", perche:"Norma di metodo (CEN/TC 346), non una specifica di requisiti cogenti. Definisce come valutare in laboratorio le prestazioni di un idrorepellente su materiali inorganici porosi (pietra, intonaco), misurando i parametri prima e dopo invecchiamento: assorbimento d'acqua per capillarita, permeabilita al vapore, variazione di colore e brillantezza, presenza di sottoprodotti/residui, stabilita e durabilita." },
    { n:"uni-en-17114-2019", fase:"prodotti", perche:"EN 17114 non fissa requisiti o soglie prestazionali per gli idrorepellenti: e una norma di documentazione. Specifica quali dati chimico-fisici e prestazionali devono comparire nella scheda tecnica del prodotto per permetterne la preselezione." },
    { n:"uni-en-17138-2019", fase:"esecuzione", perche:"La pulitura e' l'intervento piu' frequente su croste nere, depositi e incrostazioni ed e' irreversibile: cio' che si toglie non torna. La norma impone di definire quando la pulitura e' appropriata, di eseguire prove preliminari su campionatura, di fissare un criterio di arresto e di documentare l'esito." },
    { n:"uni-en-16782-2016", fase:"esecuzione", perche:"Quando su una crosta nera in lapideo si propone il laser (caso ricorrente su statuaria e portali in marmo, dove il metodo permette rimozione selettiva senza toccare il substrato), questa e' la norma di riferimento specifica. Va tenuta distinta da EN 17138, che copre metodi e materiali di pulitura in generale: EN 16782 riguarda solo il laser." }
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
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo: le tre funzioni (trasmissione di forze, duttile, rigonfiante) non sono intercambiabili." },
    { n:"uni-en-13791-2019", fase:"collaudo", perche:"Norma corrente UNI/CEN per stimare la resistenza a compressione in opera del calcestruzzo, applicabile anche ai solai in c.a./laterocemento; completa la UNI EN 12504-2 perche fornisce il metodo per convertire i dati sclerometrici o ultrasonici in resistenza tramite correlazione con le carote (lo sclerometro da solo non e ammesso a quello scopo)." },
    { n:"uni-en-14630-2007", fase:"diagnosi", perche:"Prova (metodo alla fenolftaleina) che misura la profondità del fronte di carbonatazione sulla carota estratta. In diagnosi serve a stabilire se l'armatura è depassivata: si confronta la profondità carbonatata con il copriferro reale." },
    { n:"uni-en-1504-9-2009", fase:"progetto", perche:"La parte 9 non \"rende obbligatorio\" nulla: e una norma volontaria e non armonizzata (nessuna marcatura CE). Stabilisce pero come principio metodologico di riferimento che la valutazione dello stato e l'identificazione delle cause del degrado precedono la scelta dei principi e dei metodi di riparazione o protezione." },
    { n:"uni-en-15037-3-2011", fase:"prodotti", perche:"E la norma di prodotto del componente che sfonda: lo sfondellamento e un cedimento del fondello del blocco di laterizio, non del calcestruzzo. La famiglia oggi non ha alcuna norma sul laterizio, quindi non puo qualificare il blocco ne risalire alla marcatura CE e alla DoP." },
    { n:"uni-en-13670-2010", fase:"esecuzione", perche:"L intero dominio non ha una sola norma sulla fase esecutiva, che e dove nascono quasi tutti questi difetti: maturazione insufficiente (ritiro plastico e fessure da ritiro), copriferro non rispettato (carbonatazione e sfondellamento precoci), disarmo anticipato (deformazioni)." }
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
{ fam:"Fondazioni speciali e pali", slug:"pali", stato:"parziale",
  nota:"Censite le norme di esecuzione dei pali (EN 1536 trivellati, EN 12699 infissi, EN 14199 micropali) e di prova. Il calcolo geotecnico resta al quadro EC7/NTC.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per le verifiche geotecniche e strutturali delle fondazioni profonde." },
    { n:"en-1997-1", fase:"progetto", perche:"EC7 per la progettazione geotecnica." },
    { n:"iso-22475-1-2021", fase:"diagnosi", perche:"Campionamento del terreno e misura della falda a monte del progetto." },
    { n:"uni-en-1536-2015", fase:"esecuzione", perche:"La famiglia 'Fondazioni speciali e pali' oggi ha solo norme di progetto (NTC, EC7) e una di campionamento: manca completamente la fase esecutiva, cioe dove nascono i difetti reali del palo trivellato (strozzature, inclusioni di terreno, copriferro, qualita del calcestruzzo, uso e livello del fluido di sostegno)." },
    { n:"uni-en-12699-2015", fase:"esecuzione", perche:"Completa la EN 1536 sull'altra grande famiglia tecnologica. Serve in due modi: definisce le regole di esecuzione del palo infisso e, sul versante patologico, regola il rigonfiamento del terreno (heaving) e le vibrazioni indotte dall'infissione, che sono causa tipica di danni ai fabbricati adiacenti e di sollevamento dei pali gia posti in opera." },
    { n:"uni-en-14199-2015", fase:"esecuzione", perche:"Norma di esecuzione dei micropali (fori con diametro < 300 mm). I micropali sono uno degli interventi di sottofondazione e rinforzo di fondazioni esistenti, praticabili anche in spazi ridotti; questa e la norma di regola d'arte che ne governa l'esecuzione." },
    { n:"uni-en-iso-22477-1-2019", fase:"collaudo", perche:"La 22477-1 stabilisce come si esegue e si valuta la prova di carico statica a compressione assiale su palo singolo (curva carico-cedimenti). E' il tassello di collaudo assente nelle NTC 2018, che richiamano la prova di carico ma non ne descrivono il protocollo." },
    { n:"uni-en-iso-22477-4-2018", fase:"collaudo", perche:"Completa la 22477-1 dove la prova statica non e praticabile per costi o spazio, situazione ordinaria sui cantieri con molti pali. La norma dichiara esplicitamente di applicarsi a tutti i tipi di palo di EN 1536, EN 12699 e EN 14199 e di produrre risultati equivalenti alla resistenza misurata Rc,m ai fini della progettazione secondo EN 1997-1: e quindi l'anello che rende utilizzabile in verifica una prova dinamica." },
    { n:"uni-en-12794-2007", fase:"prodotti", perche:"Unica voce di fase 'prodotti' per questa famiglia. Sul palo prefabbricato la contestazione tipica non riguarda il progetto ma il manufatto: classe di calcestruzzo, armatura, copriferro, lesioni da trasporto e da infissione. La 12794 e la norma armonizzata contro cui si legge la Dichiarazione di Prestazione e si verifica se il palo consegnato era conforme." },
    { n:"en-12716-2018", fase:"esecuzione", perche:"Il jet grouting e una tecnica di consolidamento/trattamento del terreno (colonne di terreno cementato) usata anche per sottofondazione e ripristino di fondazioni con cedimenti. La EN 12716:2018 fissa i principi per esecuzione, prove e controlli." }
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
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206." },
    { n:"dm-204-2022-linee-guida-ponti-esistenti", fase:"diagnosi", perche:"Motivo sostanzialmente corretto, va solo messo a fuoco l'ambito: è il riferimento diagnostico italiano più dettagliato per il degrado del c.a.p. in esercizio (corrosione cavi post-tesi e guaine, iniezioni difettose, schede difetti -> Classe di Attenzione), ma nato per i ponti/viadotti esistenti; per il precompresso in edilizia se ne mutua il metodo, non l'obbligatorietà di legge." }
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
    { n:"ntc-2018", fase:"progetto", perche:"Cap. 8 (costruzioni esistenti) e Circolare 2019 per la valutazione della sicurezza." },
    { n:"d-lgs-22-gennaio-2004-n-42", fase:"progetto", perche:"Ogni lavorazione sulla superficie di un bene tutelato (pulitura di croste nere, consolidamento, ristilatura, protezione) e' subordinata ad autorizzazione della Soprintendenza ex art. 21 c.4 ed e' riservata a restauratore qualificato ex art. 29." },
    { n:"uni-en-16096-2012", fase:"diagnosi", perche:"E' la norma che struttura il documento peritale: ispezione visiva sistematica, scala di condizione, documentazione fotografica, distinzione tra rilievo speditivo e approfondito. Il registro possiede i metodi di misura puntuali (EN 16302, EN 16455, EN 16682) ma non il formato che li tiene insieme in una relazione sullo stato di conservazione difendibile." },
    { n:"uni-en-16572-2015", fase:"diagnosi", perche:"Nucleo corretto: la famiglia tratta malte e intonaci storici mentre il lessico gia agganciato (UNI 11182) riguarda i lapidei, e UNI EN 16572:2015 e proprio il glossario CEN/TC 346 dei termini su malte per muratura e intonaci esterni e interni nei beni culturali (arriccio, intonachino, malta di allettamento, ristilatura)." },
    { n:"uni-11305-2009", fase:"diagnosi", perche:"Prima di progettare una malta da restauro o da ristilatura serve sapere di cosa e' fatta quella storica: senza caratterizzazione si finisce con malta cementizia o eccessivamente rigida sul muro storico, che concentra i sali e il degrado sul concio originale invece che sul giunto di sacrificio." }
  ]},

/* ---- 32 ----------------------------------------------------------------- */
{ fam:"Rinforzi e consolidamenti", slug:"rinforzi", stato:"parziale",
  nota:"Censita l'iniezione del calcestruzzo. I materiali compositi (FRP/FRCM, Linea Guida CSLLPP e CNR-DT) non sono ancora nei registri.",
  voci:[
    { n:"en-1504-5-2013", fase:"esecuzione", perche:"Iniezione del calcestruzzo: le tre funzioni (trasmissione di forze, duttile, rigonfiante) rispondono a esigenze diverse e non sono intercambiabili." },
    { n:"ntc-2018", fase:"progetto", perche:"Cap. 8: la valutazione della sicurezza precede e giustifica il rinforzo." },
    { n:"eurocodici", fase:"progetto", perche:"Calcolo dell'elemento rinforzato secondo il materiale." },
    { n:"en-12504-2", fase:"diagnosi", perche:"Stima della resistenza superficiale del supporto su cui il rinforzo dovrebbe aderire." },
    { n:"cnr-dt-200-r2-2026", fase:"progetto", perche:"Titolo ufficiale senza appendice: 'Istruzioni per la Progettazione, l'Esecuzione ed il Controllo di Interventi di Consolidamento Statico mediante l'utilizzo di Compositi Fibrorinforzati'. È documento unico e copre c.a., c.a.p. e muratura, non solo c.a." },
    { n:"cnr-dt-215-2018-revisione-30-giugno-2020", fase:"progetto", perche:"Gli FRCM sono la tecnica dominante sulla muratura storica proprio perche la matrice inorganica e traspirante e compatibile, dove la resina epossidica dell FRP non lo e. La famiglia nomina FRCM ma non ha alcun documento di calcolo per gli FRCM: senza la DT 215 il progetto del rinforzo non ha riferimento citabile." },
    { n:"linea-guida-frp-csllpp-29-05-2019", fase:"prodotti", perche:"Gli FRP non rientrano in norme armonizzate né hanno marcatura CE. Per le NTC 2018 par. 11.1 (caso C) il fabbricante ha due vie alternative: marcatura CE su base ETA (Valutazione Tecnica Europea) oppure Certificato di Valutazione Tecnica (CVT)." },
    { n:"linea-guida-frcm-csllpp-2022", fase:"prodotti", perche:"Stesso meccanismo dell FRP: nessuna norma armonizzata, quindi CVT obbligatorio ex NTC 2018 par. 11.1. E il pendant di qualificazione della CNR-DT 215 (progetto). La revisione pubblicata e datata febbraio 2022 e sostituisce quella precedente: chi cita ancora la versione 2019 sbaglia edizione." },
    { n:"circolare-csllpp-21-01-2019-n-7", fase:"diagnosi", perche:"Un rinforzo si progetta su un edificio esistente, e il par. C8.5.4 (Livelli di Conoscenza LC1/LC2/LC3 e Fattori di Confidenza FC) e cio che decide quante indagini servono e di quanto vanno penalizzate le resistenze dei materiali." },
    { n:"uni-en-1504-3-2006", fase:"prodotti", perche:"Ogni consolidamento del c.a. parte dal ripristino della sezione degradata prima di applicare il rinforzo: se la malta di ricostruzione non e strutturale, il rinforzo FRP viene incollato su un substrato che non trasferisce carico e l intervento e nullo." },
    { n:"uni-en-1504-4-2005", fase:"prodotti", perche:"E la norma di prodotto della resina, cioe dell anello debole di ogni rinforzo FRP incollato (EBR): il composito non collassa quasi mai per rottura delle fibre, collassa per delaminazione all interfaccia. Il parametro Tg (temperatura di transizione vetrosa) e quello che spiega i cedimenti di rinforzi FRP esposti al sole o in copertura, e in perizia si controlla proprio qui." },
    { n:"uni-en-1504-6-2007", fase:"prodotti", perche:"Norma di prodotto per l'ancoraggio/inghisaggio di barre di armatura in acciaio nel calcestruzzo armato (malte cementizie, resine sintetiche o sistemi misti), usate come rinforzo strutturale per garantire la continuita delle strutture in c.a." },
    { n:"uni-en-1504-10-2017", fase:"esecuzione", perche:"La fase esecuzione della famiglia e completamente scoperta, ed e proprio dove nasce il contenzioso: preparazione del supporto, pulizia, umidita e temperatura al momento della posa. La parte 10 e l unico documento della serie che prescrive le condizioni del substrato e il controllo di qualita dei lavori, cioe quello che si va a verificare quando un rinforzo si stacca e occorre stabilire se la colpa e del prodotto o della posa." },
    { n:"uni-en-1992-4-2018", fase:"progetto", perche:"EN 1992-4 progetta le fissazioni IN ACCIAIO nel calcestruzzo (tasselli meccanici a espansione/sottosquadro/vite, ancoranti chimici, teste annegate, rotaie di ancoraggio) e ne verifica le rotture del supporto: estrazione del cono di calcestruzzo, sfilamento, splitting, rottura del bordo, pry-out." },
    { n:"ead-330076-01-0604-edizione-01-maggio-20", fase:"prodotti", perche:"E il documento su cui si fonda l'ETA e quindi la marcatura CE degli ancoranti chimici usati per le cuciture armate nella muratura: senza ETA su questo EAD, l'ancorante e qualificato solo per il calcestruzzo e non e utilizzabile su muratura, errore frequentissimo in cantiere." },
    { n:"eota-tr-054", fase:"progetto", perche:"Colma il buco lasciato dalla UNI EN 1992-4, che copre solo gli attacchi nel calcestruzzo: per le cuciture nella muratura il metodo di calcolo dell ancoraggio e questo. Il complemento TR 053 fornisce le prove di verifica in opera sull edificio reale, cioe la prova di estrazione che in perizia dimostra se la cucitura tiene davvero, dato che sulla muratura storica i valori da catalogo non sono trasferibili." },
    { n:"uni-en-13791-2019", fase:"diagnosi", perche:"EN 13791:2019 governa la stima della fck,is in opera ma non ammette i metodi indiretti (sclerometro, ultrasuoni) da soli: richiede carote di taratura. Rende quindi esplicito che dal solo indice sclerometrico non si ricava una resistenza; è la combinazione carote piu prova indiretta a fornire la fck,is che alimenta Livello di Conoscenza e Fattore di Confidenza del cap. C8." },
    { n:"uni-en-12504-1-2021", fase:"diagnosi", perche:"E la prova diretta con cui si tarano le prove indirette gia presenti nel registro (sclerometro EN 12504-2, ultrasuoni EN 12504-4): senza carote, il SonReb non e calibrato e la resistenza dedotta non e difendibile. E il dato di partenza per stabilire se la sezione da rinforzare regge il trasferimento di carico dal composito." },
    { n:"uni-en-12504-4-2021", fase:"diagnosi", perche:"E l altra meta del metodo SonReb, che il registro ha monco: sclerometro (12504-2) piu ultrasuoni (12504-4) combinati, perche umidita e maturazione influenzano i due indici in senso opposto e la combinazione ne annulla l effetto. Serve anche a intercettare i vuoti e le disomogeneita interne prima di decidere se una sezione va iniettata o rinforzata." },
    { n:"uni-en-1052-1-2001", fase:"diagnosi", perche:"UNI EN 1052-1:2001 è la prova di LABORATORIO per la resistenza a compressione della muratura su provini (wallette), richiamata dalle NTC 2018 §11.10.3.1.2 per la determinazione sperimentale della fk della muratura NUOVA. È pertinente alla caratterizzazione a compressione utile a dimensionare rinforzi e consolidamenti." },
    { n:"uni-en-1052-3-2007", fase:"diagnosi", perche:"UNI EN 1052-3 misura, con la prova su triplette, la resistenza iniziale a taglio del giunto di malta (fvk0 e coefficiente d'attrito): uno dei parametri che concorrono al comportamento nel piano dei maschi murari (scorrimento e, tramite fvk0, fessurazione diagonale), non l'unico che \"governa\" il collasso." },
    { n:"direttiva-pcm-09-02-2011", fase:"progetto", perche:"Una quota larghissima di consolidamenti e iniezioni si esegue su muratura storica tutelata, dove non si applica il criterio dell adeguamento ma quelli di minimo intervento, compatibilita e durabilita, e la scelta fra FRP (resina, irreversibile) e FRCM (matrice a calce, compatibile) si giustifica proprio qui." },
    { n:"aci-prc-440-2-17", fase:"progetto", perche:"Va solo precisato, per il contraddittorio, che anche ACI PRC-440.2 e un documento volontario e non cogente (una guida ACI: \"Reference to this document shall not be made in contract documents\"), esattamente come le Istruzioni CNR-DT 200." },
    { n:"uni-en-12715-2021", fase:"esecuzione", perche:"Copre la sola voce iniezioni su terreni e fondazioni (consolidamento del terreno di sedime), non le iniezioni su muratura. La includo perche il registro non ha nessuna norma di esecuzione delle iniezioni e perche il controllo dei parametri di iniezione (pressione, volume assorbito, portata) e cio che in perizia distingue un iniezione eseguita da un iniezione dichiarata." },
    { n:"uni-en-998-2-2016", fase:"prodotti", perche:"E la norma di prodotto della malta usata nel scuci-cuci e nella ristilatura armata dei giunti, tecniche di consolidamento murario contigue alle cuciture. Il registro ha gia la UNI EN 998-1 (malte da intonaco), che e la parte sbagliata per questo uso: chi cerca la malta di allettamento e non trova la parte 2 rischia di citare la parte 1 fuori ambito." }
  ]},

/* ---- 33 ----------------------------------------------------------------- */
{ fam:"Strutture e opere speciali", slug:"opere-speciali", stato:"quadro",
  nota:"Famiglia eterogenea non censita: qui solo il quadro cogente.",
  voci:[
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente." },
    { n:"eurocodici", fase:"progetto", perche:"Parte pertinente secondo il tipo di opera." },
    { n:"uni-en-1504-9-2009", fase:"progetto", perche:"Il registro ha già la EN 1504-5 (iniezione delle fessure), che però è solo uno dei metodi possibili: la parte 9 è quella che impone di valutare prima le condizioni strutturali e identificare le cause del degrado, e poi scegliere il principio (dal 1 al 6 per il calcestruzzo, dal 7 all'11 per la corrosione delle armature)." }
  ]},

/* ---- 34 ----------------------------------------------------------------- */
{ fam:"Difetti di esecuzione e posa (workmanship)", slug:"workmanship", stato:"parziale",
  nota:"Famiglia trasversale: la norma qui serve soprattutto a dire chi può posare e cosa si pretende in capitolato.",
  voci:[
    { n:"uni-11333", fase:"esecuzione", perche:"Qualificazione degli addetti alla posa delle membrane (P2 bituminose, P3 sintetiche): il difetto di posa si previene pretendendo il posatore qualificato." },
    { n:"en-206-2021", fase:"prodotti", perche:"Specifica, produzione e conformità del calcestruzzo: molti difetti di getto sono difetti di conformità." },
    { n:"uni-11104-2025", fase:"prodotti", perche:"Specificazioni italiane complementari alla EN 206." },
    { n:"astm-d5957", fase:"collaudo", perche:"Prova di allagamento: il collaudo che intercetta il difetto di posa prima che venga coperto." },
    { n:"astm-d7877", fase:"collaudo", perche:"Localizzazione elettronica delle perdite sulla membrana posata." },
    { n:"uni-en-13670-2010", fase:"esecuzione", perche:"E' la norma che definisce cosa vuol dire eseguire male un getto: nidi di ghiaia, copriferro mancante, riprese di getto non trattate, stagionatura interrotta, tolleranze fuori range. Nel registro la famiglia ha UNI EN 206 e UNI 11104, che sono il materiale; manca la norma dell'opera." },
    { n:"uni-en-1090-2-2024", fase:"esecuzione", perche:"Per i difetti di posa in carpenteria metallica (bulloni non serrati al precarico, saldature non conformi, tolleranze di montaggio, preparazione superficiale insufficiente prima della verniciatura) e' il riferimento diretto, ed e' la norma che richiama la qualificazione dei saldatori." },
    { n:"uni-en-13791-2019", fase:"collaudo", perche:"Quando il controllo di accettazione sui cubetti non e' superato, o quando si contesta un getto gia' eseguito, e' la norma che dice come si valuta il calcestruzzo realmente in opera e con quante carote. E' il ponte tra il difetto di esecuzione sospettato e il numero che finisce in perizia; la norma stessa dichiara fra i propri usi la risoluzione delle controversie sul calcestruzzo nelle nuove costruzioni." },
    { n:"uni-en-12504-1-2021", fase:"collaudo", perche:"Nel registro c'e' gia' la UNI EN 12504-2 (indice sclerometrico), che e' la prova indiretta. Manca la prova diretta: senza la EN 12504-1 la catena carotaggio, EN 13791, giudizio sul getto resta monca. Serve anche in senso difensivo, perche' un prelievo mal fatto (rapporto H/D intermedio non ammesso, carota che intercetta un ferro, zona di prelievo non rappresentativa) e' esso stesso motivo di contestazione della perizia avversaria." },
    { n:"linee-guida-csllpp-calcestruzzo-struttur", fase:"esecuzione", perche:"Documento italiano di buona pratica (linea guida CSLLPP) che elenca le operazioni di messa in opera del calcestruzzo (movimentazione, getto, costipazione, stagionatura) e fissa il criterio di accettabilita: la resistenza in opera non deve risultare inferiore a una percentuale prestabilita della resistenza caratteristica prevista in progetto." },
    { n:"circolare-21-01-2019-n-7-c-s-ll-pp", fase:"collaudo", perche:"C11 chiarisce l'applicazione del par. 11.2 NTC sui controlli di accettazione del calcestruzzo e la gestione dell'esito negativo, controlli verificati dal collaudatore al collaudo statico." },
    { n:"uni-11673-1-2017", fase:"progetto", perche:"Il registro ha la UNI EN 14351-1 (il prodotto serramento marcato CE) ma non la posa. Il difetto tipico non e' la finestra: e' il giunto di posa eseguito male, che produce condensa sul controtelaio, spifferi e infiltrazioni pur con un serramento perfettamente a norma." },
    { n:"uni-11673-2-2019", fase:"esecuzione", perche:"Tassello di qualificazione degli operatori sul fronte serramenti: in perizia consente di verificare se il posatore aveva la qualifica corrispondente al livello di autonomia effettivamente esercitato in cantiere (un EQF2 non puo' operare in autonomia)." },
    { n:"uni-11493-1-2025", fase:"esecuzione", perche:"Distacchi, sollevamenti, fughe che si aprono e giunti di frazionamento mancanti sono difetti di posa classici, e questa e' la norma che definisce la regola dell'arte contro cui misurarli (bagnatura del supporto, doppia spalmatura per i grandi formati, giunti di frazionamento e perimetrali)." },
    { n:"uni-11493-2-2016", fase:"esecuzione", perche:"Completa la coppia con la 11493-1: la -1 dice come si posa, la -2 dice chi e' qualificato a posare. Serve quando in perizia si contesta che l'impresa ha impiegato manodopera non qualificata su una posa tecnicamente impegnativa (grandi formati, esterni, piscine, supporti deformabili)." },
    { n:"uni-tr-11715-2018", fase:"esecuzione", perche:"Il cappotto/ETICS mal posato (incollaggio a punti anziche cordolo perimetrale piu punti centrali, tasselli scarsi o affondati male, rasatura sottospessore, rete non sormontata, giunti aperti a spigoli e fori) e un difetto di posa: UNI/TR 11715:2018 e il rapporto tecnico italiano di riferimento che descrive e raccomanda la posa corretta (oltre alla progettazione)." },
    { n:"uni-11716-2018", fase:"esecuzione", perche:"E' la qualificazione degli operatori per il cappotto, gemella della UNI/TR 11715 sul lato persone. Dopo la stagione dei bonus fiscali il contenzioso sui cappotti e' abbondante e questa norma serve a distinguere l'impresa qualificata da quella improvvisata, e a verificare se il caposquadra aveva le competenze che il ruolo richiedeva." },
    { n:"uni-en-13914-1-2016", fase:"esecuzione", perche:"Distacchi, cavillature e sfarinamenti dell'intonaco esterno spesso non sono un problema del prodotto (gia' coperto nel registro dalla UNI EN 998-1) ma della posa: supporto non preparato o non bagnato, spessore fuori norma, strati applicati senza rispettare i tempi di attesa, malta piu' dura del supporto." },
    { n:"uni-en-13914-2-2016", fase:"esecuzione", perche:"Norma esistente e pertinente ai difetti di posa dell'intonaco interno: è il riferimento generale su preparazione del supporto, scelta della malta, strati e spessori, quindi utile per separare il difetto di applicazione da quello di prodotto (specificato dalla UNI EN 998-1)." },
    { n:"uni-en-1504-10-2017", fase:"esecuzione", perche:"UNI EN 1504-10:2017 e la parte della serie EN 1504 dedicata all'applicazione in situ dei prodotti/sistemi di protezione e riparazione del calcestruzzo e al controllo di qualita dei lavori: fissa requisiti su condizione e preparazione del supporto prima e durante l'applicazione, stoccaggio, condizioni di messa in opera, stabilita strutturale durante i lavori e controllo dell'esecuzione." },
    { n:"uni-en-iso-9606-1-2017", fase:"esecuzione", perche:"E' il patentino del saldatore, richiamato dalla UNI EN 1090-2 per l'esecuzione delle strutture in acciaio: e' il tassello qualificazione degli operatori sul lato carpenteria, oggi assente dal registro dove ci sono solo i posatori di membrane (UNI 11333)." },
    { n:"astm-e1105-15-2023-equivalente-e1105-15r", fase:"collaudo", perche:"Prova di campo sull'assemblaggio già installato: applica pioggia e differenza di pressione bagnando anche il giunto di posa e il controtelaio, cosa che le prove di laboratorio sul solo prodotto in cella (es. EN 1027, ASTM E331/E547) non fanno." },
    { n:"uni-en-iso-9972-2015", fase:"collaudo", perche:"Il collaudo con blower door secondo UNI EN ISO 9972 misura la permeabilita' all'aria dell'involucro e restituisce n50/q50: un valore fuori obiettivo documenta in numeri i difetti di posa dei giunti serramento-muro, delle nastrature dei freni al vapore, dei passaggi impiantistici e del nodo tetto-parete." },
    { n:"bs-8000-0-2014-a1-2024", fase:"esecuzione", perche:"BS 8000 è la serie britannica sulla workmanship in cantiere e la Parte 0 ne fissa i principi generali (tolleranze, accuratezza, fit, preparazione dei materiali, interdipendenze tra i mestieri, rimandi Uniclass). È la buona pratica estera di riferimento quando un difetto di posa non è coperto da alcuna UNI." }
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
    { n:"dlgs-101-2020", fase:"collaudo", perche:"La verifica dell'efficacia si fa con la misura della concentrazione media annua, non con la dichiarazione dell'installatore." },
    { n:"uni-en-16516-2020", fase:"prodotti", perche:"Il registro copre l'aria misurata nell'ambiente ma non il metodo con cui si accerta CHI la sporca. Quando in perizia si contesta un picco di COV o formaldeide dopo la posa di pitture, adesivi, resine o pavimentazioni, la prova che il prodotto e la sorgente si fa con questa norma: campione in camera a 23 gradi e 50% UR, lettura a 28 giorni, fattore di emissione." },
    { n:"uni-en-717-1-2004", fase:"prodotti", perche:"E il metodo a camera che misura l'emissione di formaldeide dei pannelli a base di legno e ne verifica la conformita alla classe (E1 minore o uguale a 0,124 mg/m3, circa 0,1 ppm) DEFINITA dalle norme di prodotto (UNI EN 13986, EN 312/622/636)." },
    { n:"uni-en-13986-2004-a1-2015", fase:"prodotti", perche:"La sostanza del collegamento e corretta: EN 13986 (Allegato B) obbliga a dichiarare la classe di emissione formaldeide E1/E2 nella DoP e nella marcatura CE; EN 717-1 e il metodo di prova (camera). Va sistemata solo la gerarchia: da cogente a volontaria." },
    { n:"who-guidelines-for-indoor-air-quality-se", fase:"diagnosi", perche:"Documento OMS 2010, distinto dalla WHO 2009 su umidita e muffe: fissa i valori guida indoor per gli inquinanti chimici (formaldeide 0,1 mg/m3 media 30 min; benzene senza soglia; naftalene, NO2, CO, benzo[a]pirene, radon, tricloro- e tetracloroetilene)." },
    { n:"d-lgs-25-novembre-2022-n-203", fase:"diagnosi", perche:"Citare come testo coordinato: D.Lgs. 101/2020, art. 12, come modificato dal D.Lgs. 203/2022 (in vigore dal 18/01/2023). Non attribuire al correttivo i 300 Bq/m3: la soglia per le abitazioni esistenti (300) e per le nuove (200, dopo il 31/12/2024), e il passaggio da livello di azione a livello di riferimento, erano gia nel testo originale del D.Lgs." },
    { n:"bre-br-211-2023-edition", fase:"progetto", perche:"Il D.Lgs 101/2020 impone il risultato (200 Bq/m3 per le abitazioni costruite dopo il 31/12/2024) ma non dice come costruirlo: manca al registro il riferimento tecnico per il COME progettare la barriera. BR 211 e la guida consolidata su membrana radon-proof, sigillatura delle penetrazioni, sump e depressurizzazione sotto-solaio, vespaio ventilato, con protezione base o completa secondo il rischio del sito, e copre anche gli interventi sull'esistente (ampliamenti e cambi d'uso), che e il caso piu frequente in perizia." },
    { n:"uni-en-15780-2025", fase:"collaudo", perche:"La norma fornisce classi e metodi per valutare/verificare la pulizia delle condotte: in fase di collaudo/verifica serve quando l'impianto e \"a norma sulla carta\" ma si sospetta che le condotte sporche siano la sorgente dell'aria interna scadente." },
    { n:"uni-en-iso-9972-2015", fase:"collaudo", perche:"La norma misura la permeabilita all'aria dell'INTERO involucro a fini termici/energetici (blower door, indice n50); va tolta la pretesa che certifichi la tenuta della membrana o del solaio controterra, cosa che NON fa. Versione corretta: nella famiglia qualita dell'aria interna e gas dal suolo e un test di SUPPORTO, non il collaudo della barriera." },
    { n:"linee-guida-snpa-15-2018", fase:"diagnosi", perche:"SNPA 15/2018 e il riferimento italiano per progettare il monitoraggio dei vapori del sottosuolo (soil gas, misure di flusso da terreno e falda) nella caratterizzazione e analisi di rischio dei siti contaminati (D.Lgs. 152/2006, Parte IV, Titolo V)." },
    { n:"regolamento-ue-2024-3110-del-27-novembre", fase:"prodotti", perche:"Gancio giuridico dell'obbligo di dichiarare le sostanze pericolose emesse dai prodotti: il Requisito di base 3 dell'Allegato I (igiene, salute e ambiente) copre emissioni di sostanze pericolose e COV nell'aria interna, gas tossici e radiazioni; e' il fondamento normativo delle norme armonizzate su cui si costruisce la DoP (in particolare EN 13986; EN 16516 come metodo di prova delle emissioni in aria interna)." }
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
    { n:"iso-16283-serie", fase:"collaudo", perche:"Il collaudo si fa in opera con queste procedure: è il momento in cui il valore dichiarato viene messo alla prova." },
    { n:"dm-16-03-1998", fase:"diagnosi", perche:"Il DM 16/3/1998 e' il protocollo di misura cogente (fonometro classe 1 EN 60651/60804, calibrazione pre/post ciclo con scarto max 0,5 dB, analisi temporale e differenziale) che rende utilizzabili in perizia i limiti del DPCM 14/11/1997 gia' in registro; fase diagnosi." },
    { n:"uni-8199-2016", fase:"collaudo", perche:"Il DPCM 5/12/1997 fissa LASmax 35 dB (discontinui) e LAeq 25 dB (continui) ma solo negli ambienti NON serviti dall'impianto, e non dice come collaudare. La UNI 8199 copre il buco che conta nel contenzioso: il rumore percepito dentro l'ambiente servito, definendo cicli operativi di riferimento e riferimenti contrattuali." },
    { n:"uni-en-iso-16032-2024", fase:"diagnosi", perche:"E' il metodo di riferimento per il rumore impiantistico (dove misurare, come attivare la sorgente, come elaborare) e la sua appendice B definisce i cicli operativi richiamati dalla UNI 8199. ATTENZIONE: l'edizione 2005, ancora citata da molti prontuari online, e' RITIRATA dall'11/04/2024: citarla oggi e' un errore di edizione." },
    { n:"uni-en-iso-10052-2021", fase:"diagnosi", perche:"Metodo di controllo (survey method) per la misura in opera di isolamento acustico aereo, rumore da calpestio e rumorosità degli impianti. Copre gli impianti, che la serie 16283 (aereo, calpestio, facciata) non tratta. È un metodo semplificato, di rango inferiore ai metodi di ingegneria (16283 e, per la sola rumorosità impianti, UNI EN ISO 16032)." },
    { n:"uni-en-iso-12999-1-2021", fase:"collaudo", perche:"E' la norma che manca per chiudere un collaudo in contraddittorio. La UNI 11367:2023 gia' collegata adotta una regola di conformita' che poggia sull'incertezza: un R'w misurato 49 dB contro un limite di 50 dB si difende (o si demolisce) solo dichiarando l'incertezza estesa secondo la 12999-1." },
    { n:"uni-11175-1-2024", fase:"progetto", perche:"La UNI 11175-1:2024 declina il metodo previsionale della serie EN 12354 sulla tipologia costruttiva nazionale (laterizio, latero-cemento). A progetto serve a stimare le prestazioni acustiche attese; in perizia il confronto tra previsione corretta e misura in opera aiuta a distinguere errore di calcolo da difetto di posa." },
    { n:"uni-11175-2-2024", fase:"progetto", perche:"In perizia il punto debole del calcolo previsionale non e' la formula ma i dati di ingresso: massa superficiale, Rw di catalogo, indici di riduzione dei giunti. La Parte 2 stabilisce quali dati sono ammissibili e come trattarli, ed e' l'appiglio per contestare una relazione previsionale costruita su dati di prodotto non pertinenti." },
    { n:"uni-11532-1-2018", fase:"progetto", perche:"La Parte 1 e' il tronco generale della serie: il suo campo di applicazione include esplicitamente sanita', uffici open space, ristorazione, sport, terziario e industria, definisce i descrittori comuni (tempo di riverberazione, STI, chiarezza) e indica i valori di riferimento per destinazione d'uso." },
    { n:"uni-11516-1-2025", fase:"esecuzione", perche:"Il difetto di calpestio piu' frequente non e' di prodotto ma di posa: risvolto perimetrale mancante o tagliato a filo massetto, ponti acustici del battiscopa, resiliente interrotto alle tubazioni. Questa e' la norma che fissa la regola dell'arte e consente di imputare lo scarto fra L'nw di progetto e misurato all'esecutore." },
    { n:"uni-en-iso-10140-1-2021-2-3-4-5", fase:"prodotti", perche:"Da qui vengono i valori dichiarati a catalogo (Rw, DeltaLw) che il costruttore esibisce per sostenere di aver posato il prodotto giusto. Serve in perizia proprio per smontare l'equivoco: la 10140 misura con trasmissione laterale SOPPRESSA, quindi il dato di laboratorio non e' trasferibile in opera senza il passaggio per la 12354." },
    { n:"uni-en-29052-1-1993", fase:"prodotti", perche:"La rigidita' dinamica s' e' l'input critico della 12354-2 per il calpestio: piu' s' e' bassa, piu' isola. In perizia spiega i fallimenti reali del L'nw quando il resiliente e' stato scelto per spessore anziche' per s', o e' stato schiacciato dal massetto e ha perso la prestazione dichiarata." },
    { n:"uni-en-iso-10848-1-2017-e-uni-en-iso-108", fase:"prodotti", perche:"Fornisce i Dn,f e gli indici di riduzione dei giunti K_ij che la serie 12354 richiede in ingresso. La trasmissione laterale e' la causa piu' frequente dello scarto fra un Rw di progetto rispettato sulla carta e un R'w bocciato in opera (controsoffitto continuo, massetto passante, facciata leggera che scavalca il divisorio)." },
    { n:"uni-en-12354-5-2023", fase:"progetto", perche:"Il registro ha la serie 12354 solo fino alla -4: manca proprio la parte che previene il difetto piu' litigato, il rumore impiantistico. Chiude il cerchio con la 16032 (misura) e la 8199 (collaudo). DOPPIA TRAPPOLA: la designazione corretta e' UNI EN 12354-5, NON 'UNI EN ISO 12354-5' (a differenza delle parti 1-4, la 5 non e' EN ISO); e l'edizione 2009 e' RITIRATA dal 26/10/2023." },
    { n:"uni-en-12354-6-2006", fase:"progetto", perche:"E' l'anello mancante fra il riverbero misurato (3382-2, gia' presente) e i valori richiesti (11532): la norma con cui si PREVEDE il T di progetto e si dimostra che il riverbero eccessivo era calcolabile prima di costruire. TRAPPOLA di sigla: e' UNI EN 12354-6, NON 'UNI EN ISO 12354-6'; verificata IN VIGORE (dal 28/03/2006), non ritirata." },
    { n:"uni-en-iso-3382-1-2009", fase:"diagnosi", perche:"Il registro ha solo la 3382-2, che per esplicito ambito riguarda gli ambienti ORDINARI (case, uffici, aule, palestre). Usarla per un teatro, un auditorium o una sala conferenze e' una citazione fuori ambito: li' serve la -1, che misura anche EDT, C80, D50, i parametri di cui si discute quando il difetto contestato e' l'intelligibilita' e non il solo T." }
  ]},

/* ---- 37 ----------------------------------------------------------------- */
{ fam:"Danno da incendio (valutazione post-fuoco)", slug:"incendio", stato:"parziale",
  nota:"Censite le norme di valutazione della resistenza residua post-fuoco, gli Eurocodici parte fuoco e le prove sul calcestruzzo danneggiato. Copertura ancora parziale.",
  voci:[
    { n:"en-12504-2", fase:"diagnosi", perche:"Stima non distruttiva della resistenza superficiale residua del calcestruzzo. Serve, ma NON copre la valutazione post-fuoco, che ha metodi propri." },
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente per la verifica della sicurezza dopo il danno." },
    { n:"uni-en-1992-1-2-2024", fase:"progetto", perche:"Pertinente, ma è una norma di progettazione della resistenza al fuoco, non un protocollo di valutazione post-incendio: fornisce gli ingredienti (profili termici di sezione per fuoco standard e leggi di riduzione dei materiali con la temperatura), che il perito usa per stimare la capacità residua." },
    { n:"uni-en-1991-1-2-2024", fase:"diagnosi", perche:"EN 1991-1-2 e norma di PROGETTAZIONE e nel suo scopo (1.1) esclude la valutazione del danno dopo l'incendio. Il suo apporto in diagnosi e mirato: fornisce i modelli di azione termica (curve nominali e, soprattutto, incendi naturali/parametrici e localizzati Locafi ricavati dal carico d'incendio e dal fattore di ventilazione rilevati) per ricostruire una storia termica approssimata del compartimento." },
    { n:"concrete-society-technical-report-tr68-2", fase:"diagnosi", perche:"E il riferimento piu completo esistente sul tema specifico di questa famiglia, e oggi manca del tutto al registro. Copre esattamente cio che serve in perizia: classificazione dei livelli di danno, effetti del fuoco sui materiali, scelta e interpretazione combinata delle prove, criteri di riparabilita, progetto degli elementi ripristinati secondo gli Eurocodici, prove di carico e casi studio." },
    { n:"fib-bulletin-46-2008", fase:"progetto", perche:"Dichiara esplicitamente fra i propri obiettivi l'analisi e la riparazione delle strutture esistenti danneggiate da incendio, non solo il progetto del nuovo. Serve soprattutto per un punto che in perizia si sbaglia spesso: le azioni indirette da deformazioni termiche impedite e l'effetto di un incendio locale sul comportamento globale della struttura, cioe il danno lontano dal focolaio." },
    { n:"uni-en-13791-2019", fase:"collaudo", perche:"UNI EN 13791 è la norma GENERALE (non specifica del danno da incendio) per stimare la resistenza a compressione in sito e ricavarne la resistenza caratteristica in opera fck,is da carote e da metodi indiretti calibrati (sclerometro, ultrasuoni)." },
    { n:"uni-en-12504-1-2021-recepisce-en-12504-1", fase:"diagnosi", perche:"Nel post-incendio il carotaggio è accertamento centrale (Concrete Society TR68): fornisce il provino per la resistenza residua e per l'esame petrografico della profondità di danno, e UNI EN 12504-1 ne regola prelievo, esame e prova di compressione, complemento procedurale di UNI EN 13791 che la richiama." },
    { n:"uni-en-12504-4-2021", fase:"diagnosi", perche:"Tra le prove non distruttive piu usate in perizia per stimare la profondita del danno da fuoco: la microfessurazione da shock termico abbassa in modo netto la velocita ultrasonica. Con la trasmissione indiretta (sonda emittente fissa e ricevente spostata a distanze crescenti, tempo di volo riportato in funzione della distanza) si individua lo spessore dello strato superficiale degradato, uso previsto dalla norma stessa." },
    { n:"rilem-tc-200-htc-2007", fase:"diagnosi", perche:"RILEM TC 200-HTC (2007) formalizza metodi di prova e relazioni proprieta-temperatura del calcestruzzo distinguendo lo stato a caldo dallo stato residuo dopo raffreddamento. Per la valutazione post-fuoco sono pertinenti le relazioni residue, che non coincidono con le curve di riduzione a caldo del progetto al fuoco (EN 1992-1-2): il calcestruzzo raffreddato puo risultare piu debole." },
    { n:"astm-c856-c856m-25", fase:"diagnosi", perche:"L'esame petrografico secondo ASTM C856 è uno dei metodi di riferimento (non l'unico) per diagnosticare il danno da incendio sul calcestruzzo: al microscopio evidenzia disidratazione della portlandite, alterazione e decolorazione degli aggregati, microfessurazione e fronte di cottura, e stima per via mineralogica la temperatura raggiunta alle varie profondità, distinguendo il danno termico da degradi preesistenti." },
    { n:"uni-en-iso-15630-1-2019", fase:"diagnosi", perche:"La resistenza residua si quantifica prelevando spezzoni di barra e provandoli a trazione a temperatura ambiente secondo i metodi di questa norma, che è il riferimento generale di prova per le barre (non una norma antincendio); durezza e microstruttura possono orientare, ma la prova sullo spezzone è la via definitiva." },
    { n:"dm-9-marzo-2007", fase:"progetto", perche:"Decreto reale e vigente, ma con ambito residuale. Dopo il DM 12 aprile 2019 (fine del doppio binario, in vigore dal 20/10/2019) la classe di resistenza al fuoco richiesta si determina, per la gran parte delle attivita' soggette a controllo VVF non normate, con il Codice di Prevenzione Incendi (DM 3 agosto 2015, Cap." },
    { n:"dm-16-febbraio-2007", fase:"prodotti", perche:"Decreto cogente che fissa i metodi ammessi per classificare la resistenza al fuoco (tabellare, sperimentale, analitico) e per la via analitica rinvia agli Eurocodici (All. C). Per la famiglia \"danno da incendio\" il rilievo è indiretto, di cornice: non disciplina la valutazione del danno post-fuoco, ma impone che la verifica analitica usi gli Eurocodici e che UNI 9502/9503/9504 non siano più ammesse a tale scopo." },
    { n:"dm-3-agosto-2015", fase:"progetto", perche:"Nella fase di progetto del ripristino, e limitatamente alle attivita soggette ai controlli di prevenzione incendi (DPR 151/2011), il Codice e il quadro prestazionale cogente: la Sezione S.2 definisce i 5 livelli di resistenza al fuoco (I-V) e i criteri di attribuzione che l'opera ripristinata deve raggiungere." },
    { n:"uni-en-1504-9-2009", fase:"progetto", perche:"UNI EN 1504-9 non menziona l'incendio: è il quadro metodologico generale della serie EN 1504 per la riparazione del calcestruzzo. Obbliga ad accertare causa ed evoluzione del difetto prima di scegliere uno degli 11 principi di riparazione, e in questo la distinzione tra evento concluso (incendio) e processo attivo (corrosione) è corretta." },
    { n:"uni-en-1504-3-2006", fase:"prodotti", perche:"La riparazione post-incendio consiste materialmente nell'asportare il copriferro cotto e ricostruire la sezione: questa e la norma che qualifica il prodotto con cui la si ricostruisce, e la distinzione R4/R3 contro R2/R1 e la linea fra ripristino strutturale e semplice rappezzo estetico." },
    { n:"uni-en-1993-1-2-2024", fase:"progetto", perche:"UNI EN 1993-1-2:2024 è il codice di progettazione della resistenza al fuoco delle strutture di acciaio: fornisce metodi e coefficienti di riduzione delle proprietà meccaniche dell'acciaio alle alte temperature per la sola situazione di incendio (a caldo)." },
    { n:"uni-en-1996-1-2-2024", fase:"progetto", perche:"UNI EN 1996-1-2:2024 e la norma di riferimento per la progettazione strutturale della muratura in situazione d'incendio (fase progetto): da resistenze al fuoco tabellate e metodi di calcolo e classifica i muri in portante/non portante e con/senza funzione separante (compartimentazione)." }
  ]},

/* ---- 38 ----------------------------------------------------------------- */
{ fam:"Sistemi fotovoltaici integrati (BIPV)", slug:"bipv", stato:"parziale",
  nota:"Prime norme censite (moduli e sistemi FV integrati, sicurezza elettrica e vetro strutturale). Copertura ancora parziale.",
  voci:[
    { n:"cei-en-50583-1-2016", fase:"prodotti", perche:"E la norma che distingue BIPV da BAPV: se il modulo e integrato, il suo cedimento non e solo un guasto elettrico ma un difetto dell'involucro. In perizia serve per stabilire quali requisiti CPR il modulo doveva soddisfare (es. categoria di montaggio sopratesta implica vetro stratificato e verifica di caduta frammenti)." },
    { n:"cei-en-50583-2-2016", fase:"progetto", perche:"La Parte 1 (CEI EN 50583-1) qualifica il modulo BIPV come prodotto da costruzione ma non copre il montaggio; la Parte 2 disciplina il sistema nel modo in cui e integrato: ancoraggi e stabilita meccanica, tenuta all'acqua e all'aria, dilatazioni, sicurezza al fuoco." },
    { n:"iec-63092-1-2020", fase:"prodotti", perche:"IEC 63092-1:2020 ed EN 50583-1:2016 coesistono (la IEC deriva dalla EN 50583-1): un modulo BIPV puo essere valutato conforme all'una o all'altra, quindi in perizia va letto quale norma la dichiarazione o il certificato del fabbricante richiama davvero, altrimenti il rilievo cade." },
    { n:"iec-63092-2-2020", fase:"progetto", perche:"Parte 2 della serie 63092: norma di SISTEMA e struttura di montaggio (la Parte 1, 63092-1, riguarda il modulo). Riferimento corretto quando il difetto è nella sottostruttura (fissaggi, dilatazione, ventilazione retrostante) e il modulo è integro." },
    { n:"en-iec-61215-1-2021-in-italia-cei-en-iec", fase:"prodotti", perche:"E il metro con cui si giudica se una delaminazione, un ingiallimento dell'incapsulante o un decadimento di potenza sono degrado anomalo o invecchiamento atteso. Attenzione: la 61215 qualifica il modulo in aria libera, non il modulo integrato con ventilazione retrostante ridotta, dove le temperature d'esercizio sono piu alte di quelle di prova." },
    { n:"iec-61730-1-2023", fase:"prodotti", perche:"Norma di prodotto per la qualifica di sicurezza costruttiva del modulo FV (prevenzione di shock elettrico, rischio meccanico e rischio d'incendio ottenuta per via costruttiva). E la Parte 1 (costruzione): il test al fuoco NON e in questa parte ma nella Parte 2." }
  ] },

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
    { n:"ntc-2018", fase:"progetto", perche:"Quadro cogente, incluse le verifiche degli elementi non strutturali." },
    { n:"uni-11424-2015", fase:"esecuzione", perche:"La famiglia oggi ha solo riferimenti strutturali e un lessico di degrado lapideo, ma il tramezzo moderno più diffuso è il cartongesso e la sua patologia tipica è la fessura al giunto fra lastre o al raccordo con la struttura. La 11424 fissa orditure, giunti e i livelli di qualità superficiale Q1-Q4 in relazione alla finitura e alla luce radente: è il metro per stabilire se il difetto è vizio di posa o assestamento della struttura, che è esattamente il contendere in causa." },
    { n:"uni-en-845-1-2016-recepisce-en-845-1-201", fase:"prodotti", perche:"La 845-1 è la norma di prodotto (marcatura CE) dei componenti accessori che collegano la muratura al resto della struttura: connettori/cravatte, tiranti a nastro (incatenamenti), ganci e mensole. In perizia sulla famiglia tramezzi/tamponamenti serve a verificare se i collegamenti tra tamponamento e telaio fossero presenti, marcati CE e con prestazioni dichiarate idonee, o (più spesso) del tutto assenti." }
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
