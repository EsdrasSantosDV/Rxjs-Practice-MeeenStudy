import { Observable } from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";

//O OBSERSABLE E UM GENERIC, ENTÃO ELE PODE EMITIR QUALQUER TIPO DE VALOR, COMO ELE EMITE STRINGS
//COLOCAMOS NO GENERIC ABAIXO QU EELE RETORNA STRING
const newObservable$ = new Observable<number>((subscriber)=>{
    let number=1;
    setInterval((i:number)=>{subscriber.next(number);number++},1000);
    setTimeout(()=>subscriber.complete(),7000);

});
console.log('antes da assinatura')

const observer = newObservable$.subscribe({next:(value)=>console.log(value),complete:()=>console.log("finalziou"),error:(err)=>console.log(err.message)


});

console.log("depois da assinatura");
