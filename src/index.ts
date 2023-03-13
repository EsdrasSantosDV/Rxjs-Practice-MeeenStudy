import { Observable } from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";

//O OBSERSABLE E UM GENERIC, ENTÃO ELE PODE EMITIR QUALQUER TIPO DE VALOR, COMO ELE EMITE STRINGS
//COLOCAMOS NO GENERIC ABAIXO QU EELE RETORNA STRING
const newObservable$ = new Observable<number>((subscriber)=>{
    let number=1;
    const interval=setInterval((i:number)=>{subscriber.next(number);number++},1000);

  //LOGICA TEARDOWN E QUANDO A ASSINATURA TERMINA
  return ()=>{
    console.log("logica teardown");

    //TEMOS A LOGICA DE LIMPAR O INTERVAL , QUE SERIA COLOCAR O COMPORTAMENTO DE NÃO DEXIAR EXCESSO DE MEMORIA
    clearInterval(interval);
  }
});


const observer = newObservable$.subscribe({next:(value)=>console.log(value),complete:()=>console.log("finalziou"),error:(err)=>console.log(err.message)
});

const observer2 = newObservable$.subscribe({next:(value)=>console.log("2-",value),complete:()=>console.log("finalziou"),error:(err)=>console.log(err.message)
});

setTimeout(()=>observer.unsubscribe(),7000);
setTimeout(()=>observer2.unsubscribe(),9000);
