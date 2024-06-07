import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchDirComponent } from './switch-dir/switch-dir.component';
import { NavComponent } from './nav/nav.component';
import { ForDirComponent } from './for-dir/for-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    SwitchDirComponent,
    NavComponent,
    ForDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
