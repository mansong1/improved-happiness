import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const thumbsDownGesture = new GestureDescription('thumbs_down');

// expect thumb to be stretched out and pointing down
thumbsDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsDownGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  thumbsDownGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  }

export default thumbsDownGesture;