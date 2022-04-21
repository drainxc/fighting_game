export function animation(k: any, player: any, img: any, frame: any): void {
  const { attack, run, idle, beShot, death } = img;
  const { atkFrame, moveFrame, idleFrame, deathFrame } = frame;
  if (k.death) {
    // 죽었을 때
    player.frame = deathFrame;
    player.image.src = death;
    setTimeout(() => {
      player.delay = 0;
      player.framecurrent = deathFrame - 1;
    }, deathFrame * 100);
  } else if (k.beShot) {
    // 데미지를 받았을 때
    player.frame = 2;
    player.speed.x = 0;
    player.image.src = beShot;
    setTimeout(() => {
      k.beShot = false;
    }, 200);
  } else if (k.attack) { // 공격했을 때
    player.delay = 6;
    player.frame = atkFrame;
    player.speed.x = 0;
    player.image.src = attack;
  } else if (k.move) { // 움직였을 때
    player.frame = moveFrame;
    player.image.src = run;
  } else { // 아무것도 안 하고 있다면
    player.frame = idleFrame;
    player.image.src = idle;
  }
  return;
}
