import { Observable } from "rxjs";

const newObservable$ = new Observable(() => {
  console.log("observable sendo executado");
});
console.log('antes da assinatura');

//DESSE MODO NAÕ E ASSICORNO PQ JA E DE IMEDIATO 
const subscription = newObservable$.subscribe();

console.log("depois da assinatura");
