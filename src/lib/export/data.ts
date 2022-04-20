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
  idle: bot4Idle,
  run: bot4Run,
  attack: bot4Attack,
  beShot: bot4BeShot,
  death: bot4Death,
};

const bot2Data: Data = {
  width: -345,
  height: 200,
  hittime: 3,
  hitframe: [6, 14, 22],
  atkFrame: 27,
  moveFrame: 8,
  idleFrame: 1,
  damaged: 2,
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
  width: bot4Data.width,
  height: bot4Data.height,
  hittime: bot4Data.hittime,
  hitFrame: bot4Data.hitframe,
  atkFrame: bot4Data.atkFrame,
  moveFrame: bot4Data.moveFrame,
  idleFrame: bot4Data.idleFrame,
  damaged: bot4Data.damaged,
  deathframe: bot4Data.deathframe
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
