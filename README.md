# Spaceheart

Hack fantascientifico compatibile con Daggerheart™ per l'ambientazione **Unknown Frontier** ([atlante](https://alcrispy.github.io/Atlas/unknown-frontier/unknown-frontier.html)).

Sito: <https://alcrispy.github.io/Spaceheart/>

## Struttura

Sito statico in HTML, CSS e JavaScript, senza compilazione, come l'atlante. GitHub Pages lo serve direttamente dal ramo `main`.

| Percorso | Contenuto |
|---|---|
| `index.html` | Home |
| `regole/` | Regole di gioco |
| `personaggio/` | Creazione, Origini, Provenienze, equipaggiamento |
| `classi/` | Classi e sottoclassi |
| `domini/` | Domini e carte dominio (`<article class="dcard dcard-abilita|protocollo|suite|potere">`) |
| `progetto/` | Visione, glossario, tabella di marcia |
| `licenza.html` | Attribuzioni DPCGL |
| `css/spaceheart.css` | Stile unico, con gli stessi token `--hz-*` dell'atlante |
| `js/toc.js` | Indice laterale generato dai titoli `h2`/`h3` dentro `.prose` |

Per aggiungere una pagina: copia una pagina esistente della stessa cartella, cambia `<title>`, intestazione e contenuto dentro `<div class="prose">`, poi aggiorna i link di navigazione in fondo alla pagina (`doc-pager`) e le schede della home. I titoli di sezione devono avere un `id`, perché l'indice laterale li usa.

Riquadri disponibili nel testo: `<div class="callout nota|proposta|attenzione|esempio">` con un `<p class="callout-title">` iniziale.

## Licenza

This product includes materials from the Daggerheart System Reference Document 2.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

Daggerheart™ Compatible. Terms at Daggerheart.com

La SRD in PDF non è inclusa nel repository: si scarica da <https://www.daggerheart.com/srd/>.
