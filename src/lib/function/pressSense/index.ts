export function pressSense(character: any, d: boolean, a: boolean) {
    if (d) {
      character.speed.x = 3;
    } else if (a) {
      character.speed.x = -3;
    } else {
      character.speed.x = 0;
    }
  }