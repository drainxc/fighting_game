import styled from "styled-components";

export const Btn = styled.button`
  font-family: "Neo둥근모", "neodgm";
  width: 140px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  font-size: 30px;
    
  a:link {
    text-decoration: none;
    color: #000;
  }
  a:visited {
    color: #000;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-row-gap: 30px;
  grid-column-gap: 500px;
  color: #fff;
  font-family: "Neo둥근모", "neodgm";
  font-size: 25px;
  padding: 80px;

  div {
    display: inline-flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
  }

  input {
    outline: none;
    border: none;
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    font-family: "Neo둥근모", "neodgm";
  }

  input::placeholder {
    font-family: "Neo둥근모", "neodgm";
    color: #000;
  }
`;

export const Player = styled.div`
  font-size: 40px;
  margin-left: -70px;
`;
