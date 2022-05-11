import styled from "styled-components";
export const MainDiv = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div<{
  image: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 937px;
  z-index: -1;
  opacity: 0.5;
`;

export const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #020202;
  width: 100%;
  height: 937px;
  z-index: -1;
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
  cursor: pointer;
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
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 75px;

  button {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    cursor: pointer;
    img {
      background-color: whitesmoke;
      width: 135px;
      height: 135px;
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
