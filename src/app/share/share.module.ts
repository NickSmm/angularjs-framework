import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonModule, NzIconModule} from 'ng-zorro-antd';
import {CommonService} from '../service/common.service';
import {MoneyPipe} from '../pipes/money.pipe';


@NgModule({
  declarations: [MoneyPipe],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  providers: [],
  exports: [
    NzButtonModule,
    NzIconModule,
    MoneyPipe
  ]
})
export class ShareModule {
}
