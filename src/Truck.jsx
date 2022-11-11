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
  Img,
  Container,
  Body2,
  Comfort,
  Textlarino2,
  Img2,
  MiddleTruck,
  UL,
  LI,
  Nash,
  NashTwo,
  MiddleImg,
  TonWrap,
  TonChild,
  Kalk,
  Kalkchild1,
  Kalkchild2,
  KalkLeft,
  KalkWord,
  KalkRight,
  KalkWrap,
  GruzWrap,
  GruzLeft,
  GruzRight,
  Checkboks,
  ButtonWrap,
  GruzButton,
  KalkLink,
  Work,
  Card2, Card3, Card4, Card5, Card6, Card7,
  Hard,
  Text,
  InputLast
} from "./Truckstyle";
import Mtk from "./assets/mtk.svg";
import moshina from "./assets/moshina.png";
import karta from "./assets/karta.png";
import yuk from "./assets/yuk.png";
import temperature from "./assets/Temperature.png";
import uycha from "./assets/uycha.png";
import Aptechka from "./assets/Aptechka.png";
import Document from "./assets/Document.png";
import shieldcon from "./assets/shieldcon.png";
import truckcon from "./assets/truckcon.png";
import Truck2 from "./assets/Truck 2.svg";
import birinchi from "./assets/birinchi.png"
import { MdSms } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Truckss from "./assets/Truckss.svg";
import { BsArrowLeftRight } from "react-icons/bs";
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
        <input placeholder="+7 (_ _ _) _ _ _ _ _ _ _" type="number" />
        <a href="*">Перезвоните мне</a>
      </InputWrap>

      <Body>
        <h4>
          Мы — межрегиональная транспортная компания MTK-logistics.
          Предоставляем услуги по перевозке всех видов грузов по Воронежу
          и России. Основной принцип нашей работы — надёжность и точность.
          Предлагаем сотрудничество в сфере грузоперевозок по выгодным условиям.
          Мы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку
          страны! С нами, можно спать спокойно и не переживать за сохранность
          груза, потому что мы несем полную материальную ответственность.
        </h4>
      </Body>
      <H2>
        <h2>Всегда к вашим услугам собственный и наёмный транспорт</h2>
      </H2>

      <Mainbody>
        <Card>
          <Container>
            <Textlari>
              <h1>
                Грузоперевозки по <br />
                Воронежу и области
              </h1>
              <p>Подробнее</p>
              <br />
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
              <h1>Междугородние перевозки от 1 до 20 тонн</h1>
              <p>Подробнее</p>
              <br />
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
              <h1>Доставка сборных грузов / догрузом / попутным грузом </h1>
              <p>Подробнее</p>
              <br />
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
              <h1>Рефрежираторные, температурные перевозки</h1>
              <p>Подробнее</p>
              <br />
              <a href="*">Заказать услугу</a>
            </Textlari>
            <Img>
              <img src={temperature} alt="" />
            </Img>
          </Container>
        </Card>{" "}
        <Card>
          <Container>
            <Textlari>
              <h1>
                Перевозка опасных <br />
                грузов
              </h1>
              <p>Подробнее</p>
              <br />
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
              <h1>
                Не знаете какой тип <br /> перевозок подойдёт именно Вам? <br />
              </h1>
              <p>
                Заполните форму и лучшие менеджеры <br /> ответят на все Ваши
                вопросы
              </p>
              <br />
            </Textlari>
            <Img>
              <a href="*">Заполнить форму связи</a>
            </Img>
          </Container>
        </Card>
        <Body2>
          <h4>
            Мы бережно доставим любой груз от 1 тонны до 20 тонн в любую точку
            страны! С нами, можно спать спокойно и не переживать за сохранность
            груза, потому что мы несем полную материальную ответственность. ы
            бережно доставим любой груз от 1 тонны до 20 тонн в любую точку
            страны! С нами, можно спать спокойно и не переживать за сохранность
            груза, потому что мы несем полную материальную ответственность.
          </h4>
        </Body2>
      </Mainbody>

      <MiddleTruck>
        <Nash>Наш автопарк</Nash>
        <NashTwo>Собственный и наёмный транспорт: фуры и газели</NashTwo>
        <UL>
          <div className="one">
            <LI>Полуприцеп</LI>
            <LI>Тентованные</LI>
            <LI>Тентовый транспорт</LI>
          </div>
          <div className="two">
            <LI>Montserrat</LI>
            <LI>Бортовые</LI>
            <LI>Контейнеровозы</LI>
          </div>
          <div className="three">
            <LI>Изотермические </LI>
            <LI>Рефрижераторы</LI>
            <LI>Цельнометалические</LI>
          </div>
        </UL>
        <MiddleImg src={Truck2} alt="" />
      </MiddleTruck>

      <center>
        <h2>Почему выбирают нас</h2>
      </center>
      <Comfort>
        <Card>
          <Container>
            <Textlarino2>
              <h1>Предложим оптимальную стоимость перевозки</h1>
            </Textlarino2>
            <Img2>
              <img src={shieldcon} alt="" />
            </Img2>
          </Container>
        </Card>

        <Card>
          <Container>
            <Textlarino2>
              <h1>Подберём транспорт под вашу задачу</h1>
            </Textlarino2>
            <Img2>
              <img src={truckcon} alt="" />
            </Img2>
          </Container>
        </Card>

        <Card>
          <Container>
            <Textlarino2>
              <h1>Предоставим услуги страхования груза</h1>
            </Textlarino2>
            <Img2>
              <img src={Aptechka} alt="" />
            </Img2>
          </Container>
        </Card>

        <Card>
          <Container>
            <Textlarino2>
              <h1>Быстро оформим все документы. Работаем с НДС</h1>
            </Textlarino2>
            <Img2>
              <img src={Document} alt="" />
            </Img2>
          </Container>
        </Card>

        <Body>
          <h4>
            Мы — межрегиональная транспортная компания MTK-logistics.
            Предоставляем услуги по перевозке всех видов грузов по Воронежу
            и России. Основной принцип нашей работы — надёжность и точность.
            Предлагаем сотрудничество в сфере грузоперевозок по выгодным
            условиям.
          </h4>
        </Body>
      </Comfort>
      <TonWrap>
        <TonChild>
          <span className="counter">197</span>{" "}
          <span className="words">тонн груза ежедневно</span>
        </TonChild>
        <TonChild>
          <span className="counter">93</span>{" "}
          <span className="words">единиц транспорта в пути</span>
        </TonChild>
        <TonChild>
          <span className="counter"> 9352</span>{" "}
          <span className="words">городов доставки</span>
        </TonChild>
      </TonWrap>
      <Kalk>
        <Kalkchild1>
          <KalkWord>Калькулятор стоимости</KalkWord>
          <KalkWrap>
            <KalkLeft>
              <span>Откуда</span>
              <input placeholder="Воронеж" type="text" />{" "}
              <i>
                <BsArrowLeftRight />
              </i>
            </KalkLeft>
            <KalkRight>
              <span>Куда</span>
              <input placeholder="Санкт-Петербург" type="text" />
            </KalkRight>
          </KalkWrap>
          <GruzWrap>
            <GruzLeft>
              <h6>Тип груза</h6>
              <Checkboks>
                <input type="checkbox" />
                <span>Температурный</span>
              </Checkboks>
              <Checkboks>
                <input type="checkbox" />
                <span>Опасный</span>
              </Checkboks>
            </GruzLeft>
            <GruzRight>
              <h6>Дополнительные услуги</h6>
              <Checkboks>
                <input type="checkbox" />
                <span>Страхование</span>
              </Checkboks>
              <Checkboks>
                <input type="checkbox" />
                <span>Срочная доставка</span>
              </Checkboks>
            </GruzRight>
          </GruzWrap>
          <h3>Предварительная стоимость услуги: 22 000 руб</h3>
        </Kalkchild1>
        <Kalkchild2>
          <h6>
            Калькулятор автоматически рассчитывает стоимость, исходя из тарифов
            за км, которые обычно действуют в нашей транспортной компании. В
            действительности цену сможет рассчитать менеджер индивидуально,
            погрешность может составлять от 5 до 15%
          </h6>

          <KalkWrap>
            <KalkLeft>
              <span>Вес груза (т.)</span>
              <input placeholder="5 тонн" type="text" />{" "}
            </KalkLeft>
            <KalkRight>
              <span>Объём (м3)</span>
              <input placeholder="1000 м3" type="text" />
            </KalkRight>
          </KalkWrap>
          <ButtonWrap>
            <h5>Дополнительные параметры</h5>
            <GruzButton>
              <button>Длинна груза, кол-во паллет и тд.</button>
              <button>Рассчитать стоимость</button>
            </GruzButton>
          </ButtonWrap>
          <KalkLink>
            <a href="*">Связаться с меденжером для заказа</a>
          </KalkLink>
        </Kalkchild2>
      </Kalk>
      <br /><br /><br />
      <center><h1> Как мы работаем</h1></center>
      
      {/* 1 2 3 cards start */}
      
      <Work>
        
      <Card2><div>
          <img src={birinchi} alt="" />
         <h4>Вашзвонок или заявка на сайте</h4></div></Card2>
        <Card3><div>
          <img src={birinchi} alt="" />
         <h4>Обработка данных менеджерами</h4></div></Card3>
         <Card4><div>
          <img src={birinchi} alt="" />
         <h4>Заключение договора</h4></div></Card4>
        <Card5><div>
          <img src={birinchi} alt="" />
         <h4>Подача транспорта</h4></div></Card5>        
         <Card6><div>
          <img src={birinchi} alt="" />
         <h4>Доставка вашего груза</h4></div></Card6>        
         <Card7><div>
          <img src={birinchi} alt="" />
         <h4>Оформление  документов и оплата </h4></div></Card7>

      </Work>
      {/* 1 2 3 cards finish */}

{/* Orada bitta qob ketgan rasmli */}
      {/* Не знаете какой транспорт подойдет для перевозки вашего груза? start */}

      <Hard>
        <center> <h1>Не знаете какой транспорт подойдет для <br /> перевозки вашего груза? </h1></center>
        <center><Text>Специалисты нашей компании ответят на все интересующие вопросы, <br /> дадут полезные советы и рекомендации</Text></center>

        {/* <InputWrap>
        <div>
          <h5>Быстрый заказ услуг</h5>
          <h6>Заполните, пожалуйста, форму </h6>
        </div>
        <input placeholder=" Иван " type="text" />
        <input placeholder="+7 (_ _ _) _ _ _ _ _ _ _" type="number" />
        <a href="*">Перезвоните мне</a>
      </InputWrap> */}
      </Hard>

      <InputLast>
        <div><h5>Быстрый заказ услуг</h5>
          <h6>Заполните, пожалуйста, форму </h6></div>
          <input placeholder=" Иван " type="text" />
        <input placeholder="+7 (_ _ _) _ _ _ _ _ _ _" type="number" />
        <a href="*">Перезвоните мне</a>
      </InputLast>

      







            {/* Не знаете какой транспорт подойдет для перевозки вашего груза? finish */}

    </div>
  );
};

export default Truck;
