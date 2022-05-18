import { gif } from "../../../lib/export/data";
import * as S from "./styles";

export default function Help() {
  const introduce: string[] = [
    "좌우 키를 눌러 움직일 수 있습니다.",
    "위 키를 눌러 점프할 수 있습니다.",
    "아래 키를 눌러 공격을 막을 수 있습니다.",
    "좌우 키를 각각 연속해서 눌러 구르기를 할 수 있습니다.",
    "공격을 하면 아래 게이지가 차는데 이것으로 스킬을 사용할 수 있습니다.",
    `스킬 1은 33%의 게이지를 소모하고 스킬 2는 50%의 게이지를 소모하여
    스킬을 사용할 수 있습니다.`,
    "공중에서 공격 1키를 눌러 공중공격을 할 수 있습니다.",
    "상대방의 체력을 먼저 다 닳게 하는 쪽이 게임에서 승리합니다.",
  ];

  return (
    // <S.MainDiv>
    <S.Grid>
      {introduce.map((str: string, i: number) => (
        <S.Explain>
          <img src={gif[i]} alt="" />
          <p>{str}</p>
        </S.Explain>
      ))}
    </S.Grid>
    // </S.MainDiv>
  );
}
