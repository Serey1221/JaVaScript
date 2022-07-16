import { Person } from "./person";
export class Teacher extends Person {
  //parent class
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
