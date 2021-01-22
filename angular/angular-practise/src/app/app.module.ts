import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddressComponent } from './address/address.component';
import {UserComponent} from './user/user.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';
import {HttpClientModule} from "@angular/common/http";
import { UsComponent } from './components/us/us.component';
import { Us1Component } from './components/us/us1/us1.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        AddressComponent,
        UserComponent,
        CityComponent,
        CitiesComponent,
        UsComponent,
        Us1Component,
        PostsComponent,
        PostComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
