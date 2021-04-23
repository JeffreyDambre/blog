export class PostListItemService {
  items = [
    {
      id: 1,
      title: 'title1 from service',
      content: 'content1',
      status: 'éteint'
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      status: 'allumé'
    },
    {
      id: 3,
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

  findItemById(id:number) {
    return this.items.find((item) => item.id == id);
  }
}
