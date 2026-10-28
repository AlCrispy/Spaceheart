# Nindō

忍道 — fan-hack gratuito e non ufficiale compatibile con Daggerheart™, ambientato nel mondo di *Naruto* al tempo del Settimo Hokage, prima di Boruto.

Il sito è pubblicato su GitHub Pages. L'indirizzo dipende dal nome del repository: `https://alcrispy.github.io/<nome-repo>/`.

## Struttura

È un sito statico in HTML, CSS e JavaScript, senza compilazione. GitHub Pages lo serve direttamente dal ramo `main`.

| Percorso | Contenuto |
|---|---|
| `index.html` | Home |
| `regole/` | Regole di gioco |
| `personaggio/` | Creazione, Retaggi, Villaggi, equipaggiamento |
| `classi/` | Classi e sottoclassi |
| `domini/` | Domini e carte dominio (`<article class="dcard dcard-abilita|jutsu|rotolo">`) |
| `gm/` | Guida del GM, avversari e ambienti (`<article class="statblock">`), cornice di campagna |
| `progetto/` | Visione, glossario, tabella di marcia |
| `licenza.html` | Attribuzioni DPCGL e avviso di fan-hack |
| `css/nindo.css` | Stile unico, tema «Mantello dell'Hokage» (token `--nd-*`) |
| `js/toc.js` | Indice laterale generato dai titoli `h2`/`h3` dentro `.prose` |
| `docs/superpowers/specs/` | Documento di design |

Per aggiungere una pagina, copia una pagina esistente della stessa cartella. Poi cambia `<title>`, intestazione e contenuto dentro `<div class="prose">`, e infine aggiorna i link di navigazione in fondo alla pagina (`doc-pager`) e le schede della home. I titoli di sezione devono avere un `id`, perché l'indice laterale li usa.

Nel testo puoi usare i riquadri `<div class="callout nota|proposta|attenzione|esempio">`, con un `<p class="callout-title">` all'inizio.

## Licenza

This product includes materials from the Daggerheart System Reference Document 2.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

Daggerheart™ Compatible. Terms at Daggerheart.com

*Naruto* e tutti i nomi, personaggi e tecniche collegati sono © Masashi Kishimoto / Shueisha. Nindō è un fan-hack non commerciale e non è affiliato né approvato dai titolari dei diritti.

La SRD in PDF non è inclusa nel repository: si scarica da <https://www.daggerheart.com/srd/>.
