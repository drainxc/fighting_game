import bot1Idle from "../../asset/img/toaster/idle.png";
import bot1Attack from "../../asset/img/toaster/attack.png";
import bot1Run from "../../asset/img/toaster/run.png";

interface PlayerAsset {
  idle: string;
  run: string;
  attack1: string;
}

interface Key {
  r: boolean;
  l: boolean;
  move: boolean;
  float: boolean;
  attack: boolean;
}

interface Keycap {
  w: string;
  a: string;
  d: string;
  attack: string;
}

interface Frame {
  delay: number;
  atkFrame: number;
  jumpFrame: number;
  fallFrame: number;
  moveFrame: number;
  idleFrame: number;
}

export const playerImg: PlayerAsset = {
  idle: bot1Idle,
  run: bot1Run,
  attack1: bot1Attack,
};

export const enemyImg: PlayerAsset = {
  idle: bot1Idle,
  run: bot1Run,
  attack1: bot1Attack,
};

export const ekey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
};

export const pkey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
};

export const pkeycap: Keycap = {
  w: "w",
  a: "a",
  d: "d",
  attack: "u",
};
export const ekeycap: Keycap = {
  w: "ArrowUp",
  a: "ArrowRight",
  d: "ArrowLeft",
  attack: "7",
};

export const pframe: Frame = {
  delay: 6,
  atkFrame: 11,
  jumpFrame: 8,
  fallFrame: 8,
  moveFrame: 8,
  idleFrame: 5,
};

export const eframe: Frame = {
  delay: 6,
  atkFrame: 11,
  jumpFrame: 8,
  fallFrame: 8,
  moveFrame: 8,
  idleFrame: 5,
};
