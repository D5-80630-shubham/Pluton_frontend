import React from "react";
import NavbarComponent from "../components/navbar";
import CarouselComponent from "../components/carousel";
import "./home.css";
import img1 from "../assets/small_image/notes.jpg";
import img2 from "../assets/small_image/digitalBankOnMobile.jpg";
import img3 from "../assets/small_image/bankwithnotesandcoin.jpg";
import img4 from "../assets/small_image/handHoldingMonitor.jpg";
import img5 from "../assets/small_image/charts.jpg";
import img6 from "../assets/small_image/cardswipmachine.jpg";
import img7 from "../assets/small_image/shopingCart.jpg";
import img8 from "../assets/small_image/wallet.jpg";
import img9 from "../assets/small_image/messageIcon.jpg";
import img10 from "../assets/small_image/simpleWallet.jpg";

import Footer from "../components/footer";

function HomePage() {
  const divStyle = {
    display: "flex",
  };

  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <div className="container home">
        <div>
          <h2>In the World of penny pinching</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
            ex nec ante hendrerit rhoncus.
          </p>
        </div>
        <div style={divStyle}>
          <div className="image-container">
            <img src={img1} alt="Notes" />
            <p>Text below image 1</p>
          </div>
          <div className="image-container">
            <img src={img2} alt="Digital Bank on Mobile" />
            <p>Text below image 2</p>
          </div>
          <div className="image-container">
            <img src={img3} alt="Digital Bank on Mobile" />
            <p>Text below image 2</p>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          quibusdam eum amet error tempore, accusantium neque! Expedita ex
          tempora ad ratione veritatis quasi hic, culpa in? Ipsam, dolorum!
          Optio nihil iure sequi reprehenderit, esse architecto ipsam suscipit
          vel, quo quod illum culpa quisquam! Quod quo, accusantium repudiandae
          nemo provident quia cumque molestiae eum eos? Autem fugit odio quasi
          aut sunt, facilis totam consectetur cum nemo exercitationem
          consequatur eius nihil repellat neque. Aperiam a fugit veniam rem
          distinctio, eligendi dolorum nam, eum debitis harum veritatis ipsum
          doloremque enim animi excepturi cum cumque autem provident suscipit
          odio, asperiores pariatur eos necessitatibus. Saepe, necessitatibus!
          Aliquam corrupti error debitis aut perspiciatis rerum distinctio
          tempore quos, ea laborum eaque sequi repellat atque dignissimos minus
          pariatur eum magni. Sit, autem porro. Asperiores, saepe quae? Maxime
          asperiores deserunt vel rem odio expedita, quis quidem veritatis
          placeat reiciendis nobis tempora sint nesciunt, minima qui magni
          impedit commodi quibusdam perspiciatis. Possimus sint odio, sed
          deleniti voluptate incidunt nostrum unde veritatis, a quas repellendus
          voluptatem accusamus nam id voluptatum eaque cupiditate officia quo?
          Magni nobis fuga unde aperiam at voluptates laborum nulla obcaecati,
          dolore quod vero facere explicabo, iusto porro consequatur quisquam.
          Illo, recusandae quasi inventore fugiat est quod maiores?
        </p>

        <div style={divStyle}>
          <div className="image-container">
            <img src={img4} alt="Bank with Notes and Coin" />
            <p>Text below image 3</p>
          </div>
          <div className="image-container">
            <img src={img5} alt="Hand Holding Monitor" />
            <p>Text below image 4</p>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          quibusdam eum amet error tempore, accusantium neque! Expedita ex
          tempora ad ratione veritatis quasi hic, culpa in? Ipsam, dolorum!
          Optio nihil iure sequi reprehenderit, esse architecto ipsam suscipit
          vel, quo quod illum culpa quisquam! Quod quo, accusantium repudiandae
          nemo provident quia cumque molestiae eum eos? Autem fugit odio quasi
          aut sunt, facilis totam consectetur cum nemo exercitationem
          consequatur eius nihil repellat neque. Aperiam a fugit veniam rem
          distinctio, eligendi dolorum nam, eum debitis harum veritatis ipsum
          doloremque enim animi excepturi cum cumque autem provident suscipit
          odio, asperiores pariatur eos necessitatibus. Saepe, necessitatibus!
          Aliquam corrupti error debitis aut perspiciatis rerum distinctio
          tempore quos, ea laborum eaque sequi repellat atque dignissimos minus
          pariatur eum magni. Sit, autem porro. Asperiores, saepe quae? Maxime
          asperiores deserunt vel rem odio expedita, quis quidem veritatis
          placeat reiciendis nobis tempora sint nesciunt, minima qui magni
          impedit commodi quibusdam perspiciatis. Possimus sint odio, sed
          deleniti voluptate incidunt nostrum unde veritatis, a quas repellendus
          voluptatem accusamus nam id voluptatum eaque cupiditate officia quo?
          Magni nobis fuga unde aperiam at voluptates laborum nulla obcaecati,
          dolore quod vero facere explicabo, iusto porro consequatur quisquam.
          Illo, recusandae quasi inventore fugiat est quod maiores?
        </p>

        <div style={divStyle}>
          <div className="image-container">
            <img src={img6} alt="Bank with Notes and Coin" />
            <p>Text below image 3</p>
          </div>
          <div className="image-container">
            <img src={img7} alt="Hand Holding Monitor" />
            <p>Text below image 4</p>
          </div>
          <div className="image-container">
            <img src={img8} alt="Hand Holding Monitor" />
            <p>Text below image 4</p>
          </div>
          <div className="image-container">
            <img src={img9} alt="Hand Holding Monitor" />
            <p>Text below image 4</p>
          </div>
        </div>

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsam, necessitatibus veniam laudantium maxime,
          voluptatibus, molestias veritatis eligendi omnis at modi repellendus
          fugit in itaque quisquam deserunt voluptates incidunt a!
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
