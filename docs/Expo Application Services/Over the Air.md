https://docs.expo.dev/eas-update/getting-started/

React Native 앱은 JS 코드를 네이티브로 변환하지 않고, 네이티브 런타임에서 JS를 인터프리팅하는 방식으로 동작한다. 즉, 앱 내부에는 React Native 네이티브 런타임과, 내가 작성한 JS 번들이 포함되어있다. OTA는 JS 번들만 새 버전으로 교체하는 방식이다. 네이티브 코드와 런타임은 변경되지 않으며, 스토어에 다시 배포해야한다. JS 코드와 asset만 수정하는 경우와 같이, 네이티브 코드 변경 없이 수정할 수 있다면 대부분의 경우 OTA를 사용하는 것이 좋다. A/B 테스트를 통해 실험적인 기능을 제공할 때도 유용하다.

OTA를 사용하기 위해서는 `expo-updates`를 의존성에 추가한 후 앱을 빌드해야 한다. `expo-updates`는 앱 실행 시 업데이트된 JS 번들을 확인하고, 백그라운드로 다운로드해 다음에 실행할 때 로드한다.
``` powershell
npx expo install expo-updates
```

네이티브 모듈이 변경되었을 때는 runtimeVersion을 올리고, `eas build`로 새 아티팩트를 빌드해야한다. 만약 네이티브 모듈 변경에도 OTA로 업데이트를 하게 되면, JS 코드에서 변경된 모듈을 호출할 때 앱이 정상동작하지 않을 수 있다.

OTA로 JS 번들만 업데이트할 때는 runtimeVersion은 유지한 채로 `eas update`해야 한다. `runtimeVersion`은 앱 바이너리(네이티브 코드)와 JS 번들이 호환되는 버전을 맞추기 위한 식별자 역할을 한다. 즉, 사용자 기기에 위치한 앱의 버전과, JS 번들의 버전이 일치해야 내려받는다.

``` powershell
eas update --channel preview --message ""
```
`preview` 채널에 브랜치가 생성되며, 마치 커밋처럼 JS 번들의 변경사항이 쌓이게 된다. `preview` 빌드 앱은 `preview` 채널에서, `production` 빌드 앱은 `production` 채널에서 최신 JS 번들을 불러오게 된다.