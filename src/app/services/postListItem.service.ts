export class PostListItemService {
  items = [
    {
      title: 'title1 from service',
      content: 'content1',
      status: 'éteint'
    },
    {
      title: 'title2',
      content: 'content2',
      status: 'allumé'
    },
    {
      title: 'title3',
      content: 'content3',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for (let item of this.items) {
      item.status = 'allumé'
    }
  }

  switchOffAll() {
    for (let item of this.items) {
      item.status = 'éteint'
    }
  }

  switchOff(i:number) {
    this.items[i].status = 'éteint'
  }

  switchOn(i:number) {
    this.items[i].status = 'allumé'
  }
}
