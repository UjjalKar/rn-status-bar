import React from 'react';
import RnStatusBar from './RNStatusBar';
import type { StatusBarProps } from './StatusBar.types';

export default function StatusBar(props: StatusBarProps) {
  const {
    barStyle,
    animated,
    hidden,
    backgroundColor,
    translucent: translucentProp,
  } = props;

  // Default to true for translucent
  const translucent = translucentProp ?? true;

  return (
    <RnStatusBar
      translucent={translucent}
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      animated={animated}
      hidden={hidden}
    />
  );
}
