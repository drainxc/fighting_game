export function pressSense(character: any, f: boolean, b: boolean) {
  if (f) character.speed.x = 9;
  else if (b) character.speed.x = -5;
  else character.speed.x = 0;
  return;
}
