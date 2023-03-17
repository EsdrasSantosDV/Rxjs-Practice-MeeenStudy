import {combineLatest, filter, forkJoin, map, Observable, tap} from "rxjs";
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


//O TAP ELE FORNE EFEITOS COLATERAIS, USAMOS PRA FAZER LOGGING
const source2$=steam$.pipe(tap((value)=>console.log("antes do map",value)),map(value => value * 2),tap((value)=>console.log(value)))


const thavim=source2$.subscribe()



setTimeout(()=>{thavim.unsubscribe(),
    console.log("thavim nãpo quer mais se inscrito na gc")
},100000)