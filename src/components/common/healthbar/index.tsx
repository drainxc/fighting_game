import * as S from "./styles";
import Timer from "../timer/index";

export default function HealthBar({
  pHealthRef,
  eHealthRef,
  pEnergeRef,
  eEnergeRef,
}: any) {
  return (
    <>
      <S.HealthBar>
        <S.Bar>
          <S.Barbg />
          <S.Health
            ref={pHealthRef}
            style={{
              width: "calc(87.7%)",
              right: "0",
            }}
          />
          <S.Energe
            ref={pEnergeRef}
            style={{
              width: "calc(0%)",
              right: "0",
            }}
          />
        </S.Bar>
        <Timer />
        <S.Bar>
          <S.Barbg style={{ transform: "scaleX(-1)" }} />
          <S.Health
            ref={eHealthRef}
            style={{
              width: "calc(87.7%)",
              left: "0",
            }}
          />
          <S.Energe
            ref={eEnergeRef}
            style={{
              width: "calc(0%)",
              left: "0",
            }}
          />
        </S.Bar>
      </S.HealthBar>
    </>
  );
}
