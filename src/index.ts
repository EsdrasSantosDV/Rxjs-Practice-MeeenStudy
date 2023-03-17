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

//O FILTER ELE FILTRA O FLUXO DADO UMA CONDIÇÃO ESPECIFICADA
const thavim=steam$.pipe(filter(value => value % 2 ==0)).subscribe({
    next:value=>console.log(value)
});


setTimeout(()=>{thavim.unsubscribe(),
    console.log("thavim nãpo quer mais se inscrito na gc")
},100000)