import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{tittle}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponents {
  title = 'Tour of Heroes';
}
