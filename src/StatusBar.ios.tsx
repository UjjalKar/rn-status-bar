import React, { useLayoutEffect } from 'react';
import RnStatusBar from './RNStatusBar';
import type { StatusBarProps } from './StatusBar.types';

export default function ExpoStatusBar(props: StatusBarProps) {
  const {
    barStyle,
    animated,
    hidden,
    hideTransitionAnimation,
    networkActivityIndicatorVisible,
    backgroundColor,
  } = props;

  useLayoutEffect(() => {
    RnStatusBar.setBackgroundColorIOS(backgroundColor ?? '#fff');
  }, [backgroundColor]);

  const showHideTransition =
    hideTransitionAnimation === 'none' ? undefined : hideTransitionAnimation;

  return (
    <RnStatusBar
      barStyle={barStyle}
      animated={animated}
      hidden={hidden}
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
      showHideTransition={showHideTransition}
    />
  );
}
