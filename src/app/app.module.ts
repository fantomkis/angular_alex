import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NumberComponent } from './number/number.component';
import { ChildComponent } from './child/child.component';
import { DeficePipe } from './pipes/defices.pipe';

@NgModule({
  exports: [NumberComponent],
  declarations: [
    AppComponent,
    TitleComponent,
    NumberComponent,
    ChildComponent,
    DeficePipe
    
   
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
