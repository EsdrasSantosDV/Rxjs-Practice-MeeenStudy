import { Observable } from "rxjs";

const newObservable$ = new Observable(subscriber=>{
  //TEMOS NOSSO SUBSCRIBER
  //E TEMOS O CICLO DE VIDA DO NOSSO OBSERVABLE
  //O NEXT E QUE ELE VAI EMITIR VARIOS VALORES, AO LONGO DO TEMPO
  subscriber.next("ESDRAS");
  subscriber.next("SANTOS");
  subscriber.next("DE");
  subscriber.next("OLIVEIRA");
  
  
});
console.log('antes da assinatura');



const observer = newObservable$.subscribe((value)=>console.log(value));

console.log("depois da assinatura");
