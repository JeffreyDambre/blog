import {Component, OnInit} from "@angular/core";
import {PostListItemService} from "./services/postListItem.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items:any[];

  constructor(private myService:PostListItemService) {
  }

  ngOnInit() {
    //let items be defined by service
    this.items = this.myService.items;
  }

  onSwitchOn(){
    this.myService.switchOnAll();
  }

  onSwitchOff(){
    this.myService.switchOffAll();
  }

  title = 'blog';
}
