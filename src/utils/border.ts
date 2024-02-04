import { COLORS_KEY_VAL } from "../config/color";
import { BORDER_NAME, BORDER_PROPS } from "../config/token";
import { Style } from "./style";

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
  style: Style;
  classes: Record<string, string>;

  constructor(style: Style) {
    this.style = style;
    this.classes = {};
  }

  class = () => {
    return Object.keys(this.classes).join(" ");
  };

  #setClass = (className: string, val: string) => {
    this.classes[className] = val;
  };

  #getClass = (midName: string, val: string) => {
    return `${BORDER_NAME}${midName}${val}`;
  };

  #goToParent = () => {
    return this.style.methods();
  };

  borderTop = (val: BorderWidthColor) => {
    this.#setClass(this.#getClass(BORDER_PROPS.top, val), BORDERS[val]);
    return this.#goToParent();
  };

  borderRight = (val: BorderWidthColor) => {
    this.#setClass(this.#getClass(BORDER_PROPS.right, val), BORDERS[val]);
    return this.#goToParent();
  };

  borderBottom = (val: BorderWidthColor) => {
    this.#setClass(this.#getClass(BORDER_PROPS.bottom, val), BORDERS[val]);
    return this.#goToParent();
  };

  borderLeft = (val: BorderWidthColor) => {
    this.#setClass(this.#getClass(BORDER_PROPS.left, val), BORDERS[val]);
    return this.#goToParent();
  };

  borderWidth = (val: BorderWidth) => {
    this.#setClass(this.#getClass(BORDER_PROPS.width, val), BORDER_WIDTHS[val]);
    return this.#goToParent();
  };

  borderRadius = (val: BorderRadius) => {
    this.#setClass(this.#getClass(BORDER_PROPS.radius, val), BORDER_RADIUS[val]);
    return this.#goToParent();
  };

  borderColor = (val: BorderColor) => {
    this.#setClass(this.#getClass(BORDER_PROPS.color, val), COLORS_KEY_VAL[val]);
    return this.#goToParent();
  };

  borderStyle = (val: BorderStyle) => {
    this.#setClass(this.#getClass(BORDER_PROPS.style, val), BORDER_STYLES[val]);
    return this.#goToParent();
  };

  border = (val: BorderWidthColor) => {
    this.#setClass(this.#getClass("", val), BORDERS[val]);
    return this.#goToParent();
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
