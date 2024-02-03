import { Bake } from "../utils/bake";

const btn = Bake.new("btn").border("1sb9").borderRadius("3");
btn.bake().hover().borderRadius("1").bake();

export const btnStyles = {
  btnClass: btn.bake().class()
};
