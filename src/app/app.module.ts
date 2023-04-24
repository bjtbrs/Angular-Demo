import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerDashboardModule} from './modules/customer-dashboard/customer-dashboard.module';
import { Router } from '@angular/router';
import { HeroesComponent } from './compoments/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './compoments/hero-detail/hero-detail.component';
import { MessagesComponent } from './compoments/messages/messages.component';
import { DashboardComponent } from './compoments/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';// Angular 通过 HTTP 与远程服务器通讯的机制。
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { TestComponent } from './compoments/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TestComponent,
   
  ],//组件、指令、管道
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerDashboardModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
   
  ],//使用了那些模块
  providers: [],//本模块向全局服务中贡献的那些服务的创建器。
  bootstrap: [AppComponent]//根组件
})//如何编译组件的模板以及如何在运行时创建注入器
export class AppModule { }
