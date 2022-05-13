export function animation(k: any, player: any, img: any, frame: any): void {
  const {
    atk1Frame,
    atk2Frame,
    atk3Frame,
    atk4Frame,
    airatkFrame,
    moveFrame,
    idleFrame,
    deathFrame,
    jumpupFrame,
    jumpdownFrame,
    damagedFrame,
    defendFrame,
    dashFrame,
  } = frame;
  if (k.attacking) {
    // 공격
    player.delay = 7;
    player.speed.x = 0;
  }
  if (k.death) {
    // 사망
    player.frame = deathFrame;
    player.image.src = img[7];
    setTimeout(() => {
      player.delay = 0;
      player.framecurrent = deathFrame - 1;
    }, deathFrame * 100);
  } else if (k.defend) {
    // 방어
    player.frame = defendFrame;
    player.speed.x = 0;
    player.image.src = img[10];
    k.attacking = false;
  } else if (k.beShot) {
    // 데미지
    player.frame = damagedFrame;
    player.speed.x = 0;
    player.image.src = img[6];
    setTimeout(() => {
      k.beShot = false;
    }, damagedFrame * 100);
  } else if (k.airatk) {
    // 공중에서 공격
    player.frame = airatkFrame;
    player.speed.y = 0;
    player.image.src = img[11];
  } else if (k.attack1 && k.attacking) {
    // 공격
    player.frame = atk1Frame;
    player.image.src = img[1];
  } else if (k.attack2 && k.attacking) {
    // 공격
    player.frame = atk2Frame;
    player.image.src = img[2];
  } else if (k.attack3 && k.attacking) {
    // 공격
    player.frame = atk3Frame;
    player.image.src = img[3];
  } else if (k.attack4 && k.attacking) {
    // 공격
    player.frame = atk4Frame;
    player.image.src = img[4];
  } else if (k.ldash) {
    // 왼쪽 대쉬
    player.frame = dashFrame;
    player.speed.x = -12;
    player.image.src = img[13];
  } else if (k.rdash) {
    // 오른쪽 대쉬
    player.frame = dashFrame;
    player.speed.x = 12;
    player.image.src = img[13];
  } else if (k.jump) {
    // 점프
    player.frame = jumpupFrame;
    player.image.src = img[8];
  } else if (k.float) {
    // 하강
    player.frame = jumpdownFrame;
    player.image.src = img[9];
  } else if (k.l || k.r) {
    // 이동
    player.frame = moveFrame;
    player.image.src = img[5];
  } else {
    // 숨 쉬기
    player.frame = idleFrame;
    player.image.src = img[0];
  }
  return;
}
