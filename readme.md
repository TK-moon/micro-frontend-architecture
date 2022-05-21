# Micro Frontend Architecture
## 마이크로 프론트엔드 아키텍쳐 구현

Webpack5의 Module Federation Plugin을 이용하여 React 기반 마이크로 프론트엔드 아키텍쳐 구현

## 디펜던시 설치

### 공통 모듈 설치
```
cd [project root]
yarn add -W [package]
```

### 개별 모듈 설치
```
yarn workspace [workspace] add [package]
```

## 실행

### Local Dev
```
yarn
yarn start
```

### Dev
```
yarn
yarn build:dev
yarn serve
```

### Prod
```
yarn
yarn build:prod
yarn serve
```