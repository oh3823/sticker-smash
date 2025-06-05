https://docs.expo.dev/build/setup

EAS는 Expo 프로젝트의 빌드와 배포를 자동화해주는 클라우드 서비스이다. Expo 뿐만 아니라 Bare React Native 프로젝트에서도 사용할 수 있다. EAS를 사용하기 위해서는 [expo.dev](https://expo.dev/) 계정이 필요하다.

#### EAS CLI
EAS CLI는 로컬 터미널에서 EAS와 상호작용하는 도구이다. CLI를 이용해 expo.dev 계정에 로그인 후 EAS 서비스를 사용할 수 있으며, 앱을 빌드하고, 스토어 심사 없이 코드를 업데이트([[Over the Air]])하거나, 스토어에 앱을 게시할 수도 있다.
``` powershell
npm install -g eas-cli # EAS CLI 설치
eas login
eas build:configure # EAS에 맞게 프로젝트 자동 설정
```

`eas build` 명령을 사용하면 EAS 클라우드에서 앱을 빌드할 수 있다. `--platform`, `--profile` 옵션을 설정해 특정 빌드만 수행할 수 있다. EAS에서 빌드가 완료되면 QR 코드 혹은 빌드 결과 페이지에서 .apk를 다운받아 기기에서 실행할 수 있다.
``` powershell
eas build --platform android --profile development
```

#### Expo Dev Client
`development` 빌드는 `expo-dev-client` 라이브러리가 필요하다. `expo-dev-client`는 Expo Go와 유사하게, 앱을 빌드하고 디버깅할 수 있게 해주는 라이브러리이다. Expo Go는 Expo 팀에서 스토어에 배포한 앱이기 때문에 네이티브 코드나 도구를 변경할 수 없다. `development` 빌드는 일종의 Expo Go를 빌드하는 것이며, 기본 라이브러리나 네이티브 모듈을 자유롭게 구성할 수 있다.

`development` 빌드는 `preview`나 `production`보다 자주 빌드된다. EAS는 `dev-client` 자체를 캐싱하며, 만약 네이티브 코드가 이전 빌드와 동일하다면 다시 빌드하지 않고 재사용한다.
``` powershell
eas build --platform android --profile development # 항상 다시 빌드 👎
eas build:dev # 네이티브 코드가 이전과 동일하면 재사용, 변경 시 다시 빌드 ✅
```

#### [Orbit](https://docs.expo.dev/build/orbit/)
Orbit은 EAS 빌드 결과물을 모바일 기기에 쉽게 적용할 수 있게 도와주는 데스크탑 앱이다. Orbit 이전에는 EAS 클라우드에 있는 빌드 결과물을 로컬에 받은 후, 에뮬레이터에 설치하고 실행해야했다. Orbit은 EAS 대시보드의 최신 빌드를 자동으로 내려받아서 원클릭으로 연결된 기기에 설치 후 실행해준다.

