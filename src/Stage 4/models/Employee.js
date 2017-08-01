export default class Employee {
  //added all of this
  constructor(name, id, phone, title) {
      this.name = name;
      this.id = id;
      this.phone = phone;
      this.title = title;
       
  }
  
  updateName(str) {
    this.name = str;
  }

  updatePhone(str) {
    this.phone = str;
  }

  updateTitle(str) {
    this.title = str;
  }
}