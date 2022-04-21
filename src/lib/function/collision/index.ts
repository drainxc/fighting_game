function collision(p: any, e: any, a: boolean, f: number): boolean {
  return (
    p.range.width - p.range.position.x < e.position.x + e.width &&
    p.position.y + p.range.height >= e.position.y &&
    p.position.y <= e.position.y + e.range.height &&
    a &&
    p.framecurrent === f
  ); // 공격 시 히트 판정
}

export function combo(h: any, pk: any, ek: any, p: any, e: any, ref: any, d: any): void {
  const { damaged, hitFrame, hittime } = h;

  for (let i = 0; i < hittime; i++) {
    if (collision(p, e, pk.attack, hitFrame[i])) {
      if (ref.current.style.width !== `calc(${0}%)`) {
        // 피가 0이 아니라면
        ek.beShot = true;
        ek.attack = false;
        e.framecurrent = 0;
        ref.current.style.width = `calc(${ref.current.style.width} - ${damaged}%)`; // 피 닳기
        console.log(ref.current.style.width);
      } else {
        ek.death = true; // 죽은 판정 실행
      }
    }
  }
  return;
}
