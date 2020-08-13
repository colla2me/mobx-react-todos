import { observable, action } from 'mobx';

export default class AboutStore {
  @observable counter = 1;

  @action add() {
    this.counter++;
  }

  @action minus() {
    this.counter--;
  }
}