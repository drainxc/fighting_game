function collision(
  p: any,
  width: number,
  height: number[],
  e: any,
  a: boolean,
  f: number,
  d: boolean,
  pk: any,
  dir: boolean
): boolean {
  if (!dir) {
    if (pk.lf) {
      return (
        p.position.x + p.width >= -e.position.x &&
        width + p.position.x <= -e.position.x - e.width &&
        p.position.y + height[1] >= e.position.y &&
        p.position.y + height[0] <= e.position.y + e.height &&
        a &&
        p.framecurrent === f &&
        !d &&
        !pk.defend
      ); // 공격 시 히트 판정
    } else {
      return (
        -p.position.x - p.width >= e.position.x &&
        width - p.position.x <= e.position.x + e.width &&
        p.position.y + height[1] >= e.position.y &&
        p.position.y + height[0] <= e.position.y + e.height &&
        a &&
        p.framecurrent === f &&
        !d &&
        !pk.defend
      ); // 공격 시 히트 판정
    }
  } else {
    return (
      ((p.position.x + p.width >= -e.position.x &&
        width + p.position.x <= -e.position.x - e.width) ||
        (-p.position.x - p.width >= e.position.x &&
          width - p.position.x <= e.position.x + e.width)) &&
      p.position.y + height[1] >= e.position.y &&
      p.position.y + height[0] <= e.position.y + e.height &&
      a &&
      p.framecurrent === f &&
      !d &&
      !pk.defend
    );
  }
}

export function attack(
  atk: any,
  ek: any,
  p: any,
  e: any,
  ref: any,
  pk: any
): void {
  const regex = /[^0-9^.]/g;

  for (let i = 0; i < atk[3]; i++) {
    if (
      collision(p, atk[4], atk[5], e, atk[0], atk[2][i], ek.defend, pk, atk[6])
    ) {
      console.log(ref.current.style.width.replace(regex, ""));
      if (ref.current.style.width.replace(regex, "") > 0) {
        // 피가 0이 아니라면
        e.framecurrent = 0;
        ek.beShot = true;

        if (pk.rf) e.speed.x = -5;
        else e.speed.x = 5;
        e.speed.y = -5; // 넉백

        ek.attack1 = false;
        ek.attack2 = false;
        ek.attack3 = false;
        ek.attack4 = false; // 상대방 공격 캔슬
        if (ref.current.style.width.replace(regex, "") - atk[1] * atk[3] >= 0)
          ref.current.style.width = `calc(${ref.current.style.width} - ${atk[1]}%)`; // 피 닳기
        else ref.current.style.width = "0%";
      } else {
        ek.death = true; // 죽은 판정 실행
      }
    }
  }
  return;
}
