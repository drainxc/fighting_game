import player1Idle from "../../asset/img/Bot Wheel/static idle.png";
import player1Attack from "../../asset/img/Bot Wheel/attack.png";
import player1Run from "../../asset/img/Bot Wheel/move with FX.png";
import player1BeShot from "../../asset/img/Bot Wheel/damaged.png";
import player1Death from "../../asset/img/Bot Wheel/death.png";
import player2Idle from "../../asset/img/Shock Sweeper/wake2.png";
import player2Attack from "../../asset/img/Shock Sweeper/attackCombo.png";
import player2Run from "../../asset/img/Shock Sweeper/shuffe(move).png";
import player2BeShot from "../../asset/img/Shock Sweeper/hit.png";
import player2Death from "../../asset/img/Shock Sweeper/death.png";
import player3Idle from "../../asset/img/Mud Guard/idle.png";
import player3Attack from "../../asset/img/Mud Guard/attack 2.png";
import player3Run from "../../asset/img/Mud Guard/Run.png";
import player3BeShot from "../../asset/img/Mud Guard/hit.png";
import player3Death from "../../asset/img/Mud Guard/damaged and death.png";
import player4Idle from "../../asset/img/Ball and Chain Bot/idle.png";
import player4Attack from "../../asset/img/Ball and Chain Bot/attack.png";
import player4Run from "../../asset/img/Ball and Chain Bot/run.png";
import player4BeShot from "../../asset/img/Ball and Chain Bot/hit.png";
import player4Death from "../../asset/img/Ball and Chain Bot/death.png";
import player5Idle from "../../asset/img/Eye ball Monster/idle.png";
import player5Attack from "../../asset/img/Eye ball Monster/attack.png";
import player5Run from "../../asset/img/Eye ball Monster/run.png";
import player5BeShot from "../../asset/img/Eye ball Monster/hit.png";
import player5Death from "../../asset/img/Eye ball Monster/death.png";
import player6Idle from "../../asset/img/Toaster Bot/idle.png";
import player6Attack from "../../asset/img/Toaster Bot/attack.png";
import player6Run from "../../asset/img/Toaster Bot/run.png";
import player6BeShot from "../../asset/img/Toaster Bot/damaged.png";
import player6Death from "../../asset/img/Toaster Bot/death.png";
import player7Idle from "../../asset/img/Ronin/spr_RoninIdle_strip.png";
import player7Attack from "../../asset/img/Ronin/spr_RoninAttack_strip.png";
import player7Run from "../../asset/img/Ronin/spr_RoninRun_strip.png";
import player7BeShot from "../../asset/img/Ronin/spr_RoninGetHit_strip.png";
import player7Death from "../../asset/img/Ronin/spr_RoninDeath_strip.png";

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
  img: string;
}

const player1Data: Data = {
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
  img: "height",
};

const player2Data: Data = {
  width: -345,
  height: 200,
  hittime: 3,
  hitFrame: [6, 14, 22],
  atkFrame: 27,
  moveFrame: 8,
  idleFrame: 1,
  damaged: 2.5,
  deathFrame: 5,
  cooltime: 5,
  img: "height",
};

const player3Data: Data = {
  width: -610,
  height: 100,
  hittime: 1,
  hitFrame: [4],
  atkFrame: 7,
  moveFrame: 6,
  idleFrame: 5,
  damaged: 2,
  deathFrame: 8,
  cooltime: 3,
  img: "height",
};

const player4Data: Data = {
  width: -320,
  height: 200,
  hittime: 2,
  hitFrame: [2, 6],
  atkFrame: 9,
  moveFrame: 8,
  idleFrame: 5,
  damaged: 0.5,
  deathFrame: 5,
  cooltime: 0,
  img: "height",
};

const player5Data: Data = {
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
  img: "height",
};

const player6Data: Data = {
  width: -925,
  height: 200,
  hittime: 1,
  hitFrame: [6],
  atkFrame: 11,
  moveFrame: 8,
  idleFrame: 5,
  damaged: 1.25,
  deathFrame: 5,
  cooltime: 1,
  img: "width",
};

const player7Data: Data = {
  width: -925,
  height: 200,
  hittime: 3,
  hitFrame: [3, 9, 16],
  atkFrame: 25,
  moveFrame: 10,
  idleFrame: 8,
  damaged: 1.5625,
  deathFrame: 16,
  cooltime: 3,
  img: "width",
};

export const gameData: any[] = [
  [
    player1Idle,
    player1Attack,
    player1Run,
    player1BeShot,
    player1Death,
    player1Data,
  ],
  [
    player2Idle,
    player2Attack,
    player2Run,
    player2BeShot,
    player2Death,
    player2Data,
  ],
  [
    player3Idle,
    player3Attack,
    player3Run,
    player3BeShot,
    player3Death,
    player3Data,
  ],
  [
    player4Idle,
    player4Attack,
    player4Run,
    player4BeShot,
    player4Death,
    player4Data,
  ],
  [
    player5Idle,
    player5Attack,
    player5Run,
    player5BeShot,
    player5Death,
    player5Data,
  ],
  [
    player6Idle,
    player6Attack,
    player6Run,
    player6BeShot,
    player6Death,
    player6Data,
  ],
  [
    player7Idle,
    player7Attack,
    player7Run,
    player7BeShot,
    player7Death,
    player7Data,
  ],
];

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
}; // 상태 감지

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
}; // 키 감지
