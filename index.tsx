import React from 'react'
import { View, ViewStyle, SafeAreaView, Platform, ViewProps } from 'react-native'

interface PaneProps extends ViewStyle, ViewProps {
  children: React.ReactNode
  safe?: boolean
}

function clean (obj) {
  for (let propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  return obj
}

const Pane: React.FC<PaneProps> = ({ children, safe, ...props }: PaneProps) => {
  const {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityHint,
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
    accessibilityViewIsModal,
    accessibilityActions,
    onAccessibilityAction,
    shouldRasterizeIOS,
    onStartShouldSetResponder,
    onMoveShouldSetResponder,
    onResponderEnd,
    onResponderGrant,
    onResponderReject,
    onResponderMove,
    onResponderRelease,
    onResponderStart,
    onResponderTerminationRequest,
    onResponderTerminate,
    onStartShouldSetResponderCapture,
    onMoveShouldSetResponderCapture,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTouchEndCapture,
    ...otherProps
  } = props
  const viewProps = {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityStates,
    accessibilityHint,
    collapsable,
    needsOffscreenAlphaCompositing,
    renderToHardwareTextureAndroid,
    accessibilityViewIsModal,
    accessibilityActions,
    onAccessibilityAction,
    shouldRasterizeIOS,
    onStartShouldSetResponder,
    onMoveShouldSetResponder,
    onResponderEnd,
    onResponderGrant,
    onResponderReject,
    onResponderMove,
    onResponderRelease,
    onResponderStart,
    onResponderTerminationRequest,
    onResponderTerminate,
    onStartShouldSetResponderCapture,
    onMoveShouldSetResponderCapture,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onTouchEndCapture
  }
  const style = clean(otherProps)
  const paneProps = clean(viewProps)
  const view = (
    <View style={style} {...paneProps}>
      {children}
    </View>
  )

  if (safe) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {view}
      </SafeAreaView>
    )
  }

  return view
}

export const Hpane: React.FC<PaneProps> = ({ children, ...props }) => (
  <Pane
    display='flex'
    flexDirection='row'
    justifyContent='space-between'
    alignItems='flex-start'
    {...props}>
    {children}
  </Pane>
)

export const Vpane: React.FC<PaneProps> = ({ children, ...props }) => (
  <Pane
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    alignItems='flex-start'
    {...props}>
    {children}
  </Pane>
)

export const Scene: React.FC<PaneProps> = ({ children, ...props }) => (
  <Pane
    flex={1}
    position='relative'
    paddingTop={Platform.select({ ios: 0, android: 0 })}
    {...props}>
    {children}
  </Pane>
)

export const Footer: React.FC<PaneProps> = ({ children, ...props }) => (
  <Pane
    flex={1}
    paddingBottom={10}
    justifyContent='flex-end'
    {...props}>
    {children}
  </Pane>
)

export default Pane
