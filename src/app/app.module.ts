import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './menus/mainmenu/mainmenu.component';
import { ErrormessageComponent } from './system/errormessage/errormessage.component';
import { InfomessageComponent } from './system/infomessage/infomessage.component';
import { ItemComponent } from './item/item.component';
import { OverviewComponent } from './overview/overview.component';
import { AdditemComponent } from './additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ErrormessageComponent,
    InfomessageComponent,
    ItemComponent,
    OverviewComponent,
    AdditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
