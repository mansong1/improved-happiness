import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const helloGesture = new GestureDescription('hello');

// Thumb
helloGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
helloGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
helloGesture.addDirection(Finger.Thumb, FingerDirection.DiangonalUpRight, 0.5);

// Other Fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    helloGesture.addCurl(finger, FingerCurl.NoCurl, 0.8);
    helloGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.7);
    helloGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.7);
}

export default helloGesture;