import ExpoModulesCore
import SystemConfiguration

public class MoEngageAppDelegate: ExpoAppDelegateSubscriber {

  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    print("MoEngageAppDelegate: didFinishLaunchingWithOptions")
    // Initialize MoEngage SDK
    return true
  }
}
