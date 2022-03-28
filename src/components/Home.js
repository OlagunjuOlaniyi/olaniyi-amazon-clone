import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="../../assets/hero1.jpg"
            alt="hero image 1"
          />
        </div>
        <div className="home__row">
          <Product
            id={1}
            title="The lean startup"
            price={29.99}
            image="../../assets/products/shirt.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Keyboard"
            price={15.99}
            image="../../assets/products/keyboard.jpg"
            rating={4}
          />
          <Product
            id={3}
            title="Audio"
            price={20.99}
            image="../../assets/products/audio.jpg"
            rating={3}
          />
          <Product
            id={4}
            title="Laptop"
            price={129.99}
            image="../../assets/products/laptop.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={5}
            title="The lean startup"
            price={29.99}
            image="../../assets/products/shirt.jpg"
            rating={5}
          />
          <Product
            id={6}
            title="Keyboard"
            price={15.99}
            image="../../assets/products/keyboard.jpg"
            rating={4}
          />
          <Product
            id={7}
            title="Audio"
            price={20.99}
            image="../../assets/products/audio.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={8}
            title="Audio"
            price={20.99}
            image="../../assets/products/audio.jpg"
            rating={3}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
