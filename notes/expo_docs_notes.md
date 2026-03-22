# Notes from expo docs

## App.json

* configures the expor prebuild generation

* Configure app icon and loading screen in this area. Also the deep linking scheme.

* [Field reference guide](https://docs.expo.dev/versions/latest/config/app/)

* In `app.config.js` you can set variables that can be called in code. You can also set different production and development variables in this code.

## React native integration

* [React native library directory that can filter by expo go](https://reactnative.directory/packages?expoGo=true)

* Using `npx expo install` vs `npm isntall` allows expo cli to pick a compatible version of a library when possible

## Privacy manifests

* This are included in iOS native projects to delcare why your app/library needs to access information that apple deems sensitive to the user

* In `app.json` you can add the following

```json
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "ios": {
      "privacyManifests": {
        "NSPrivacyAccessedAPITypes": [
          {
            "NSPrivacyAccessedAPIType": "NSPrivacyAccessedAPICategoryUserDefaults",
            "NSPrivacyAccessedAPITypeReasons": ["CA92.1"]
          }
        ]
      }
    }
  }
}
```
## Permissions

* things like camera and microphone permissions etc.

* Also in `app.json`

    * **iOS**
```json
{
  "ios": {
    "infoPlist": {
      "NSCameraUsageDescription": "This app uses the camera to scan barcodes on event tickets."
    }
  }
}
```
    * **Android**
```json
{
  "android": {
    "blockedPermissions": ["android.permission.RECORD_AUDIO"]
  }
}
```

## Environment variables

* Must start with `EXPO_PUBLIC_[NAME]=VALUE`

```env
EXPO_PUBLIC_API_URL=https://staging.example.com
EXPO_PUBLIC_API_KEY=abc123
```

* Use it this way

```js
import { Button } from 'react-native';

function Post() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  async function onPress() {
    await fetch(apiUrl, { ... })
  }

  return <Button onPress={onPress} title="Post" />;
}
```





