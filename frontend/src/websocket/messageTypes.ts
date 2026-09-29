import type {
  GameState,
  JoinedData,
  MatchResultData,
  PlayerEliminatedData,
  PlayerLeftData,
  RoomUpdate,
  SoloWaitData,
} from "../game/gameTypes";

export type ClientMessageType =
  | "joinGame"
  | "input"
  | "shoot"
  | "reload"
  | "leaveMatch";

export interface ClientMessage {
  type: ClientMessageType;
  data?: unknown;
}

export type ServerMessageType =
  | "joined"
  | "roomUpdate"
  | "countdown"
  | "soloWait"
  | "gameStart"
  | "state"
  | "playerEliminated"
  | "playerLeft"
  | "matchResult";

export interface ServerMessage {
  type: ServerMessageType;
  data: unknown;
}

export interface ServerMessageMap {
  joined: JoinedData;
  roomUpdate: RoomUpdate;
  countdown: number;
  soloWait: SoloWaitData;
  gameStart: { startTime: number };
  state: GameState;
  playerEliminated: PlayerEliminatedData;
  playerLeft: PlayerLeftData;
  matchResult: MatchResultData;
}