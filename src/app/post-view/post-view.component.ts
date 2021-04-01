import {Component, OnInit} from '@angular/core';
import {PostListItemService} from '../services/postListItem.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

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

}
