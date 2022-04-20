// import bot1Idle from "../../asset/img/toaster/idle.png";
// import bot1Attack from "../../asset/img/toaster/attack.png";
// import bot1Run from "../../asset/img/toaster/run.png";
import bot2Idle from "../../asset/img/Shock Sweeper/wake2.png";
import bot2Attack from "../../asset/img/Shock Sweeper/attackCombo.png";
import bot2Run from "../../asset/img/Shock Sweeper/shuffe(move).png";
import bot3Idle from "../../asset/img/Mud Guard/idle.png";
import bot3Attack from "../../asset/img/Mud Guard/attack 2.png";
import bot3Run from "../../asset/img/Mud Guard/Run.png";

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
  moveFrame: number;
  idleFrame: number;
}

export const playerImg: PlayerAsset = {
  idle: bot2Idle,
  run: bot2Run,
  attack1: bot2Attack,
};

export const enemyImg: PlayerAsset = {
  idle: bot3Idle,
  run: bot3Run,
  attack1: bot3Attack,
};

export const pHit = {
  width: -240,
  height: 200,
  hittime: 3,
  hitFrame: [6, 14, 22],
};

export const eHit = {
  width: -610,
  height: 100,
  hittime: 1,
  hitFrame: [4],
};

export const pframe: Frame = {
  delay: 6,
  atkFrame: 27,
  moveFrame: 8,
  idleFrame: 1,
};

export const eframe: Frame = {
  delay: 6,
  atkFrame: 7,
  moveFrame: 6,
  idleFrame: 5,
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
