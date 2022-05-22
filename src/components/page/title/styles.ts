import styled from "styled-components";

export const Word = styled.div`
  color: #fff;
  font-family: "Neo둥근모", "neodgm";
  font-size: 55px;
  margin-top: 25px;
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

export const MainTitle = styled.div`
  text-align: center;
  color: #fff;
  font-family: "UnifrakturMaguntia", cursive;
  font-size: 100px;
  margin-top: 50px;
`;

export const MainDiv = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  text-align: center;
  margin-top: 60px;
`;
