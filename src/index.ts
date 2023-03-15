import { fromEvent, Observable } from "rxjs";

const triggerButton = document.querySelector('button#trigger');


//TEMOS O FROM EVENT, QUE SERIA BASICAMENTE UM CRIADOR QEU PERMITE CIRAR UMA OBSERVAVEL DE DIFERENTES FONTES
//SO QUE ELE E INFINITO ATE NOS DARMOS UM UNSUBSCRIBE E TIRAR O VAZAMENTO DE MEMOIRA

// const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//   event => console.log(event.type, event.x, event.y)
// );

//FAZENDO NOSSO PROPRIO FROM EVENT
const triggerClick$ = new Observable<MouseEvent>(subscriber => {
  const clickHandlerFn = (event: MouseEvent) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };
  
  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn);
  };
});

const subscription = triggerClick$.subscribe(
  //PEGAMOS A POSIÇÃO DE CADA CLIQUE NO MOUSE

  event => console.log(event.type, event.x, event.y)
);

//E UM HOT DADO QUE USA A EMISSAÕ DE OUTRAS FONTES
setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 9000);
