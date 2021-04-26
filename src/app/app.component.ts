import {Component, OnInit, OnDestroy} from "@angular/core";
import {AppareilService} from "./services/appareil.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/rx';
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes:number;
  counterSubscription:Subscription; 

  constructor(private myService:AppareilService) {
    //### attention, peut causer des pb car on ne peut plus terminer la Subscription. Et de pus, cela doit être effectué dans le OnInit, pas le constructor
    // counter.subscribe(
    //   (value:number)=> this.secondes = value,
    //   (error:any)=> console.log('Une erreur a été rencontrée'),
    //   ()=> console.log('Observable complétée')
    // )
  }

  ngOnDestroy():void {
    this.counterSubscription.unsubscribe();
  }

  ngOnInit():void {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value:number)=> this.secondes = value
    );
  }

  title = 'blog';

  isAuth = false;
}
