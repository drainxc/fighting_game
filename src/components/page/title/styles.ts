import styled from "styled-components";

export const Word = styled.div`
  color: #fff;
  font-family: "Passero One", cursive;
  font-size: 50px;
  margin-top: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  a:hover {
    color: #cccccc;
  }
  a:link {
    text-decoration: none;
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
`;

export const BgColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const MainTitle = styled.div`
  text-align: center;
  color: #fff;
  font-family: "UnifrakturMaguntia", cursive;
  font-size: 100px;
  margin-top: 100px;
`;

export const MainDiv = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  text-align: center;
  margin-top: 30px;
`;
