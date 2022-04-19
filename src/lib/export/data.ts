import warriorIdle from "../../asset/img/warriorSprite/Idle.png";
import warriorRun from "../../asset/img/warriorSprite/Run.png";
import warriorJump from "../../asset/img/warriorSprite/Jump.png";
import warriorFall from "../../asset/img/warriorSprite/Fall.png";
import warriorAttack1 from "../../asset/img/warriorSprite/Attack1.png";
import wizardIdle from "../../asset/img/wizardSprite/Idle.png";
import wizardRun from "../../asset/img/wizardSprite/Run.png";
import wizardJump from "../../asset/img/wizardSprite/Jump.png";
import wizardFall from "../../asset/img/wizardSprite/Fall.png";
import wizardAttack1 from "../../asset/img/wizardSprite/Attack1.png";

interface PlayerAsset {
  idle: string;
  run: string;
  jump: string;
  fall: string;
  attack1: string;
}

interface Key {
  r: boolean;
  l: boolean;
  jump: boolean;
  fall: boolean;
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

export const warriorImg: PlayerAsset = {
  idle: warriorIdle,
  run: warriorRun,
  jump: warriorJump,
  fall: warriorFall,
  attack1: warriorAttack1,
};

export const wizardImg: PlayerAsset = {
  idle: wizardIdle,
  run: wizardRun,
  jump: wizardJump,
  fall: wizardFall,
  attack1: wizardAttack1,
};

export const ekey: Key = {
  r: false,
  l: false,
  jump: false,
  fall: false,
  move: false,
  float: false,
  attack: false,
};

export const pkey: Key = {
  r: false,
  l: false,
  jump: false,
  fall: false,
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
  a: "ArrowLeft",
  d: "ArrowRight",
  attack: "7",
};

export const pframe: Frame = {
  delay: 5,
  atkFrame: 7,
  jumpFrame: 3,
  fallFrame: 3,
  moveFrame: 8,
  idleFrame: 10,
};

export const eframe: Frame = {
  delay: 5,
  atkFrame: 8,
  jumpFrame: 2,
  fallFrame: 2,
  moveFrame: 8,
  idleFrame: 8,
};
