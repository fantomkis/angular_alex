import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NumberComponent } from './number/number.component';
import { ChildComponent } from './child/child.component';
import { ValueComponent } from './value/value.component';
import { FormsModule } from '@angular/forms';
import { DeficePipe } from './pipes/defice.pipe';
import { PipeTitelComponent } from './pipe-titel/pipe-titel.component';
import { ColorDirective } from './directive/color.directive';
@NgModule({
  exports: [NumberComponent],
  declarations: [
    AppComponent,
    TitleComponent,
    NumberComponent,
    ChildComponent,
    ValueComponent,
    DeficePipe,
    PipeTitelComponent,
    ColorDirective
    
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
