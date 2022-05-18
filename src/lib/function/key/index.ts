export function keyDown(
  e: string,
  key: any,
  player: any,
  keycap: any,
  hit: any,
  ref: any
) {
  const regex = /[^0-9^.]/g;

  if (!key.death && !key.beShot) {
    switch (e) {
      case keycap.w: // 위
        if (!key.float && !key.attacking && !key.defend) {
          player.speed.y = -25;
          key.jump = true;
          key.float = true;
          setTimeout(() => {
            key.jump = false;
            setTimeout(() => {
              key.float = false;
            }, 400);
          }, 400);
        }
        break;
      case keycap.s: // 아래
        if (!key.defend) {
          key.defend = true;
          player.framecurrent = 0;
          setTimeout(() => {
            key.defend = false;
          }, hit.defendFrame * 100);
        }
        break;
      case keycap.d: // 오른쪽
        if (!key.attacking) {
          key.lf = false;
          key.rf = true;
          key.r = true;
        }
        break;
      case keycap.a: // 왼쪽
        if (!key.attacking) {
          key.rf = false;
          key.lf = true;
          key.l = true;
        }
        break;
      case keycap.attack1: // 공격 1
        if (!key.attacking && !key.defend && !key.float) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack1) {
            key.attack1 = true;
            setTimeout(() => {
              key.attack1 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk1Frame * 100);
          }
        } else if (!key.attacking && !key.defend && key.float) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack1) {
            key.airatk = true;
            setTimeout(() => {
              key.airatk = false;
              player.speed.y = 5;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.airatkFrame * 100);
          }
        }
        break;
      case keycap.attack2: // 공격 2
        if (!key.attacking && !key.defend) {
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack2) {
            key.attack2 = true;
            setTimeout(() => {
              key.attack2 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk2Frame * 100);
          }
        }
        break;
      case keycap.attack3: // 공격 3
        if (
          !key.attacking &&
          !key.defend &&
          ref.current.style.width.replace(regex, "") >= 33
        ) {
          ref.current.style.width = `calc(${ref.current.style.width} - 33%)`;
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack3) {
            key.attack3 = true;
            setTimeout(() => {
              key.attack3 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk3Frame * 100);
          }
        }
        break;
      case keycap.attack4: // 공격 4
        if (
          !key.attacking &&
          !key.defend &&
          ref.current.style.width.replace(regex, "") >= 50
        ) {
          ref.current.style.width = `calc(${ref.current.style.width} - 50%)`;
          key.attacking = true;
          player.framecurrent = 0;
          if (!key.attack4) {
            key.attack4 = true;
            setTimeout(() => {
              key.attack4 = false;
              setTimeout(() => {
                key.attacking = false;
              }, hit.cooltime * 100);
            }, hit.atk4Frame * 100);
          }
        }
        break;
    }
  }
  return;
} // 키를 눌렀을 때

export function keyUp(e: string, key: any, player: any, keycap: any, hit: any) {
  switch (e) {
    case keycap.d: // 오른쪽
      key.r = false;
      if (key.rmove === true && !key.attacking) {
        if (!key.rdash) {
          player.framecurrent = 0;
          setTimeout(() => {
            key.rdash = false;
          }, hit.dashFrame * 100);
          key.rdash = true;
        }
      } else {
        key.rmove = true;
        setTimeout(function () {
          key.rmove = false;
        }, 400);
      }
      break;
    case keycap.a: // 왼쪽
      key.l = false;

      if (key.lmove === true && !key.attacking) {
        if (!key.ldash) {
          player.framecurrent = 0;
          setTimeout(() => {
            key.ldash = false;
          }, hit.dashFrame * 100);
          key.ldash = true;
        }
      } else {
        key.lmove = true;
        setTimeout(function () {
          key.lmove = false;
        }, 400);
      }
      break;
  }
  return;
} // 키를 땠을 때
