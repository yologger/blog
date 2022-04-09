---
title: "구글 플레이스토어 앱 게시 취소"
description: "구글 플레이스토어 앱 게시 취소"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## 출시하지 않은 앱 삭제

내부 테스트, 비공개 테스트, 공개 테스트, 정식 출시를 하지 않은 앱은 구글 플레이 콘솔에서 쉽게 삭제할 수 있습니다. 휴지통 아이콘을 눌러주기만 하면 됩니다.
![](./200307_unpublish_app/0.png)


## 테스트 중인 앱 삭제
내부 테스트, 비공개 테스트, 공개 테스트 중인 앱 옆에는 휴지통 아이콘이 나타나지 않습니다. 따라서 두 단계를 거쳐 앱을 삭제합니다.

### 테스트 일시중지
우선 테스트를 일시중지 해야합니다.

<b>내부 테스트</b>를 일시중지하려면 `Testing > Internal testing`으로 이동하여 `View release details`를 클릭합니다.

![](./200307_unpublish_app/1.png)

`View track`을 클릭합니다.

![](./200307_unpublish_app/2.png)

`Pause track`을 클릭하면 내부 테스트가 일시중지됩니다.

![](./200307_unpublish_app/3.png)

<b>비공개 테스트</b>를 일시중지하려면 `Testing > Closed testing`으로 이동하여 일시중지하려는 트랙의 `Manager track`을 클릭합니다.

![](./200307_unpublish_app/4.png)

`Pause track`을 클릭하면 앱이 일시중지됩니다.

![](./200307_unpublish_app/5.png)

<b>공개 테스트</b>를 일시중지하려면 `Testing > Open testing`으로 이동합니다. 이후 `Pause track`을 클릭하면 공개 테스트가 일시중지됩니다.

![](./200307_unpublish_app/6.png)

### 구글 플레이 고객센터
[구글 플레이 콘솔 고객센터(Google Play Console Help)](https://support.google.com/googleplay/android-developer/gethelp)에 접속한 후 `시작하기`에서 지원이 필요한 사항을 입력합니다.

![](./200307_unpublish_app/7-ko.png)

`문제 확인하기`을 적절하게 입력합니다.

![](./200307_unpublish_app/8-ko.png)


`문의 옵션`은 `채팅`과 `이메일`을 선택할 수 있습니다. `채팅`을 선택해봅시다.

![](./200307_unpublish_app/9-ko.png)

잠시 기다리면 플레이 콘솔 지원팀과 실시간 채팅이 연결됩니다. 이때 삭제하려는 앱의 패키지 이름을 전달하면 앱이 삭제됩니다.

![](./200307_unpublish_app/10-ko.png)


## 정식 출시된 앱 삭제
정식 출시된 앱은 두 단계를 거쳐 삭제합니다. 
- 앱 게시를 취소합니다. 
- 구글 플레이 고객센터에 앱 삭제를 요청합니다.

### 앱 게시 취소
::: tip
앱 게시를 취소하면 새로운 사용자는 플레이스토어에서 앱을 검색하거나 다운로드할 수 없습니다. 그러나 기존 사용자는 앱을 계속 사용할 수 있습니다.
:::

[`구글 플레이 콘솔(Google Play Console)`](https://play.google.com/console)에 접속합니다.

`왼쪽 사이드바 메뉴 > All apps`로 이동합니다. 이 곳에서 출시한 앱 목록을 확인할 수 있습니다. 삭제할 앱을 선택합니다.

![](./200307_unpublish_app/11.png)

`Setup > Advanced settings`로 이동합니다. 

![](./200307_unpublish_app/12.png)

`App availability`를 `Unpublished`로 변경하고 `Save changes`버튼을 누르면 앱 게시가 취소됩니다.

![](./200307_unpublish_app/13.png)

::: tip
변경 사항이 반영되는데 몇 시간이 걸릴 수 있습니다.
:::
::: tip
게시 취소된 앱은 삭제하기 전까지 다시 출시할 수 있습니다.
:::


### 앱 삭제
앱은 다음 네 가지 조건을 충족해야만 삭제할 수 있습니다.
1. 앱에 아무런 문제가 없어야 합니다. (거부, 차단, 일시정지되지 않음)
1. 앱이 검토 중이면 삭제할 수 없습니다.
1. 앱이 24시간 동안 게시 취소 상태여야 합니다.
1. `앱 설치 수`가 0이어야 합니다.

`앱 설치 수`는 `All apps`에서 확인할 수 있습니다.

![](./200307_unpublish_app/25.png)

주의할 점은 개발자 본인이 테스트를 위해 앱을 설치해도 `앱 설치 수`는 증가합니다. 구글 고객센터에 문의한 결과 `앱 설치 수`가 0이 아니면 앱 게시를 취소할 수는 있어도 앱을 삭제할 수는 없다고 합니다. 이는 앱을 다운받은 소비자의 권리를 보장하기 위함입니다.

그럼 `앱 설치 수`가 0일 때 앱을 삭제하는 방법에 대해 알아보겠습니다. 우선 [구글 플레이 콘솔 고객센터(Google Play Console Help)](https://support.google.com/googleplay/android-developer/gethelp)에 접속합니다.

![](./200307_unpublish_app/14-ko.png)

지원이 필요한 사항을 입력합니다.

![](./200307_unpublish_app/15-ko.png)

`앱 삭제`를 선택합니다.

![](./200307_unpublish_app/16-ko.png)

`이메일`을 선택합니다.

![](./200307_unpublish_app/17-ko.png)

`충족 사항`을 확인합니다.

![](./200307_unpublish_app/18-ko.png)

이름, 성, 이메일 주소, 내 위치, 개발자 이름을 입력합니다. 그리고 `개발자 계정 ID`를 입력합니다. `계정 세부정보 페이지`를 선택하면 개발자 계정 ID를 확인할 수 있습니다.

![](./200307_unpublish_app/19-ko.png)

![](./200307_unpublish_app/20-ko.png)

![](./200307_unpublish_app/21-ko.png)

`패키지 이름`을 입력합니다. 

![](./200307_unpublish_app/22-ko.png)

`패키지 이름`은 `구글 플레이 콘솔 > All apps`에서 확인할 수 있습니다.

![](./200307_unpublish_app/23-ko.png)

문제 해결에 도움이 되는 `스크린샷`을 추가합니다. 삭제할 앱의 스크린샷을 첨부하면 끝입니다. 제출 후 처리되는데 며칠이 소요될 수 있습니다.