/* eslint-disable @typescript-eslint/no-unused-vars */

import bot1Idle from "../../asset/img/Bot Wheel/static idle.png";
import bot1Attack from "../../asset/img/Bot Wheel/attack.png";
import bot1Run from "../../asset/img/Bot Wheel/move with FX.png";
import bot1BeShot from "../../asset/img/Bot Wheel/damaged.png";
import bot1Death from "../../asset/img/Bot Wheel/death.png";
// import bot2Idle from "../../asset/img/Shock Sweeper/wake2.png";
// import bot2Attack from "../../asset/img/Shock Sweeper/attackCombo.png";
// import bot2Run from "../../asset/img/Shock Sweeper/shuffe(move).png";
// import bot2BeShot from "../../asset/img/Shock Sweeper/hit.png";
// import bot2Death from "../../asset/img/Shock Sweeper/death.png";
// import bot3Idle from "../../asset/img/Mud Guard/idle.png";
// import bot3Attack from "../../asset/img/Mud Guard/attack 2.png";
// import bot3Run from "../../asset/img/Mud Guard/Run.png";
// import bot3BeShot from "../../asset/img/Mud Guard/hit.png";
// import bot3Death from "../../asset/img/Mud Guard/damaged and death.png";
// import bot4Idle from "../../asset/img/Ball and Chain Bot/idle.png";
// import bot4Attack from "../../asset/img/Ball and Chain Bot/attack.png";
// import bot4Run from "../../asset/img/Ball and Chain Bot/run.png";
// import bot4BeShot from "../../asset/img/Ball and Chain Bot/hit.png";
// import bot4Death from "../../asset/img/Ball and Chain Bot/death.png";
import bot5Idle from "../../asset/img/Eye ball Monster/idle.png";
import bot5Attack from "../../asset/img/Eye ball Monster/attack.png";
import bot5Run from "../../asset/img/Eye ball Monster/run.png";
import bot5BeShot from "../../asset/img/Eye ball Monster/hit.png";
import bot5Death from "../../asset/img/Eye ball Monster/death.png";

interface PlayerAsset {
  idle: string;
  run: string;
  attack: string;
  beShot: string;
  death: string;
}

interface Key {
  r: boolean;
  l: boolean;
  move: boolean;
  float: boolean;
  attack: boolean;
  beShot: boolean;
  death: boolean;
  attacking: boolean;
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
  hitFrame: number[];
  atkFrame: number;
  moveFrame: number;
  idleFrame: number;
  damaged: number;
  deathFrame: number;
  cooltime: number;
}

export const playerImg: PlayerAsset = {
  idle: bot5Idle,
  run: bot5Run,
  attack: bot5Attack,
  beShot: bot5BeShot,
  death: bot5Death,
};

export const enemyImg: PlayerAsset = {
  idle: bot1Idle,
  run: bot1Run,
  attack: bot1Attack,
  beShot: bot1BeShot,
  death: bot1Death,
};

const bot1Data: Data = {
  width: -650,
  height: 200,
  hittime: 2,
  hitFrame: [1, 8],
  atkFrame: 11,
  moveFrame: 8,
  idleFrame: 1,
  damaged: 0.625,
  deathFrame: 6,
  cooltime: 2,
};

// const bot2Data: Data = {
//   width: -345,
//   height: 200,
//   hittime: 3,
//   hitFrame: [6, 14, 22],
//   atkFrame: 27,
//   moveFrame: 8,
//   idleFrame: 1,
//   damaged: 5,
//   deathFrame: 5,
//   cooltime: 5,
// };

// const bot3Data: Data = {
//   width: -610,
//   height: 100,
//   hittime: 1,
//   hitFrame: [4],
//   atkFrame: 7,
//   moveFrame: 6,
//   idleFrame: 5,
//   damaged: 2,
//   deathFrame: 8,
//   cooltime: 3,
// };

// const bot4Data: Data = {
//   width: -320,
//   height: 200,
//   hittime: 2,
//   hitFrame: [2, 6],
//   atkFrame: 9,
//   moveFrame: 8,
//   idleFrame: 5,
//   damaged: 0.5,
//   deathFrame: 5,
//   cooltime: 1,
// };

const bot5Data: Data = {
  width: -480,
  height: 200,
  hittime: 1,
  hitFrame: [6],
  atkFrame: 13,
  moveFrame: 7,
  idleFrame: 7,
  damaged: 1.5625,
  deathFrame: 12,
  cooltime: 1,
};

export const pHit: Data = {
  width: bot5Data.width,
  height: bot5Data.height,
  hittime: bot5Data.hittime,
  hitFrame: bot5Data.hitFrame,
  atkFrame: bot5Data.atkFrame,
  moveFrame: bot5Data.moveFrame,
  idleFrame: bot5Data.idleFrame,
  damaged: bot5Data.damaged,
  deathFrame: bot5Data.deathFrame,
  cooltime: bot5Data.cooltime,
};

export const eHit: Data = {
  width: bot1Data.width,
  height: bot1Data.height,
  hittime: bot1Data.hittime,
  hitFrame: bot1Data.hitFrame,
  atkFrame: bot1Data.atkFrame,
  moveFrame: bot1Data.moveFrame,
  idleFrame: bot1Data.idleFrame,
  damaged: bot1Data.damaged,
  deathFrame: bot1Data.deathFrame,
  cooltime: bot1Data.cooltime,
};

export const ekey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
  beShot: false,
  death: false,
  attacking: false,
};

export const pkey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
  beShot: false,
  death: false,
  attacking: false,
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
