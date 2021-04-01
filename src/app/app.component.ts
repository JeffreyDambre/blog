import {Component} from "@angular/core";
import {PostListItemService} from "./services/postListItem.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private myService:PostListItemService) {
  }

  title = 'blog';

  isAuth = false;
}
