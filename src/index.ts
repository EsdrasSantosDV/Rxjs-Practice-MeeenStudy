import {forkJoin, interval, Observable, timer} from "rxjs";


import { ajax } from "rxjs/ajax";
import {makeLogger} from "ts-loader/dist/logger";

const randomName$ = ajax<any>('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax<any>('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = ajax<any>('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
// randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));
//
//O FORK JOIN RECE
forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)
);


//COM O FORK JOIN RECEBE UMA MATRIX DE OBSERVABLES, E ELE SO VAI COMPLETAR, EMITIR OS ULTIMOS VALORES DE CADA FLUXO AO COMPLETART
//POR EXEMPLO ACIMA, SE VC FAZER UM FORK JOIN DOS 3 FLUXOS, O FORK SO VAI COMPLETAR QUANDO TODOS OS 3 OBSERVABLES, COMPLETAREM, E ELE SO VAI PEGAR
//O ULTIMO VALOR DE CADA UM

// const fluxo1$=new Observable<number>(subscriber => {})
//
//
//
// const fluxo1$=timer(1000).subscribe(value => console.log("VALOR FLUXO 1: ",value));
// //FLUXO VAI COMPLETAR DEPOIS DE 7 segundos
// setTimeout(()=>fluxo1$.unsubscribe,7000);
// const fluxo2$=timer(1000).subscribe(value => console.log("VALOR FLUXO 2: ",value));
// //FLUXO VAI COMPLETAR DEPOIS DE 9 segundos
// setTimeout(()=>fluxo2$.unsubscribe,9000);
// const fluxo3$=timer(1000).subscribe(value => console.log("VALOR FLUXO 3: ",value));
// //FLUXO VAI COMPLETAR DEPOIS DE 3 segundos
// setTimeout(()=>fluxo3$.unsubscribe,3000);

// forkJoin([fluxo1$,fluxo2$,fluxo3$]).subscribe(
//     //POSSO FAZER UM DESTRUCTURING ARRAY
//     ([inscricao1,inscricao2,inscricao3])=>console.log(`ULTIMOS VALORES${inscricao1}-${inscricao2}-${inscricao3}`)
// )

