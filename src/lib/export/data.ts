// import bot1Idle from "../../asset/img/toaster/idle.png";
// import bot1Attack from "../../asset/img/toaster/attack.png";
// import bot1Run from "../../asset/img/toaster/run.png";
import bot2Idle from "../../asset/img/Shock Sweeper/wake2.png";
import bot2Attack from "../../asset/img/Shock Sweeper/attackCombo.png";
import bot2Run from "../../asset/img/Shock Sweeper/shuffe(move).png";
import bot3Idle from "../../asset/img/Mud Guard/idle.png";
import bot3Attack from "../../asset/img/Mud Guard/attack 2.png";
import bot3Run from "../../asset/img/Mud Guard/Run.png";
import bot4Idle from "../../asset/img/Ball and Chain Bot/idle.png";
import bot4Attack from "../../asset/img/Ball and Chain Bot/attack.png";
import bot4Run from "../../asset/img/Ball and Chain Bot/run.png";

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

interface Data {
  width: number;
  height: number;
  hittime: number;
  hitframe: number[];
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
  idle: bot4Idle,
  run: bot4Run,
  attack1: bot4Attack,
};

const bot1Data: Data = {
  width: -240,
  height: 200,
  hittime: 3,
  hitframe: [6, 14, 22],
  atkFrame: 27,
  moveFrame: 8,
  idleFrame: 1,
};

const bot2Data: Data = {
  width: -610,
  height: 100,
  hittime: 1,
  hitframe: [4],
  atkFrame: 7,
  moveFrame: 6,
  idleFrame: 5,
};

const bot3Data: Data = {
  width: -320,
  height: 200,
  hittime: 2,
  hitframe: [2, 6],
  atkFrame: 9,
  moveFrame: 8,
  idleFrame: 5,
};

export const pHit = {
  width: bot1Data.width,
  height: bot1Data.height,
  hittime: bot1Data.hittime,
  hitFrame: bot1Data.hitframe,
  atkFrame: bot1Data.atkFrame,
  moveFrame: bot1Data.moveFrame,
  idleFrame: bot1Data.idleFrame,
};

export const eHit = {
  width: bot3Data.width,
  height: bot3Data.height,
  hittime: bot3Data.hittime,
  hitFrame: bot3Data.hitframe,
  atkFrame: bot3Data.atkFrame,
  moveFrame: bot3Data.moveFrame,
  idleFrame: bot3Data.idleFrame,
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
