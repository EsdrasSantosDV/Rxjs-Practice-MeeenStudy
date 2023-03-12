import { Observable } from "rxjs";

//O OBSERSABLE E UM GENERIC, ENTÃO ELE PODE EMITIR QUALQUER TIPO DE VALOR, COMO ELE EMITE STRINGS
//COLOCAMOS NO GENERIC ABAIXO QU EELE RETORNA STRING
const newObservable$ = new Observable<string>(subscriber=>{
  //TEMOS NOSSO SUBSCRIBER
  //E TEMOS O CICLO DE VIDA DO NOSSO OBSERVABLE
  //O NEXT E QUE ELE VAI EMITIR VARIOS VALORES, AO LONGO DO TEMPO
  subscriber.next("ESDRAS");
  subscriber.next("SANTOS");
  subscriber.next("DE");
  //AQUI ESTAMOS EMITINDO O OLIVEIRA DE FORMA ASSICRONA

  //O OBSERVABLE PODE EMITIR VALORES SINCRONOS E ASSICRONOS
  setTimeout(()=>subscriber.next("Oliveira"),2000);
    
  
});
console.log('antes da assinatura');



const observer = newObservable$.subscribe((value)=>console.log(value));

console.log("depois da assinatura");
