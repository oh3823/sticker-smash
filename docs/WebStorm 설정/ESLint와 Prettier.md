https://docs.expo.dev/guides/using-eslint/
## ESLint
ESLint는 코드의 문법, 스타일, 오류 등을 정적 분석해주는 도구이다. `.eslintrc`(Legacy) 혹은 `eslint.config.js`(Flat config) 파일로 구성을 정의할 수 있다. Expo SDK 53부터는 Flat config를 기본으로 지원한다.

ESLint는 기본값만으로는 거의 아무 규칙도 검사하지 않고, 프로젝트에 따라 적절한 규칙을 생성하거나 미리 정의된 프리셋을 구성 파일에 추가해야한다. ESLint를 제대로 사용하기 위해서는 반드시 구성 파일을 생성해야한다.

Expo 프로젝트에 적절한 ESLint 규칙은 `eslint-config-expo`가 있다. Expo 프로젝트를 생성하면 자동으로 설치되고, 같이 생성된 `eslint.config.js`에서 프리셋을 불러와 사용한다.
###### WebStorm ESLint 설정
Preferences → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint 설정에서 Automatic ESLint configuration을 체크하면 ESLint를 사용할 수 있다. `eslint.config.js` 구성 파일도 자동으로 감지해 서비스가 동작한다. WebStorm 하단 상태 바에서 확인할 수 있다.

## Prettier
Prettier는 코드의 스타일을 일관되게 만들어주는 포매터이다. `.prettierrc`,`prettier.config.js` 파일로 구성을 정의할 수 있다. ESLint와 다르게 Prettier는 기본값으로도 충분히 일관된 스타일을 제공한다.

Expo 프로젝트는 Prettier를 전혀 포함하지 않는다. Prettier를 프로젝트에서 사용하려면 패키지부터 설치해야하며, IDE에서 코드 포매터로 Prettier를 사용하도록 설정해야한다.
```powershell
npx expo install prettier eslint-config-prettier
```
###### WebStorm prettier 설정
Preferences → Languages & Frameworks → JavaScript → Prettier 설정에서 Automatic Prettier configuration을 체크하면 WebStorm에서 Prettier를 사용할 수 있다. `node_modules`에 Prettier 패키지가 존재하면, 구성 파일(없다면 기본값)을 참고해 코드를 포맷한다.

## ESLint와 Prettier 충돌
ESLint는 주로 문법이나 오류를 분석해주지만, 스타일도 규칙을 정해 제한할 수 있다. 스타일 규칙을 Prettier와 함께 사용하게 되면, 서로 충돌하는 문제가 발생할 수 있다.

예를 들어 Prettier에서는 `"`로 포맷하는데, ESLint는 `'`로 제한한다면 충돌이 발생한다. 충돌을 해결할 수 있는 방법에는 여러 가지가 있지만, 서로 책임을 분리하는 방식이 가장 좋은 방법이다. `eslint-config-prettier`는 ESLint의 스타일 관련 규칙을 비활성화하는 프리셋으로, Prettier와의 충돌 가능성을 없앤다. 구성 파일 맨 마지막에 추가하면 앞서 정의된 스타일 규칙을 모두 비활성화하도록 재정의한다.

###### `eslint.config.js` 예시
```js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  prettierConfig,
  {
    ignores: ["dist/*"],
  },
]);
```

그 외에도 ESLint의 규칙으로 Prettier를 동작하게 하는 `eslint-plugin-prettier` 프리셋이나, Prettier를 실행 후 ESLint를 실행하는 `prettier-eslint` 패키지가 있지만, 성능 문제로 잘 사용되지 않는다. Expo 공식문서에서는 Prettier를 사용하는 방법으로 `eslint-plugin-prettier`를 사용하는데, 권장되지 않는다.

#### 결론
- ESLint와 Prettier는 둘 다 사용하는 것이 좋으며, ESLint는 구성 파일이 필요하고, Prettier는 기본값으로도 충분하다. Legacy config에서 [Flat config](https://eslint.org/blog/2022/08/new-config-system-part-2/)로 넘어가는 추세이다.
- ESLint가 스타일 규칙을 정의하는 경우 Prettier와 충돌이 발생할 수 있으며, 가장 좋은 방법은 ESLint 구성 파일에 `eslint-config-prettier`를 사용해 스타일 규칙을 무시하는 방법이다.