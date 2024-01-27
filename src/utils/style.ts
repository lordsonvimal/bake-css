import { Border } from "./border";

export class Style {
  props: Record<string, any>;

  constructor() {
    this.props = {};
  }

  methods = () => {
    const obj = {
      props: this.props,
      ...new Border(this).methods()
    };
    
    return obj;
  };
}
