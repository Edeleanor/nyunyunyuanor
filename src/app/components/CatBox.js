"use client";
import Image from "next/image";
import CatsInfo from "../../../public/pictures/catsInfo.js";
import { ilyRecordings } from "../../../public/recordings/audioInfo.js";
import React, { useState, useEffect } from "react";

const CatBox = () => {
  //State
  const catsCount = CatsInfo.length;
  const ilyCount = ilyRecordings.length;
  const [cat, setCat] = useState("/pictures/loading.gif");
  const [ily, setIly] = useState();

  //Functions
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const biggerOnClick = (e, optional) => {
    if (optional === "refresh")
      e.target.style.animation = "rotate 3s ease-in-out 1";
    else if (optional === "play") {
      e.target.style.transform = "scale(1.25)";
      setTimeout(() => {
        e.target.style.transform = "scale(1.0)";
      }, "1000");
    }
  };

  //State related functions
  const randomizePicture = () => {
    setCat(CatsInfo[getRandomInt(catsCount)]);
  };
  const randomizeAudio = () => {
    setIly(new Audio(ilyRecordings[getRandomInt(ilyCount)].src));
  };

  useEffect(() => {
    randomizePicture();
    randomizeAudio();
  }, []);

  return (
    <div className="cat-box">
      <audio id="myAudio" src={ily}>
        Your browser does not support the audio element.
      </audio>
      <Image src="/assets/banner.svg" width={350} height={100}></Image>
      <Image
        src={cat}
        alt="Cat GIF"
        width={300}
        height={200}
        onClick={() => {
          randomizePicture();
        }}
      />
      <div className="btn-box">
        <button
          onClick={(e) => {
            randomizeAudio();
            biggerOnClick(e, "refresh");
          }}
          className="refresh-btn"
        >
          <Image src="/assets/refresh.png" width={15} height={15}></Image>
        </button>
        <button
          className="cat-quote"
          onClick={(e) => {
            ily.play();
            biggerOnClick(e, "play");
          }}
        >
          <p>I love youuuuuuu Eleanoooooooooor</p>
        </button>
      </div>
    </div>
  );
};

export default CatBox;
