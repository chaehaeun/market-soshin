![칼리](https://cdn.discordapp.com/attachments/619875492820025356/1113775287738576956/Rectangle_9.png)

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

<details>
<summary>Main</summary>

![메인](https://cdn.discordapp.com/attachments/619875492820025356/1113778489745748048/market-soshin.vercel.app_index.html.png)

![](https://cdn.discordapp.com/attachments/619875492820025356/1113783195318624256/swiper.gif)

1. swiper에 비동기 통신을 이용하여 동적으로 제품 정보 삽입

</details>

<details>
<summary>Product List</summary>

![프로](https://media.discordapp.net/attachments/619875492820025356/1113778489447940127/market-soshin.vercel.app_pages_productList.html.png?width=520&height=970)

1. 비동기 통신으로 동적으로 제품 삽입

</details>

<details>
<summary>Product Detail</summary>

![메인](https://cdn.discordapp.com/attachments/619875492820025356/1113780434216685588/localhost_5500_pages_productDetail.html.png)

![](https://media.discordapp.net/attachments/619875492820025356/1114087770093273099/detail.gif?width=1012&height=970)

1. 문의, 후기버튼 모달 구현
2. 상품문의 아코디언 기능

</details>

<details>
<summary>Register</summary>

![메인](https://media.discordapp.net/attachments/619875492820025356/1113780433906315354/localhost_5500_pages_register.html.png?width=624&height=970)

![](https://media.discordapp.net/attachments/619875492820025356/1114088374865760256/register.gif?width=2160&height=852)

1. 아이디, 이메일 중복 확인을 안 했을 시
   ![](https://cdn.discordapp.com/attachments/619875492820025356/1114096411072528466/image.png)
   ![](https://cdn.discordapp.com/attachments/619875492820025356/1114096525518327808/image.png)

2. 이미 사용 중인 아이디일 시
   ![](https://cdn.discordapp.com/attachments/619875492820025356/1114097658999615518/image.png)

3. 필수약관 동의를 하지 않았을 시
   ![](https://cdn.discordapp.com/attachments/619875492820025356/1114097198020448286/image.png)

4. 필수 입력 칸을 비워놓고 submit 요청을 했을 시
   ![](https://cdn.discordapp.com/attachments/619875492820025356/1114098107878215700/image.png)

</details>

<details>
<summary>Login</summary>

![메인](https://media.discordapp.net/attachments/619875492820025356/1113780433574969394/localhost_5500_pages_login.html.png?width=1092&height=970)

![](https://cdn.discordapp.com/attachments/619875492820025356/1114087842784747540/login.gif)

1. 로그인 성공시 유저 uid를 로컬스토리지에 저장

</details>

<details>
<summary>Cart</summary>

![](https://cdn.discordapp.com/attachments/619875492820025356/1114092842793582682/localhost_5500_pages_cart.html.png)

1. 장바구니 아코디언 기능
2. 제품 수량 변경 기능

</details>
