import { Bake } from "../utils/bake";

const btnStyle = Bake.new("btn").border("1sb9").borderRadius("3");
btnStyle.hover().borderRadius("1").bake();

console.log(btnStyle.style());

export const btnStyles = {
  btnClass: btnStyle.class()
};
