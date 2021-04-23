import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {

  @Input() items: any[];
  // items = [
  //   {
  //     title: 'title1',
  //     content: 'content1'
  //   },
  //   {
  //     title: 'title2',
  //     content: 'content2'
  //   },
  //   {
  //     title: 'title3',
  //     content: 'content3'
  //   }
  // ];

  constructor() {
  }

  ngOnInit():void {
  }

}
