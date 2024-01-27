import { COLORS_KEY_VAL } from "../config/color";
import { Bake } from "./bake";

const BORDER_WIDTHS = {
  "0": "0px",
  "1": "1px",
  "3": "3px",
  "5": "5px"
};

const BORDER_STYLES = {
  s: "solid",
  d: "dashed",
  dot: "dotted",
  dble: "double",
  h: "hidden",
  n: "none"
};

const BORDER_RADIUS = {
  ...BORDER_WIDTHS,
  "50%": "50%"
};

type BorderWidth = keyof typeof BORDER_WIDTHS;
type BorderRadius = keyof typeof BORDER_RADIUS;
type BorderStyle = keyof typeof BORDER_STYLES;
type BorderColor = keyof typeof COLORS_KEY_VAL;
type BorderWidthColor = `${BorderWidth}s${BorderColor}`;
// type BorderVal = Record<BorderWidthColor | "n", string>;

// function getBorders() {
//   const borders: Record<string, string> = {
//     n: "none"
//   };
//   for (const borderWidth in BORDER_WIDTHS) {
//     for (let borderColor in COLORS_KEY_VAL) {
//       borders[`${borderWidth}s${borderColor}` as BorderWidthColor] =
//         `${BORDER_WIDTHS[borderWidth as BorderWidth]} solid ${COLORS_KEY_VAL[borderColor as BorderColor]}`;
//     }
//   }
//   return borders as BorderVal;
// }

// TODO: Handle the values
// const BORDERS = getBorders();

export class Border {
  bake: Bake;

  constructor(bake: Bake) {
    this.bake = bake;
  }

  borderTop = (bt: BorderWidthColor) => {
    this.bake.style.mutateProp("borderTop", bt);
    return this.bake.methods();
  };

  borderRight = (br: BorderWidthColor) => {
    this.bake.style.mutateProp("borderRight", br);
    return this.bake.methods();
  };

  borderBottom = (bb: BorderWidthColor) => {
    this.bake.style.mutateProp("borderBottom", bb);
    return this.bake.methods();
  };

  borderLeft = (bl: BorderWidthColor) => {
    this.bake.style.mutateProp("borderLeft", bl);
    return this.bake.methods();
  };

  borderWidth = (bw: BorderWidth) => {
    this.bake.style.mutateProp("borderWidth", bw);
    return this.bake.methods();
  };

  borderRadius = (br: BorderRadius) => {
    this.bake.style.mutateProp("borderRadius", br);
    return this.bake.methods();
  };

  borderColor = (bc: BorderColor) => {
    this.bake.style.mutateProp("borderColor", bc);
    return this.bake.methods();
  };

  borderStyle = (bs: BorderStyle) => {
    this.bake.style.mutateProp("borderStyle", bs);
    return this.bake.methods();
  };

  border = (b: BorderWidthColor) => {
    this.bake.style.mutateProp("border", b);
    return this.bake.methods();
  };

  methods = () => {
    return {
      border: this.border,
      borderBottom: this.borderBottom,
      borderColor: this.borderColor,
      borderLeft: this.borderLeft,
      borderRadius: this.borderRadius,
      borderRight: this.borderRight,
      borderStyle: this.borderStyle,
      borderTop: this.borderTop,
      borderWidth: this.borderWidth
    };
  };
}
