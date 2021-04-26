import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {MagasinComponent} from "./magasin/magasin.component";
import {AppareilComponent} from "./appareil/appareil.component";
import {AppareilService} from "./services/appareil.service";
import {AuthComponent} from "./auth/auth.component";
import {MagasinViewComponent} from "./magasin-view/magasin-view.component";
import {AuthService} from "./services/auth.service";
import {SingleAppareilComponent} from "./single-appareil/single-appareil.component";
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./services/auth-guard.service";


//Ce point diffère du tuto. Il faut ce cast (<Routes>) pour que l'atelier accepte appRoutes comme un parametre valide de RouterModule.forRoot
var appRoutes:Routes = <Routes>[
  {path: 'appareils', canActivate: [AuthGuard], component: MagasinViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: MagasinViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'},
];
//L'ordre des elements du array est important !


@NgModule({
  declarations: [
    AppComponent,
    MagasinComponent,
    AppareilComponent,
    AuthComponent,
    MagasinViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
