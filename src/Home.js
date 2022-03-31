import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://t.ctcdn.com.br/OpUVigwVE4EC9lN8zNK7ZqrXBzs=/1280x720/smart/i389782.jpeg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={12345}
            title="The Lean Startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
            }
            rating={3}
          />
          <Product
            id={12346}
            title="KIZEN Digital Meat Thermometer with Probe - Waterproof, Kitchen Instant Read Food Thermometer for Cooking, Baking, Liquids, Candy, Grilling BBQ "
            price={13.59}
            image={
              "https://m.media-amazon.com/images/I/51+06GSt5xL._AC_SY460_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={12347}
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround"
            price={49.99}
            image={
              "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY436_FMwebp_QL65_.jpg"
            }
            rating={4}
          />
          <Product
            id={12348}
            title="Seiko 5 Men's Stainless Steel Watch"
            price={92.58}
            image={
              "https://m.media-amazon.com/images/I/616g3HenkfL._AC_SY200_.jpg"
            }
            rating={5}
          />
          <Product
            id={12349}
            title="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark, 3 inches"
            price={10.01}
            image={
              "https://m.media-amazon.com/images/I/51+06GSt5xL._AC_SY460_.jpg"
            }
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            id={12346}
            title="POWERUP 4.0 The Next-Generation Smartphone Controlled Paper Airplane Kit, RC Controlled. Easy to Fly with Autopilot & Gyro Stabilizer."
            price={79.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61dOUQ+1xfL._AC_UL320_SR320,320_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
