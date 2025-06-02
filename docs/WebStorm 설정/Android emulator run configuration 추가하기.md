https://docs.expo.dev/workflow/android-studio-emulator/
#### 1. Android emulator 환경변수 추가
Emulator 실행 파일은 `<SDK Location>/emulator`에 위치한다. SDK Location은 Android Studio에서 확인할 수 있다.
```powershell
$newPath = <android_emulator_path>
# $newPath = "C:\Users\oh382\AppData\Local\Android\Sdk\emulator"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
$updatedPath = "$currentPath;$newPath"
[Environment]::SetEnvironmentVariable("Path", $updatedPath, "User")
```
#### 2. Shell script run configuration 추가
```powershell
emulator -avd <emulator_name>
# emulator -avd Pixel_9_Pro_XL
```
이제 `expo start --android`로 시작하면 Android emulator에 Expo Go가 자동으로 설치되어 사용할 수 있다.