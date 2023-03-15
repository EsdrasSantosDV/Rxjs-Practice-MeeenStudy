import {interval, Observable} from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";

//O INTERVAL JA NÃO COMPLETA SE NÃO SUBSCREVER ELE
//ELE E UMA FONTE INFINITA ATE O COMPLETE, MAS O INTERVAL NORMAL TEM UMA LOGICA TEARDOWN, TODOS TEM
const interval$=interval(1000);

const subscribe=interval$.subscribe({
  next:value=>console.log(value),
  complete:()=>console.log("Completou")
})


setTimeout(()=>subscribe.unsubscribe(),5000);

//VAMOS FAZER NOSSO PROPRIO
function intervalFunction(tempo:number):Observable<number>{
  return  new Observable(subscriber => {
    let counter = 0;
    const intervalo = setInterval(
        () => {
          subscriber.next(counter++)
        }
        , tempo);

    //TEMOS QUE LIMPAR O NOSSO
    return () => {

      clearInterval(intervalo);
    }

  });

}


const interval2$=intervalFunction(1000);

const subscribe2=interval2$.subscribe({
  next:value=>console.log(value),
  complete:()=>console.log("Completou a segunda"),
})

//nunca vai completar, somente parar a inscriçaõ

setTimeout(()=>{subscribe2.unsubscribe();
    console.log("unsubscribe")}
    ,5000);
