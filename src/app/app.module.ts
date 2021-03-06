import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './menus/mainmenu/mainmenu.component';
import { ErrormessageComponent } from './system/errormessage/errormessage.component';
import { InfomessageComponent } from './system/infomessage/infomessage.component';
import { ItemComponent } from './item/item.component';
import { OverviewComponent } from './overview/overview.component';
import { AdditemComponent } from './additem/additem.component';
import { MoveitemComponent } from './moveitem/moveitem.component';
import { FinditemComponent } from './finditem/finditem.component';
import { ContainerComponent } from './container/container.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ErrormessageComponent,
    InfomessageComponent,
    ItemComponent,
    OverviewComponent,
    AdditemComponent,
    MoveitemComponent,
    FinditemComponent,
    ContainerComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
