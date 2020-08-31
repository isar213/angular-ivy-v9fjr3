import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { OldComponent } from './old/old.component';
import { FordComponent } from './ford/ford.component';
import { KaiaComponent } from './kaia/kaia.component';
import { LexusComponent } from './lexus/lexus.component';
import { BmwComponent } from './bmw/bmw.component';
import { MostComponent } from './most/most.component';
import { DodgeComponent } from './dodge/dodge.component';
import { AlphaComponent } from './alpha/alpha.component';
import { RollsRoyceComponent } from './rolls-royce/rolls-royce.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, MainComponent, NewComponent, OldComponent, FordComponent, KaiaComponent, LexusComponent, BmwComponent, MostComponent, DodgeComponent, AlphaComponent, RollsRoyceComponent, BannerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
