import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostListItemComponent} from "./post-list-item/post-list-item.component";
import {PostListItemService} from "./services/postListItem.service";
import {AuthComponent} from "./auth/auth.component";
import {PostViewComponent} from "./post-view/post-view.component";
import {AuthService} from "./services/auth.service";
import {SingleAppareilComponent} from "./single-appareil/single-appareil.component";
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./services/auth-guard.service";

//Ce point diffère du tuto. Il faut ce cast (<Routes>) pour que l'atelier accepte appRoutes comme un parametre valide de RouterModule.forRoot
var appRoutes:Routes = <Routes>[
  {path: 'appareils', canActivate: [AuthGuard], component: PostViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: PostViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'},
];
//L'ordre des elements du array est important !


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    PostViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostListItemService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
