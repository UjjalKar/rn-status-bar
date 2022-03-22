import RnStatusBar from './RNStatusBar';
import type { StatusBarStyle } from './StatusBar.types';

/**
 * Set the bar style of the status bar.
 * @param style The color of the status bar text.
 */
export default function setStatusBarStyle(style: StatusBarStyle) {
  RnStatusBar.setBarStyle(style ?? 'default');
}
