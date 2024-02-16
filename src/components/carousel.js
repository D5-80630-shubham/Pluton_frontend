import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/carousel_image/Home.png";
import img2 from "../assets/carousel_image/Home1.png";
import img3 from "../assets/carousel_image/Home.png";

function CarouselComponent() {
  return (
    <div id="home">
    <Carousel wrap={true} interval={1500}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Pluton E-Banking</h3>
          <p>
            Experience the best with UPI on your PLUTON Bank RuPay Credit Card.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Investements are good</h3>
          <p>Apne Sapne Mein Invest Karo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Notice to Safe Deposit Locker Holders |</h3>
          <p>Grab exciting offers on PLUTON Bank Debit and Credit Cards</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;
