import styled from "styled-components";

export const Explain = styled.div`
  font-family: "Neo둥근모", "neodgm";
  font-size: 30px;
  color: #fff;
  letter-spacing: -2px;
  position: relative;
  p {
    position: absolute;
    top: 220px;
  }
  img {
    width: 288px;
    height: 128px;
    object-fit: cover;
    -webkit-transform: scale(2.3);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 200px;
  grid-column-gap: 55px;
  padding: 100px;
`;
