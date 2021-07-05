import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const indexFingerUpGesture = new GestureDescription('index_up');

// Thumb
indexFingerUpGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// Index
indexFingerUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
indexFingerUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.95);
indexFingerUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
indexFingerUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// Middle Fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    indexFingerUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default indexFingerUpGesture;