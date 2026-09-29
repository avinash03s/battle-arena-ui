export const DEFAULT_MAP_WIDTH = 3000;
export const DEFAULT_MAP_HEIGHT = 2000;

export const PLAYER_HEIGHT = 70;
export const PLAYER_RADIUS = 24;

export const WALL_HEIGHT = 120;

export const INPUT_INTERVAL_MS = 1000 / 30;

export const AVAILABLE_ROOM_SIZES = [2, 4, 6] as const;

export const CHARACTERS = [
  {
    id: "penguin",
    name: "Penguin",
    emoji: "🐧",
    available: true,
    status: "DEFAULT",
  },
  {
    id: "bear",
    name: "Bear",
    emoji: "🐻",
    available: true,
    status: "FREE",
  },
  {
    id: "fox",
    name: "Fox",
    emoji: "🦊",
    available: true,
    status: "FREE",
  },
  {
    id: "wolf",
    name: "Wolf",
    emoji: "🐺",
    available: true,
    status: "FREE",
  },
  {
    id: "horse",
    name: "Horse",
    emoji: "🐴",
    available: true,
    status: "FREE",
  },
  {
    id: "panda",
    name: "Panda",
    emoji: "🐼",
    available: false,
    status: "COMING SOON",
  },
  {
    id: "lion",
    name: "Lion",
    emoji: "🦁",
    available: false,
    status: "COMING SOON",
  },
  {
    id: "tiger",
    name: "Tiger",
    emoji: "🐯",
    available: false,
    status: "COMING SOON",
  },
  {
    id: "eagle",
    name: "Eagle",
    emoji: "🦅",
    available: false,
    status: "COMING SOON",
  },
  {
    id: "dragon",
    name: "Dragon",
    emoji: "🐉",
    available: false,
    status: "COMING SOON",
  },
] as const;