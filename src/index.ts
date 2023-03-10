import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  setTimeout(()=> { subscriber.next('Alice')},7000);
  setTimeout(()=>{ subscriber.next('Ben');},5000);
  setTimeout(()=>{ subscriber.next('Charlie');},10000);
});


const subscription=someObservable$.subscribe(value => console.log("sub1",value));
setTimeout(()=>{const subscription2=someObservable$.subscribe(value=>console.log("sub2",value))},2000);
setTimeout(()=>{subscription.unsubscribe(),console.log("cancelando a assinatura  do  primeiro")},8000)