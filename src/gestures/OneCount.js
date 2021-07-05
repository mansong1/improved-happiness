import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const indexGesture = new GestureDescription('index');

// Thumb
indexGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);
indexGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.7);
indexGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.7);

// Index
indexGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
indexGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

// Middle Fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    indexGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
    indexGesture.addDirection(finger, FingerDirection.DiagonalLeftDown, 0.6);
    indexGesture.addDirection(finger, FingerDirection.DiagonalRightDown, 0.6);
}

export default indexGesture;