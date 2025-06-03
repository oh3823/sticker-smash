https://reactnative.dev/docs/view

`View`는 UI를 만들기 위해 가장 기본이 되는 컴포넌트이다. `<div>`와 동일한 역할을 하며, ios의 `UIView`, android의 `android.view`와도 직접 매핑된다.

React Native에서 제공하는 UI 컴포넌트는 기본으로 Flexbox 레이아웃이 적용된다. 따라서 `View`의 부모 컴포넌트가 UI 컴포넌트라면 별도 설정 없이 `View`를 Flex item으로 사용할 수 있다. 마찬가지로 `View`의 자식 컴포넌트도 별도 설정 없이 Flex item으로 사용할 수 있다.

`View`는 많은 Props가 있지만 거의 대부분 [`style`](https://reactnative.dev/docs/view-style-props)만 사용된다. `style`을 제외한 대부분의 Props는 특수한 상황에서만 사용된다. 특정 플랫폼 전용 Props도 존재한다.

#### Style
React Native의 UI 컴포넌트들은 `StyleSheet`와 함께 사용되도록 설계되었다. `StyleSheet`를 사용하면 렌더링마다 오브젝트를 재생성하지 않기 때문에 성능이 좋고, 모듈화하기도 좋다. `styled-component`와 유사하다.

런타임에 동적으로 값이 결정되는 경우나, 매우 간단한 스타일이라면 인라인 스타일을 사용하는 것이 좋지만, 렌더링마다 오브젝트를 생성하기 때문에 오버헤드가 발생할 수 있다.

```tsx
import { View, StyleSheet } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
```
