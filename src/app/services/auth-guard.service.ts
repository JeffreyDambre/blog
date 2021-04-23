import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.authService.isAuth) {
      //On laisse passer l'utilisateur s'il est authentifié
      return true;
    }

    //Sinon, redirection vers la page d'authentification
    this.router.navigate(['/auth']);
  }

}
