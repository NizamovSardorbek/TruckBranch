import styled from "styled-components";

export const ContainerTop = styled.div`
  align-items: center;
  width: 100%;
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
    :hover {
      cursor: pointer;
      color: red;
    }
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
  top: 640px;
  margin-left: 350px;
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
  > input {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Body = styled.div`
  margin-top: 110px;
  margin-left: 400px;
  margin-right: 400px;
  margin-bottom: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: grey;
`;

export const H2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Mainbody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  width: 530px;
  height: 216px;
  background: #f2f2f2;
  border-radius: 17px;
  margin-left: 90px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Textlari = styled.div`
  > h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    /* or 28px */

    /* text h1 */

    color: #2e2e2e;
  }
  > a {
    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    /* main blue */

    color: #3284ff;
  }
  > p {
    color: red;
  }
`;

export const Body2 = styled.div`
  margin-top: 50px;
  margin-left: 400px;
  margin-right: 400px;
  margin-bottom: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: grey;
`;

export const Img = styled.div``;

export const Img2 = styled.div`
  margin-top: 50px;
  margin-right: 20px;
`;

export const Comfort = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-between;
  gap: 20px;
  margin-top: 60px;
`;
export const Textlarino2 = styled.div`
  > h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    /* or 28px */
    margin-top: 80px;
    margin-left: 20px;

    /* text h1 */

    color: #2e2e2e;
  }
`;

export const MiddleTruck = styled.div`
  background-color: #040d21;
  color: white;
  padding-bottom: 130px;
  width: 100%;
`;
export const Nash = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  padding-top: 70px;
  :hover {
    color: red;
    cursor: pointer;
  }
`;
export const NashTwo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;

  /* or 24px */

  color: #8193b2;
  :hover {
    color: red;
    cursor: pointer;
  }
`;
export const UL = styled.ul`
  width: 750px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  line-height: 30px;
  margin-top: 50px;
  margin-left: 400px;
  position: relative;
`;

export const LI = styled.li`
  list-style: none;
  ::before {
    content: "•";
    color: #3284ff;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    font-size: 20px;
  }
  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const MiddleImg = styled.img`
  position: absolute;
  top: 2300px;
  left: 1000px;
`;

export const TonWrap = styled.div`
  display: flex;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
  gap: 130px;
  height: 200px;

`;
export const TonChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 140px;
  gap: 20px;
  > span {
    width: 140px;
    margin-left: 20px;
  }
  .counter {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 140%;
    /* identical to box height, or 42px */

    /* text h1 */

    color: #2e2e2e;
  }
  .words {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* or 24px */

    text-align: center;

    /* text */

    color: #353535;
  }
`;
