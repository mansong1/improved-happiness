import React, { useRef, useState, useEffect } from 'react';

// eslint-disable-next-line
import * as tf from "@tensorflow/tfjs";
import * as fp from "fingerpose";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
import { drawHand } from "./utilities";
import * as customgestures from "./gestures"

//Import Harness Feature Flag Client SDK
import { initialize, Event } from '@harnessio/ff-javascript-client-sdk';

function App() {

  const [featureFlags, setFeatureFlags] = useState({})

  const apiKey = "c4230a4e-9861-47e0-8d84-6199edc805a5";

  useEffect(() => {
    const cf = initialize(apiKey, {
      identifier: 'Harness',            // Target identifier
      name: 'Harness',                  // Optional target name
      attributes: {                     // Optional target attributes
        email: 'martin.ansong@harness.io'
      }
    }, {
      debug: false,
      baseUrl:  'https://config.feature-flags.uat.harness.io/api/1.0',
      eventUrl: 'https://event.feature-flags.uat.harness.io/api/1.0',
    });

    cf.on(Event.READY, flags => {
      console.log('Harness Server communication is established');
      setFeatureFlags(flags);
    })

    cf.on(Event.CHANGED, flagInfo => {
      if (flagInfo.deleted) {
        setFeatureFlags(currentFeatureFlags => {
          delete currentFeatureFlags[flagInfo.flag]
          return { ...currentFeatureFlags }
        })
      } else {
        setFeatureFlags(currentFeatureFlags => ({ ...currentFeatureFlags, [flagInfo.flag]: flagInfo.value }))
      }
    })

    return () => {
      cf.close()
    }
  }, [])

  //console.log(featureFlags);

  //console.log(Object.values(featureFlags).includes("index_up"));

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const config = {
    video: { width: 900, height: 720 }
  };

  const [emoji, setEmoji] = useState(null);

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
      <header className="App-header" data-theme={featureFlags.Dark_Theme ? "dark" : "light"}>
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
            padding: "20px",
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
            border: "2px solid #fff",
            borderRadius: "10px",
            filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.6))",
          }}
        />
        {emoji !== null && Object.values(featureFlags).includes(emoji) ? (
          <img
            src={`/assets/${emoji}.png`}
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