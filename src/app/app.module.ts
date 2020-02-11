import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, SidenavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
