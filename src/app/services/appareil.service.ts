import {Subject} from "rxjs/Subject";

export class AppareilService {

  appareilSubject = new Subject < any[] >();

  //Rendre le field privé pour le protéger des accès externes directs, un accès direct n'est pas une bonne pratique.
  private items = [
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

  //La bonne maniere pour acceder aux appareils, par une copie
  emitAppareilSubject() {
    this.appareilSubject.next(this.items.slice());
  }

  //Les methodes qui modifient les items doivent signaler la modif grace au appareilSubject

  switchOnAll() {
    for (let item of this.items) {
      item.status = 'allumé'
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let item of this.items) {
      item.status = 'éteint'
    }
    this.emitAppareilSubject();
  }

  switchOff(i:number) {
    this.items[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  switchOn(i:number) {
    this.items[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  findItemById(id:number) {
    return this.items.find((item) => item.id == id);
  }
}
