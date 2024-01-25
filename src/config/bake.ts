import { pseudo } from "./pseudo";
import { style } from "./style";

export function bake(className: string) {
  // Use styles properly so that builder pattern is proper
  return {
    className,
    pseudo,
    ...style()
  };
}

// Ex Usage:
// const btnStyle = bake("btn").border(1).borderColor(red).fontSize(12).paddingInline(8);
// const btnStyle = bake("btn").pseudo("select").borderColor(blue);
// const btnStyle = "b1 bcr fs12 pi8";

// style.css
// .b1 {}
// .bcr {}
// .fs12 {}
// .pi8 {}
// .btn:select { border-color: "#ccdeef"; }
