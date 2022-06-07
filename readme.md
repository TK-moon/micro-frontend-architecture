# Micro Frontend Architecture
## 마이크로 프론트엔드 아키텍쳐 구현

Webpack5의 Module Federation Plugin을 이용하여 React 기반 마이크로 프론트엔드 아키텍쳐 구현

AWS S3 + CloudFront 조합으로 기본적인 Micro Frontend Architecture 동작을 확인.
- React.lazy로 마이크로 프론트엔드 컴포넌트를 불러온 후 Prop 전달 및 react-router-dom을 이용한 라우팅이 가능한 것을 확인.

## Install
```
yarn install
```

---

## 모듈 설치

### 공통 모듈 설치
```
cd [project root]
yarn add -W [package]
```

### 개별 모듈 설치
```
yarn workspace [workspace] add [package]
```

---

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

---

## 디렉터리

```
micro-frontend-architecture
├─ .eslintignore
├─ .eslintrc
├─ .github
│  └─ workflows.old
│     ├─ container_prod.yml
│     ├─ micro1_prod.yml
│     └─ micro2_prod.yml
├─ .gitignore
├─ .prettierrc
├─ .vscode
│  ├─ extensions.json
│  └─ setting.json
├─ container
│  ├─ env
│  │  ├─ .env.development
│  │  ├─ .env.localhost
│  │  └─ .env.production
│  ├─ index.d.ts
│  ├─ package.json
│  ├─ public
│  │  └─ index.html
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ bootstrap.tsx
│  │  ├─ index.ts
│  │  └─ views
│  │     ├─ components
│  │     └─ pages
│  ├─ tsconfig.json
│  ├─ webpack
│  │  ├─ webpack.config.dev.js
│  │  ├─ webpack.config.js
│  │  ├─ webpack.config.local.js
│  │  └─ webpack.config.prod.js
│  └─ yarn-error.log
├─ lerna-debug.log
├─ lerna.json
├─ library
│  └─ index.ts
├─ package.json
├─ readme.md
├─ services
│  ├─ micro1
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  └─ index.html
│  │  ├─ src
│  │  │  ├─ App.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ bootstrap.js
│  │  │  ├─ index.js
│  │  │  └─ pages
│  │  │     ├─ test1.jsx
│  │  │     └─ test2.jsx
│  │  ├─ webpack
│  │  │  ├─ webpack.config.dev.js
│  │  │  ├─ webpack.config.js
│  │  │  ├─ webpack.config.local.js
│  │  │  └─ webpack.config.prod.js
│  │  └─ yarn.lock
│  └─ micro2
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  └─ index.html
│     ├─ src
│     │  ├─ App.jsx
│     │  ├─ Button.jsx
│     │  ├─ bootstrap.js
│     │  └─ index.js
│     ├─ webpack
│     │  ├─ webpack.config.dev.js
│     │  ├─ webpack.config.js
│     │  ├─ webpack.config.local.js
│     │  └─ webpack.config.prod.js
│     └─ yarn.lock
└─ yarn.lock
```
