import styled from "styled-components";

export const ContainerTop = styled.div`
  margin-left: 10%;

  align-items: center;
  width: 85%;
  height: 700px;
  background-color: #040d21;
  position: relative;
`;

export const NavbarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 40px;
  > div {
    line-height: 0mm;
  }
`;

export const TruckWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const LeftTruck = styled.div`
  color: white;
  > h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 85px;
    color: #f3f3f3;
  }
  > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    /* or 24px */

    color: #dbdbdb;
  }

  > ul {
    display: flex;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;

    color: #e3e3e3;
    gap: 30px;
  }
  > button {
    width: 200px;
    height: 50px;
    background: #3284ff;
    border-radius: 7px;
    color: white;
    :active {
      transform: scale(0.3);
      transition: all 0.3s ease-in;
    }
  }
`;

export const TruckImg = styled.img`
  width: 600px;
  height: 100%;
  margin-left: 200px;
`;

export const InputWrap = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 740px;
  margin-left: 400px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f2f2f2;
  gap: 20px;
  > div {
    line-height: 1px;
  }
  > a {
    text-decoration: none;
  }
`;
