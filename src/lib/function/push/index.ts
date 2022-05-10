export function push(player: any, n: number) {
  if (Math.abs(player.position.x) <= 150) {
    player.position.x = n * 150;
  }
  if (Math.abs(player.position.x) >= 1750) {
    player.position.x = n * 1750;
  }
  return;
} // 플레이어 간 밀어내기
