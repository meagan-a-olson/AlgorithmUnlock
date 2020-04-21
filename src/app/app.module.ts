import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { UpgradesComponent } from './upgrades/upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    LeftPanelComponent,
    UpgradesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
