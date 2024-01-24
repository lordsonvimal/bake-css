import { Bake } from "./bake";

// If else condition and switch case conditions are handled here
export class Condition {
  parent: Bake;

  constructor(parent: Bake) {
    this.parent = parent;
  }

  then() {
    return this;
  }

  when(condition: boolean) {
    return this.then;
  }

  set() {
    return this.parent;
  }
}
