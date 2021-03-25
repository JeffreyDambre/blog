import {Component, OnInit, Input} from "@angular/core";
import {PostListItemService} from "../services/postListItem.service"

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title:string;
  @Input() content:string;
  @Input() status:string;
  @Input() index:number;
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
