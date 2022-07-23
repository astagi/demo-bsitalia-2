## Utilizzare Bootstrap Italia 2

Vista la modularità con la quale è strutturato Bootstrap Italia 2, è possibile 
utilizzare Rollup per includere i componenti desiderati per la propria applicazione
e ottimizzare il bundle finale. La stessa cosa è possibile farla per la parte css.

- Installa le dipendenze

```sh
npm i
```

- Modifica `demo.entry.js` e `demo.entry.scss` inserendo i moduli e i fogli di 
stile che vuoi utilizzare

- Compila la libreria

```sh
npm run build
```

- Fai partire il server di esempio

```sh
npm run serve
```

Puoi decidere di includere il minificato di bootstrap oppure il minificato generato
da RollUp per vedere le differenze di dimensione del bundle modificando 
opportunamente l'html commentato.