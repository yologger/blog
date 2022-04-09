---
title: "GitHub Actions로 안드로이드 앱 배포 자동화 하기"
description: "GitHub Actions로 안드로이드 앱 배포 자동화 하기"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# GitHub Actions로 안드로이드 앱 배포 자동화 하기
안드로이드 앱을 구글 플레이 스토어에 출시하려면 크게 다음과 같은 과정을 거쳐야 한다.
- 앱 빌드
- 앱 Signing
- APK 또는 AAB 생성
- Google Play Console에 업로드

`GitHub Actions`, `Fastlane`, `Bitrise` 같은 도구를 사용하면 위 과정을 자동화할 수 있다. 이번 포스트에서는 `GitHub Actions`를 사용하여 CI/CD pipeline을 구축하는 방법을 알아보고자 한다.


## Generating Google Play Credential

