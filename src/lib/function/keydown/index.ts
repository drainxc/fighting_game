export function keydown(k: string, key: any, player: any, keycap: any) {
  switch (k) {
    case keycap.d:
      key.r = true;
      key.move = true;
      break;
    case keycap.a:
      key.l = true;
      key.move = true;
      player.delay = 15;
      break;
    case keycap.w:
      if (!key.float) {
        player.speed.y = -25;
        key.jump = true;
        key.float = true;
        setTimeout(() => {
          key.fall = true;
          key.jump = false;
          setTimeout(() => {
            key.fall = false;
            key.float = false;
          }, 400);
        }, 400);
      }
      break;
    case keycap.attack:
      player.framecurrent = 0;
      if (!key.attack) {
        key.attack = true;
        setTimeout(() => {
          key.attack = false;
        }, 500);
      }
      break;
  }
}
