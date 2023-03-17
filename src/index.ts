import {catchError, combineLatest, debounceTime, EMPTY, filter, forkJoin, fromEvent, map, Observable, tap} from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";

const failingHttpRequest$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.error(new Error('Timeout'));
    }, 3000);
});

console.log('App started');


//O CATCH ERROR, CONSEGUIMOS PEGAR A NOTIFICAÇÃO DE ERRO, E AO INVES DE CHAMAR A LOGICA TEARDOWN
//CHAMAMOS OUTRO OBSERVABLE PARA CONTINUAR BASCIAMENTE O FLUXOO, E NESSE OBSERVABLE ASSIM
//PODNEDO DAR ERRO
failingHttpRequest$.pipe(
    //O OBSERVABLE QUE SSTAMOS CHAMANDO E O EMPTY, DADO QUE NÃO QUEREMOS EMITIR NENHUMA NOTIFICAÇÃO
    //QUANDO O PRIMEIRO DA ERRO que sefria o FALLING, ELE VAI PEGAR ESSE EERRO E CHAMAR ESSE OBSERVABLE, ENTÕA NÃO VAI DAR O
    //O ERRO DO PRIMEIRO O LOG
    catchError(error => EMPTY)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});
