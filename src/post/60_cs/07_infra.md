---
title: "인프라"
lang: ko
showOnSidebar: true
sidebarDepth: 0
---

# Table of Contents
[[toc]]

## Apache Kafka
- `Publish/Subscribe` 모델의 메시지 큐
- 분산 코디네이터인 `Zookeeper`와 브로커 서버인 `Kafka` 여러 대로 클러스터를 구축할 수 있다.
- `Key-Value` 형식으로 메시지를 전송할 수 있다.
- `Producer`는 메시지를 생산하는 주체
- `Consumer`는 메시지를 소비하는 주체
- 메시지를 `Topic` 단위로 분류한다.
- Topic에 여러 `Partition`을 할당하여 병렬적으로 데이터를 생산할 수 있다.
- `Consumer Group`을 할당하여 배압 이슈를 해결할 수 있다. Consumer Group의 각 `Consumer`는 서로 다른 `Partition`에서 병렬적으로 데이터를 읽어온다.
- 기존 메시지 큐가 인메모리 방식으로 데이터를 저장하는 반면, `Kafka`는 파일 시스템에 데이터를 저장하기 때문에 영속성이 보장이 된다.
- `Replication`을 활용하여 Topic을 여러 노드에 분산 저장하면 고가용성을 높일 수 있다.

## Event Driven Architecture

## Micro Service Architecture

