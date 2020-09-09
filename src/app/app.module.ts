import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PersonaComponent } from './persona/persona.component';
import { DaylogComponent } from './daylog/daylog.component';
import { EnablerComponent } from './enabler/enabler.component';
import { CardComponent } from './daylog/components/card/card.component';
import { ContentboxComponent } from './intro/components/contentbox/contentbox.component';
import { PersonaboxComponent } from './persona/components/personabox/personabox.component';
import { DashedlineComponent } from './daylog/components/dashedline/dashedline.component';
import { TimelogComponent } from './daylog/components/timelog/timelog.component';
import { ActivityComponent } from './daylog/components/activity/activity.component';
import { EmployeedetailComponent } from './daylog/components/employeedetail/employeedetail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PersonaComponent,
    DaylogComponent,
    EnablerComponent,
    CardComponent,
    ContentboxComponent,
    PersonaboxComponent,
    DashedlineComponent,
    TimelogComponent,
    ActivityComponent,
    EmployeedetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
