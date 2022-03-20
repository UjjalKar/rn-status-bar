import {
  NativeModules,
  Platform,
  StatusBar as BaseStatusBar,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-status-bar' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const RnStatusBar = NativeModules.RnStatusBar
  ? NativeModules.RnStatusBar
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export class StatusBar extends BaseStatusBar {
  static setBackgroundColorIOS(color: string) {
    if (Platform.OS !== 'ios') return;
    RnStatusBar.setStatusBarColor(color);
  }
}

export default StatusBar;
