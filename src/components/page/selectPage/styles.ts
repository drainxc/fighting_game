import styled from "styled-components";

export const MainDiv = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: center;
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
  bottom: 0;
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BgImg = styled.img`
  width: 576px;
  height: calc(93.7px * 3);
`;
