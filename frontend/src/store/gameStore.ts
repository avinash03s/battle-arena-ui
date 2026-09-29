import type {
  GameState,
  JoinedData,
  MapInfo,
  MatchResultData,
  PlayerEliminatedData,
  PlayerLeftData,
  RoomUpdate,
} from "../game/gameTypes";

export type GameScreen =
  | "loading"
  | "menu"
  | "howto"
  | "settings"
  | "about"
  | "room"
  | "character"
  | "name"
  | "waiting"
  | "countdown"
  | "game"
  | "result";

export interface GameStore {
  screen: GameScreen;

  roomSize: number;

  characterType: string;

  playerName: string;

  selfId: string | null;

  roomId: string | null;

  map: MapInfo | null;

  gameState: GameState;

  roomUpdate: RoomUpdate | null;

  countdown: number;

  soloWaitSeconds: number | null;

  result: MatchResultData | null;

  killFeed: PlayerEliminatedData[];

  notifications: PlayerLeftData[];

  connected: boolean;

  error: string | null;
}

export const initialGameStore: GameStore = {
  screen: "loading",

  roomSize: 4,

  characterType: "penguin",

  playerName: "",

  selfId: null,

  roomId: null,

  map: null,

  gameState: {
    players: [],
    bullets: [],
  },

  roomUpdate: null,

  countdown: 3,

  soloWaitSeconds: null,

  result: null,

  killFeed: [],

  notifications: [],

  connected: false,

  error: null,
};

export function createJoinedState(
  current: GameStore,
  data: JoinedData
): GameStore {
  return {
    ...current,

    selfId: data.selfId,

    roomId: data.roomId,

    map: data.map,

    error: null,
  };
}