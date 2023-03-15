import { fromEvent, Observable, timer } from "rxjs";

//E IGUAL O TIMEOUT QUE TAVA FAZENDO, ELE VAI FAZER UM TEMPORIZADOR ATE O TEMPO x
const timer$=timer(1000);

const subscribe=timer$.subscribe({
  next:value=>console.log(value),
  complete:()=>console.log("Completou")
})

//NA MÃO
const timermanual$=new Observable<number>(subscriber => {
  const timer2= setTimeout(()=>{
          subscriber.next(0)
          subscriber.complete()
      },
        1000
      )

    //E TEM A LOGICA TEARDOWN
    return ()=>{
      clearTimeout(timer2)
    }
})

function timermanual$f(tempo:number):Observable<number>
{
  const timermanual$=new Observable<number>(subscriber => {
    const timer2= setTimeout(()=>{
          subscriber.next(0)
          subscriber.complete()
        },
        1000
    )

    //E TEM A LOGICA TEARDOWN
    return ()=>{
      clearTimeout(timer2)
    }
  })
  return timermanual$;
}


const subscribe2=timermanual$.subscribe({
  next:value=>console.log(value),
  complete:()=>console.log("Completou2")
})

const timer3$=timermanual$f(1000);

const subscribe3=timer3$.subscribe({
  next:value=>console.log(value),
  complete:()=>console.log("Completou3")
})