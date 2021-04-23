import {Component, OnInit} from "@angular/core";
import {PostListItemService} from "../services/postListItem.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name:string = 'Appareil par défaut';
  status:string = 'Statut par défaut';

  constructor(private postListItemService:PostListItemService, private route:ActivatedRoute) {
  }

  ngOnInit():void {
    const id = this.route.snapshot.params['id'];
    var item = this.postListItemService.findItemById(0 + id);
    this.name = item.title;
    this.status= item.status;
  }

}
