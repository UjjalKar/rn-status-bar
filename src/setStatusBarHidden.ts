import type { StatusBarAnimation } from './StatusBar.types';
import RnStatusBar from './RNStatusBar';
/**
 * Toggle visibility of the status bar.
 * @param hidden If the status bar should be hidden.
 * @param animation Animation to use when toggling hidden, defaults to `'none'`.
 */
export default function setStatusBarHidden(
  hidden: boolean,
  animation: StatusBarAnimation
) {
  RnStatusBar.setHidden(hidden, animation);
}
