import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

// service
import { MessageService } from './parent-child-datacomm/data-service/data.service';
import { ChildComponent } from './parent-child-datacomm/child/Child.Component';
import { ParentComponent } from './parent-child-datacomm/parent/Parent.Component';

@NgModule({
  declarations: [
    AppComponent, AppContentComponent, AppHeaderComponent,
    AppHomeComponent, AppFooterComponent, ChildComponent, ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
