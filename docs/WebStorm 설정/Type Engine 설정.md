WebStorm은 자체 타입 엔진을 사용해서 타입 관련 기능을 제공한다.

#### Service-Powered Type Engine
Service-Powered Type Engine은 WebStorm에서 TypeScript(tsserver), Vue, Angular 등의 언어 서비스 서버를 백엔드로 사용하는 하이브리드 타입 엔진이다. 빠른 성능이 필요할 때는 IDE 자체 엔진을, 정확한 추론이 필요할 때는 언어 서비스 서버를 사용한다. React Native 프로젝트에서는 TypeScript 언어 서비스 백엔드를 사용하는 것이 좋으며, WebStorm 상태 바에서 설정할 수 있다.