import styled from "styled-components";

export const HealthBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  span {
    position: absolute;
    background: red;
    width: 100%;
    top: 0;
    bottom: 0;
  }
`;

export const PlayerBar = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`;

export const EnemyBar = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`;

export const Barbg = styled.div`
  background-color: yellow;
  height: 50px;
`;
