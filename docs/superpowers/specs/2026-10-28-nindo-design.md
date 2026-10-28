# Nindō — documento di design

Data: 2026-10-28 · Stato: approvato

## 1. Intento

Il repository Spaceheart (hack sci-fi di Daggerheart per Unknown Frontier) diventa **Nindō** (忍道, "la via del ninja"), un fan-hack di Daggerheart ambientato nel mondo di Naruto di Masashi Kishimoto. Il contenuto sci-fi viene eliminato: la cronologia git basta come archivio.

L'obiettivo al tavolo è che ogni giocatore si senta **un vero shinobi di quel mondo**: natura del chakra, jutsu, sigilli, poteri del sangue, villaggi, gradi, missioni.

## 2. Ambientazione

- Il mondo di Kishimoto con **Naruto Settimo Hokage**, dopo *The Last*/il matrimonio, **prima di Boruto**.
- Da lì la timeline **diverge**: niente Kara, Ōtsutsuki di Boruto o eventi di Boruto, salvo che il tavolo li voglia. Pace fragile tra le Cinque Grandi Nazioni, villaggi che si reinventano, ninja traditori e reduci di guerra.
- Tutto il mondo ninja, non solo Konoha: Suna, Kiri, Kumo, Iwa, villaggi minori, ninja erranti.

## 3. Obiettivi, non-obiettivi, anti-obiettivi

**Obiettivi**
- Giocare uno shinobi credibile con nature, jutsu e un potere del sangue.
- Restare Daggerheart: chi lo conosce si orienta in cinque minuti.
- Una prima versione **piccola ma giocabile**, da allargare poi.
- Sito con nuova grafica contemporanea nei colori del mondo di Kishimoto.

**Non-obiettivi (per ora)**
- Completezza: tutte le classi, tutti i Kekkei Genkai, tutti i clan.
- Seguire il canon di Boruto.
- Nuove meccaniche di sessione: il ciclo di gioco resta quello di Daggerheart.

**Anti-obiettivi**
- Una risorsa chakra separata da gestire: il chakra è Speranza e Stress.
- Kekkei Genkai rari o riservati: tutti i personaggi possono averne uno.
- Domini legati rigidamente alle classi.
- Qualunque forma di commercializzazione.

## 4. Vincoli

- **Licenza e IP.** Il materiale Daggerheart viene dalla SRD 2.0 con DPCGL, come oggi. Naruto è proprietà di Kishimoto/Shueisha: Nindō è un fan-hack **gratuito, pubblico, non commerciale e non ufficiale**. Serve un avviso chiaro di non affiliazione (pagina licenza e piè di pagina).
- **Tecnica.** Sito statico HTML/CSS/JS senza build, su GitHub Pages dal ramo `main`, come oggi. Restano la struttura delle cartelle e `js/toc.js`.
- **Equilibrio.** Come Spaceheart, ogni classe e ogni dominio prende a modello una classe o un dominio della SRD (Evasione, PF, potenza delle carte), così l'equilibrio resta quello testato.
- **Lingua.** Italiano. I termini giapponesi della serie restano in giapponese con traslitterazione Hepburn (jutsu, chūnin, Katon…).

## 5. Decisioni prese

### 5.1 Motore
- Dadi della Dualità, Speranza/Paura, riflettori, mosse del GM, conti alla rovescia, PF, Stress, Armatura, soglie, Esperienze, riposi: **invariati**.
- **Chakra = Speranza e Stress.** I jutsu costano Speranza o Stress come le carte SRD. Restare a secco di chakra significa avere lo Stress pieno. Nessuna nuova risorsa.
- Tiro da incantatore → **Tiro di Jutsu**. Danno magico → **danno da chakra**.
- La sessione tipo è una sessione Daggerheart: il sapore Naruto arriva dai contenuti.

### 5.2 Personaggio
Un personaggio Nindō è definito da tre cose: **natura del chakra, abilità/stile, esperienze**.

- **Classe = stile di combattimento**: decide PF, Evasione, privilegi, sottoclassi e il tratto per il Tiro di Jutsu. **Non decide i domini.**
- **Retaggio** (al posto di Ascendenza/Origine) = il **potere del sangue o arte segreta**: Kekkei Genkai, Hiden o tecnica di clan. Dà due privilegi e l'accesso al proprio **dominio di Sangue**. Tutti ne hanno uno. Il clan è solo colore narrativo: lo stesso Retaggio può venire da un clan canonico, da un ramo dimenticato o da un lignaggio senza nome. Anche i Kekkei Genkai di nature combinate senza un clan preciso (Lava, Vapore, Tempesta, Esplosione, Magnete, Legno) sono Retaggi.
- **Villaggio** (al posto di Comunità/Provenienza): Konoha, Suna, Kiri, Kumo, Iwa, villaggi minori, ninja erranti/traditori.
- **Esperienze**: invariate.
- **Gradi**: narrativi, agganciati ai tier: liv. 1 genin, liv. 2–4 chūnin, liv. 5–7 jōnin, liv. 8–10 livello Kage/Sannin.

### 5.3 Domini liberi
I domini **non sono legati alla classe**. Ci sono tre famiglie:
1. **Nature**: Fuoco, Vento, Fulmine, Terra, Acqua.
2. **Arti**: Taijutsu, Genjutsu, Medicina, Sigilli, Strumenti, Evocazione.
3. **Sangue**: un dominio per Retaggio (Sharingan, Byakugan, Ombra, Ghiaccio…).

Alla creazione il personaggio ha accesso a **una Natura (affinità) + un'Arte + il dominio Sangue del proprio Retaggio**. Altri domini si sbloccano avanzando di livello (un maestro, una pergamena, un addestramento).

> **Aperto, lo decide l'autore:** la Natura è obbligatoria, o un personaggio può prendere una seconda Arte al suo posto (ninja "alla Rock Lee", es. Taijutsu + Strumenti)? Finché la scelta non è presa, i domini si progettano in modo che entrambe le regole funzionino.

### 5.4 Prima versione (nucleo giocabile)
Più piccola di Spaceheart. In questa versione entrano:
- regole base adattate;
- creazione del personaggio, Retaggi, Villaggi, equipaggiamento;
- **4–5 classi**;
- le **5 Nature**, alcune Arti e **5–6 domini di Sangue**;
- guida del GM con avversari, ambienti e una cornice di campagna "dopo la guerra".

**Profondità: tutto si ferma al livello 4** (tier 1–2, genin e chūnin). Ogni dominio ha 9 carte nella v1 (3 di livello 1 e 2 per ciascun livello dal 2 al 4), circa 120 carte in totale. Lo stesso limite vale per classi e sottoclassi (privilegi fino al tier 2), avversari e ambienti (tier 1–2). I livelli 5–10 arrivano nelle versioni successive.

Le altre classi e Retaggi si aggiungono dopo, in tabella di marcia.

### 5.5 Passaggio da Spaceheart a Nindō
- Si lavora **direttamente su `main`**: per un periodo il sito pubblico sarà in parte sci-fi e in parte Nindō, ed è accettato.
- L'autore **rinomina il repo** su GitHub (es. `Nindo`), quindi l'URL di Pages cambia. Link interni relativi; README, licenza e riferimenti assoluti puntano al nuovo nome.

### 5.6 Grafica del sito: "Mantello dell'Hokage" (opzione F)
Uno stile contemporaneo con i colori del mondo di Kishimoto. Il riferimento è la bozza `F` in `.superpowers/brainstorm/…/content/stile-visivo-v2.html`.
- Tema **chiaro**: fondo `#fbfaf8`, carte bianche, bordi `#e7e3dc`.
- Testo blu notte `#1d2433`, testo secondario `#626a7a`.
- Accento rosso fiamma `#d9381e`. Le carte hanno una **sfumatura a fiamma** sul bordo superiore (`#f6b33a → #f28c28 → #d9381e`), come il mantello del Settimo Hokage.
- **Speranza = arancio** `#f28c28`, **Paura = blu notte** `#1d2433`.
- Caratteri: **Manrope** (titoli, logo), **Inter** (testo).
- Look moderno: angoli arrotondati (12–14 px), etichette a pillola, ombre morbide, molto spazio bianco.
- Logo testuale "Nindō" con un punto colorato; 忍道 come elemento secondario.
- Spariscono campo stellato, Orbitron e token `--hz-*` dell'atlante.

## 6. Elenchi di riferimento (da cui scegliere)

**Classi candidate** (circa 10 in totale): Specialista di Taijutsu, Specialista di Ninjutsu, Specialista di Genjutsu, Ninja Medico, Maestro di Sigilli, Maestro d'Armi, Sensore/Ricognitore, Evocatore, Marionettista, Ombra (ANBU/assassino).

**Retaggi candidati** (circa 20):
- Occhi: Sharingan, Byakugan.
- Nature combinate: Legno, Ghiaccio, Lava, Vapore, Tempesta, Esplosione, Magnete.
- Corpo: Ossa (Kaguya), Idratazione (Hōzuki), Espansione (Akimichi), Sangue (Chinoike), Vitalità e Catene (Uzumaki), Senjutsu innato (clan di Jūgo).
- Hiden: Ombra (Nara), Mente (Yamanaka), Insetti (Aburame), Bestia Compagna (Inuzuka).

**Clan per villaggio** (colore narrativo): Konoha (Uchiha, Hyūga, Nara, Akimichi, Yamanaka, Aburame, Inuzuka, Sarutobi, Hatake, Kurama, Senju), Kiri (Hōzuki, Yuki, Kaguya, Terumī), Kumo (Yotsuki), Suna (Chikamatsu, lignaggio del Magnete), Iwa (Kamizuru, lignaggio di Polvere/Esplosione), erranti (Uzumaki, Fūma, Chinoike, clan di Jūgo). I clan inventati dal tavolo sono ammessi, con una guida.

## 7. Lasciato al builder

- Quali 4–5 classi, quali Arti e quali 5–6 Retaggi entrano nella prima versione, scelti dagli elenchi del §6 in modo da coprire ruoli diversi.
- Quale classe o dominio SRD fa da modello per ciascun elemento.
- Nomi dei tipi di carta (es. Abilità / Jutsu / Rotolo al posto di Abilità / Incantesimo / Grimorio).
- Regola precisa per sbloccare nuovi domini avanzando.
- Nomi italiani dei sei tratti: si riparte da quelli di Spaceheart o della SRD.
- Equipaggiamento (kunai, shuriken, giubbotti, ecc.) e valuta (ryō).
- Cosa fare delle pagine senza equivalente (`gm/nave.html` → per esempio una pagina sul villaggio come base o sulla squadra).
- Personaggi canonici: come PNG e come avversari, e con quanto dettaglio.
- Riscrittura di home, visione, glossario, tabella di marcia, licenza, README, favicon.
- Dettagli della grafica (componenti, stati, mobile), nel solco del §5.6.
