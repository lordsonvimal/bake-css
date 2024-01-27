// Placeholder for border styles

import { Style } from "./style";

export class Border {
  style: Style;

  constructor(style: Style) {
    this.style = style;
  }

  borderTop = () => {
    return this.style;
  }
  
  borderRight = () => {
    return this.style;
  }
  
  borderBottom = () => {
    return this.style;
  }
  
  borderLeft = () => {
    return this.style;
  }
  
  borderWidth = () => {
    return this.style;
  }
  
  borderRadius = () => {
    return this.style;
  }
  
  borderColor = () => {
    return this.style;
  }

  methods = () => {
    return {
      borderBottom: this.borderBottom,
      borderColor: this.borderColor,
      borderLeft: this.borderLeft,
      borderRadius: this.borderRadius,
      borderRight: this.borderRight,
      borderTop: this.borderTop,
      borderWidth: this.borderWidth
    };
  }
}
