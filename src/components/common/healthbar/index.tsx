import * as S from "./styles";
import Timer from "../timer/index";

export default function HealthBar({ pref, eref }: any) {
  return (
    <>
      <S.HealthBar>
        <S.PlayerBar>
          <S.Barbg />
          <span
            ref={pref}
            style={{
              width: "100%",
            }}
          />
        </S.PlayerBar>
        <Timer />
        <S.EnemyBar>
          <S.Barbg />
          <span
            ref={eref}
            style={{
              width: "100%",
              right: 0,
            }}
          />
        </S.EnemyBar>
      </S.HealthBar>
    </>
  );
}
