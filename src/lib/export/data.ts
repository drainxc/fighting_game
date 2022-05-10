import player1Idle from "../../asset/img/fire_knight/01_idle/idle.png";
import player1Run from "../../asset/img/fire_knight/02_run/run.png";
import player1Up from "../../asset/img/fire_knight/03_jump_up/jump_up.png";
import player1Down from "../../asset/img/fire_knight/03_jump_down/jump_down.png";
import player1Atk1 from "../../asset/img/fire_knight/05_1_atk/1_atk.png";
import player1Atk2 from "../../asset/img/fire_knight/06_2_atk/2_atk.png";
import player1Atk3 from "../../asset/img/fire_knight/07_3_atk/3_atk.png";
import player1Atk4 from "../../asset/img/fire_knight/08_sp_atk/sp_atk.png";
import player1Defend from "../../asset/img/fire_knight/09_defend/defend.png";
import player1BeShot from "../../asset/img/fire_knight/10_take_hit/take_hit.png";
import player1Death from "../../asset/img/fire_knight/11_death/death.png";
import player1AirAtk from "../../asset/img/fire_knight/air_atk/air_atk.png";
import player2Idle from "../../asset/img/water_priestess/01_idle/idle.png";
import player2Run from "../../asset/img/water_priestess/03_surf/surf.png";
import player2Up from "../../asset/img/water_priestess/04_j_up/j_up.png";
import player2Down from "../../asset/img/water_priestess/05_j_down/j_down.png";
import player2Atk1 from "../../asset/img/water_priestess/07_1_atk/1_atk.png";
import player2Atk2 from "../../asset/img/water_priestess/08_2_atk/2_atk.png";
import player2Atk3 from "../../asset/img/water_priestess/09_3_atk/3_atk.png";
import player2Atk4 from "../../asset/img/water_priestess/10_sp_atk/sp_atk.png";
import player2Defend from "../../asset/img/water_priestess/12_defend/defend.png";
import player2BeShot from "../../asset/img/water_priestess/13_take_hit/take_hit.png";
import player2Death from "../../asset/img/water_priestess/14_death/death.png";
import player2AirAtk from "../../asset/img/water_priestess/air_atk/air_atk.png";
import player3Idle from "../../asset/img/metal_bladekeeper/01_idle/01_idle.png";
import player3Run from "../../asset/img/metal_bladekeeper/02_run/02_run.png";
import player3Down from "../../asset/img/metal_bladekeeper/03_jump_down/03_jump_down.png";
import player3Up from "../../asset/img/metal_bladekeeper/03_jump_up/03_jump_up.png";
import player3Atk1 from "../../asset/img/metal_bladekeeper/07_1_atk/07_1_atk.png";
import player3Atk2 from "../../asset/img/metal_bladekeeper/08_2_atk/08_2_atk.png";
import player3Atk3 from "../../asset/img/metal_bladekeeper/09_3_atk/09_3_atk.png";
import player3Atk4 from "../../asset/img/metal_bladekeeper/10_sp_atk/10_sp_atk.png";
import player3Defend from "../../asset/img/metal_bladekeeper/11_defend/11_defend.png";
import player3BeShot from "../../asset/img/metal_bladekeeper/12_take_hit/12_take_hit.png";
import player3Death from "../../asset/img/metal_bladekeeper/13_death/13_death.png";
import player3AirAtk from "../../asset/img/metal_bladekeeper/air_atk/air_atk.png";
import player4Idle from "../../asset/img/ground-monk/idle/idle.png";
import player4Run from "../../asset/img/ground-monk/run/run.png";
import player4Up from "../../asset/img/ground-monk/j_up/j_up.png";
import player4Down from "../../asset/img/ground-monk/j_down/j_down.png";
import player4Atk1 from "../../asset/img/ground-monk/1_atk/1_atk.png";
import player4Atk2 from "../../asset/img/ground-monk/2_atk/2_atk.png";
import player4Atk3 from "../../asset/img/ground-monk/3_atk/3_atk.png";
import player4Atk4 from "../../asset/img/ground-monk/sp_atk/sp_atk.png";
import player4Defend from "../../asset/img/ground-monk/defend/defend.png";
import player4BeShot from "../../asset/img/ground-monk/take_hit/take_hit.png";
import player4Death from "../../asset/img/ground-monk/death/death.png";
import player4AirAtk from "../../asset/img/ground-monk/air_atk/air_atk.png";

import bg1 from "../../asset/img/bg/bg1.gif";
import bg2 from "../../asset/img/bg/bg10.png";
import bg3 from "../../asset/img/bg/bg3.gif";
import bg4 from "../../asset/img/bg/bg4.png";
import bg5 from "../../asset/img/bg/bg5.png";
import bg6 from "../../asset/img/bg/bg6.png";
import bg7 from "../../asset/img/bg/bg7.png";
import bg8 from "../../asset/img/bg/bg8.png";
import bg9 from "../../asset/img/bg/bg9.png";
import randomBg from "../../asset/img/bg/randomMap.jpg";

export const atk = (n1: number, n2: number) => {
  return [
    [
      pkey.attack1,
      gameData[n1][12].damaged1,
      gameData[n1][12].atk1hitFrame,
      gameData[n1][12].atk1hittime,
      gameData[n1][12].width1,
      gameData[n1][12].height1,
    ],
    [
      pkey.attack2,
      gameData[n1][12].damaged2,
      gameData[n1][12].atk2hitFrame,
      gameData[n1][12].atk2hittime,
      gameData[n1][12].width2,
      gameData[n1][12].height2,
    ],
    [
      pkey.attack3,
      gameData[n1][12].damaged3,
      gameData[n1][12].atk3hitFrame,
      gameData[n1][12].atk3hittime,
      gameData[n1][12].width3,
      gameData[n1][12].height3,
    ],
    [
      pkey.attack4,
      gameData[n1][12].damaged4,
      gameData[n1][12].atk4hitFrame,
      gameData[n1][12].atk4hittime,
      gameData[n1][12].width4,
      gameData[n1][12].height4,
    ],
    [
      pkey.airatk,
      gameData[n1][12].damaged5,
      gameData[n1][12].airatkhitFrame,
      gameData[n1][12].airatkhittime,
      gameData[n1][12].width5,
      gameData[n1][12].height5,
    ],
    [
      ekey.attack1,
      gameData[n2][12].damaged1,
      gameData[n2][12].atk1hitFrame,
      gameData[n2][12].atk1hittime,
      gameData[n2][12].width1,
      gameData[n2][12].height1,
    ],
    [
      ekey.attack2,
      gameData[n2][12].damaged2,
      gameData[n2][12].atk2hitFrame,
      gameData[n2][12].atk2hittime,
      gameData[n2][12].width2,
      gameData[n2][12].height2,
    ],
    [
      ekey.attack3,
      gameData[n2][12].damaged3,
      gameData[n2][12].atk3hitFrame,
      gameData[n2][12].atk3hittime,
      gameData[n2][12].width3,
      gameData[n2][12].height3,
    ],
    [
      ekey.attack4,
      gameData[n2][12].damaged4,
      gameData[n2][12].atk4hitFrame,
      gameData[n2][12].atk4hittime,
      gameData[n2][12].width4,
      gameData[n2][12].height4,
    ],
    [
      ekey.airatk,
      gameData[n2][12].damaged5,
      gameData[n2][12].airatkhitFrame,
      gameData[n2][12].airatkhittime,
      gameData[n2][12].width5,
      gameData[n2][12].height5,
    ],
  ];
};

export const background = [
  randomBg,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
];

const player1Data = {
  atk1hittime: 1,
  atk1hitFrame: [4],
  atk1Frame: 11,
  width1: -290,
  height1: [-150, 350],
  damaged1: 1,

  atk2hittime: 2,
  atk2hitFrame: [5, 7],
  atk2Frame: 12,
  width2: -300,
  height2: [0, 200],
  damaged2: 1,

  atk3hittime: 1,
  atk3hitFrame: [4],
  atk3Frame: 9,
  width3: -400,
  height3: [-100, 300],
  damaged3: 2,

  atk4hittime: 1,
  atk4hitFrame: [12],
  atk4Frame: 18,
  width4: -400,
  height4: [-100, 300],
  damaged4: 4,

  airatkFrame: 8,
  airatkhittime: 1,
  airatkhitFrame: [3],
  width5: -400,
  height5: [0, 100],
  damaged5: 2,

  moveFrame: 8,
  idleFrame: 8,
  damagedFrame: 6,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  defendFrame: 10,
  deathFrame: 13,
  cooltime: 1,
};

const player2Data = {
  atk1hittime: 1,
  atk1hitFrame: [3],
  atk1Frame: 7,
  width1: -250,
  height1: [100, 150],
  damaged1: 1,

  atk2hittime: 1,
  atk2hitFrame: [14],
  atk2Frame: 20,
  width2: -320,
  height2: [100, 50],
  damaged2: 3,

  atk3hittime: 3,
  atk3hitFrame: [8, 9, 10],
  atk3Frame: 14,
  width3: -380,
  height3: [0, 200],
  damaged3: 2,

  atk4hittime: 10,
  atk4hitFrame: [12, 13, 22, 23, 24, 25, 26, 27, 28, 29],
  atk4Frame: 32,
  width4: -400,
  height4: [150, 50],
  damaged4: 1,

  airatkFrame: 8,
  airatkhittime: 2,
  airatkhitFrame: [3, 4],
  width5: -350,
  height5: [0, 100],
  damaged5: 2,

  moveFrame: 8,
  idleFrame: 8,
  damagedFrame: 7,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  defendFrame: 12,
  deathFrame: 16,
  cooltime: 1,
};

const player3Data = {
  atk1hittime: 1,
  atk1hitFrame: [1],
  atk1Frame: 6,
  width1: -220,
  height1: [50, 100],
  damaged1: 1,

  atk2hittime: 1,
  atk2hitFrame: [2],
  atk2Frame: 6,
  width2: -220,
  height2: [50, 100],
  damaged2: 1,

  atk3hittime: 6,
  atk3hitFrame: [6, 7, 8, 9, 10, 11],
  atk3Frame: 13,
  width3: -235,
  height3: [50, 100],
  damaged3: 1,

  atk4hittime: 4,
  atk4hitFrame: [4, 5, 6, 7],
  atk4Frame: 11,
  width4: -400,
  height4: [0, 200],
  damaged4: 1,

  airatkFrame: 8,
  airatkhittime: 4,
  airatkhitFrame: [2, 3, 4, 5],
  width5: -280,
  height5: [0, 100],
  damaged5: 1,

  moveFrame: 8,
  idleFrame: 8,
  damagedFrame: 6,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  defendFrame: 12,
  deathFrame: 12,
  cooltime: 0,
};

const player4Data = {
  atk1hittime: 1,
  atk1hitFrame: [2],
  atk1Frame: 6,
  width1: -160,
  height1: [80, 60],
  damaged1: 1,

  atk2hittime: 2,
  atk2hitFrame: [2, 5],
  atk2Frame: 9,
  width2: -160,
  height2: [80, 60],
  damaged2: 1,

  atk3hittime: 6,
  atk3hitFrame: [8, 9, 10],
  atk3Frame: 14,
  width3: -400,
  height3: [100, 100],
  damaged3: 1,

  atk4hittime: 4,
  atk4hitFrame: [5, 17],
  atk4Frame: 25,
  width4: -400,
  height4: [50, 150],
  damaged4: 5,

  airatkFrame: 8,
  airatkhittime: 1,
  airatkhitFrame: [3],
  width5: -280,
  height5: [0, 100],
  damaged5: 1,

  moveFrame: 8,
  idleFrame: 6,
  damagedFrame: 6,
  jumpupFrame: 3,
  jumpdownFrame: 3,
  defendFrame: 13,
  deathFrame: 18,
  cooltime: 1,
};

export const gameData: any[] = [
  [
    player1Idle,
    player1Atk1,
    player1Atk2,
    player1Atk3,
    player1Atk4,
    player1Run,
    player1BeShot,
    player1Death,
    player1Up,
    player1Down,
    player1Defend,
    player1AirAtk,
    player1Data,
  ],
  [
    player2Idle,
    player2Atk1,
    player2Atk2,
    player2Atk3,
    player2Atk4,
    player2Run,
    player2BeShot,
    player2Death,
    player2Up,
    player2Down,
    player2Defend,
    player2AirAtk,
    player2Data,
  ],
  [
    player3Idle,
    player3Atk1,
    player3Atk2,
    player3Atk3,
    player3Atk4,
    player3Run,
    player3BeShot,
    player3Death,
    player3Up,
    player3Down,
    player3Defend,
    player3AirAtk,
    player3Data,
  ],
  [
    player4Idle,
    player4Atk1,
    player4Atk2,
    player4Atk3,
    player4Atk4,
    player4Run,
    player4BeShot,
    player4Death,
    player4Up,
    player4Down,
    player4Defend,
    player4AirAtk,
    player4Data,
  ],
];

const key = {
  r: false,
  l: false,
  move: false,
  float: false,
  attack1: false,
  attack2: false,
  attack3: false,
  attack4: false,
  airatk: false,
  beShot: false,
  death: false,
  attacking: false,
  defend: false,
};

export const ekey = JSON.parse(JSON.stringify(key));
export const pkey = JSON.parse(JSON.stringify(key));

export const pkeycap = {
  w: "w",
  a: "a",
  d: "d",
  s: "s",
  attack1: "u",
  attack2: "i",
  attack3: "j",
  attack4: "k",
};
export const ekeycap = {
  w: "ArrowUp",
  a: "ArrowRight",
  d: "ArrowLeft",
  s: "ArrowDown",
  attack1: "7",
  attack2: "8",
  attack3: "4",
  attack4: "5",
}; // 키 감지
