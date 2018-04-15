import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PuzzleOneComponent } from './puzzle-one/puzzle-one.component';
import { CardPuzzleOneComponent } from './card-puzzle-one/card-puzzle-one.component';


@NgModule({
  declarations: [
    AppComponent,
    PuzzleOneComponent,
    CardPuzzleOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
