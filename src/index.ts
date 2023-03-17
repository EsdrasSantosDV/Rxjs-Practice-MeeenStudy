import {combineLatest, debounceTime, filter, forkJoin, fromEvent, map, Observable, tap} from "rxjs";
import {makeLogger} from "ts-loader/dist/logger";

const sliderInput = document.querySelector('input#slider');
//'debounceTime' E FEITO PARA aguardar as emissões
// para se estabelecer antes de emitir o valor final.
fromEvent<any>(sliderInput, 'input').pipe(
    debounceTime(2000),
    map((event:any) => event.target['value'])
).subscribe(value => console.log(value));

//ISSO E MUITO BOM PRA INPUT PQ CONSEGUIMOS AGUARDAR AS EMISSOES QUE REALMENTE DEVEM ACONTECER
