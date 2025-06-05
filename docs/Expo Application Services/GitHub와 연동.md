https://docs.expo.dev/build/building-from-github/

#### Expo GitHub 앱
코드 저장소에 Expo GitHub 앱을 설치하고 EAS 프로젝트에 GitHub 저장소를 연결하면 EAS 대시보드에서 간단하게 EAS 빌드를 트리거할 수 있다. PR의 label을 `eas-build-[platform]:[profile]` 형식대로 작성해 트리거할 수도 있다.

UI로 쉽게 조작할 수 있어 빠르게 설정할 수 있지만 정해진 트리거 이벤트 외에 커스텀하기 어렵고, 테스트나 린트와 같은 작업과 통합하기 어렵다. 주로 개인 개발이나, MVP 개발에 유용하게 사용된다.

#### [EAS Workflows](https://docs.expo.dev/eas/workflows/get-started/)
`.eas/workflows/*.yaml`에 워크플로를 정의해 EAS 자체 CI 파이프라인을 정의할 수 있다. GitHub Actions와 거의 동일한 구조이고, Expo GitHub 앱을 설치한 경우 GitHub 이벤트를 감지해서 작업을 트리거할 수 있다.
