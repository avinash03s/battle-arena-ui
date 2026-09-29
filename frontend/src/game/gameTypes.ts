export interface Wall {
  x: number;
  y: number;
  w: number;
  h: number;
  type: string;
}

export interface Decoration {
  x: number;
  y: number;
  type: string;
}

export interface Player {
  id: string;
  name: string;
  x: number;
  y: number;
  angle: number;
  health: number;
  alive: boolean;
  kills: number;
  ammo: number;
  reserveAmmo: number;
  reloading: boolean;
  color: string;
  characterType: string;
  bot: boolean;
}

export interface Bullet {
  id: string;
  ownerId: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  life: number;
}

export interface GameState {
  players: Player[];
  bullets: Bullet[];
}

export interface MapInfo {
  width: number;
  height: number;
  walls: Wall[];
  decorations: Decoration[];
}

export interface RoomPlayer {
  id: string;
  name: string;
  color?: string;
  characterType?: string;
}

export interface RoomUpdate {
  players: RoomPlayer[];
  maxPlayers: number;
  minPlayers: number;
}

export interface CountdownData {
  value: number;
}

export interface SoloWaitData {
  secondsRemaining: number;
}

export interface GameStartData {
  startTime: number;
}

export interface PlayerEliminatedData {
  name: string;
  by: string;
}

export interface PlayerLeftData {
  name: string;
}

export interface MatchResultPlayer {
  id: string;
  name: string;
  kills: number;
}

export interface MatchResultData {
  winner?: MatchResultPlayer | null;
  players: MatchResultPlayer[];
  elapsed: number;
}

export interface JoinedData {
  selfId: string;
  roomId: string;
  map: MapInfo;
}

export interface JoinGameData {
  name: string;
  roomSize: number;
  characterType: string;
}

export interface PlayerInput {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  angle: number;
}