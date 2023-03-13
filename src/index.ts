import { Observable, Subscriber } from "rxjs";

const helloButton = document.querySelector("button#hello");

//HOT OBSERVERVALE E QUE COMPARTILHA A MESMA FONTE DE DADOS PRA TODAS AS ASSINATURAS
//NESSE CASO A F0NTE DE DADOS E O CLICK NO BOTAO
const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener("click", (event: MouseEvent) =>
    subscriber.next(event)
  );
});

helloClick$.subscribe((event) =>
  console.log("sub1:", event.type, event.x, event.y)
);

//NESSE CASO A SEGUNDA ASSINATURA COMEÇOU DEPOIS DA PRIMEIRA, MAS QUANDO TIVER
//AS DUAS ASSINATURAS AO MESMO TEMPO, AS DUAS IRÃO OBSERVAR A MESMA FONTE DE EMISSÃO DE VALORES
//DIFERENTE DO COLD OBSERVABLE QUE TEM UMA FONTE DE EMSISSÃO PRA CADA ASSINAUTRA

setTimeout(() => {
  console.log("COMECOU A SEGUNDA ASSINAUTRA");
  helloClick$.subscribe((event) =>
    console.log("sub2:", event.type, event.x, event.y)
  );
}, 5000);
