import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string='jeferson';
  public nameUpper:string='JEFERSON';
  public fullName:string='JeFFerSOn';

  public customDate:Date = new Date();



}
