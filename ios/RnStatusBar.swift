import UIKit
import Foundation
import UIColor_Hex_Swift

@objc(RnStatusBar)
class RnStatusBar: NSObject {
    @objc(setStatusBarColor:)
    func setStatusBarColor(color: String) {
        if #available(iOS 13.0, *) {
            let statusBar = UIView()
            statusBar.frame = UIApplication.shared.statusBarFrame
            statusBar.backgroundColor = UIColor(color)
            UIApplication.shared.keyWindow?.addSubview(statusBar)
            
        } else {
            let statusBar = UIApplication.shared.value(forKeyPath: "statusBarWindow.statusBar") as? UIView
            statusBar?.backgroundColor = UIColor(color)
            
        }
    }
}
