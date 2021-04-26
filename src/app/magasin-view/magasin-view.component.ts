import {Component, OnInit, OnDestroy} from "@angular/core";
import {AppareilService} from "../services/appareil.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-magasin-view',
  templateUrl: './magasin-view.component.html',
  styleUrls: ['./magasin-view.component.scss']
})
export class MagasinViewComponent implements OnInit, OnDestroy {

  items:any[];
  appareilsubscription:Subscription;

  constructor(private appareilService:AppareilService) {
  }

  ngOnInit() {
    //L'accès direct aux appareils du service est interdit car c'est une mauvaise pratique.
    //Il faut passer par une souscription où on récupère proprement la copie des appareils.
    //1. Ici, on ne fait que s'abonner.
    this.appareilsubscription = this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=> {
        this.items = appareils;
      }
    );

    //2. Il faut aussi provoquer une publication pour que l'abonnement précédent serve à qqch
    this.appareilService.emitAppareilSubject();

    //### ce qui suit est une mauvaise pratique, il ne fait acceder directement à un field d'un service
    //this.items = this.appareilService.items;
  }

  ngOnDestroy():void {
    this.appareilsubscription.unsubscribe();
  }



  onSwitchOn() {
    this.appareilService.switchOnAll();
  }

  onSwitchOff() {
    this.appareilService.switchOffAll();
  }

}
