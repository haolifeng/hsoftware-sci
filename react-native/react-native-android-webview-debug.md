# Android & Chrome 

it's possible to debug WebView contents in the Android emulator or on a device using Chrome DevTools.

1. You will need to make the following change to MainApplication.java to enabled web contents debugging:
  import android.webkit.WebView;
```
  @Override
  public void onCreate() {
    super.onCreate();
	  ...
    WebView.setWebContentsDebuggingEnabled(true);
  }
  ```
2. Start app with React Native WebView in Android emulator or Android device
3. Chrome -> DevTools -> Menu (3 dots) -> More tools -> Remote devices   

change step 3 to : in chrome url addrees: Chrome://inspect 

4. Select your device on the left and select "Inspect" on the WebView contents you'd like to inspect
5. You can now debug the WebView contents just as you would on the web


## Note:
When debugging on device you must enable USB debugging in your device settings:

Settings -> System -> About Phone -> Developer options -> enable USB debugging   

you must have the ability to cross the wall