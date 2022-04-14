import styled from "styled-components";

export const MainDiv = styled.div`
  overflow: hidden;
`;

export const HealthBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
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

export const Timer = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
