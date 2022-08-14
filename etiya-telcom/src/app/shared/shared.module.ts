import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';
import {SkeletonModule} from 'primeng/skeleton';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListSkeletonComponent } from './components/list-skeleton/list-skeleton.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../core/interceptors/spinner.interceptor';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent,
    CardSkeletonComponent,
    SpinnerComponent,
    ListSkeletonComponent,
    
  ],
  imports: [
    CommonModule,
    SkeletonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    MainLayoutComponent,
    CardSkeletonComponent,
    SpinnerComponent,
    ListSkeletonComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
})
export class SharedModule { }
