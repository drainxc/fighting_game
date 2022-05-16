import styled from "styled-components";
import health from "../../../asset/img/ui/healthbar.png";

export const HealthBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 50px 100px;
  box-sizing: border-box;
  span {
    margin-top: 16px;
    position: absolute;
    background: red;
    height: 19px;
    top: 0;
    bottom: 0;
  }
`;

export const PlayerBar = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`;

export const Barbg = styled.div`
  background-image: url(${health});
  height: 50px;
`;
