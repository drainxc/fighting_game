export function animation(k: any, player: any, img: any, frame: any) {
  const { attack1, jump, fall, run, idle } = img;
  const { delay, atkFrame, jumpFrame, fallFrame, moveFrame, idleFrame } = frame;
  if (k.attack) {
    player.delay = delay;
    player.frame = atkFrame;
    player.speed.x = 0;
    player.image.src = attack1;
  } else if (k.jump) {
    player.frame = jumpFrame;
    player.image.src = jump;
  } else if (k.fall) {
    player.frame = fallFrame;
    player.image.src = fall;
  } else if (k.move) {
    player.frame = moveFrame;
    player.image.src = run;
  } else {
    player.frame = idleFrame;
    player.image.src = idle;
  }
}
