export function keyDown(
  e: string,
  key: any,
  player: any,
  keycap: any,
  hit: any
) {
  
  switch (e) {
    case keycap.d:
      key.r = true;
      key.move = true;
      break;
    case keycap.a:
      key.l = true;
      key.move = true;
      break;
    case keycap.w:
      if (!key.float) {
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
    case keycap.attack:
      if (!key.attacking) {
        key.attacking = true;
        player.framecurrent = 0;
        if (!key.attack) {
          key.attack = true;
          setTimeout(() => {
            key.attack = false;
            setTimeout(() => {
              key.attacking = false;
            }, hit.cooltime * 100);
          }, hit.atkFrame * 100);
        }
      }
      break;
  }
}

export function keyUp(e: string, key: any, player: any, keycap: any) {
  switch (e) {
    case keycap.d:
      key.r = false;
      key.move = false;
      break;
    case keycap.a:
      key.l = false;
      key.move = false;
      player.delay = 6;
      break;
  }
}
