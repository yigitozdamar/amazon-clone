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
            rating={2}
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
            id={12345}
            title="The Lean Startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
            }
            rating={2}
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
            id={12346}
            title="KIZEN Digital Meat Thermometer with Probe - Waterproof, Kitchen Instant Read Food Thermometer for Cooking, Baking, Liquids, Candy, Grilling BBQ "
            price={13.59}
            image={
              "https://m.media-amazon.com/images/I/51+06GSt5xL._AC_SY460_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
