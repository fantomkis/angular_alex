import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NumberComponent } from './number/number.component';
import { ChildComponent } from './child/child.component';
import { DeficePipe } from './pipes/defices.pipe';
import { SocialService } from './services/socialService.service';
import { SociumComponent } from './socium/socium.component';

@NgModule({
  exports: [NumberComponent],
  declarations: [
    AppComponent,
    TitleComponent,
    NumberComponent,
    ChildComponent,
    DeficePipe,
    SociumComponent
    
   
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    SocialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
