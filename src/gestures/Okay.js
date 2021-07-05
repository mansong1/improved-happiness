import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const okayGesture = new GestureDescription('okay');

okayGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
okayGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1);

for (let finger of [fp.Finger.Pinky, fp.Finger.Ring, fp.Finger.Middle]) {
  okayGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.75);
  okayGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.5);
  okayGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.5);
  okayGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 0.5);
}

export default okayGesture;