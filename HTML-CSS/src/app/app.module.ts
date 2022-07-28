import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampSectionFourComponent } from './components/camp-section-four/camp-section-four.component';
import { CampSectionOneComponent } from './components/camp-section-one/camp-section-one.component';
import { CampSectionThreeComponent } from './components/camp-section-three/camp-section-three.component';
import { CampSectionTwoComponent } from './components/camp-section-two/camp-section-two.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { SearchComponent } from './components/search/search.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PrepationToCampComponent } from './pages/prepation-to-camp/prepation-to-camp.component';
import { FaqComponent } from './pages/faq/faq.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    ProgrammingComponent,
    CardComponent,
    HomepageComponent,
    PrepationToCampComponent,
    CampSectionOneComponent,
    CampSectionTwoComponent,
    CampSectionThreeComponent,
    CampSectionFourComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
