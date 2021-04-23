import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  // statut local. Il faut l'initialiser, puis le faire evoluer en fct de l'appel aux services d'authentification
  authStatus:boolean;

  //Le mot-clef private est un cas de "parameter property". C'est un raccourci.
  // class { constructor(private s:S){} }
  // is a shorthand for
  // class { private s: S; constructor(s: S) {this.s = s} }
  // On remarque donc qu'il n'y a pas à faire une copie du service dans une variable locale, c'est fait automatiquement
  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit():void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      ()=> {
        console.log('connexion réussie');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
