import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldActionsComponent } from './field-actions/field-actions.component';
import { FieldRowComponent } from './field-row/field-row.component';
import { FieldGroupComponent } from './field-group/field-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldActionsComponent,
    FieldRowComponent,
    FieldGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
