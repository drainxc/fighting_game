function collision(p: any, e: any, a: boolean, f: number) {
  return (
    p.range.width - p.range.position.x < e.position.x + e.width &&
    p.position.y + p.range.height >= e.position.y &&
    p.position.y <= e.position.y + e.range.height &&
    a &&
    p.framecurrent === f
  );
}

export function combo(h: any, k: any, p: any, e: any, ref: any) {
  for (let i = 0; i < h.hittime; i++) {
    if (collision(p, e, k.attack, h.hitFrame[i]) && ref.current !== null) {
      ref.current.style.width = `calc(${ref.current.style.width} - 1%)`;
    }
  }
}
