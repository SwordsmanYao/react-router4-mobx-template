import { observable, action, computed } from 'mobx';
import { queryPerson } from "../services/demo";

class DemoStore {
  @observable person;

  /**
   * 含有接口请求等异步操作的 action
   */
  @action
  async fetchPerson(data) {
    const response = await queryPerson(data);
    if(response.Code === 200) {
      this.setPerson(response.Data);
    }
  }

  /**
   * 不含异步操作的 action
   */
  @action
  setPerson(data) {
    this.person = data;
  }

  @action
  addPersonAge() {
    this.setPerson({
      ...this.person,
      age: this.person.age + 1,
    });
  }

  @action
  setPersonName(data) {
    this.setPerson({
      ...this.person,
      name: data,
    })
  }

  @computed
  get message() {
    return this.data.name + this.data.age;
  }
}

export default new DemoStore();

