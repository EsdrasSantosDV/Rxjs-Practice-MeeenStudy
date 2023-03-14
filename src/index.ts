import { Observable, Subscriber, of } from "rxjs";

//TEMOS OS OPERADORES OU FUNCOES DE CRIAÇÃO NO RXJS
//UM DELES E O OF QUE TEM COMO OBJETIVO CRIAR UMA FONTE DE EMISSÃO, DADO UMA SERIE DE ARGUMENTOS7
//E DEPOIS COMPLETAR
const observer$ = of(1, 2, 3, 4, 5, 6);

observer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completou"),
});

//ANALOGAMENTE PODEMOS FAZER ISSO AQUI

const observer2$ = new Observable<number>((subscriber) => {
  subscriber.next(1),
    subscriber.next(2),
    subscriber.next(3),
    subscriber.next(4),
    subscriber.next(5),
    subscriber.next(6),
    subscriber.complete();
});

observer2$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completou a 2"),
});

//SO QUE PODEMOS CRIAR O NOSSO PROPRIO OPERADOR OF, SO QUE ELE NÃO VAI SER TANTO OTIMIADO FEITO ESSE
function ofOperador(...args: number[]): Observable<number> {
  return new Observable<number>(subscriber =>{
    
    for(let i=0;i < args.length;i++)
    {
      subscriber.next(args[i]);
    }

    subscriber.complete()

  });
}

//O OF OPERADOR POR EXEMPLO PRECISA DE UMA SEIRE DE ARGUMENTOS PRA EMITIR UM FLUXO, ELE É UM OBSERVABLE FRIO

ofOperador(1, 2, 3,4,5,6).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completou')
});