import { COLORS_KEY_VAL } from "../config/color";
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
}

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
      borders[`${borderWidth}s${borderColor}` as BorderWidthColor] = `${BORDER_WIDTHS[borderWidth as BorderWidth]} solid ${COLORS_KEY_VAL[borderColor as BorderColor]}`;
    }
  }
  return borders as BorderVal;
}

const BORDERS = getBorders();

export class Border {
  style: Style;

  constructor(style: Style) {
    this.style = style;
  }

  borderTop = () => {
    return this.style.methods();
  }
  
  borderRight = () => {
    return this.style.methods();
  }
  
  borderBottom = () => {
    return this.style.methods();
  }
  
  borderLeft = () => {
    return this.style.methods();
  }
  
  borderWidth = () => {
    return this.style.methods();
  }
  
  borderRadius = (br: BorderRadius) => {
    this.style.props.borderRadius = br;
    return this.style.methods();
  }
  
  borderColor = (bc: BorderColor) => {
    this.style.props.borderColor = bc;
    return this.style.methods();
  }

  borderStyle = (bs: BorderStyle) => {
    this.style.props.borderStyle = bs;
    return this.style.methods();
  }

  border = (b: BorderWidthColor) => {
    this.style.props.border = b;
    return this.style.methods();
  }

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
  }
}
