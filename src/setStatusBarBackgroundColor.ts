import { Platform } from 'react-native';
import RnStatusBar from './RNStatusBar';

// @needsAudit
/**
 * Set the background color of the status bar iOS & Android use hex value only.
 * @param backgroundColor The background color of the status bar.
 * @param animated `true` to animate the background color change, `false` to change immediately.
 * @platform android
 */
export default function setStatusBarBackgroundColor(
  backgroundColor: string,
  animated: boolean
) {
  if (Platform.OS === 'ios') {
    RnStatusBar.setBackgroundColorIOS(backgroundColor);
  } else {
    RnStatusBar.setBackgroundColor(backgroundColor, animated);
  }
}
