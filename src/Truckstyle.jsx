import styled from "styled-components";
import first from "./assets/first.png";
import second from "./assets/second.png";
import third from "./assets/third.png";
import forth from "./assets/forth.png";
import fifth from "./assets/fifth.png";
import six from "./assets/six.png";

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
  margin: 0 13%;
  padding-right: 4%;
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

export const Kalk = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 600px;
  background: #040d21;
  margin-top: 5%;
`;
export const Kalkchild1 = styled.div`
  > h3 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    /* identical to box height, or 28px */

    color: #ffffff;
    margin-top: 10%;
  }
`;
export const KalkWord = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  /* identical to box height */

  color: #ffffff;
`;

export const KalkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 7%;
`;
export const KalkLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > i {
    position: absolute;
    color: #3284ff;
    left: 202px;
    top: 39px;
    font-size: 15px;
    background-color: white;
    border-radius: 50%;
    padding: 6px 6px;
    text-align: center;
    :hover {
      cursor: pointer;
      color: red;
    }
  }
  > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #8193b2;
    margin-bottom: 5%;
  }
  > input {
    width: 200px;
    height: 40px;
    background: #8193b2;
    border-radius: 5px 0px 0px 5px;
    text-align: center;
    color: #ffff;
    ::placeholder {
      color: #dbdbdb;
    }
    :hover {
      cursor: pointer;
    }
  }
`;
export const KalkRight = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #8193b2;
    margin-bottom: 5%;
  }

  > input {
    width: 220px;
    height: 40px;
    background: #8193b2;
    border-radius: 5px 0px 0px 5px;
    text-align: center;
    color: #ffff;
    ::placeholder {
      color: #dbdbdb;
    }
  }
`;
export const GruzWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 3%;
`;
export const GruzLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #8193b2;
  }
`;
export const Checkboks = styled.span`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #dbdbdb;
  }
`;
export const GruzRight = styled.div`
  margin-right: 50px;
  > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #8193b2;
  }
`;
export const Kalkchild2 = styled.div`
  color: white;
  > h6 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 140%;
    /* or 18px */

    color: #8193b2;
    width: 530px;
    margin-left: 22%;
    margin-top: 11%;
  }
  > a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    /* main blue */

    color: #3284ff;
    margin-left: 34%;
    border: 1px solid red;
    padding-bottom: 100px;
  }
`;
export const KalkLink = styled.div`
  margin-top: 10%;
  margin-left: 44%;
  > a {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    /* main blue */

    color: #3284ff;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  justify-content: center;
  > h5 {
    margin-right: 33%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    color: #8193b2;
  }
`;
export const GruzButton = styled.div`
  display: flex;
  gap: 5px;
  > button {
    width: 220px;
    height: 40px;
    font-size: 10px;
    background: #8193b2;
    border-radius: 5px 0px 0px 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dbdbdb;
    :hover {
      cursor: pointer;
      background: #3284ff;
    }
  }
`;

export const Work = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  // position: absolute;
  margin-left: 200px;
  flex-wrap: wrap;
`;
export const Card2 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${first});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;

export const Card3 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${second});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;
export const Card4 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${third});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;

export const Card5 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${forth});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;
export const Card6 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${fifth});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;
export const Card7 = styled.div`
  display: block;
  width: 350px;
  height: 200px;
  background-image: url(${six});
  background-repeat: no-repeat;
  left: 0px;
  top: 0px;
  z-index: -1;
  color: black;
  text-align: center;
  padding: 30px 5px;
  margin-left: 50px;
  > div {
    margin-right: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h4 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 130%;
      /* or 24px */

      /* text h1 */

      color: #2e2e2e;
    }
  }
`;
export const Hard = styled.div``;
export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  /* or 24px */

  text-align: center;

  /* text */

  color: #353535;
`;

export const InputLast = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  width: 900px;
  background-color: #f2f2f2;
  padding: 10px 20px;
  gap: 20px;
  margin-top: 5%;
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

export const FooterWord = styled.div`
  display: flex;
  background-color: #f2f2f2;
  text-align: center;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  /* identical to box height, or 28px */

  color: #000000;

  opacity: 0.5;
  gap: 20px;
  margin-top: 15px;
`;
export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid red;
  background-color: #040d21;
  height: 400px;
  width: 100%;
  color: white;
`;
export const LeftFooter = styled.div`
  > img {
    margin-left: 20%;
    margin-top: 20%;
    margin-bottom: 5%;
  }
  > span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    color: #7c8696;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 130%;
    /* or 19px */

    color: #7c8696;
    margin-top: 15%; text-align: center;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  line-height: 30px;
  > a {
    text-decoration: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;

    /* main blue */

    color: #3284ff;
    margin-left: 20%;
  }
 
`;

export const MiddleFooter = styled.div``;
export const RightFooter = styled.div``;
