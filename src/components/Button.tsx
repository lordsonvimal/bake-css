import { Bake } from "../utils/bake";

export function Button() {
  const btnStyle = Bake.new("btn").border("1sn9").borderRadius("50%");
  btnStyle.hover().borderRadius("3").bake();

  console.log(btnStyle.style());

  return <button style={btnStyle.style()}>button</button>;
}
