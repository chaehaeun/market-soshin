# <span id="top">✋🏻 MARKET-소신</span>

[🔗 배포 URL](https://market-soshin.vercel.app/)

## 개요

- 🦁 멋쟁이사자처럼 프론트엔드스쿨 4기 LAB 15에서 프로젝트를 진행한 <b> 소신있조 </b> 팀입니다.
- Market Sosin은 마켓 컬리(Market Kurly) 클론코딩 프로젝트입니다.

## 🐣 팀원 구성

- ⛄️ 김진우 🔗 [github/rlawlsdn263](https://github.com/rlawlsdn263)
- ⛄️ 김도현 🔗 [github/kimzeze](https://github.com/kimzeze)
- ⛄️ 조성찬 🔗 [github/zerocalorie1226](https://github.com/zerocalorie1226)
- ⛄️ 채하은 🔗 [github/chaehaeun](https://github.com/chaehaeun)
- ⛄️ 현지수 🔗 [github/hyunzsu](https://github.com/hyunzsu)

<details>
<summary>목차</summary>

1. [프로젝트 목표](#goal)
2. [개발 환경 및 배포 URL](#dev)
3. [프로젝트 구조](#tree)
4. [역할 분담](#role)
5. [개발 기간 및 이슈 관리](#task)
6. [페이지 기능](#pages)

</details>

---

## <span id="goal">1. 프로젝트 목표</span>

- 메인 페이지 요구사항(JS, 웹 접근성) 지키기
- 성실하고 적극적으로 프로젝트 참여하기
- 모든 기능을 구현하기보다는 새로운 경험과 실패에 집중하기

<p align="right"><a href="#top">(Top)</a></p>

## <span id="dev">2. 개발 환경 및 배포 URL</span>

### 개발 환경

- Front : HTML, CSS, Vanilla JS
- Back : 제공된 API 사용
- 버전 관리 및 이슈 :
  🔗[GitHub](https://github.com/likelion-lab15/market-soshin),
  🔗[GitHub Issues](https://github.com/likelion-lab15/market-soshin/issues),
  🔗[GitHub Project](https://github.com/likelion-lab15/market-soshin/projects)
- 서비스 배포 환경 : Vercel

### 배포 URL

URL : 🔗 https://market-soshin.vercel.app/

<p align="right"><a href="#top">(Top)</a></p>

## <span id="tree">3. 프로젝트 구조</span>

```bash
📦 market-sosin
│ README.md
│  package.json
│  package-lock.json
│  .prettierrc
│  .gitignore
│  .eslintrc.js
├── node_modules
├── client
│   ├── assets
│   ├── css
│   │   ├── config
│   │   │   ├── a11y.css
│   │   │   ├── base.css
│   │   │   ├── normalize.css
│   │   │   ├── reset.css
│   │   │   └── theme.css
│   │   ├── style.css
│   │   └── styles
│   │       ├── button.css
│   │       ├── cart.css
│   │       ├── cartAccordion.css
│   │       ├── login.css
│   │       ├── main.css
│   │       ├── mainBannerSwiper.css
│   │       ├── mainPoductSwiper.css
│   │       ├── popUp.css
│   │       ├── productDetail.css
│   │       ├── productDetail__comment.css
│   │       ├── productList.css
│   │       ├── recent.css
│   │       └── register.css
│   ├── index.html
│   ├── js
│   │   ├── common
│   │   │   ├── accordion.js
│   │   │   ├── button.js
│   │   │   ├── cartTemplate.js
│   │   │   ├── displayItemHome.js
│   │   │   ├── displayItemProductList.js
│   │   │   ├── gapIsValid.js
│   │   │   ├── getJsondata.js
│   │   │   ├── index.js
│   │   │   └── popUp.js
│   │   ├── home.js
│   │   ├── login.js
│   │   ├── main.js
│   │   ├── productDetail.js
│   │   ├── productList.js
│   │   ├── register.js
│   │   └── swiper
│   │       ├── index.js
│   │       ├── mainBannerSwiper.js
│   │       ├── mainBottomSwiper.js
│   │       └── mainTopSwiper.js
│   ├── lib
│   └── pages
│       ├── cart.html
│       ├── login.html
│       ├── productDetail.html
│       ├── productList.html
│       └── register.html
├── package-lock.json
├── package.json
└── server
    └── db
        └── data.json
```

<p align="right"><a href="#top">(Top)</a></p>

## <span id="role">4. 역할 분담</span>

- 하단 이미지와 같이 개인, 공동 작업 페이지로 나누어 진행하였습니다.

![역할분담](https://cdn.discordapp.com/attachments/619875492820025356/1113760710321778728/image.png)

### 🛠 공통 담당

- 메인 페이지

### 김진우

- product list, product detail 페이지, main 페이지 배너 슬라이드

### 김도현

- cart, product detail 페이지, main 페이지 헤더

### 조성찬

- product list, product detail 페이지, main 페이지 제품 슬라이드

### 채하은

- register 페이지, login 페이지 js 기능 작업, main 페이지 푸터

### 현지수

- cart, product detail 페이지, login 페이지 마크업, main 페이지 헤더

<p align="right"><a href="#top">(Top)</a></p>

## <span id="task">5. 개발 기간 및 작업 관리</span>

- 전체 개발 기간 : 2023-01-27 ~ 2022-02-08

### 작업 관리

🔗[Issues](https://github.com/likelion-lab15/market-soshin/issues)를 사용하여 진행도와 상황을 꾸준히 공유하였습니다.

### 데일리 스크럼

데일리 스크럼을 진행하여 작업 방향이나 코드 고민에 대해 나누었고 GitHub Wiki를 사용하여 기록하였습니다.

- 🔗[230130 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-01%EC%9B%94-30%EC%9D%BC)
- 🔗[230131 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-01%EC%9B%94-31%EC%9D%BC)
- 🔗[230201 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-01%EC%9D%BC)
- 🔗[230202 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-02%EC%9D%BC)
- 🔗[230203 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-03%EC%9D%BC)
- 🔗[230206 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-06%EC%9D%BC)
- 🔗[230207 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-07%EC%9D%BC)
- 🔗[230208 회의록](https://github.com/likelion-lab15/market-soshin/wiki/2023%EB%85%84-02%EC%9B%94-08%EC%9D%BC)

<p align="right"><a href="#top">(Top)</a></p>

## <span id="pages">6. 페이지 기능</span>

### 1) 홈

### 2) 게시글

### 3) 프로필

### 4) 판매 상품
