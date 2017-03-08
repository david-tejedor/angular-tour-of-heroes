import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {AppComponents} from "./app.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [
    AppComponents,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponents]
})

export class AppModule {
}
