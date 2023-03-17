import {combineLatest, filter, forkJoin, map, Observable} from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";



//OS PIPES ELEES ADICIONAM MAIS LOGICA
const steam$ = new Observable<number>(subscriber => {
    let counter=0;
    const interv=setInterval(()=>{
        subscriber.next(counter++)
    },1000);

    return ()=>{
        clearInterval(interv)
    }
})

//O MAP ELE MAPEADA CADA VALOR , COM ELE PODEMOS MODIFICAR AS NOTIVACOES EMITIDAS
const thavim=steam$.pipe(map(value => value * 2)).subscribe({
    next:value=>console.log(value)
});


setTimeout(()=>{thavim.unsubscribe(),
    console.log("thavim nãpo quer mais se inscrito na gc")
},100000)