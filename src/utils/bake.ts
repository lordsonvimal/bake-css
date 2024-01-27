import { Pseudo } from "./pseudo";
import { Style } from "./style";

export class Bake {
  className: string;
  pseudo: Pseudo;
  style: Style;

  constructor(className: string) {
    this.className = className;
    this.pseudo = new Pseudo(this);
    this.style = new Style(this);
  }

  static new(className: string) {
    const bake = new Bake(className);
    return bake.methods();
  }

  methods = () => {
    return {
      className: this.className,
      ...this.pseudo.methods(),
      ...this.style.methods()
    };
  };
}

// Ex Usage:
// const btnStyle = Bake.new("btn").border(1).borderColor(red).fontSize(12).paddingInline(8);
// const btnStyle = Bake.new("btn").select().borderColor(blue);
// const btnStyle = "b1 bcr fs12 pi8";

// style.css
// .b1 {}
// .bcr {}
// .fs12 {}
// .pi8 {}
// .bcb:select { border-color: "#ccdeef"; }
// @media
