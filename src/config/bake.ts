import { Pseudo } from "./pseudo";

export class Bake {
  style: Record<string, any>;
  unique: string;
  _pseudo: Pseudo | null;

  constructor(unique: string) {
    this.unique = unique;
    this.style = {};
    this._pseudo = null;
  }

  pseudo() {
    if (this._pseudo) return this._pseudo;
    this._pseudo = new Pseudo(this);
    return this._pseudo;
  }

  border() {
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
