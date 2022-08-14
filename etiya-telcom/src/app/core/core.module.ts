import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratePipe } from './pipes/enumerate.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    EnumeratePipe,
    PaginationPipe,

  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  exports: [
    EnumeratePipe,
    PaginationPipe
  ]
})
export class CoreModule { }
