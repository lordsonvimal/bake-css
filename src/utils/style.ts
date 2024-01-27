import { Border } from "./border";

export class Style {
  props: Record<string, any>;

  constructor() {
    this.props = {};
  }

  methods = () => {
    return {
      ...new Border(this)
    };
  };
}
