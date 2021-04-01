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

//Ce point diffère du tuto. Il faut ce cast (<Routes>) pour que l'atelier accepte appRoutes comme un parametre valide de RouterModule.forRoot
var appRoutes:Routes = <Routes>[
  {path: 'appareils', component: PostViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: PostViewComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostListItemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
