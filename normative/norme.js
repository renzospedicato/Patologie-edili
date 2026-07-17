/* ============================================================================
   NORMATIVE, strato dati 1 di 2: REGISTRO DELLE NORME
   ----------------------------------------------------------------------------
   Ogni voce è una norma/decreto/linea guida VERIFICATA nei registri di lavoro
   già costruiti (audit citazioni Mixando, memorie di progetto, mx-biblio.js).
   NIENTE INVENZIONI: se una voce non ha una verifica tracciabile, resta fuori
   oppure entra marcata "conf" (da confermare).

   Campi:
     id        slug stabile (non rinominare: i mapping ci puntano)
     sigla     come si cita
     titolo    titolo/oggetto della norma
     cosa      cosa copre, in una riga
     naz       nazionalita': "it" (bandierina tricolore) | "int" (internazionale)
                 it  = legge/decreto/DM/DPCM/DPR/D.Lgs italiano, norma regionale o
                       comunale, UNI puramente nazionale (UNI + numero, es. UNI 11085)
                 int = EN / ISO / EN ISO (anche se recepite come UNI EN), piu'
                       BS, DIN, WTA, NIT, ASTM, BRE, ICOMOS, ASHRAE, WHO, ICRP
     ger       gerarchia: "cogente" | "volontaria" | "estera"
                 cogente   = legge, decreto, DM, DPCM, DPR, D.Lgs (obbligo)
                 volontaria= UNI / EN / ISO (adozione volontaria salvo richiamo)
                 estera    = BS, DIN, WTA, NIT, ASTM, EAD, BRE, ARPAT, ICOMOS
                             (buona pratica / linea guida, nessuna cogenza IT)
     stato     "vigente" | "ritirata" | "in-ritiro"
     statoNota nota sullo stato (data ritiro, cosa la sostituisce)
     aff       affidabilità del dato: "ok" (verificato) | "conf" (da confermare)
     ambito    (opz) precisazione sul campo di applicazione / cautela peritale
     fonte     da dove viene la verifica (registro + data)
     tag       domini a cui si applica (chiave per i mapping)
   ============================================================================ */

window.NORME = [

/* === QUADRO COGENTE GENERALE ============================================== */
{ id:"ntc-2018", sigla:"NTC 2018 (DM 17/01/2018)", titolo:"Norme Tecniche per le Costruzioni",
  cosa:"Quadro cogente per sicurezza strutturale, azioni, materiali e verifiche; rinvia a UNI EN 206 + UNI 11104 per le classi di esposizione (punto 11.2.11).",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  ambito:"Riferimento quadro; il dettaglio strutturale sta negli Eurocodici e nella Circolare applicativa 2019.",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026) + audit suite",
  tag:["strutture","fessure","cls","interrati","sisma"] },

{ id:"eurocodici", sigla:"UNI EN 1990 ... 1998 (Eurocodici)", titolo:"Eurocodici strutturali (basi, azioni, cls, acciaio, muratura, geotecnica, sisma)",
  cosa:"Serie europea di calcolo strutturale; EC2 cls, EC3 acciaio, EC6 muratura, EC7 geotecnica, EC8 sisma. Richiamati dalle NTC.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Richiamati come riferimento dalle NTC 2018; alcune parti in revisione (2a generazione).", aff:"ok",
  ambito:"Voce quadro: le singole parti/paragrafi vanno citati puntualmente quando servono.",
  fonte:"Registro audit citazioni suite (mappa-indagini, fessurazioni)",
  tag:["strutture","fessure","cls","acciaio","muratura","sisma","interrati"] },

{ id:"dpr-380-2001", sigla:"DPR 380/2001", titolo:"Testo unico dell'edilizia",
  cosa:"Disciplina l'attività edilizia (titoli abilitativi, agibilità, requisiti). Rinvia a regolamenti edilizi e d'igiene comunali per molti requisiti igienico-sanitari.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (10/06/2026)",
  tag:["vespai","umidita","generale"] },

{ id:"dm-5-7-1975", sigla:"DM 5/7/1975", titolo:"Requisiti igienico-sanitari principali dei locali di abitazione",
  cosa:"Altezze minime, superfici, aeroilluminazione, dotazioni degli alloggi. NON disciplina i vespai (solo 9 articoli, nessun riferimento al vespaio).",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"Deroga fino a 10 cm alle altezze minime introdotta dal DM 28/10/2025 per isolamento interno/pannelli radianti in ristrutturazione.", aff:"ok",
  ambito:"Attenzione: spesso citato a torto come fonte del vespaio aerato; il vespaio sta nei regolamenti d'igiene comunali.",
  fonte:"Registro vespai-norme-regioni (verifica avversariale 18/06/2026)",
  tag:["vespai","umidita","generale"] },

{ id:"dm-28-10-2025", sigla:"DM 28/10/2025", titolo:"Requisiti minimi di prestazione energetica degli edifici",
  cosa:"Nuovo decreto Requisiti Minimi (sostituisce DM 26/06/2015). All.1 punto 2.3 codifica la verifica di condensazione interstiziale (nessun residuo a fine ciclo annuale, 13788+10211) e deroga altezze (10 cm) per isolamento interno.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"GU n.283 del 05/12/2025, in vigore dal 03/06/2026 (transitorio 180 gg).", aff:"ok",
  fonte:"Registro articolo-condensa-interstiziale + recupero-app4 (letto su GU)",
  tag:["condensa","termoigrometria","generale"] },

/* === CAM (appalti pubblici) =============================================== */
{ id:"cam-2025", sigla:"CAM Edilizia, DM 24/11/2025", titolo:"Criteri Ambientali Minimi per l'edilizia",
  cosa:"Requisiti ambientali per gli appalti pubblici. Criterio 2.3.11 prevenzione radon (obiettivo 200 Bq/m3); criterio 2.3.13 risanamento umidità di risalita su diagnosi documentata (UNI 11085, BRE 245, BS 6576, WTA).",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"GU n.281 del 03/12/2025, obbligo dal 02/02/2026. Sostituisce il DM 23/06/2022.", aff:"ok",
  ambito:"Cogente negli appalti pubblici; non fissa copriferro né classi di esposizione.",
  fonte:"Registri radon-legenda-foto + norme-calcestruzzo-interrati (verifica GU)",
  tag:["radon","risalita","sali","umidita","asciugatura","interrati","generale"] },

/* === UMIDITA', MISURA E DIAGNOSI ========================================== */
{ id:"uni-11085-2003", sigla:"UNI 11085:2003", titolo:"Beni culturali. Materiali lapidei. Contenuto d'acqua: metodo ponderale",
  cosa:"Misura gravimetrica del contenuto d'acqua per essiccazione a 110 gradi C (pesata umido/secco). Metodo di laboratorio.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  ambito:"Campo ufficiale beni culturali/lapidei; il metodo ponderale è fisicamente generale ma la norma è scoped lì.",
  fonte:"Registro uni-umidità-verificate (catalogo UNI, 09/06/2026)",
  tag:["umidita","risalita","sali","asciugatura"] },

{ id:"uni-11086-2003", sigla:"UNI 11086:2003", titolo:"Beni culturali. Materiali lapidei. Contenuto d'acqua di equilibrio",
  cosa:"Determinazione del contenuto d'acqua di equilibrio dei materiali lapidei.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro uni-umidità-verificate (catalogo UNI, 09/06/2026)",
  tag:["umidita","asciugatura"] },

{ id:"uni-11121-2004", sigla:"UNI 11121:2004", titolo:"Beni culturali. Contenuto d'acqua in campo: metodo al carburo di calcio",
  cosa:"Misura in situ del contenuto d'acqua col metodo al carburo di calcio (Hoechst).",
  ger:"volontaria", naz:"it", stato:"ritirata", statoNota:"RITIRATA il 03/04/2025 senza sostituzione (verificato store.uni.com). In perizia: non più valida, resta riferimento metodologico storico.", aff:"ok",
  ambito:"Se citata come vigente da terzi, è un errore: ritirata.",
  fonte:"Registri uni-umidità-verificate + audit-citazioni-8-moduli (10/06/2026)",
  tag:["umidita","risalita","asciugatura"] },

{ id:"en-16682-2017", sigla:"UNI EN 16682:2017", titolo:"Misura del contenuto di umidità nei materiali del patrimonio costruito",
  cosa:"Guida ai metodi di misura dell'umidità in legno e muratura: quattro metodi assoluti e tre relativi.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (verificato) + registro risalita-citazioni-audit",
  tag:["umidita","risalita","asciugatura","sali"] },

{ id:"en-16322-2013", sigla:"UNI EN 16322:2013", titolo:"Determinazione delle proprietà di asciugatura",
  cosa:"Metodo per il comportamento di asciugatura dei materiali inorganici porosi.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (verificato, CEN/TC 346)",
  tag:["asciugatura","umidita"] },

{ id:"iso-6781-1-2023", sigla:"UNI EN ISO 6781-1:2023", titolo:"Prestazione degli edifici. Metodi a infrarossi. Parte 1",
  cosa:"Termografia dell'involucro edilizio per rilevare irregolarità termiche, tenuta all'aria e umidità.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Supera la UNI EN 13187 (ritirata 16/11/2023).", aff:"ok",
  fonte:"Registro _AUDIT-NORME_20260617 (iso.org, std 79848)",
  tag:["umidita","termoigrometria","infiltrazioni","condensa"] },

{ id:"bs-6576", sigla:"BS 6576:2005+A1:2012", titolo:"Diagnosis of rising damp and installation of chemical damp-proof courses",
  cosa:"Procedura britannica di diagnosi della risalita capillare e posa di barriere chimiche.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (BSI) + registro articolo-cura-risalita",
  tag:["risalita","umidita"] },

{ id:"bs-5250-2021", sigla:"BS 5250:2021", titolo:"Management of moisture in buildings. Code of practice",
  cosa:"Gestione integrata dell'umidità negli edifici: condensa interstiziale e superficiale, pioggia, acqua di falda.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (BSI)",
  tag:["umidita","condensa","infiltrazioni","asciugatura"] },

{ id:"bre-245", sigla:"BRE Digest 245", titolo:"Rising damp in walls: diagnosis and treatment",
  cosa:"Guida BRE alla diagnosi e al trattamento della risalita nelle murature.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registri articolo-cura-risalita + CAM 2.3.13 (citata come riferimento)",
  tag:["risalita","umidita"] },

{ id:"wta-4-10", sigla:"WTA 4-10:2024 (già 4-4-04/D)", titolo:"Iniezione contro la risalita capillare",
  cosa:"Procedimenti di iniezione con prodotti certificati contro il trasporto capillare; opera fino a grado di saturazione (Durchfeuchtungsgrad) minore o uguale al 95%.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Ed. 2024-03, supera la WTA 4-4-04/D (che resta riferimento storico).", aff:"ok",
  ambito:"Il grado di saturazione NON è il contenuto d'acqua in massa: non confondere il criterio 95% con una soglia di umidità in massa.",
  fonte:"Registri risalita-citazioni-audit + sapere-storia-recupero (verifica DIN Media/WTA)",
  tag:["risalita","umidita"] },

{ id:"wta-4-7-02", sigla:"WTA 4-7-24/D (gia 4-7-02/D)", titolo:"Taglio meccanico della muratura (barriera orizzontale)",
  cosa:"Regola tecnica per l'inserimento di una barriera orizzontale per via meccanica (sega, filo, lamiere).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Ed. 2024-04 (barriera orizzontale meccanica), supera la 4-7-02/D e la 4-7-15/D.", aff:"ok",
  fonte:"Registro sapere-storia-recupero (propagazione WTA 16/06/2026)",
  tag:["risalita","umidita"] },

{ id:"nit-252", sigla:"NIT 252 (CSTC/WTCB)", titolo:"Umidita' ascendente nelle murature: diagnosi e trattamento (Belgio)",
  cosa:"Nota di informazione tecnica belga sulla risalita: diagnosi e famiglie di trattamento.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Sostituisce la NIT 210 (non la NIT 162, che è del 1985 ed è un'altra nota).", aff:"ok",
  fonte:"Registro articolo-cura-risalita (16/07/2026)",
  tag:["risalita","umidita"] },

{ id:"emerisda", sigla:"EMERISDA (progetto europeo, D-2.1)", titolo:"Effectiveness of methods against rising damp",
  cosa:"Classificazione europea dei metodi contro la risalita e valutazione della loro efficacia sul campo.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"È un progetto di ricerca, non una norma: usare come rassegna dell'efficacia.", aff:"ok",
  fonte:"Registro articolo-cura-risalita (classificazione 8 famiglie)",
  tag:["risalita","umidita"] },

{ id:"bs-8104", sigla:"BS 8104:1992", titolo:"Assessing exposure of walls to wind-driven rain",
  cosa:"Metodo per valutare l'esposizione di una parete alla pioggia battente (wind-driven rain).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Edizione unica 1992; catalogo BSI \"Current, Under Review\".", aff:"ok",
  fonte:"Registro sapere-storia-recupero (libri.html, verifica avversariale 16/06/2026)",
  tag:["infiltrazioni","umidita","agenti-esterni"] },

{ id:"en-16302-2013", sigla:"UNI EN 16302:2013", titolo:"Conservazione. Misura dell'assorbimento d'acqua con il tubo di Karsten",
  cosa:"Misura in sito dell'assorbimento d'acqua di una superficie con il tubo di Karsten (pipe method).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (nota trasversale, confermata)",
  tag:["infiltrazioni","umidita","degrado-materico"] },

{ id:"wta-4-5-99", sigla:"WTA 4-5-99/D", titolo:"Valutazione e diagnostica della muratura umida",
  cosa:"Procedura standardizzata di diagnostica della muratura (umidità, sali, danni) come base del progetto di risanamento.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Ed. 1999-09 (rev. 2015).", aff:"ok",
  fonte:"mx-biblio.js (WTA)",
  tag:["risalita","sali","umidita"] },

{ id:"albanesi-asciugatura", sigla:"Albanesi 1982 (t = P x s2)", titolo:"Stima del tempo di asciugatura delle murature",
  cosa:"Relazione empirica per stimare il tempo di asciugatura dallo spessore pieno e dal tipo di materiale (P). Riferimento di letteratura, non norma.",
  ger:"estera", naz:"it", stato:"vigente", statoNota:"Metodo empirico di letteratura (Albanesi 1982, non norma di catalogo), tuttora citabile; la vecchia attribuzione \"Kettenacker\" era errata.", aff:"ok",
  ambito:"Non è una norma: è un modello di letteratura, da dichiarare come tale.",
  fonte:"Registro articolo-cura-risalita (ricontrollo 16/07/2026)",
  tag:["asciugatura","risalita"] },

/* === SALI ================================================================= */
{ id:"uni-11087-2003", sigla:"UNI 11087:2003", titolo:"Beni culturali. Materiali lapidei. Contenuto di sali solubili",
  cosa:"Metodologia analitica per i sali solubili nei materiali porosi inorganici.",
  ger:"volontaria", naz:"it", stato:"ritirata", statoNota:"RITIRATA il 29/09/2016 senza sostituzione. Per i sali usare EN 16455:2014. EN 16455 NON sostituisce la 11087.", aff:"ok",
  fonte:"Registri uni-umidità-verificate + risalita-citazioni-audit",
  tag:["sali","umidita"] },

{ id:"en-16455-2014", sigla:"UNI EN 16455:2014", titolo:"Estrazione e determinazione dei sali solubili nella pietra naturale",
  cosa:"Analisi qualitativa e quantitativa di anioni e cationi dei sali solubili (beni culturali).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"È analisi dei sali, non trattamento.", aff:"ok",
  fonte:"mx-biblio.js (CEN/TC 346) + registro risalita-citazioni-audit",
  tag:["sali"] },

{ id:"en-12370-2020", sigla:"UNI EN 12370:2020", titolo:"Resistenza alla cristallizzazione dei sali (pietra naturale)",
  cosa:"Prova di resistenza alla cristallizzazione dei sali su pietre con porosità aperta > 5%, per cicli di immersione e asciugatura.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (verificato)",
  tag:["sali"] },

{ id:"en-772-5-2016", sigla:"UNI EN 772-5:2016", titolo:"Contenuto di sali solubili attivi negli elementi di laterizio",
  cosa:"Determinazione dei sali solubili attivi (Mg, Na, K) negli elementi di muratura di laterizio.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (verificato)",
  tag:["sali"] },

{ id:"wta-2-9-20", sigla:"WTA 2-9-20/D", titolo:"Sistemi di intonaco di risanamento (Sanierputz)",
  cosa:"Specifiche per intonaci di risanamento su murature salinizzate; soglie WTA di carico sali bassa/media/alta.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + registro articolo-cura-risalita",
  tag:["sali","risalita"] },

{ id:"en-998-1-2016", sigla:"UNI EN 998-1:2016", titolo:"Malte da intonaco (incl. malta da risanamento R)",
  cosa:"Specifica delle malte da intonaco: classi GP, LW, CR, OC, R (risanamento murature umide con sali), T (termoisolante).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"I requisiti prestazionali dell'intonaco R sono attribuibili alla WTA 2-9-20/D, non ai numeri della 998-1.", aff:"ok",
  fonte:"mx-biblio.js + registro articolo-cura-risalita",
  tag:["sali","risalita"] },

/* === CONDENSA E IGROTERMIA ================================================ */
{ id:"iso-13788-2013", sigla:"UNI EN ISO 13788:2013", titolo:"Condensa superficiale e interstiziale (metodo Glaser)",
  cosa:"Calcolo del rischio di condensa superficiale (fRsi) e interstiziale (Glaser su 12 mesi, rievaporazione + limiti NA.2).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Verificata formula per formula su testo primario (asciugatura P3.A).", aff:"ok",
  ambito:"La soglia fRsi >= 0,72 è riferimento operativo della norma, non valore di legge dei DM.",
  fonte:"Registro asciugatura-report-p1 (PDF norma) + mx-biblio.js",
  tag:["condensa","termoigrometria"] },

{ id:"en-15026-2023", sigla:"UNI EN 15026:2023", titolo:"Simulazione numerica del trasferimento di umidità",
  cosa:"Modello per la simulazione igrotermica transitoria attraverso strutture multistrato (base WUFI).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Supera EN 15026:2007.", aff:"ok",
  fonte:"mx-biblio.js + registro _AUDIT-NORME_20260617",
  tag:["condensa","termoigrometria","asciugatura"] },

{ id:"uni-10351-2021", sigla:"UNI 10351:2021", titolo:"Materiali per edilizia. Proprieta' termoigrometriche",
  cosa:"Database di conducibilità termica lambda e permeabilità al vapore mu dei materiali edilizi italiani.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + registro asciugatura-report-p1 (PDF norma)",
  tag:["condensa","termoigrometria"] },

{ id:"uni-10349-1-2016", sigla:"UNI 10349-1:2016", titolo:"Riscaldamento e raffrescamento. Dati climatici (medie mensili)",
  cosa:"Medie mensili di temperatura e pressione di vapore esterne, per la verifica igrotermica.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"È la Parte 1 (medie mensili). La Parte 3 sono gradi giorno/indici sintetici, spesso citata a torto.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (10/06/2026)",
  tag:["condensa","termoigrometria"] },

{ id:"iso-6946-2018", sigla:"UNI EN ISO 6946:2018", titolo:"Resistenza termica e trasmittanza dei componenti opachi",
  cosa:"Metodo di calcolo di resistenza termica e trasmittanza U dei componenti edilizi.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro AUDIT-CITAZIONI (nota trasversale, confermata)",
  tag:["condensa","termoigrometria"] },

{ id:"iso-7730-2026", sigla:"UNI EN ISO 7730:2026", titolo:"Benessere termico (indici PMV e PPD)",
  cosa:"Modello PMV/PPD di Fanger e criteri di discomfort locale.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"In vigore dal 19/02/2026, recepisce ISO 7730:2025, sostituisce la :2006.", aff:"ok",
  fonte:"Registri recupero-app4 + _AUDIT-NORME_20260617",
  tag:["termoigrometria","iaq","microclima"] },

{ id:"wta-6-2", sigla:"WTA 6-2-25/D", titolo:"Simulazione del comportamento igrotermico di componenti",
  cosa:"Regola tecnica per la simulazione igrotermica accoppiata calore/umidità dei componenti edilizi.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Sigla aggiornata (ex 6-2-14/E).", aff:"conf",
  ambito:"Sigla/edizione da riscontrare sul catalogo WTA al momento dell'uso peritale.",
  fonte:"Registro audit-citazioni-8-moduli (Tier 2)",
  tag:["condensa","termoigrometria"] },

/* === MUFFE E BIODETERIOGENI =============================================== */
{ id:"iso-16000-serie", sigla:"Serie ISO 16000 (aria interna)", titolo:"Aria in ambienti confinati: campionamento e analisi",
  cosa:"Metodi per COV (16000-6), aldeidi, muffe (16000-16/-17/-18/-19/-21), strategia di campionamento.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"16000-6 è adozione ISO diretta (UNI ISO 16000-6:2025, senza EN); 16000-16 coltura, 16000-20 conta microscopica.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli + mx-biblio.js",
  tag:["iaq","biodeteriogeni"] },

{ id:"lim-sedlbauer", sigla:"LIM (Sedlbauer 2001) / Hukka-Viitanen 1999", titolo:"Modelli predittivi di crescita delle muffe",
  cosa:"Isopleta più bassa di crescita (LIM) e Mould Index 0-6, base degli algoritmi WUFI Bio.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Riferimenti di letteratura peer-reviewed, non norme.", aff:"ok",
  fonte:"mx-biblio.js (verificato)",
  tag:["biodeteriogeni","termoigrometria","condensa"] },

{ id:"who-dampness-2009", sigla:"WHO Indoor Air Quality: Dampness and Mould (2009)", titolo:"Linee guida OMS su umidità e muffe indoor",
  cosa:"Effetti sanitari di umidità e muffe, principi di prevenzione e controllo.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (verificato)",
  tag:["biodeteriogeni","iaq","umidita"] },

/* === INFILTRAZIONI E INTERRATI ============================================ */
{ id:"bs-8102-2022", sigla:"BS 8102:2022", titolo:"Protection of below ground structures against water ingress. Code of practice",
  cosa:"Protezione degli interrati dall'acqua: tre tipi A (barriera), B (struttura integrale, vasca bianca), C (intercapedine drenata).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Gradi d'uso 1a, 1b, 2, 3 (minuscolo, Tab.2). La 2009 (3 gradi) è superata; la 'revisione 1999' non è mai esistita.", aff:"ok",
  ambito:"Prassi UK, senza equivalente cogente italiano.",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (verifica avversariale 08/07/2026)",
  tag:["interrati","infiltrazioni","umidita"] },

{ id:"uni-11104-2025", sigla:"UNI 11104:2025", titolo:"Calcestruzzo. Specificazioni complementari per l'applicazione della EN 206",
  cosa:"Specificazioni italiane per le classi di esposizione del calcestruzzo; richiamata dalle NTC 2018.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"Supera la UNI 11104:2016 (ritirata 24/07/2025).", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (fonte primaria, 08/07/2026)",
  tag:["interrati","cls"] },

{ id:"en-206-2021", sigla:"UNI EN 206-1:2026 (gia UNI EN 206:2021)", titolo:"Calcestruzzo. Specificazione, prestazione, produzione e conformità",
  cosa:"Norma quadro europea sul calcestruzzo e le classi di esposizione (X0, XC, XD, XS, XF, XA).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"La UNI EN 206:2021 e stata ritirata il 09/07/2026; edizione corrente EN 206-1:2026 (in vigore 04/03/2026), con EN 206-2:2026 e EN 206-3:2026.", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["interrati","cls"] },

{ id:"en-1504-5-2013", sigla:"UNI EN 1504-5:2013", titolo:"Prodotti per la protezione e riparazione del calcestruzzo. Iniezione",
  cosa:"Iniezione del calcestruzzo: tre funzioni (riempimento con trasmissione di forze, duttile, rigonfiante). Categorie F/D/S.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"La ed. 2005 è ritirata. Fa parte della serie EN 1504 in 10 parti.", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["interrati","cls","rinforzi"] },

{ id:"en-1992-3-2006", sigla:"UNI EN 1992-3:2006", titolo:"Eurocodice 2 parte 3. Strutture di contenimento liquidi",
  cosa:"Classi di tenuta 0-3; classe 1 apertura fessure passanti wk1 raccomandata 0,20 mm (hD/h<=5) e 0,05 mm (hD/h>=35), salvo Annesso Nazionale.",
  ger:"volontaria", naz:"int", stato:"in-ritiro", statoNota:"Ritirata con sostituzione dal 18/01/2024 (seconda generazione Eurocodici); resta citabile nel periodo di coesistenza (ritiro CEN programmato 30/03/2028).", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["interrati","cls","fessure"] },

{ id:"din-18533-2026", sigla:"DIN 18533-1/-2:2026", titolo:"Impermeabilizzazione di elementi a contatto col terreno",
  cosa:"Classi idriche W1-E, W2-E (W2.1-E fino a 3 m, W2.2-E oltre 3 m), W3-E, W4-E per l'impermeabilizzazione controterra.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Ed. 2017 superata dalla 18533-1/-2:2026-06. Flange 150/160 mm = larghezze, non diametri. 'ZVR' è codice commerciale, non di norma.", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (2 audit, 08/07/2026)",
  tag:["interrati","infiltrazioni"] },

{ id:"din-4108-3-2024", sigla:"DIN 4108-3:2024", titolo:"Protezione dall'umidità legata al clima",
  cosa:"Requisiti e calcolo per la protezione dall'umidità legata al clima (anche solette controterra).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js (DIN Media)",
  tag:["condensa","infiltrazioni"] },

{ id:"uni-11333", sigla:"UNI 11333-1/-2/-3", titolo:"Qualificazione degli addetti alla posa di membrane impermeabilizzanti",
  cosa:"Qualificazione dei posatori (P2 bituminose, P3 sintetiche PVC/TPO). NON è un prontuario di dettagli costruttivi.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"11333-1:2009, -2/-3:2010.", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["interrati","coperture","infiltrazioni"] },

{ id:"en-13707-2013", sigla:"UNI EN 13707:2013", titolo:"Membrane bituminose armate per l'impermeabilizzazione delle coperture",
  cosa:"Specifica delle membrane bituminose armate per coperture (norma armonizzata).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["coperture","infiltrazioni"] },

{ id:"uni-8178-2019", sigla:"UNI 8178-1/-2:2019", titolo:"Coperture. Istruzioni per la progettazione e l'esecuzione",
  cosa:"Coperture discontinue (8178-1) e continue (8178-2). Sostituisce la 8178:2012.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (08/07/2026)",
  tag:["coperture","infiltrazioni"] },

{ id:"en-1997-1", sigla:"UNI EN 1997-1:2024 (Eurocodice 7, progettazione geotecnica)", titolo:"Progettazione geotecnica (incl. verifica al sollevamento UPL)",
  cosa:"Progettazione geotecnica; stati limite ultimi di tipo idraulico e verifica al galleggiamento/sollevamento (UPL) per le vasche interrate.",
  ger:"volontaria", naz:"int", stato:"in-ritiro", statoNota:"La ed. 2013 (EC7 prima generazione) e ritirata con sostituzione dal 17/04/2025; edizione corrente UNI EN 1997-1:2024, in coesistenza fino al 30/03/2028. In Italia il riferimento cogente resta il DM 17/01/2018 (NTC), citato a parte.", aff:"ok",
  fonte:"Registro articolo-impermeabilizzazioni-pre-getto (verifica web 13/07/2026)",
  tag:["interrati","cedimenti","strutture"] },

/* === RADON ================================================================ */
{ id:"dlgs-101-2020", sigla:"D.Lgs 101/2020, art. 12", titolo:"Protezione dalle radiazioni ionizzanti: livelli di riferimento radon",
  cosa:"Livelli di riferimento: 300 Bq/m3 (esistenti e luoghi di lavoro), 200 Bq/m3 (abitazioni costruite dopo 31/12/2024). Obbligo di misura e ottimizzazione.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"GU 201 del 12/08/2020. Modificato dal D.Lgs 203/2022 (non tocca i livelli radon). 'Livello di riferimento' non è un limite.", aff:"ok",
  ambito:"Cogente sui livelli e sull'obbligo di misura; NON impone la tecnica di mitigazione (scelta del progettista).",
  fonte:"Registri radon-legenda-foto + vespai-norme-regioni (verifica 28/06/2026)",
  tag:["radon","iaq","vespai","interrati"] },

{ id:"pnar-2024", sigla:"DPCM 11/01/2024 (PNAR 2023-2032)", titolo:"Piano Nazionale d'Azione per il Radon",
  cosa:"Indirizzi tecnici e promozione della prevenzione radon nei nuovi edifici. Non fissa obblighi tecnici.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"GU Serie Generale n.43 del 21/02/2024.", aff:"ok",
  fonte:"Registro radon-legenda-foto (verifica 28/06/2026)",
  tag:["radon"] },

{ id:"iso-11665-serie", sigla:"UNI EN ISO / UNI ISO 11665 (serie)", titolo:"Misura della radioattività nell'ambiente. Aria: radon-222",
  cosa:"Metodi di misura del radon: parte 4 (media temporale, elettrete integrato), parti 5/6/8 per continuo/spot.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"UNI ISO 11665-4:2021 senza prefisso EN. Attenzione ad abbinare la parte giusta allo strumento.", aff:"ok",
  fonte:"Registri radon-legenda-foto + audit-citazioni-8-moduli",
  tag:["radon"] },

{ id:"ansi-aarst", sigla:"ANSI/AARST (CCAH-2020-0523, SGM-SF-2023, MAH-2023)", titolo:"Standard statunitensi di mitigazione e misura del radon",
  cosa:"Buona pratica USA: mitigazione (CCAH, SGM-SF), misura (MAH). CCAH par. 601 fissa geometrie di scarico.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Edizioni correnti: MAH-2023 (misura, in vigore 01/12/2023), SGM-SF-2023 (mitigazione), CCAH-2020-0523.", aff:"ok",
  fonte:"Registri radon-legenda-foto + audit-citazioni-8-moduli",
  tag:["radon"] },

/* === ACUSTICA ============================================================= */
{ id:"legge-447-1995", sigla:"L. 447/1995", titolo:"Legge quadro sull'inquinamento acustico",
  cosa:"Principi di tutela dall'inquinamento acustico; istituisce il Tecnico Competente in Acustica; demanda i requisiti passivi ai DPCM.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"GU n.254 del 30/10/1995.", aff:"ok",
  fonte:"Registro acustica-edilizia-norme + mx-biblio.js",
  tag:["acustica"] },

{ id:"dpcm-5-12-1997", sigla:"DPCM 5/12/1997", titolo:"Requisiti acustici passivi degli edifici",
  cosa:"Requisiti passivi cogenti per categoria d'uso (R'w, D2m,nT,w, L'n,w, LASmax, LAeq). In vigore dal 20/02/1998.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"Tab.B cogente per categoria (A-G). Contraddizione LAeq 35 vs 25 nell'Allegato A: usare 25 cautelativo e documentare entrambi.", aff:"ok",
  fonte:"Registro acustica-edilizia-norme (verifica web giu 2026)",
  tag:["acustica"] },

{ id:"dpcm-14-11-1997", sigla:"DPCM 14/11/1997", titolo:"Valori limite delle sorgenti sonore (zonizzazione acustica)",
  cosa:"Classi acustiche del territorio I-VI e valori limite di emissione/immissione.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro acustica-edilizia-norme",
  tag:["acustica"] },

{ id:"uni-11367-2023", sigla:"UNI 11367:2023", titolo:"Classificazione acustica delle unità immobiliari",
  cosa:"Misura in opera e classificazione acustica in quattro classi (I migliore, IV modesta).",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"In vigore dal 26/01/2023, sostituisce la :2010, recepisce UNI 11444. I valori numerici della revisione 2023 non sono verificabili da fonti gratuite: usare con cautela peritale.", aff:"ok",
  fonte:"Registro acustica-edilizia-norme + _AUDIT-NORME_20260617",
  tag:["acustica"] },

{ id:"uni-11444-2012", sigla:"UNI 11444:2012", titolo:"Classificazione acustica: linee guida (ex)",
  cosa:"Linee guida applicative della classificazione acustica.",
  ger:"volontaria", naz:"it", stato:"ritirata", statoNota:"RITIRATA senza sostituzione l'11/09/2025: criteri assorbiti nella UNI 11367:2023.", aff:"ok",
  fonte:"Registro sapere-storia-recupero (ricontrollo avversariale 16/06/2026)",
  tag:["acustica"] },

{ id:"uni-11532-2-2020", sigla:"UNI 11532-2:2020", titolo:"Acustica interna degli ambienti, settore scolastico",
  cosa:"Valori limite per le scuole: tempo di riverberazione, STI, chiarezza C50, rumore impianti. Richiamata dai CAM.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + registro acustica-edilizia-norme",
  tag:["acustica"] },

{ id:"iso-16283-serie", sigla:"UNI EN ISO 16283-1:2018 / -2:2020 / -3:2016", titolo:"Misura in opera dell'isolamento acustico",
  cosa:"Isolamento aereo (-1), dal calpestio (-2), di facciata (-3). Sostituisce la serie UNI EN ISO 140.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro sapere-storia-recupero + acustica-edilizia-norme",
  tag:["acustica"] },

{ id:"iso-717-serie", sigla:"UNI EN ISO 717-1:2021 / 717-2:2021", titolo:"Valutazione dell'isolamento acustico (indici)",
  cosa:"Indici Rw, D2m,nT,w, Ln,w e termini di adattamento spettrale C, Ctr.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + _AUDIT-NORME_20260617",
  tag:["acustica"] },

{ id:"iso-12354-serie", sigla:"UNI EN ISO 12354-1/-2/-3/-4", titolo:"Previsione delle prestazioni acustiche degli edifici",
  cosa:"Calcolo previsionale di isolamento aereo, calpestio, facciata e interno-esterno dai dati dei prodotti, con trasmissione laterale.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + registro acustica-edilizia-norme",
  tag:["acustica"] },

{ id:"iso-3382-2", sigla:"UNI EN ISO 3382-2", titolo:"Misura del tempo di riverberazione",
  cosa:"Misura del tempo di riverberazione negli ambienti ordinari (abitazioni, uffici, scuole).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"mx-biblio.js + registro acustica-edilizia-norme",
  tag:["acustica"] },

/* === IAQ E VENTILAZIONE =================================================== */
{ id:"en-16798-1-2019", sigla:"UNI EN 16798-1:2019 (+ NA:2025)", titolo:"Parametri dell'ambiente interno per la prestazione energetica",
  cosa:"Parametri di ambiente termico, qualità dell'aria, illuminazione e acustica per la progettazione degli impianti.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Sostituisce UNI EN 15251:2007.", aff:"ok",
  fonte:"mx-biblio.js + registro audit-citazioni-8-moduli",
  tag:["iaq"] },

{ id:"en-16798-3-2025", sigla:"UNI EN 16798-3:2025", titolo:"Ventilazione degli edifici non residenziali",
  cosa:"Requisiti prestazionali per i sistemi di ventilazione e condizionamento degli edifici non residenziali.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Edizione pubblicata 30/04/2025.", aff:"ok",
  fonte:"Registro _AUDIT-NORME_20260617",
  tag:["iaq"] },

{ id:"uni-10339-1995", sigla:"UNI 10339:1995", titolo:"Impianti aeraulici a fini di benessere (ex)",
  cosa:"Vecchia norma su portate d'aria e requisiti degli impianti di ventilazione.",
  ger:"volontaria", naz:"it", stato:"ritirata", statoNota:"RITIRATA senza sostituzione il 04/07/2024. Riferimento attuale: UNI EN 16798-1/-3.", aff:"ok",
  fonte:"Registri recupero-app4 + audit-citazioni-8-moduli",
  tag:["iaq"] },

{ id:"iso-16890-1-2017", sigla:"UNI EN ISO 16890-1:2017", titolo:"Filtri d'aria per ventilazione generale (ePM)",
  cosa:"Classificazione dei filtri HVAC per efficienza verso il particolato ePM1, ePM2,5, ePM10. Sostituisce EN 779.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Attenzione: EN 16890 (senza ISO) sono i materassi per culle; i filtri sono EN ISO 16890.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (correzione Tier 1)",
  tag:["iaq"] },

/* === MICROCLIMA E CONSERVAZIONE =========================================== */
{ id:"uni-10829-1999", sigla:"UNI 10829:1999", titolo:"Beni di interesse storico e artistico. Condizioni ambientali di conservazione",
  cosa:"Valori di temperatura e umidità relativa per la conservazione dei beni culturali negli ambienti espositivi e di deposito.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"Confermata NON ritirata.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (nota trasversale)",
  tag:["microclima"] },

{ id:"en-15757-2010", sigla:"UNI EN 15757:2010", titolo:"Conservazione dei beni culturali. Specifiche di T e UR per materiali igroscopici",
  cosa:"Definisce le fasce di temperatura e umidità relativa ammissibili per limitare i danni ai materiali igroscopici.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (nota trasversale) + mx-biblio.js",
  tag:["microclima"] },

{ id:"ashrae-musei", sigla:"ASHRAE Handbook, classi di controllo museo AA/A/B/C/D", titolo:"Controllo microclimatico per collezioni (classi AA-D)",
  cosa:"Cinque classi di controllo ambientale (AA la più stretta) per il rischio ai beni conservati.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Le classi corrette sono AA/A/B/C/D (non A1/A2...): verificato Michalski/Getty + CCI/Canada.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (pendente ASHRAE risolto)",
  tag:["microclima"] },

/* === DEGRADO MATERICO E LESSICO =========================================== */
{ id:"uni-11182-2006", sigla:"UNI 11182:2006", titolo:"Beni culturali. Materiali lapidei. Descrizione delle forme di alterazione",
  cosa:"Glossario standard delle alterazioni: efflorescenze, croste nere, esfoliazione, alveolizzazione, distacco, patina biologica.",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"È un lessico di descrizione, non una norma di intervento.", aff:"ok",
  fonte:"mx-biblio.js + registro uni-umidità-verificate",
  tag:["degrado-materico","sali","biodeteriogeni"] },

{ id:"icomos-iscs", sigla:"Glossario ICOMOS-ISCS (2008)", titolo:"Illustrated glossary on stone deterioration patterns",
  cosa:"Glossario internazionale illustrato delle forme di degrado della pietra, complementare alla UNI 11182.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro lesioni-pubblicazione-catalogo (campagna fonti 13/07/2026)",
  tag:["degrado-materico"] },

/* === LEGNO E METALLI ====================================================== */
{ id:"en-350-legno", sigla:"UNI EN 350", titolo:"Durabilita' del legno e dei prodotti a base di legno",
  cosa:"Classi di durabilità naturale del legno verso funghi e insetti; base per la valutazione della carie.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"La UNI EN 599-1 è specifica dei preservanti, non identificazione della carie.", aff:"ok",
  fonte:"Registro audit-citazioni (mappa-indagini, correzione carie)",
  tag:["legno","biodeteriogeni"] },

{ id:"iso-8044-2024", sigla:"UNI EN ISO 8044:2025", titolo:"Corrosione dei metalli e leghe. Vocabolario",
  cosa:"Terminologia della corrosione dei metalli e delle leghe.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"In vigore dal 27/02/2025 (recepisce ISO 8044:2024); sostituisce la UNI EN ISO 8044:2020.", aff:"ok",
  fonte:"Registro audit-citazioni (mappa-indagini)",
  tag:["metalli"] },

/* === FESSURAZIONI (diagnosi strumentale) ================================== */
{ id:"bre-251", sigla:"BRE Digest 251", titolo:"Assessment of damage in low-rise buildings (classificazione del danno da fessura)",
  cosa:"Classificazione della gravità del danno murario per ampiezza di fessura (categorie 0-5).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni (fessurazioni, norms utente confermati)",
  tag:["fessure","cedimenti","strutture"] },

{ id:"en-12504-2", sigla:"UNI EN 12504-2", titolo:"Prove sul calcestruzzo nelle strutture. Indice sclerometrico",
  cosa:"Prova non distruttiva con sclerometro per la stima della resistenza superficiale del calcestruzzo.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Il pacometro (localizzazione armature) è BS 1881-204, non la UNI 10985 (che è vibrazioni su ponti).", aff:"ok",
  fonte:"Registro audit-citazioni (2a tornata, fessurazioni)",
  tag:["fessure","cls","strutture"] },

{ id:"astm-martinetti", sigla:"ASTM C1196 / C1197 + RILEM MDT.D.4/D.5", titolo:"Martinetti piatti (stato tensionale e deformabilità della muratura)",
  cosa:"Prova con martinetto piatto singolo (stato di sforzo) e doppio (deformabilità) sulla muratura.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni (fessurazioni, confermati)",
  tag:["fessure","muratura","strutture"] },

/* === VESPAI (regionali) =================================================== */
{ id:"lr-fvg-44-1985", sigla:"L.R. FVG 44/1985, art. 4", titolo:"Isolamento dei vani (Friuli-Venezia Giulia)",
  cosa:"Intercapedine/vespaio altezza minima 20 cm 'adeguatamente aerata', pavimento 15 cm sopra terreno, impermeabilizzazione 80 cm. Nessun rapporto numerico di aperture.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"Testo vigente al 14/05/2024.", aff:"ok",
  ambito:"Cogente solo in FVG.",
  fonte:"Registro vespai-norme-regioni (verifica avversariale su primaria)",
  tag:["vespai"] },

{ id:"rli-milano", sigla:"Reg. Igiene Comune di Milano, art. 3.2.6", titolo:"Aerazione dei vespai (tipo RLI Lombardia)",
  cosa:"Aerazione libera 1/100 della superficie (grigliati a pavimento), riducibile a 1/200 per ventilazione perimetrale a finestrelle.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"Cogente dove recepito dal Comune (Milano sì, altri no). DGR 25/07/1989 n. 4/45266 aggiorna il Titolo III del RLI tipo.", aff:"ok",
  ambito:"È strumento comunale: dipende dal regolamento del Comune, non è una soglia nazionale.",
  fonte:"Registro vespai-norme-regioni (verbatim su copia comunale, 18/06/2026)",
  tag:["vespai"] },

{ id:"dprs-sicilia-2022", sigla:"D.P.R.S. Sicilia 531/GAB 20/05/2022, art. 32 c.6", titolo:"Vespaio aerato (Reg. Tipo Edilizio Sicilia)",
  cosa:"Vespaio altezza minima 0,50 m, riducibile a 0,25 m maggiorando l'aerazione a 1/50 (griglie orizzontali) o 1/100 (verticali). Solo agibilità dei locali seminterrati.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  ambito:"Cogente in Sicilia; riguarda i seminterrati.",
  fonte:"Registro vespai-norme-regioni (verifica su primaria)",
  tag:["vespai"] },

{ id:"arpat-radon-vespaio", sigla:"ARPAT, Radon cosa fare, Scheda 2 (ventilazione del vespaio)", titolo:"Superficie di ventilazione consigliata del vespaio (raccomandazione)",
  cosa:"Superficie di aerazione consigliata almeno 1500 mm2 per metro di muro perimetrale, come mitigazione radon.",
  ger:"estera", naz:"it", stato:"vigente", statoNota:"È una RACCOMANDAZIONE tecnica ARPAT, non norma vincolante. Il vecchio range '800-1500' è errato: la scheda dice 'almeno 1500'.", aff:"ok",
  fonte:"Registro vespai-norme-regioni (URL vivo app/uploads, verificato)",
  tag:["vespai","radon"] },

{ id:"iso-13370-2018", sigla:"UNI EN ISO 13370:2018", titolo:"Prestazione termica degli edifici. Scambio termico attraverso il terreno",
  cosa:"Calcolo dello scambio termico col terreno (pavimenti controterra, interrati, vespai).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"I riferimenti utili sono punto 7.2 e App. G (nella ed. 2017/2018 il paragrafo 9 non esiste).", aff:"ok",
  ambito:"È scambio TERMICO: non è la norma dei drenaggi né dell'aerazione, spesso citata a torto per quelli.",
  fonte:"Registri risalita-citazioni-audit + audit-citazioni-8-moduli",
  tag:["vespai","interrati","termoigrometria","condensa"] },

{ id:"en-12599-2012", sigla:"UNI EN 12599:2012", titolo:"Ventilazione degli edifici. Prove e metodi di misura per la consegna",
  cosa:"Procedure di prova e misura per la verifica alla consegna degli impianti di ventilazione e climatizzazione.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (correzione microclima vespaio)",
  tag:["vespai","iaq"] },

/* === COLLAUDO IMPERMEABILIZZAZIONI E ACQUE ================================ */
{ id:"astm-d5957", sigla:"ASTM D5957", titolo:"Standard guide for flood testing horizontal waterproofing installations",
  cosa:"Collaudo per allagamento (24-72 h) delle impermeabilizzazioni orizzontali.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (collaudo verificato)",
  tag:["coperture","interrati","infiltrazioni"] },

{ id:"astm-d7877", sigla:"ASTM D7877-25", titolo:"Standard guide for electronic methods for detecting leaks in waterproofing membranes",
  cosa:"Localizzazione elettronica delle perdite nelle membrane impermeabilizzanti.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Ed. 2025 (in vigore 22/08/2025), supera D7877-24, D7877-22 e D7877-14.", aff:"ok",
  fonte:"Registro norme-calcestruzzo-interrati-2025 (collaudo verificato)",
  tag:["coperture","interrati","infiltrazioni"] },

{ id:"ead-030378", sigla:"EAD 030378-00-0605", titolo:"Membrane impermeabilizzanti pre-applicate con adesione al calcestruzzo",
  cosa:"Documento europeo di valutazione per le membrane pre-getto; prevede la prova di migrazione laterale (water creep at leakage), con 500 kPa di battente in prova.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"È base per ETA, non norma armonizzata. Il water creep non ha soglia normativa: si usa per confronto e come requisito di capitolato.", aff:"ok",
  fonte:"Registro articolo-impermeabilizzazioni-pre-getto (13/07/2026)",
  tag:["interrati","infiltrazioni"] },

{ id:"en-13967", sigla:"UNI EN 13967", titolo:"Membrane per impermeabilizzazione. Fogli flessibili contro l'umidità del terreno",
  cosa:"Specifica dei fogli flessibili per l'impermeabilizzazione controterra (incluso il tipo T).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Il tipo T è della EN 13967, non dell'EAD 030378.", aff:"ok",
  fonte:"Registro articolo-impermeabilizzazioni-pre-getto (revisione critica 13/07/2026)",
  tag:["interrati","infiltrazioni"] },

{ id:"en-1610-2015", sigla:"UNI EN 1610:2015", titolo:"Costruzione e collaudo di connessioni e condotte di scarico",
  cosa:"Prove di tenuta delle condotte di scarico interrate (aria o acqua).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro articolo-provenienza-acqua (fonti verificate 09/07/2026)",
  tag:["infiltrazioni","impianti","interrati"] },

{ id:"en-13508-2", sigla:"UNI EN 13508-2:2003+A1:2011", titolo:"Condizione delle reti di scarico. Sistema di codifica dell'ispezione visiva",
  cosa:"Codifica standard delle ispezioni CCTV delle reti di scarico (per attribuire una perdita alla fogna).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro articolo-provenienza-acqua (fonti verificate 09/07/2026)",
  tag:["infiltrazioni","impianti"] },

{ id:"en-806-4", sigla:"UNI EN 806-4 / UNI EN 805:2025", titolo:"Impianti di adduzione acqua: prove di pressione",
  cosa:"Prove di pressione degli impianti interni (806-4) e delle condotte esterne (805) per accertare una rottura in pressione.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"EN 805:2025 verificata esistente (UNI EN 805:2025).", aff:"ok",
  fonte:"Registro articolo-provenienza-acqua (2a passata, hardening norme)",
  tag:["infiltrazioni","impianti"] },

{ id:"dlgs-18-2023", sigla:"D.Lgs 18/2023", titolo:"Qualita' delle acque destinate al consumo umano",
  cosa:"Parametri di qualità dell'acqua potabile (cloruri 250, solfati 250, ammonio 0,50, nitrati 50 mg/l, conducibilità 2500 microS/cm): utili come riferimento nel confronto analitico di una perdita.",
  ger:"cogente", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  ambito:"È norma sulla potabilità: si usa come termine di confronto analitico, non come norma edilizia.",
  fonte:"Registro articolo-provenienza-acqua (fonti verificate 09/07/2026)",
  tag:["infiltrazioni","impianti"] },

{ id:"iso-5667-serie", sigla:"Serie ISO 5667 (5667-1:2023, 5667-3:2024)", titolo:"Qualita' dell'acqua. Campionamento",
  cosa:"Progettazione del campionamento e conservazione dei campioni: rende difendibile il prelievo in contraddittorio.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"ISO 5667-1:2020 ritirata e sostituita dalla :2023; ISO 5667-3:2024 vigente.", aff:"ok",
  fonte:"Registro articolo-provenienza-acqua (2a passata)",
  tag:["infiltrazioni","impianti","umidita"] },

{ id:"iicrc-s500", sigla:"IICRC S500", titolo:"Standard for professional water damage restoration",
  cosa:"Standard di prassi per il ripristino dopo danno da acqua: categorie di acqua e classi di evaporazione.",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Edizioni: 1994 (1a), 1999 (2a), 2006 (3a), 2015 (4a), 2021 (5a).", aff:"ok",
  ambito:"Prassi professionale USA: distingue la categoria dell'acqua dalla stima dei tempi.",
  fonte:"Registri audit-citazioni-8-moduli + asciugatura-report-p1",
  tag:["asciugatura","infiltrazioni","umidita"] },

/* === SERRAMENTI, IMPIANTI, ELEMENTI VARI ================================== */
{ id:"en-14351-1-2016", sigla:"UNI EN 14351-1:2016", titolo:"Finestre e porte. Norma di prodotto, caratteristiche prestazionali",
  cosa:"Caratteristiche prestazionali dei serramenti esterni: tenuta all'acqua, permeabilità all'aria, resistenza al vento.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Norma armonizzata di prodotto. L'edizione ':2022' talvolta citata non risulta.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 2, anno corretto)",
  tag:["serramenti","infiltrazioni"] },

{ id:"uni-7129-2015", sigla:"UNI 7129-2:2015 / 7129-3:2015", titolo:"Impianti a gas per uso domestico. Ventilazione e evacuazione dei prodotti della combustione",
  cosa:"Parte 2 ventilazione e aerazione dei locali; parte 3 sistemi di evacuazione dei prodotti della combustione (canne fumarie, camini).",
  ger:"volontaria", naz:"it", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (correzione iaq)",
  tag:["canne-fumarie","iaq","impianti"] },

{ id:"astm-c920", sigla:"ASTM C920", titolo:"Standard specification for elastomeric joint sealants",
  cosa:"Specifica dei sigillanti elastomerici per giunti (usata per la sigillatura delle vie d'ingresso del radon).",
  ger:"estera", naz:"int", stato:"vigente", statoNota:"Sostituisce l'errata citazione ASTM C1741 (che è malte da iniezione cavi post-tensione).", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 1, correzione radon)",
  tag:["radon","giunti","interrati"] },

{ id:"iso-11600-2011", sigla:"UNI EN ISO 11600:2011", titolo:"Edilizia. Sigillanti. Classificazione e requisiti",
  cosa:"Classificazione dei sigillanti per giunti in edilizia (es. tipo F classe 25LM).",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Edizione :2011 (non :2003). La 'classe BG' non esiste.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (correzione radon)",
  tag:["giunti","radon","interrati"] },

/* === BIODETERIOGENI, TRATTAMENTI ========================================== */
{ id:"en-14885-2022", sigla:"UNI EN 14885:2023", titolo:"Antisettici e disinfettanti chimici. Applicazione delle norme europee",
  cosa:"Quadro delle prove da richiedere a un disinfettante chimico secondo il campo d'impiego.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"La ed. 2022 e ritirata con sostituzione (08/06/2023); edizione corrente :2023.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 2, biodeteriogeni)",
  tag:["biodeteriogeni"] },

{ id:"en-15457-15458", sigla:"EN 15457 / EN 15458", titolo:"Pitture e vernici. Prove di laboratorio su funghi (15457) e alghe (15458)",
  cosa:"Valutazione della resistenza di un film di pittura all'attacco di funghi e alghe.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Sostituiscono l'errata UNI EN 12546-2 (contenitori isotermici per alimenti) citata a torto per le pitture.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 1, biodeteriogeni)",
  tag:["biodeteriogeni","intonaci-finiture"] },

{ id:"en-16790-2016", sigla:"UNI EN 16790:2016", titolo:"Conservazione dei beni culturali. Gestione integrata dei parassiti (IPM)",
  cosa:"Gestione integrata degli infestanti per la protezione dei beni culturali.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (nota trasversale, confermata)",
  tag:["biodeteriogeni","microclima","legno"] },

{ id:"en-16242-2013", sigla:"UNI EN 16242:2013", titolo:"Conservazione dei beni culturali. Misura dell'umidità dell'aria",
  cosa:"Procedure di misura dell'umidità dell'aria per la conservazione.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Edizione :2013 (non :2012).", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 2)",
  tag:["microclima","condensa"] },

{ id:"en-16163-2025", sigla:"UNI EN 16163:2025", titolo:"Conservazione dei beni culturali. Illuminazione dei beni esposti in interni",
  cosa:"Criteri di illuminazione per i beni culturali esposti negli interni.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Sostituisce l'inesistente 'UNI EN 16894:2019' citata a torto.", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 1, microclima)",
  tag:["microclima"] },

/* === TERRENO E CEDIMENTI ================================================== */
{ id:"bre-240", sigla:"BRE Digest 240:1993", titolo:"Low-rise buildings on shrinkable clay soils",
  cosa:"Classi di plasticità delle argille rigonfianti e criteri di fondazione: basso <20, medio 20-40, alto 40-60, molto alto >60.",
  ger:"estera", naz:"int", stato:"in-ritiro", statoNota:"Pubblicazione BRE archiviata (contenuti in parte superati da norme piu recenti); edizione 1993.", aff:"ok",
  fonte:"Registro lesioni-pubblicazione-catalogo (verifica indipendente 13/07/2026)",
  tag:["cedimenti","fessure"] },

{ id:"iso-22475-1-2021", sigla:"UNI EN ISO 22475-1:2021", titolo:"Indagini geotecniche. Metodi di campionamento e misure dell'acqua di falda",
  cosa:"Metodi di prelievo dei campioni di terreno e misura del livello di falda.",
  ger:"volontaria", naz:"int", stato:"vigente", statoNota:"Edizione :2021 (non :2007).", aff:"ok",
  fonte:"Registro audit-citazioni-8-moduli (Tier 2, umidità-hub)",
  tag:["cedimenti","interrati","umidita"] },

];

/* Elenco delle categorie di gerarchia, per l'interfaccia. */
window.NORME_GER = {
  cogente:    { label:"Cogente", nota:"Legge, decreto, DM, DPCM, DPR, D.Lgs: obbligo di legge." },
  volontaria: { label:"Volontaria (UNI/EN/ISO)", nota:"Adozione volontaria, salvo richiamo cogente (es. NTC, CAM)." },
  estera:     { label:"Buona pratica / linea guida", nota:"BS, DIN, WTA, NIT, ASTM, BRE, ARPAT, ICOMOS: riferimento tecnico, nessuna cogenza in Italia." }
};

/* Stato -> marcatore per l'interfaccia. */
window.NORME_STATO = {
  vigente:    { label:"vigente",   cls:"ok" },
  "in-ritiro":{ label:"in ritiro", cls:"warn" },
  ritirata:   { label:"ritirata",  cls:"bad" }
};
