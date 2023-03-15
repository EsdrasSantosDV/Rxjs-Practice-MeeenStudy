import {combineLatest, forkJoin, Observable} from "rxjs";


const fluxo1$=new Observable<number>(
    subscriber => {
        let counter=40;
        const intervalzin=setInterval(()=>{
                if(counter!=60)
                {
                        subscriber.next(counter++)
                }
                else
                {
                        subscriber.complete()
                }

        },1000)
        return ()=>
        {
                clearInterval(intervalzin);
        }
    }

)

const fluxo2$=new Observable<number>(
    subscriber => {
            let counter=30;
            const intervalzin=setInterval(()=>{
                    if(counter!=35)
                    {
                            subscriber.next(counter++)
                    }
                    else
                    {
                            subscriber.complete()
                    }

            },1000)
            return ()=>
            {
                    clearInterval(intervalzin);
            }
    }

)






forkJoin([fluxo1$,fluxo2$]).subscribe(
    //POSSO FAZER UM DESTRUCTURING ARRAY
    ([inscricao1,inscricao2])=>console.log(`ULTIMOS VALORES [${inscricao1}-${inscricao2}]`)
)

combineLatest([fluxo1$,fluxo2$]).subscribe(
    //POSSO FAZER UM DESTRUCTURING ARRAY
    ([inscricao1,inscricao2])=>console.log(`ULTIMOS VALORES [${inscricao1}-${inscricao2}]`)
)