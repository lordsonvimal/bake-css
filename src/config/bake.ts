import { pseudo } from "./pseudo";
import { Style } from "./style";

export function bake(className: string) {
  // Use styles properly so that builder pattern is proper
  return {
    className,
    pseudo,
    ...new Style().methods()
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
// .bcb:select { border-color: "#ccdeef"; }
// @media
