import React from "react";
import {
  ContainerTop,
  InputWrap,
  LeftTruck,
  NavbarTop,
  TruckImg,
  TruckWrap,
} from "./Truckstyle";
import Mtk from "./assets/mtk.svg";
import { MdSms } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Truckss from "./assets/Truckss.svg";
const Truck = () => {
  return (
    <div>
      <ContainerTop>
        <NavbarTop>
          <img src={Mtk} alt="" />
          <h5>Услуги </h5>
          <h5>Калькулятор </h5>
          <h5>Как мы работаем </h5>
          <h5>Отзывы </h5>
          <h5>Контакты </h5>
          <div>
            <h5>
              <IoCallSharp /> +7 (903) 652 67 22{" "}
            </h5>
            <h5>
              <MdSms /> manager@mtk-logistics.ru{" "}
            </h5>
          </div>
        </NavbarTop>
        <TruckWrap>
          <LeftTruck>
            <h1>Все виды грузоперевозок</h1>
            <h6>
              Мы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку
              страны!
            </h6>
            <ul>
              <li> скоропортящиеся</li>
              <li> крупногабаритные</li>
              <li> негабаритные грузы</li>
            </ul>
            <button>Рассчитать стоимость</button>
          </LeftTruck>
          <div>
            <TruckImg src={Truckss} alt="" />
          </div>
        </TruckWrap>
      </ContainerTop>
      <InputWrap>
        <div>
          <h5>Быстрый заказ услуг</h5>
          <h6>Заполните, пожалуйста, форму </h6>
        </div>
        <input placeholder=" Иван " type="text" />
        <input placeholder="+7 (_ _ _) _ _ _ _ _ _ _" type="text" />
        <a href="*">Перезвоните мне</a>
      </InputWrap>
    </div>
  );
};

export default Truck;
