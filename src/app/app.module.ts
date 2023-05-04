import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextInputModule } from './components/text-input/text-input.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TextInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
