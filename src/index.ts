import { Observable, Subscriber,of } from "rxjs";

//TEMOS OS OPERADORES OU FUNCOES DE CRIAÇÃO NO RXJS
//UM DELES E O OF QUE TEM COMO OBJETIVO CRIAR UMA FONTE DE EMISSÃO, DADO UMA SERIE DE ARGUMENTOS7
//E DEPOIS COMPLETAR
const observer$=of(1,2,3,4,5,6);


observer$.subscribe({next:value=>console.log(value),complete:()=>console.log("completou"),
});


//ANALOGAMENTE PODEMOS FAZER ISSO AQUI

const observer2$=new Observable(subscriber=>{
  subscriber.next(1),
  subscriber.next(2),
  subscriber.next(3),
  subscriber.next(4),
  subscriber.next(5),
  subscriber.next(6),
  subscriber.complete()
})


observer2$.subscribe({next:value=>console.log(value),complete:()=>console.log("completou a 2"),
});


