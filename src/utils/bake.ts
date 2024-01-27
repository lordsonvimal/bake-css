import { Pseudo } from "./pseudo";
import { Style } from "./style";

export function bake(className: string) {
  const pseudo = new Pseudo();
  const style = new Style();

  return {
    className,
    ...pseudo.methods(),
    ...style.methods()
  };
}

// Ex Usage:
// const btnStyle = bake("btn").border(1).borderColor(red).fontSize(12).paddingInline(8);
// const btnStyle = bake("btn").select().borderColor(blue);
// const btnStyle = "b1 bcr fs12 pi8";

// style.css
// .b1 {}
// .bcr {}
// .fs12 {}
// .pi8 {}
// .bcb:select { border-color: "#ccdeef"; }
// @media
