import { combineLatest, fromEvent } from "rxjs";

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temperatureInputEvent$ = fromEvent<any>(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent<any>(conversionDropdown, 'input');

//O COMBINE LATEST PEGA OS DOIS ULTIMOS VALORES DE CADA E COMBINA, MAS SO TIVER VALOR EM CADA UM, SENÃO NÃO MUDA NADA
//ELE EESPERA OS DOIS EMITIREM ALGUM VALOR PRO COMBINE LATEST EMITIR
combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
    //ELE TAMBEM E UM QUE RECEBE UM ARRAY DE OBSERABLES
    //SE INSCREVE
    ([temperatureInputEvent, conversionInputEvent]) => {
      const temperature = Number(temperatureInputEvent.target['value']);
      const conversion = conversionInputEvent.target['value'];

      let result: number;
      if (conversion === 'f-to-c') {
        result = (temperature - 32) * 5/9;
      } else if (conversion === 'c-to-f') {
        result = temperature * 9/5 + 32;
      }

      resultText.innerText = String(result);
    }
);
