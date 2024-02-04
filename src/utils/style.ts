import { Bake } from "./bake";
import { Border } from "./border";
import { Pseudo } from "./pseudo";

export class Style {
  bake: Bake;
  border: Border;
  pseudo: Pseudo | null;

  constructor(bake: Bake, pseudo: Pseudo | null) {
    this.border = new Border(this);
    this.bake = bake;
    this.pseudo = pseudo;
  }

  class = () => {
    return this.border.class();
  };

  methods = () => {
    return {
      bake: () => {
        return this.bake.methods();
      },
      ...this.border.methods()
    };
  };
}
