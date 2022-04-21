export function pressSense(character: any, f: boolean, b: boolean): void {
  if (f) character.speed.x = 9;
  else if (b) character.speed.x = -5;
  else character.speed.x = 0;
  return;
} // 플레이어 속도
