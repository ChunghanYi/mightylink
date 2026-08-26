# MightyLink Official Website (SPA)

MightyLink(마이티링크) 공식 웹사이트 소스코드 저장소입니다.  
Vue 3, Vite, Tailwind CSS, Vue I18n을 기반으로 구축된 단일 페이지 애플리케이션(SPA)으로, **Cloudflare Pages** 배포 및 **로컬 Apache2** 웹서버 환경에 100% 최적화되어 있습니다.

---

## 🚀 주요 특징 (Key Features)

1. **다국어 (i18n) 지원**:
   - 한국어 (KO) 및 영어 (EN) 실시간 원클릭 언어 전환 지원.
   - `src/locales/ko.js`, `src/locales/en.js`
2. **사이버보안 & AI 테크놀로지 다크 테마**:
   - 네온 시안, 일렉트릭 블루, 에메랄드 그린 액센트와 글래스모피즘(Glassmorphism) 기반 모던 UI.
   - 모바일, 태블릿, 데스크톱 완전 반응형 레이아웃.
3. **핵심 제품 라인업 상세 소개**:
   - **MightySG AI Security Platform**: WireGuard + PQC(ML-KEM 1024) + 2FA, eBPF TC/XDP 커널 ZTNA, agentgateway L7 AI Proxy (CEL Guardrails, DLP, MCP 다중화, A2A 에이전트 통신).
   - **MightyConnect P2P Security Platform**: Mesh P2P Direct Connect (NAT Hole Punching), WERP E2E 암호화 릴레이, FD.io VPP & DPDK 10Gbps+ Software ASIC 엔진, 통합 Access Rule & VPN Group, 7대 산업별 실적용 사례.
4. **문의 및 기술 지원 (Contact)**:
   - 회사명: MightyLink (마이티링크)
   - 대표 이메일: `chunghan.yi@gmail.com`
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
startup/
├── docs/                        # 기술 백서 및 기획 문서
│   ├── HOMEPAGE_PROPOSAL.md     # 종합 기획 및 기술 설계서
│   ├── Mighty_ZTNA_AI_Security_Platform_v0.97.pdf
│   └── Mighty_Connect_Security_Platform_v0.96.pdf
├── public/
│   └── favicon.svg              # MightyLink 공식 파비콘
├── src/
│   ├── assets/
│   │   └── main.css             # Tailwind CSS 및 커스텀 사이버 테마 스타일
│   ├── components/
│   │   ├── Navbar.vue           # 상단 네비게이션 & 언어 전환
│   │   ├── HeroSection.vue      # 메인 비주얼 & 핵심 지표
│   │   ├── CompanySection.vue   # MightyLink 제로 트러스트 비전
│   │   ├── MightySGSection.vue  # MightySG AI 보안 플랫폼
│   │   ├── MightyConnectSection.vue # MightyConnect P2P 메쉬 보안 플랫폼
│   │   ├── TechDeepDiveSection.vue  # 기술 비교표 & 심층 아키텍처
│   │   ├── UseCasesSection.vue      # 7대 산업별 실적용 사례
│   │   ├── DeviceSupportSection.vue # 지원 디바이스 생태계
│   │   ├── ContactSection.vue       # 문의처 및 PoC 신청 폼
│   │   └── Footer.vue           # 푸터
│   ├── locales/
│   │   ├── ko.js                # 한국어 번역 리소스
│   │   └── en.js                # 영어 번역 리소스
│   ├── i18n.js                  # Vue I18n 설정
│   ├── App.vue                  # 루트 SPA 컴포넌트
│   └── main.js                  # 엔트리포인트
├── deploy-local.sh              # 로컬 Apache2 배포 스크립트
├── index.html                   # HTML 템플릿
├── package.json
└── vite.config.js               # Vite 빌드 설정
```
