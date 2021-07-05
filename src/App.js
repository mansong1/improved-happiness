import React, { useRef, useState, useEffect } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as fp from "fingerpose";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
import { drawHand } from "./utilities";
import * as customgestures from "./gestures"

import okay from "./assets/okay.png";
import hello from "./assets/hello.png";
import index_up from "./assets/index_up.png";
import victory from "./assets/victory.png";
import thumbs_up from "./assets/thumbs_up.png";
import thumbs_down from "./assets/thumbs_down.png";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const config = {
    video: { width: 900, height: 720 }
  };

  const [emoji, setEmoji] = useState(null)

  const images = {
                    okay: okay,
                    hello: hello,
                    index_up: index_up,
                    victory: victory,
                    thumbs_up: thumbs_up,
                    thumbs_down: thumbs_down,
                  };

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
            customgestures.ThumbsDownGesture,
            customgestures.OkayGesture,
            customgestures.HelloGesture,
            customgestures.IndexFingerUpGesture,
          ]);
          
          // using a minimum confidence of 7.5 (out of 10)
          const gesture = await GE.estimate(hand[0].landmarks, 7.5);
          console.log(gesture.gestures);

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
              left: 750,
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