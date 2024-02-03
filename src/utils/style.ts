import { Bake } from "./bake";
import { Border } from "./border";

type StyleProp = Record<string, any>;
type Props = {
  default: StyleProp;
  pseudo: { [key: string]: StyleProp };
};
export class Style {
  props: Props;
  currentProp: StyleProp;
  bake: Bake;
  border: Border;

  constructor(bake: Bake) {
    this.props = {
      default: {},
      pseudo: {}
    };
    this.border = new Border(bake);
    this.bake = bake;
    this.currentProp = this.props.default;
  }

  setCurrentProp = (name?: string) => {
    if (name) {
      // Its a pseudo class
      if (!this.props.pseudo[name]) {
        this.props.pseudo[name] = {};
      }
      this.currentProp = this.props.pseudo[name];
      return;
    }

    // Its a default class
    this.currentProp = this.props.default;
    return;
  };

  mutateProp = (name: string, value: string | number) => {
    this.currentProp[name] = value;
  };

  style = () => {
    return { ...this.props.default, ...this.props.pseudo };
  };

  class = () => {
    return this.border.classNames();
  };

  methods = () => {
    return {
      bake: () => {
        this.setCurrentProp();
        return this.bake.methods();
      },
      class: this.class,
      style: this.style,
      ...this.border.methods()
    };
  };
}
