import { COLORS_KEY_VAL } from "../config/color";
import { Bake } from "./bake";
import { BORDER_NAME, BORDER_PROPS } from "../config/token";

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
type BorderVal = Record<BorderWidthColor | "n", string>;

function getBorders() {
  const borders: Record<string, string> = {
    n: "none"
  };
  for (const borderWidth in BORDER_WIDTHS) {
    for (let borderColor in COLORS_KEY_VAL) {
      borders[`${borderWidth}s${borderColor}` as BorderWidthColor] =
        `${BORDER_WIDTHS[borderWidth as BorderWidth]} solid ${COLORS_KEY_VAL[borderColor as BorderColor]}`;
    }
  }
  return borders as BorderVal;
}

const BORDERS = getBorders();

export class Border {
  bake: Bake;
  classes: Record<string, string>;

  constructor(bake: Bake) {
    this.bake = bake;
    this.classes = {};
  }

  classNames = () => {
    return Object.keys(this.classes).join(" ");
  };

  borderTop = (val: BorderWidthColor) => {
    const className = BORDER_NAME + BORDER_PROPS.top + val;
    this.bake.style.mutateProp("borderTop", BORDERS[val]);
    this.classes[className] = BORDERS[val];
    return this.bake.methods();
  };

  borderRight = (val: BorderWidthColor) => {
    const className = BORDER_NAME + BORDER_PROPS.right + val;
    this.bake.style.mutateProp("borderRight", BORDERS[val]);
    this.classes[className] = BORDERS[val];
    return this.bake.methods();
  };

  borderBottom = (val: BorderWidthColor) => {
    const className = BORDER_NAME + BORDER_PROPS.bottom + val;
    this.bake.style.mutateProp("borderBottom", BORDERS[val]);
    this.classes[className] = BORDERS[val];
    return this.bake.methods();
  };

  borderLeft = (val: BorderWidthColor) => {
    const className = BORDER_NAME + BORDER_PROPS.left + val;
    this.bake.style.mutateProp("borderLeft", BORDERS[val]);
    this.classes[className] = BORDERS[val];
    return this.bake.methods();
  };

  borderWidth = (val: BorderWidth) => {
    const className = BORDER_NAME + BORDER_PROPS.width + val;
    this.bake.style.mutateProp("borderWidth", BORDER_WIDTHS[val]);
    this.classes[className] = BORDER_WIDTHS[val];
    return this.bake.methods();
  };

  borderRadius = (val: BorderRadius) => {
    const className = BORDER_NAME + BORDER_PROPS.radius + val;
    this.bake.style.mutateProp("borderRadius", BORDER_RADIUS[val]);
    this.classes[className] = BORDER_RADIUS[val];
    return this.bake.methods();
  };

  borderColor = (val: BorderColor) => {
    const className = BORDER_NAME + BORDER_PROPS.color + val;
    this.bake.style.mutateProp("borderColor", COLORS_KEY_VAL[val]);
    this.classes[className] = COLORS_KEY_VAL[val];
    return this.bake.methods();
  };

  borderStyle = (val: BorderStyle) => {
    const className = BORDER_NAME + BORDER_PROPS.style + val;
    this.bake.style.mutateProp("borderStyle", BORDER_STYLES[val]);
    this.classes[className] = BORDER_STYLES[val];
    return this.bake.methods();
  };

  border = (val: BorderWidthColor) => {
    const className = BORDER_NAME + val;
    this.bake.style.mutateProp("border", BORDERS[val]);
    this.classes[className] = BORDERS[val];
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
