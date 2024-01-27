import { bake } from "../utils/bake";

export function Button() {
  const btnStyle = bake("btn").border("1sn9").borderRadius("50%");
  return <button style={btnStyle.props}>button</button>;
}
