// TODO:
//
// [ ] create lenny-dev monorepo and add this project to it
// [ ] change js to ts
// [x] change css to jsx
// [x] change class functions to hooks functions

import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { H1, P } from "../lib/typography";
import Router from "next/router";
import Client from "shopify-buy";
import { Colors } from "../lib/colors";
import { CTA, HorizontalArrow } from "../components/buttons";
import { LargeImg, LargeImgOverlay } from "../components/images";
import Title from "../components/title";

const hellowWorld = require("hellow-world");

const Home = () => {
  const client = Client.buildClient({
    domain: "lennymendez.photography",
    storefrontAccessToken: "4d66396ac2a99c558b31e18862683d77"
  });
  const [initialized, setInitialized] = useState(false);
  const [activeContainer, setActiveContainer] = useState(false);
  const [activeElement, setActiveElement] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [transitionTime, setTransitionTime] = useState("1s");
  const [largeImageUrl, setLargeImageUrl] = useState(
    "../static/images/wamd.jpg"
  );
  const [title, setTitle] = useState("WHEN A MOUNTAIN DREAMS");
  const [subtitle, setSubtitle] = useState("Some slogan");

  useEffect(() => {
    if (!initialized) {
      // // Fetch all products in your shop
      // client.product.fetchAll().then(products => {
      //   // Do something with the products
      //   console.log(products[0].title);
      // });
      console.log(hellowWorld.test());
      setTimeout(() => {
        setContainer(true);
      }, 1000);
      setInitialized(true);
    } else {
      console.log("Hey, you had initialized the app");
    }
    // returned function will be called on component unmount
    return () => {};
  });

  const setContainer = bool => {
    setActiveContainer(bool);
    setTimeout(() => {
      setElement(bool);
    }, 1000);
  };

  const setElement = bool => {
    setActiveElement(bool);
    setTimeout(() => {
      setActiveButton(bool);
    }, 1000);
  };

  return (
    <Layout>
      <LargeImg
        imgUrl={largeImageUrl}
        activeContainer={activeContainer}
        transitionTime={transitionTime}
      />
      <LargeImgOverlay
        activeElement={activeElement}
        transitionTime={transitionTime}
      />
      <Title
        title={title}
        subtitle={subtitle}
        activeElement={activeElement}
        transitionTime={transitionTime}
      />
      <CTA
        onClick={null}
        activeButton={activeButton}
        transitionTime={transitionTime}
      >
        SHOP THE COLLECTION
      </CTA>
      <HorizontalArrow
        direction="left"
        onClick={null}
        activeButton={activeButton}
        transitionTime={transitionTime}
      />
      <HorizontalArrow
        direction="right"
        onClick={null}
        activeButton={activeButton}
        transitionTime={transitionTime}
      />
      <style jsx>{`
        .container {
          background-color: #cacaca;
          width: 100%;
          height: 100%;
          position: fixed;
          left: 0;
          top: 0;
          color: #ffffff;
          text-align: center;
        }
        .title h1 {
          margin-top: 50px;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
