export function animation(k: any, player: any, img: any, frame: any): void {
  const {
    atk1Frame,
    atk2Frame,
    atk4Frame,
    atk3Frame,
    moveFrame,
    idleFrame,
    deathFrame,
    jumpupFrame,
    jumpdownFrame,
    damagedFrame,
  } = frame;
  if (k.attacking) {
    player.delay = 6;
    player.speed.x = 0;
  }
  if (k.death) {
    // 죽었을 때
    player.frame = deathFrame;
    player.image.src = img[7];
    setTimeout(() => {
      player.delay = 0;
      player.framecurrent = deathFrame - 1;
    }, deathFrame * 100);
  } else if (k.beShot) {
    // 데미지를 받았을 때
    player.frame = damagedFrame;
    player.speed.x = 0;
    player.image.src = img[6];
    setTimeout(() => {
      k.beShot = false;
    }, damagedFrame * 100);
  } else if (k.attack1) {
    player.frame = atk1Frame;
    player.image.src = img[1];
  } else if (k.attack2) {
    player.frame = atk2Frame;
    player.image.src = img[2];
  } else if (k.attack3) {
    player.frame = atk3Frame;
    player.image.src = img[3];
  } else if (k.attack4) {
    player.frame = atk4Frame;
    player.image.src = img[4];
  } else if (k.jump) {
    player.frame = jumpupFrame;
    player.image.src = img[8];
  } else if (!k.jump && k.float) {
    player.frame = jumpdownFrame;
    player.image.src = img[9];
  } else if (k.move) {
    // 움직였을 때
    player.frame = moveFrame;
    player.image.src = img[5];
  } else {
    // 아무것도 안 하고 있다면
    player.frame = idleFrame;
    player.image.src = img[0];
  }
  return;
}
