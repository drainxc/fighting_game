// import bot1Idle from "../../asset/img/toaster/idle.png";
// import bot1Attack from "../../asset/img/toaster/attack.png";
// import bot1Run from "../../asset/img/toaster/run.png";
import bot2Idle from "../../asset/img/Shock Sweeper/wake2.png";
import bot2Attack from "../../asset/img/Shock Sweeper/attackCombo.png";
import bot2Run from "../../asset/img/Shock Sweeper/shuffe(move).png";
import bot2BeShot from "../../asset/img/Shock Sweeper/hit.png";
import bot2Death from "../../asset/img/Shock Sweeper/death.png";
import bot3Idle from "../../asset/img/Mud Guard/idle.png";
import bot3Attack from "../../asset/img/Mud Guard/attack 2.png";
import bot3Run from "../../asset/img/Mud Guard/Run.png";
import bot3BeShot from "../../asset/img/Mud Guard/hit.png";
import bot3Death from "../../asset/img/Mud Guard/damaged and death.png";
import bot4Idle from "../../asset/img/Ball and Chain Bot/idle.png";
import bot4Attack from "../../asset/img/Ball and Chain Bot/attack.png";
import bot4Run from "../../asset/img/Ball and Chain Bot/run.png";
import bot4BeShot from "../../asset/img/Ball and Chain Bot/hit.png";
import bot4Death from "../../asset/img/Ball and Chain Bot/death.png";
import bot5Idle from "../../asset/img/Eye ball Monster/idle.png"
import bot5Attack from "../../asset/img/Eye ball Monster/attack.png"
import bot5Run from "../../asset/img/Eye ball Monster/run.png"
import bot5BeShot from "../../asset/img/Eye ball Monster/hit.png"
import bot5Death from "../../asset/img/Eye ball Monster/death.png"
import bot6Idle from "../../asset/img/Bot Wheel/static idle.png"
import bot6Attack from "../../asset/img/Bot Wheel/attack.png"
import bot6Run from "../../asset/img/Bot Wheel/move with FX.png"
import bot6BeShot from "../../asset/img/Bot Wheel/damaged.png"
import bot6Death from "../../asset/img/Bot Wheel/death.png"


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
  damaged: number;
  deathframe: number;
}

export const playerImg: PlayerAsset = {
  idle: bot2Idle,
  run: bot2Run,
  attack: bot2Attack,
  beShot: bot2BeShot,
  death: bot2Death,
};

export const enemyImg: PlayerAsset = {
  idle: bot6Idle,
  run: bot6Run,
  attack: bot6Attack,
  beShot: bot6BeShot,
  death: bot6Death,
};

const bot2Data: Data = {
  width: -345,
  height: 200,
  hittime: 3,
  hitframe: [6, 14, 22],
  atkFrame: 27,
  moveFrame: 8,
  idleFrame: 1,
  damaged: 1,
  deathframe: 5,
};

const bot3Data: Data = {
  width: -610,
  height: 100,
  hittime: 1,
  hitframe: [4],
  atkFrame: 7,
  moveFrame: 6,
  idleFrame: 5,
  damaged: 1,
  deathframe: 8,
};

const bot4Data: Data = {
  width: -320,
  height: 200,
  hittime: 2,
  hitframe: [2, 6],
  atkFrame: 9,
  moveFrame: 8,
  idleFrame: 5,
  damaged: 1,
  deathframe: 5,
};

const bot5Data: Data = {
  width: -480,
  height: 200,
  hittime: 1,
  hitframe: [6],
  atkFrame: 13,
  moveFrame: 7,
  idleFrame: 7,
  damaged: 1,
  deathframe: 12,
};

const bot6Data: Data = {
  width: -650,
  height: 200,
  hittime: 2,
  hitframe: [1, 8],
  atkFrame: 11,
  moveFrame: 8,
  idleFrame: 1,
  damaged: 1,
  deathframe: 6,
};

export const pHit = {
  width: bot2Data.width,
  height: bot2Data.height,
  hittime: bot2Data.hittime,
  hitFrame: bot2Data.hitframe,
  atkFrame: bot2Data.atkFrame,
  moveFrame: bot2Data.moveFrame,
  idleFrame: bot2Data.idleFrame,
  damaged: bot2Data.damaged,
  deathframe: bot2Data.deathframe
};

export const eHit = {
  width: bot6Data.width,
  height: bot6Data.height,
  hittime: bot6Data.hittime,
  hitFrame: bot6Data.hitframe,
  atkFrame: bot6Data.atkFrame,
  moveFrame: bot6Data.moveFrame,
  idleFrame: bot6Data.idleFrame,
  damaged: bot6Data.damaged,
  deathframe: bot6Data.deathframe
};

export const ekey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
  beShot: false,
  death: false,
};

export const pkey: Key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack: false,
  beShot: false,
  death: false,
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
