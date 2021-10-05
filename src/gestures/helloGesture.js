import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const helloGesture = new GestureDescription('hello');

// Index
helloGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Thumb
helloGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
helloGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Other Fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    helloGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    helloGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.7);
    helloGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.7);
    helloGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default helloGesture;