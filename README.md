# Installazione dipendenze

- Clonare Bootstrap Italia Next 

```sh
git clone https://github.com/italia/bootstrap-italia-next
```

- Installare le dipendenze

```sh
cd bootstrap-italia-next
npm i
```

- Compilare la libreria

```sh
npm run build
```

Adesso la libreria è pronta per essere importata in tutte le sue forme :)

## Utilizzare il minificato

- Includi il minificato all'interno della tua applicazione, sia lato css che js.

- Fai partire il server di esempio

```sh
npm run serve
```

## Utilizzare Rollup

Vista la modularità con la quale è strutturato Bootstrap Italia 2, è possibile 
utilizzare Rollup per includere i componenti desiderati per la propria applicazione
e ottimizzare il bundle finale. La stessa cosa è possibile farla per la parte css.