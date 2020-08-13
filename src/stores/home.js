import { observable, action } from 'mobx';

class HomeStore {
  @observable counter = 1;

  @action add() {
    this.counter++;
  }

  @action minus() {
    this.counter--;
  }
}

export default new HomeStore();