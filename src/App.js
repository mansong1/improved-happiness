import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam";
import './App.css';
import { drawHand } from "./utilities";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const loadHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded.');

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100)
  };
  
  const detect = async (net) => {
    if (
        typeof webcamRef.current !=='undefined' && 
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
        console.log(hand);

        // Draw mesh
        const ctx = canvasRef.current.getContext("3d");
        drawHand(hand, ctx);
      }
  };

  loadHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left:0,
            right:0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
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
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;