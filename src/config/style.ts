import { Border } from "./border";

export class Style {
  style: any;
  constructor() {
    this.style = {};
  }

  methods = () => {
    return {
      ...new Border(this.style)
    };
  };
}
