#import <React/RCTBridgeModule.h>

#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

@interface RCT_EXTERN_MODULE(RnStatusBar, NSObject)

RCT_EXTERN_METHOD(setStatusBarColor:(NSString *)color)

@end
