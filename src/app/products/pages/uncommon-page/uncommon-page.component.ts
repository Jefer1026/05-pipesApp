import {Component} from '@angular/core';
import {interval, tap} from "rxjs";

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select

  public name: string = 'Jeferson';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Katherine';
    this.gender = "female";
  }


  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Melissa', 'Jeferson', 'Katherine']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteCliente(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person={
    name:'Jeferson',
    age:36,
    address:'Cali,Colombia'

  }

  //Async Pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap(value => console.log('tap:',value))
    );

  public promiseValue:Promise<string> =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
},3500);
})

}
