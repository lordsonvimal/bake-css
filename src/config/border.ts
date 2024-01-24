// Placeholder for border styles

import { Bake } from "./bake";

export class Border {
  parent: Bake;
  style: Record<string, any>;

  constructor(bake: Bake) {
    this.parent = bake;
    this.style = {};
  }

  borderTop() {
    return this;
  }

  borderRight() {
    return this;
  }

  borderBottom() {
    return this;
  }

  borderLeft() {
    return this;
  }

  borderWidth() {
    return this;
  }

  borderRadius() {
    return this;
  }

  borderColor() {
    return this;
  }

  // set shorthand for border
  // return parent
  set() {
    return this.parent;
  }

  value() {
    return this.style;
  }
}
