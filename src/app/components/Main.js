"use client";
import React, { useState, useEffect } from "react";
import {
  ilyRecordings,
  recordingsInfo,
} from "../../../public/recordings/audioInfo.js";
import CatBox from "./CatBox";

const Main = () => {
  //State related
  const [currentRecording, setCurrentRecording] = useState();
  const [currentSrc, setCurrentSrc] = useState();
  useEffect(() => {
    if (currentRecording) currentRecording.play();
  }, [currentRecording]);

  const recordingPress = (src) => {
    //Check so in case it's the same it can keep being replayed. If not, it'll get played by useEffect
    if (src === currentSrc) currentRecording.play();
    else {
      setCurrentRecording(new Audio(src));
      setCurrentSrc(src);
    }
  };

  return (
    <div className="main-body">
      <CatBox />
      <div className="header"></div>
      <input
        type="checkbox"
        className="openSidebarMenu"
        id="openSidebarMenu"
      ></input>
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          {ilyRecordings.map((recording, index) => (
            <li
              onClick={() => {
                recordingPress(recording.src);
              }}
              key={index}
              id={recording}
            >
              {recording.title}
              <span className="small-text">{recording.extra}</span>
              <span>{recording.date}</span>
            </li>
          ))}
          {recordingsInfo.map((recording, index) => (
            <li
              onClick={() => {
                recordingPress(recording.src);
              }}
              key={index}
              id={recording}
            >
              {recording.title}
              <span className="small-text">{recording.extra}</span>
              <span>{recording.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
