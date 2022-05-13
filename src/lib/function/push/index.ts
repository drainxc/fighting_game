export function push(player: any, n: number) {
  if (Math.abs(player.position.x) <= 150) {
    player.position.x = n * 150;
  } // 왼쪽 벽
  if (Math.abs(player.position.x) >= 1750) {
    player.position.x = n * 1750;
  } // 오른쪽 벽
  return;
} // 벽 이탈 방지
