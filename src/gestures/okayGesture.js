import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

const okayGesture = new GestureDescription('okay');


okayGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
okayGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Middle]) {
  okayGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.5);
  okayGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.5);
  okayGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}

export default okayGesture;