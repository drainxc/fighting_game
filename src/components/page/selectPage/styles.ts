import styled from "styled-components";
import bg1 from "../../../asset/img/bg/bg1.gif";

export const MainDiv = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bg1});
  width: 100%;
  height: 937px;
  z-index: -1;
  opacity: 0.7;
`;

export const Slide = styled.div`
  margin: 0px 20px;
  border: none;
  background: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  height: 50px;
`;

export const Map = styled.div`
  display: inline-flex;
  align-items: center;
  img {
    border: 10px solid white;
    border-radius: 6px;
  }
`;

export const Top = styled.div`
  margin-top: 5%;
`;

export const BtnDiv = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 20px;

  button {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
`;

export const Page = styled.div``;

export const Bottom = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BgImg = styled.img`
  width: 576px;
  height: calc(93.7px * 3);
`;
