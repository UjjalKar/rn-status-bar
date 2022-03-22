export type StatusBarStyle = 'default' | 'dark-content' | 'light-content';
export type StatusBarAnimation = 'none' | 'fade' | 'slide';

export type StatusBarProps = {
  /**
   * Sets the color of the status bar text. Default value is `"default"` which
   * @default 'default'
   */
   barStyle?: StatusBarStyle;

  /**
   * If the transition between status bar property changes should be
   * animated. Supported for `backgroundColor`, `barStyle` and `hidden`.
   */
  animated?: boolean;

  /**
   * If the status bar is hidden.
   */
  hidden?: boolean;

  /**
   * The transition effect when showing and hiding the status bar using
   * the hidden prop.
   * @default 'fade'
   * @platform ios
   */
  hideTransitionAnimation?: StatusBarAnimation;

  /**
   * If the network activity indicator should be visible.
   * @platform ios
   */
  networkActivityIndicatorVisible?: boolean;

  /**
   * The background color of the status bar.
   * @platform android
   * @platform ios
   */
  backgroundColor?: string;

  /**
   * If the status bar is translucent. When translucent is set to `true`,
   * the app will draw under the status bar. This is the default behaviour in
   * projects created with Expo tools because it is consistent with iOS.
   * @platform android
   */
  translucent?: boolean;
};