import { Border } from "./border";

export class Style {
  props: Record<string, any>;
  border: Border

  constructor() {
    this.props = {};
    this.border = new Border(this);
  }

  methods = () => {
    return {
      props: this.props,
      ...this.border.methods()
    };
  };
}
