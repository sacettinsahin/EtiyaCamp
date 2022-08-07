import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from './auth/auth.module';
import { IfNotDirective } from './directive/ifNot/if-not.directive';


@NgModule({
  declarations: [    
    IfNotDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule
  ],
  exports:[
    IfNotDirective,
  ]
})
export class CoreModule { }