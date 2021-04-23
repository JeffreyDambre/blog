import {Component, OnInit, Input} from "@angular/core";
import {PostListItemService} from "../services/postListItem.service"

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() title:string;
  @Input() content:string;
  @Input() status:string;
  @Input() index:number;
  @Input() id:number;
  listItemClass = '';
  myDate = new Date();
  onLike(){
    console.log('onLike title=%s', this.title);
    this.listItemClass = 'list-group-item-success';
  }
  onDislike(){
    console.log('dislike title=%s', this.title);
    this.listItemClass = 'list-group-item-danger';
  }

  constructor(private postListItemService: PostListItemService) {
  }

  ngOnInit():void {
  }

  onSwitchOn(){
    this.postListItemService.switchOn(this.index);
  }

  onSwitchOff(){
    this.postListItemService.switchOff(this.index);
  }

}
