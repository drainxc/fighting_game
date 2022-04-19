export function push(p: any, e: any) {
  if (
    !(e.position.x > p.position.x + 80) ||
    !(p.position.x < e.position.x - 80)
  ) {
    e.position.x += 9;
    p.position.x -= 9;
  }
}
