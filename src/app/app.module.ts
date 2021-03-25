import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';

import {PostListItemService} from './services/postListItem.service';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostListItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
