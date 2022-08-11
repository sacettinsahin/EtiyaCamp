import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratePipe } from './pipes/enumerate.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';



@NgModule({
  declarations: [
    EnumeratePipe,
    PaginationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnumeratePipe,
    PaginationPipe
  ]
})
export class CoreModule { }
