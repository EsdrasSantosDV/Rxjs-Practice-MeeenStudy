import {ajax} from 'rxjs/ajax';

//AJAX FUNCTION E UMA FUNCAO DO RXJS PRA FAZER REQUISIÇOES AJAX
const ajax$= ajax<any>('https://random-data-api.com/api/v2/users')

ajax$.subscribe(data=>console.log(data.response.first_name));

ajax$.subscribe(data=>console.log(data.response.first_name));

ajax$.subscribe(data=>console.log(data.response.first_name));

//COLD OBSERVABLE, PRA CADA ASSINATURA TEM UMA FONTE DE EMISSÃO NOVA