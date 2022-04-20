export function animation(k: any, player: any, img: any, frame: any) {
  const { attack1, run, idle } = img;
  const { atkFrame, moveFrame, idleFrame } = frame;
  if (k.attack) {
    player.delay = 6;
    player.frame = atkFrame;
    player.speed.x = 0;
    player.image.src = attack1;
  } else if (k.move) {
    player.frame = moveFrame;
    player.image.src = run;
  } else {
    player.frame = idleFrame;
    player.image.src = idle;
  }
}
