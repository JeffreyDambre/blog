import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

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
