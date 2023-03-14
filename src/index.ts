import { from } from "rxjs";


//TEMOS O FROM OPERATOR, QUE AO INVES DO OF QUE RECEBE UMA SERIE DE ARGUMENTOS, ESSE AQUI CONSTUROI UM OBSERVABLE DE ACORDO
//COM UM ARRAY, COM UMA PROMISSE, OU COM UM OBSERVABLE



//AQUI ELE FAZENDO COM UMA PROMISE, AO ASSINAR A PROMISSE, ELE JA DA O THEN E DEPOIS COMPLETA
const somePromise = new Promise((resolve, reject) => {
  resolve('Resolved!');
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: value => console.log(value),
  error: err => console.log('Error:', err),
  complete: () => console.log('Completed')
});

