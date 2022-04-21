import { useState } from "react";
import { Link } from "react-router-dom";

export default function Select() {
  const character: string[] = [
    "Bot Wheel",
    "Shork Sweeper",
    "Mud Guard",
    "Ball and Chain",
    "Eye Ball",
  ];
  const [player, setPlayer] = useState<number[]>([]);
  function selectCharacter(n: number) {
    setPlayer((play) => [...play, n]);
    if (player.length >= 3) {
      player.shift();
    }
  }

  return (
    <>
      {character.map((name: string, i: number) => (
        <>
          <button onClick={() => selectCharacter(i)}>{name}</button>
        </>
      ))}
      <Link to={"game" + player[0] + player[1]}>
        <div>start</div>
      </Link>
    </>
  );
}
