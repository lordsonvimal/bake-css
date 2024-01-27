// Colors are configured here

const NEUTRAL = "n";
const BLUE = "b";
const RED = "r";
const GREEN = "g";
const ORANGE = "o";

export type ColorName = typeof NEUTRAL | typeof BLUE | typeof RED | typeof GREEN | typeof ORANGE;
export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ColorNameAndLevel = `${ColorName}${ColorLevel}`;
export type ColorTuple = [ColorNameAndLevel, string];
export type Colors = Record<ColorName, Record<ColorLevel, string>>;
export type ColorsByNameLevel = Record<ColorNameAndLevel, string>;

export const COLORS: Colors = {
  [NEUTRAL]: {
    1: "#f9fafb",
    2: "#e5e7eb",
    3: "#d1d5db",
    4: "#9ca3af",
    5: "#6b7280",
    6: "#4b5563",
    7: "#374151",
    8: "#111827",
    9: "#030712"
  },
  [BLUE]: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  },
  [RED]: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  },
  [GREEN]: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  },
  [ORANGE]: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  }
};

function getColors() {
  const colors = {};
  for (let color in COLORS) {
    for (let level in COLORS[color]) {
      colors[`${color}${level}` as ColorNameAndLevel] = COLORS[color][level];
    }
  }
  return colors as ColorsByNameLevel;
}

export const COLORS_KEY_VAL = getColors();
