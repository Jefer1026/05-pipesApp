import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";



@NgModule({
  declarations: [],
  imports: [  ],
  exports:[

    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
