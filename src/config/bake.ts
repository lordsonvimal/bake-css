import { Border } from "./border";
import { Pseudo } from "./pseudo";

export class Bake {
  style: Record<string, any>;
  unique: string;
  _border: Border | null;
  _pseudo: Pseudo | null;

  constructor(unique: string) {
    this.unique = unique;
    this.style = {};
    this._border = null;
    this._pseudo = null;
  }

  pseudo() {
    if (this._pseudo) return this._pseudo;
    this._pseudo = new Pseudo(this);
    return this._pseudo;
  }

  border() {
    if (this._border) return this._border;
    this._border = new Border(this);
    return this._border;
  }

  font() {
    return this;
  }

  padding() {
    return this;
  }

  margin() {
    return this;
  }

  height() {
    return this;
  }

  position() {
    return this;
  }

  overflow() {
    return this;
  }

  display() {
    return this;
  }

  width() {
    return this;
  }

  zIndex() {
    return this;
  }

  value() {
    return this.style;
  }
}
