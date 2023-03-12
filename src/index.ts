import { Observable } from "rxjs";

//O OBSERSABLE E UM GENERIC, ENTÃO ELE PODE EMITIR QUALQUER TIPO DE VALOR, COMO ELE EMITE STRINGS
//COLOCAMOS NO GENERIC ABAIXO QU EELE RETORNA STRING
const newObservable$ = new Observable<string>((subscriber)=>{
  //TEMOS NOSSO SUBSCRIBER
  //E TEMOS O CICLO DE VIDA DO NOSSO OBSERVABLE
  //O NEXT E QUE ELE VAI EMITIR VARIOS VALORES, AO LONGO DO TEMPO
  subscriber.next("ESDRAS");
  subscriber.next("SANTOS");
  subscriber.next("DE");
  //AQUI ESTAMOS EMITINDO O OLIVEIRA DE FORMA ASSICRONA

  //O OBSERVABLE PODE EMITIR VALORES SINCRONOS E ASSICRONOS
  setTimeout(()=>{subscriber.next("Oliveira");subscriber.complete();},2000);

  //LOGICA TEARDOWN E QUANDO O OBSERVABLE NOTIFICA UM COMPLETE, OU QUANDO ELE NOTIFICA UM ERRO
  return () =>{
    //LOCAL PARA FORNECER O COMPORTAMENTO DE LIMPEZA E CANCELAMENTO
    console.log("LOGICA TEARDOWN");
  };
  //LOGICA TEARDOWN E BOA DEMAIS, PQ AQUI PODEMOS CANCELAR PROCESSOS E ADNAMENTO QUE FORAM INCIIALIZADOS PELO OBSERVABLE

});
console.log('antes da assinatura')



const observer = newObservable$.subscribe({next:(value)=>console.log(value),complete:()=>console.log("finalziou"),error:()=>console.log("deu pau")


});

console.log("depois da assinatura");
