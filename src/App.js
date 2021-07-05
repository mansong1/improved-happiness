import React, { useRef, useState, useEffect } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as fp from "fingerpose";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
import { drawHand } from "./utilities";


import victory from "./gestures/victory.png";
import thumbs_up from "./gestures/thumbs_up.png";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const config = {
    video: { width: 900, height: 720 }
  };

  const [emoji, setEmoji] = useState(null)
  const images = { thumbs_up: thumbs_up, victory: victory };

  const loadHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded.');

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10)
  };
  
  const detect = async (net) => {
    if (
        typeof webcamRef.current !== "undefined" && 
        webcamRef.current !== null && 
        webcamRef.current.video.readyState === 4  // Check we are receiving data
      ){
          // Get video properties
         const video = webcamRef.current.video;
         const videoWidth = video.videoWidth;
         const videoHeight = video.videoHeight;

         // Set video height and width
         video.width = videoWidth;
         video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);
        //console.log(hand);

        if(hand.length > 0){
          const GE = new fp.GestureEstimator([
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
          ]);
          
          // using a minimum confidence of 7.5 (out of 10)
          const gesture = await GE.estimate(hand[0].landmarks, 8);
          //console.log(gesture.gestures);

          if(gesture.gestures !== undefined && gesture.gestures.length > 0){
            const confidence = gesture.gestures.map(
              (prediction)=>prediction.confidence
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );

            setEmoji(gesture.gestures[maxConfidence].name);
            console.log(emoji);
          }
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }
  };

  useEffect(() => {loadHandpose()}, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: config.video.width,
            height: config.video.height,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: config.video.width,
            height: config.video.height,
          }}
        />
        {emoji !== null ? (
          <img
            src={images[emoji]}
            alt=""
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 800,
              bottom: 650,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}

      </header>
    </div>
  );
}

export default App;