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
              width: "calc(94%)",
              left: "49px",
            }}
          />
        </S.PlayerBar>
        <Timer />
        <S.PlayerBar>
          <S.Barbg style={{ transform: "scaleX(-1)" }} />
          <span
            ref={eref}
            style={{
              width: "calc(94%)",
              right: "49px",
            }}
          />
        </S.PlayerBar>
      </S.HealthBar>
    </>
  );
}
