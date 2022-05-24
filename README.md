# PERCHE' ABBIAMO FATTO QUESTO PROGETTO
Questo progetto ci è stato assegnato da parte del nostro professore di tpsi e serve a simulare il funzionamento di una rest API compresa di middleware e di parte client e server.

# QUALE PROBLEMA RISOLVE
Il progetto in questione simula un portale di una agenzia che si occupa di raccogliere sinistri stradali e importi dei danni legati ai sinistri, ogni sinistro deve contenere informazioni come data e ora dell'incidente, targa del veicolo e un codice univoco che possa riconoscere il sinistro, devono essere anche raccolti i dati relativi all'importo dei danni da pagare e della targa del veicolo o dei veicoli coinvolti.
Ci è stato richiesto di sviluppare un middleware in js con logiche legate a tutte le informazioni che dobbiamo raccogliere oltre a un database adatto al progetto che abbiamo popolato con dati adatti.
Il database dei veicoli inoltre dovrebbe contenere tutti i veicoli italiani, ovviamente noi abbiamo potuto attuare solo una simulazione della situazione presentata perchè non abbiamo accesso ai database automobilistici italiani contenenti tutte le targhe in circolazione.

# COSA ABBIAMO IMPARATO
Durante questo progetto abbiamo imparato a gestire la creazione di servizzi web REST tramite l'utilizzo di html, php e Java Script tramite le dispense forniteci dal professore abbiamo sviluppato server, client e database adatti al problema fornitoci. 
Questi si collegano tra di loro e comunicano inviandosi dati utilizzando principalmente i metodi GET e POST, le informazioni vengono estratte o inserite nel databse tramite l'utilizzo di querry SQL, mentre la comunicaione viene gestita con le sessioni in http, da notare anche i file presenti nella cartella del server dove si gestisce la connessione e la logica delle querry che verrano mandate al DB, una parte minore ma comunque di grande interesse è il file style.css che abbiamo creato da zero, dato che nessuno del gruppo aveva conoscenza del linguaggio all'inizio del progetto, che ci ha permesso di personalizzare il portale e la tabella e renderlo esteticamente interessante.
Utilizzo di yorc per testare i servizzi REST con utilizzo di debugger e visual studio code.
Costruzione di un JSON in base ai dati che vengono inviati all'interno del body della request.

# TABLE OF CONTENT
Nella cartella del client possiamo trovare i seguenti file:
- # home.html --> File che si occupa di rendere visibile il portale all'utente e di connettersi con le altre pagine. (home page progetto)
- # index_home.js --> File JavaScript che viene eseguito per gestire le azioni della pagina Home.html
- # index_importo.js --> File JavaScript che viene eseguito per gestire le azioni della pagina inserimento_importo.html
- # index_sinistro.js --> File JavaScript che viene eseguito per gestire le azioni della pagina inserimento_sinistro.html
- # inserimento_importo.html --> File che si occupa di rendere visibile all'utente l'inserimento di un importo 
- # inserimento_sinistro.html --> File che si occupa di rendere visibile all'utente l'inserimento di un sinistro
- # middleware.js --> Gestisce i dati che riceve dai vari index_*.js e si occupa di inviarli al restmiddleware.php.
Nella cartella del server possiamo trovare i seguenti file:
- # dbaccess.php --> si occupa di connettersi ai database e eseguire le query per poi inviare i dati ricevuti dal esecuzione della query al file php che si occupa di gestire la logica. (Incidenti_stradali_LOGIC.php)
- # Incidenti_stradali_LOGIC.php --> File che si occupa della gestione della logica delle funzioni che il servizio API fornisce: inserimento e visualizzazione.
- # restmiddleware.php --> File che riceve i dati dal middleware.js e li invia al file Incidenti_stradali_LOGIC.php, oltre che a occuparsi di mandare la response.

# COME INSTALLARE IL PROGETTO:
Basta scaricare il file.zip dalla repository di github e modificare il link che troverete nella linea 3 del file middleware.js in modo che il path sia corretto rispetto al tipo di server che si sta utilizzando, in caso sia easyphp xampp o qualsiasi altra cosa.

# COME USARE IL PROGETTO:
Una volta modificato il link e fatto partire il serverweb basta semplicemente aprire il file home.html e se tutto è corretto il progetto dovrebbe funzionare in modo corretto.

# CREDITS
Progetto sviluppato in condivisione con Valtolina, Magni, Giampiccolo. 

# CHI HA FATTO COSA
Supervisione generale progetto e organizzazione compiti: Magni, Valtolina.
Creazione database, popolazione, realzioni e creazione query: Giampiccolo, Valtolina, Magni.
Creazione file .html e logica dei files: Giampiccolo, Valtolina, Magni (inserimento tag e classi css, costrutto pagina).
Creazione file .php e logica dei files: Valtolina, Magni.
Creazione file .js e logica dei files: Valtolina, Magni.
Creazione file .css e grafica progetto: Magni, Valtolina.
Testing e debugging progetto: Magni, Valtolina, Giampiccolo.
Creazione file README.md e stesura riassunto svolgimento progetto: Magni.