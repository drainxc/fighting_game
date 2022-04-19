export function collision(p: any, e: any, a: boolean, f: number) {
  return (
    p.range.width - p.range.position.x < e.position.x + e.width &&
    p.position.y + p.range.height >= e.position.y &&
    p.position.y <= e.position.y + e.range.height &&
    a &&
    p.framecurrent === f
  );
}
