# MightyLink Official Website (SPA)

MightyLink(마이티링크) 공식 웹사이트 소스코드 저장소입니다.  
Vue 3, Vite, Tailwind CSS, Vue I18n을 기반으로 구축된 단일 페이지 애플리케이션(SPA)으로, **Cloudflare Pages** 배포 및 **로컬 Apache2** 웹서버 환경에 100% 최적화되어 있습니다.

---

## 🚀 주요 특징 (Key Features)

1. **다국어 (i18n) 지원**:
   - 한국어 (KO) 및 영어 (EN) 실시간 원클릭 언어 전환 지원.
   - `src/locales/ko.js`, `src/locales/en.js`
2. **사이버보안 & AI 테크놀로지 다크 테마**:
   - 밝은 톤(Light Theme): 화이트/라이트 그레이 바탕(slate-50/white), 포인트 컬러는 블루~시안 계열(신뢰감/보안 이미지) 1~2가지로 절제
   - 글래스모피즘·네온 등 과한 이펙트 배제, 여백과 타이포그래피 중심의 담백한 엔터프라이즈 스타일
   - 모바일/태블릿/데스크톱 반응형
3. **핵심 제품 라인업 상세 소개**:
   - **MightySG AI Security Platform**: WireGuard + PQC(ML-KEM 1024) + 2FA, eBPF TC/XDP 커널 ZTNA, agentgateway L7 AI Proxy (CEL Guardrails, DLP, MCP 다중화, A2A 에이전트 통신).
   - **MightyConnect P2P Security Platform**: Mesh P2P Direct Connect (NAT Hole Punching), WERP E2E 암호화 릴레이, FD.io VPP & DPDK 10Gbps+ Software ASIC 엔진, 통합 Access Rule & VPN Group, 7대 산업별 실적용 사례.
4. **문의 및 기술 지원 (Contact)**:
   - 회사명: MightyLink (마이티링크)
   - 대표 이메일: `----@gmail.com`
   - 공식 웹사이트: `www.mightyconn.com`

---

## 🛠️ 개발 및 로컬 테스트 (Local Development & Testing)

### 1. 개발 서버 실행
```bash
npm install
npm run dev
# 브라우저에서 http://localhost:5173 접속
```

### 2. 프로덕션 정적 빌드
```bash
npm run build
# dist/ 폴더에 완전한 정적 HTML/CSS/JS 생성
```

### 3. 로컬 Apache2 웹서버 배포 및 검증
현재 PC의 Apache2 웹서버(`/var/www/html`)로 원클릭 배포하여 실제 브라우저 서빙 상태를 점검합니다.
```bash
./deploy-local.sh
# 또는 sudo ./deploy-local.sh
```
배포 완료 후 브라우저에서 `http://localhost/mightylink/` 로 접속하여 확인합니다.

---

## ☁️ Cloudflare Pages 배포 가이드 (Cloudflare Pages Deployment)

1. **Git 저장소 연결**: GitHub / GitLab에 본 저장소 푸시.
2. **Cloudflare Pages 프로젝트 생성**:
   - **Framework Preset**: `Vite` (또는 `Vue.js`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Root Directory**: `/` (기본값)
   - **Node.js 버전**: 20 이상
3. **도메인 연결**:
   - `www.mightyconn.com` 또는 원하는 도메인을 CNAME으로 연결.

---

## 📂 디렉토리 구조
```text
startup2/
├── docs/
│   ├── HOMEPAGE_PLAN.md                 # 본 기획서
│   ├── Mighty_AISG_Security_Platform_v1.00.pdf
│   └── Mighty_Connect_Security_Platform_v1.0.pdf
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/main.css
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── HeroSection.vue
│   │   ├── CompanySection.vue
│   │   ├── MightySGSection.vue
│   │   ├── MightyConnectSection.vue
│   │   └── ContactSection.vue
│   ├── locales/{ko,en}.js
│   ├── i18n.js
│   ├── App.vue
│   └── main.js
├── deploy-local.sh                      # 로컬 Apache2 배포 스크립트
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
