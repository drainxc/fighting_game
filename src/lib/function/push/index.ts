export function push(p: any, e: any) {
  if (!(p.position.x < -(e.position.x + 200))) {
    e.position.x -= 9;
    p.position.x -= 9;
  }
  if (p.position.x < 10) {
    p.position.x = 10;
  }
  if (e.position.x < -1900) {
    e.position.x = -1900;
  }
}
