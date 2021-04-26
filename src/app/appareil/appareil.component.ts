import {Component, OnInit, Input} from "@angular/core";
import {AppareilService} from "../services/appareil.service";

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

  onLike() {
    console.log('onLike title=%s', this.title);
    this.listItemClass = 'list-group-item-success';
  }

  onDislike() {
    console.log('dislike title=%s', this.title);
    this.listItemClass = 'list-group-item-danger';
  }

  constructor(private appareilService:AppareilService) {
  }

  ngOnInit():void {
  }

  onSwitchOn() {
    this.appareilService.switchOn(this.index);
  }

  onSwitchOff() {
    this.appareilService.switchOff(this.index);
  }

}
