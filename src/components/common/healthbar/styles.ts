import styled from "styled-components";
import health from "../../../asset/img/ui/healthbar.png";

export const HealthBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 50px 100px;
  box-sizing: border-box;
`;

export const Health = styled.div`
  position: absolute;
  background: red;
  height: 19px;
  top: 42px;
`;

export const Energe = styled.div`
  position: absolute;
  background: yellowgreen;
  height: 10px;
  bottom: 23px;
`;

export const Bar = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
`;

export const Barbg = styled.div`
  background-image: url(${health});
  height: 100px;
`;
