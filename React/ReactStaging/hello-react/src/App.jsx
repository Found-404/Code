import "./App.css";
import React, { useState } from "react";

// import JayOne from "./assets/1.jpeg";
// import JayTwo from "./assets/2.jpeg";
// import JayThree from "./assets/3.jpeg";
// import JayFour from "./assets/4.jpeg";

import Carousel, { CarouselItem, CarouselInfo } from "./Carousel";

// 轮播图数据
const info = [
  {
    id: 1,
    title: "Jay",
    describe: "2000—11—07",
    backgroundColor: "#425066",
  },
  {
    id: 2,
    title: "范特西",
    describe: "2001—09—20",
    backgroundColor: "#1bd1a5",
  },
  {
    id: 3,
    title: "范特西PLUS",
    describe: "2001—12—28",
    backgroundColor: "#a78e44",
  },
  {
    id: 4,
    title: "八度空间",
    describe: "2002—07—18",
    backgroundColor: "#493131",
  },
];

const App = () => {
  return (
        <Carousel>
          {info?.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                styles={{ backgroundColor: item.backgroundColor }}
              >
                <CarouselInfo
                  title={item.title}
                  describe={item.describe}
                  image={item.image}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
  );
};

export default App;

