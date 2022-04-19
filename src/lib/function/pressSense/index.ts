export function pressSense(
  character: any,
  f: boolean,
  b: boolean,
  n1: number,
  n2: number
) {
  if (f) character.speed.x = n1;
  else if (b) character.speed.x = n2;
  else character.speed.x = 0;
}
