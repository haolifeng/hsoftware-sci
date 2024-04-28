# react-native-webview debug guide

## ios & Safari
it's possible to debug WebView contents in the iOS simulator or on a device using Safari Developer Toolkit.
### step
1. Open Safari Preference -> "Advanced" tab -> enable checkbox "Show Develop menuu in menu bar"
2. Start app with React Native WebView in iOS simulator or iOS device.
3. Safari -> Develop-> [device name] -> [app name]-> [url-title]
4. You can now debug the WebView contents just as you would on the web 

### Notes:
when debugging on device you must enable web inspector in your device settings:

Setting -> Safari -> Advanced-> Web inspector

also, if  you don't see your device in the develop menu, and you started Safari bevore you started your simulator, try restarting Safari.

