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
`;

export const Body = styled.div`
margin-top:110px;
margin-left:400px;
margin-right:400px;
margin-bottom:115px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: grey;

`

export const H2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const Mainbody = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
align-items:space-between;
gap:20px;
`

export const Card = styled.div`
width: 530px;
height: 216px;
background: #F2F2F2;
border-radius: 17px;
margin-left:90px;
`
export const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

export const Textlari = styled.div`
> h1 {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 140%;
/* or 28px */


/* text h1 */

color: #2E2E2E;
}
> a {
  text-decoration: none;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 21px;
/* identical to box height */


/* main blue */

color: #3284FF;
}
> p {
color:red,

}
`

export const Body2 = styled.div`
margin-top:50px;
margin-left:400px;
margin-right:400px;
margin-bottom:115px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: grey;

`

export const Img = styled.div``
