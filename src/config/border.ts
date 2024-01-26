// Placeholder for border styles

export class Border {
  style: any;

  constructor(style: any) {
    this.style = style;
  }

  borderTop = () => {
    return this;
  }
  
  borderRight = () => {
    return this;
  }
  
  borderBottom = () => {
    return this;
  }
  
  borderLeft = () => {
    return this;
  }
  
  borderWidth = () => {
    return this;
  }
  
  borderRadius = () => {
    return this;
  }
  
  borderColor = () => {
    return this;
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
