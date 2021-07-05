import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const okayGesture = new GestureDescription('okay');

okayGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
okayGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Middle]) {
  okayGesture.addCurl(finger, FingerCurl.HalfCurl, 0.75);
  okayGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
  okayGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.5);
  okayGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}

export default okayGesture;