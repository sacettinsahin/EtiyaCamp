import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PrepationToCampComponent } from './pages/prepation-to-camp/prepation-to-camp.component';

const routes: Routes = [
  {path:'', redirectTo:"homepage", pathMatch:"full"},
  {path:"homepage", component:HomepageComponent},
  {path:"camp", component:PrepationToCampComponent},
  {path:"faq",component:FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
