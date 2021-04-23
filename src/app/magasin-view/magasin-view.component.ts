import {Component, OnInit} from '@angular/core';
import {PostListItemService} from '../services/postListItem.service';

@Component({
  selector: 'app-magasin-view',
  templateUrl: './magasin-view.component.html',
  styleUrls: ['./magasin-view.component.scss']
})
export class MagasinViewComponent implements OnInit {

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
