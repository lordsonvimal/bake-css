import { Pseudo } from "./pseudo";
import { Style } from "./style";

export class Bake {
  className: string;
  pseudo: Pseudo;
  style: Style;

  constructor(className: string) {
    this.className = className;
    this.pseudo = new Pseudo(this, null);
    this.style = new Style(this, null);
  }

  static new(className: string) {
    const bake = new Bake(className);
    return bake.methods();
  }

  class = () => {
    // Iterate through all styles, pseudo styles and create classes in style.css
    console.log(this.style.class());
    Pseudo.getStyles();
    return this.style.class();
  };

  methods = () => {
    return {
      className: this.className,
      class: this.class,
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
