import React from "react";
import {
  ContainerTop,
  InputWrap,
  LeftTruck,
  NavbarTop,
  TruckImg,
  TruckWrap,
  Body,
  H2,
  Mainbody,
  Card,
  Textlari,
  Img, Container, Body2
} from "./Truckstyle";
import Mtk from "./assets/mtk.svg";
import moshina from "./assets/moshina.png"
import karta from "./assets/karta.png"
import yuk from "./assets/yuk.png"
import temperature from "./assets/Temperature.png"
import uycha from "./assets/uycha.png"

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
              <IoCallSharp /> +7 (903) 652 67 55{" "}
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

      <Body>
        <h4>Мы — межрегиональная транспортная компания
MTK-logistics.
Предоставляем услуги по перевозке всех видов грузов по Воронежу и России. Основной принцип нашей работы — надёжность и точность. Предлагаем
сотрудничество в сфере грузоперевозок по выгодным условиям.
Мы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку страны! С нами, можно спать спокойно и не переживать за сохранность груза, потому что мы несем полную материальную ответственность.
</h4>
      </Body>
      <H2><h2>Всегда к вашим услугам собственный и наёмный транспорт</h2></H2>

      <Mainbody>
        <Card>
          <Container>
          <Textlari>
          <h1>Грузоперевозки по <br />
            Воронежу и области</h1> 
          <p>Подробнее</p><br /> 
          <a href="*">Заказать услугу</a>
        </Textlari>
          <Img>
            <img src={moshina} alt="" />
            </Img>
            </Container>
        </Card>
        <Card>
          <Container>
          <Textlari>
          <h1>Междугородние
 перевозки от 1 до 20 тонн 
            </h1> 
          <p>Подробнее</p><br /> 
          <a href="*">Заказать услугу</a>
        </Textlari>
          <Img>
            <img src={karta} alt="" />
            </Img>
            </Container>
        </Card>
        <Card>
          <Container>
          <Textlari>
          <h1>Доставка сборных грузов 
/ догрузом /
попутным грузом </h1> 
          <p>Подробнее</p><br /> 
          <a href="*">Заказать услугу</a>
        </Textlari>
          <Img>
            <img src={yuk} alt="" />
            </Img>
            </Container>
        </Card>
        <Card>
          <Container>
          <Textlari>
          <h1>Рефрежираторные,
температурные
перевозки
 
             </h1> 
          <p>Подробнее</p><br /> 
          <a href="*">Заказать услугу</a>
        </Textlari>
          <Img>
            <img src={temperature} alt="" />
            </Img>
            </Container>
        </Card>        <Card>
          <Container>
          <Textlari>
          <h1>Перевозка 
опасных <br />
грузов</h1> 
          <p>Подробнее</p><br /> 
          <a href="*">Заказать услугу</a>
        </Textlari>
          <Img>
            <img src={uycha} alt="" />
            </Img>
            </Container>
        </Card>
        <Card>
          <Container>
          <Textlari>
          <h1>Не знаете какой тип <br /> перевозок подойдёт именно Вам? <br />
            </h1> 
          <p>Заполните форму и лучшие
 менеджеры <br /> ответят на все
 Ваши вопросы</p><br /> 
          
        </Textlari>
          <Img>
          <a href="*">Заполнить форму связи</a>
            </Img>
            </Container>
        </Card>
        <Body2>
        <h4>Мы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку страны! С нами, можно спать спокойно и не переживать за сохранность груза, потому что мы несем полную материальную ответственность.
ы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку страны! С нами, можно спать спокойно и не переживать за сохранность груза, потому что мы несем полную материальную ответственность.
</h4>
      </Body2>
      </Mainbody>

    </div>
  );
};

export default Truck;
