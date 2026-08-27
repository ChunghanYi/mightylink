# MightyLink 홈페이지 기획서 (v2 — 간결화)

**Date:** 2026-08-26
**Company:** MightyLink (마이티링크)
**Contact:** contact@mightyconn.com
**Target:** Cloudflare Pages (SPA), 로컬 Apache2 사전 검증

## 0. 이 기획서의 목적

`company/startup`에 이미 한 차례 홈페이지가 만들어졌으나, 검토 결과 다음 문제가 있었다:

- 내용이 장황하고, 홈페이지에 불필요한 세부 구현(eBPF 맵 이름, 알고리즘 단계 등)까지 노출
- 다크 테마 → 이번엔 **밝은 톤**으로 변경 요청
- 소스코드/문서로 검증되지 않은 주장이 섞여 있었음 (아래 1.1 참조)

이번 `startup2`에서는 (1) 분량을 줄이고, (2) 밝은 색 톤으로 바꾸고, (3) 실제 소스코드·아키텍처 문서로 검증된 내용만 담는 것을 원칙으로 한다.

### 0.1 검증 결과 — 이전 기획서에서 수정/삭제할 내용

두 제품의 소스코드(`project1_release/mighty_sg`, `project2_release/mighty_connect`)와 `docs/*.md` 아키텍처 문서, 그리고 PDF 자료(108p/122p)를 직접 조사한 결과:

| 항목 | 이전 기획서 | 검증 결과 | 조치 |
|---|---|---|---|
| PQC(ML-KEM 1024), 2FA | 두 제품 모두 "기본 탑재"로 서술 | **사용자 확인: 두 제품 모두 실제 지원** (조사 단계에서 MightyConnect 쪽은 코드로 확인 못했으나, 실제로는 두 제품 공통 지원 기능) | 두 제품 모두 핵심 기술로 유지 |
| 성능 수치 (530Mbps 등) | "P2P 직결 최대 속도"로 대표 수치처럼 사용 | 측정 조건에 따라 편차가 큼 (회선/게이트웨이 CPU 성능 등) | **홈페이지에서 구체적인 속도/대역폭 수치는 넣지 않음.** "회선 속도에 근접하는 P2P 직결" 정도의 정성적 표현만 사용 |
| 레거시 VPN 비교표 (6~9 RTT 등) | 기술 비교 섹션에 포함 | 출처 확인 불가, 근거 없는 수치 | 삭제 |
| 7대 산업별 적용 사례 | 별도 섹션으로 상세 소개 | 조사한 PDF 목차·본문에서 확인 안 됨 (출처 불명) | 삭제 또는 "적용 가능 분야" 정도로 축소·완화 |
| agentgateway | 자체 기술처럼 서술 | README에 "Powered by agentgateway" 명시 — 오픈소스 프로젝트를 채택/커스터마이징한 것 | "오픈소스 agentgateway 기반"으로 정확히 표기 |
| eBPF `mask_bitmap` 최적화 | 상세 알고리즘 설명 포함 | 코드로 실제 확인됨 (사실) | 홈페이지에는 "커널 레벨 초저지연 필터링"으로 요약만, 상세는 생략 |

---

## 1. 제품 소개 콘텐츠 (검증된 핵심만)

### 1.1 MightySG AI Security Platform

**정의**: WireGuard VPN 터널, eBPF 기반 커널 레벨 ZTNA 정책 강제, agentgateway 기반 L7 AI 프록시를 결합하여 LLM/MCP/A2A 트래픽을 게이트웨이 한 지점에서 안전하게 통제하는 AI 보안 게이트웨이.

핵심 기술 4가지:
1. **WireGuard VPN + PQC(ML-KEM 1024) + 2FA** — 클라이언트가 게이트웨이를 경유해 접속. 양자내성 키 교환과 2단계 인증을 결합한 터널 보안, 키 기반 자동 프로비저닝.
2. **eBPF TC/XDP 커널 레벨 ZTNA** — `wg0`(L3) 및 물리 인터페이스(L2) 진입점에서 커널 훅으로 최소권한 정책을 강제, 유저스페이스 프록시 대비 저지연.
3. **agentgateway 기반 L7 AI 프록시** (오픈소스 agentgateway 채택) — OpenAI 호환 요청을 Gemini/Bedrock/Vertex/Ollama 등으로 변환, MCP 서버 다중화, A2A 에이전트 통신 중계, CEL 기반 정책/가드레일 적용.

부가 특징: VPN 없이 ZTNA 정책만으로 내부망을 통제하는 "No-VPN" 배포 모드도 지원(옵션).

### 1.2 MightyConnect P2P Security Platform

**정의**: WireGuard 커널 터널과 FD.io VPP 패킷 처리 엔진을 결합한 Mesh P2P ZTNA 플랫폼. 클라이언트 간 직접 연결(P2P)과 중앙 게이트웨이 경유 릴레이를 함께 지원.

핵심 기술 5가지:
1. **WireGuard + PQC(ML-KEM 1024) + 2FA** — MightySG와 동일하게 양자내성 암호와 2단계 인증을 결합한 터널 보안을 공통 기반으로 사용.
2. **eBPF TC 기반 ZTNA 정책 엔진** — MightySG와 동일한 커널 레벨 정책 강제 방식을 공유.
3. **P2P Direct Connect (NAT Hole Punching)** — 시그널링을 통해 두 클라이언트가 중앙 서버를 거치지 않고 직접 연결, 회선 속도에 근접하는 처리량.
4. **WERP 릴레이 (Symmetric NAT 폴백)** — 홀펀칭이 불가능한 환경에서 게이트웨이가 암호문을 그대로 중계(재암호화 없이, 내용을 볼 수 없음).
5. **FD.io VPP 허브 릴레이** (오픈소스 FD.io VPP 채택) — 대규모 트래픽을 벡터 패킷 처리로 고속 중계.

추가로: 통합 Access Rule(Client/Group/Resource 셀렉터)과 N:M VPN Group 모델로, "같은 그룹이면 자동 허용"이 아닌 항상 명시적 규칙을 요구하는 ZTNA 원칙을 지킴.

### 1.3 공통 메시지 (회사 소개)

- **"Never Trust, Always Verify"** — 경계(perimeter) 기반이 아닌, 모든 접속을 검증하는 제로 트러스트
- 두 제품 모두 WireGuard + eBPF 커널 레벨 ZTNA를 공유 기반 기술로 사용
- MightySG는 AI/LLM 트래픽에, MightyConnect는 범용 디바이스/네트워크 메시 연결에 특화

### 1.4 오픈소스 및 상표 고지 (Attribution)

두 제품 모두 아래 오픈소스 기술을 기반으로 하며, Footer 하단에 고지 문구를 표기한다:

- **WireGuard**: "WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.
- **agentgateway**: MightySG의 L7 AI 프록시는 오픈소스 프로젝트 [agentgateway](https://agentgateway.dev) 기반으로 구축됨.
- **FD.io VPP**: MightyConnect의 고속 패킷 처리 엔진은 오픈소스 프로젝트 [FD.io VPP](https://fd.io)를 채택함.

---

## 2. 기술 스택 결정

**Vue 3 + Vite + Tailwind CSS + vue-i18n** (Option A 유지)

- 순수 정적 SPA 산출물(`dist/`)이라 Apache2에 그대로 복사만 하면 서빙됨, Cloudflare Pages도 네이티브 지원
- 빌드가 빠르고 설정이 단순해 유지보수 부담이 적음
- Next.js(SSG export)도 가능하지만 이 프로젝트 규모(단일 페이지, 라우팅 불필요)에서는 이점이 없어 채택하지 않음

---

## 3. 사이트 구조 (섹션 축소)

이전 8개 섹션에서 근거 약한 섹션(UseCases, DeviceSupport, 상세 TechDeepDive 비교표)을 빼고 6개로 정리:

1. **Navbar** — 로고, 앵커 링크(제품1/제품2/문의), KO/EN 토글
2. **Hero** — 슬로건 + 짧은 설명 (과장된 수치 배지 없이, 문구 중심)
3. **회사 소개** — "Never Trust, Always Verify" 철학 3줄 내외
4. **MightySG 섹션** — 정의 + 핵심 기술 카드 4개
5. **MightyConnect 섹션** — 정의 + 핵심 기술 카드 5개
6. **Contact / Footer** — 회사명, 이메일, 자료실(백서 PDF 다운로드 2건), 오픈소스/상표 고지, 저작권

> 산업별 적용 사례, 디바이스 생태계, 기술 비교표는 이번 버전에서는 제외한다. 추후 사실관계가 명확한 자료가 확보되면 별도 섹션으로 추가 검토.

### 3.1 자료 다운로드 (백서)

Contact 섹션 또는 별도 "자료실" 블록에 두 제품 소개 PDF를 다운로드 링크로 제공한다:

- MightySG 백서: `Mighty_AISG_Security_Platform_v1.00.pdf`
- MightyConnect 백서: `Mighty_Connect_Security_Platform_v1.00.pdf`

빌드 시 정적 파일로 포함되도록 `public/docs/`에 PDF를 복사해두고, `<a href="/docs/파일명.pdf" download>` 형태로 링크한다 (Cloudflare Pages·Apache2 모두 정적 파일 서빙이라 별도 서버 설정 불필요).

---

## 4. 디자인 컨셉

- **밝은 톤(Light Theme)**: 화이트/라이트 그레이 바탕(`slate-50`/`white`), 포인트 컬러는 블루~시안 계열(신뢰감/보안 이미지) 1~2가지로 절제
- 글래스모피즘·네온 등 과한 이펙트 배제, 여백과 타이포그래피 중심의 담백한 엔터프라이즈 스타일
- 모바일/태블릿/데스크톱 반응형

---

## 5. 디렉토리 구조 (안)

```text
startup2/
├── docs/
│   ├── HOMEPAGE_PLAN.md                 # 본 기획서
│   ├── Mighty_AISG_Security_Platform_v1.00.pdf
│   └── Mighty_Connect_Security_Platform_v1.00.pdf
├── public/
│   ├── favicon.svg
│   └── docs/                            # 다운로드용 백서 PDF (빌드 시 정적 파일로 포함)
│       ├── Mighty_AISG_Security_Platform_v1.00.pdf
│       └── Mighty_Connect_Security_Platform_v1.00.pdf
├── src/
│   ├── assets/main.css
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── HeroSection.vue
│   │   ├── CompanySection.vue
│   │   ├── MightySGSection.vue
│   │   ├── MightyConnectSection.vue
│   │   ├── ContactSection.vue          # 문의처 + 백서 PDF 다운로드
│   │   └── Footer.vue                  # 저작권 + 오픈소스/상표 고지
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

---

## 6. 로컬 검증 & 배포

- 개발: `npm run dev` → `http://localhost:5173`
- 빌드: `npm run build` → `dist/`
- 로컬 Apache2 검증: `deploy-local.sh`가 `dist/*`를 `/var/www/html/mightylink2/`에 배포 (기존 `startup` 결과물이 `/var/www/html/mightylink/`에 이미 있으므로 충돌 방지를 위해 별도 하위 경로 사용) → `http://localhost/mightylink2/`
- Cloudflare Pages: Framework preset `Vite`, Build command `npm run build`, Output directory `dist`

---

## 7. 다음 단계

1. 본 기획서 검토/승인
2. Vue 3 + Vite 프로젝트 스캐폴딩 및 Tailwind/vue-i18n 설정
3. 컴포넌트 구현 (밝은 톤 디자인 적용)
4. `deploy-local.sh`로 로컬 Apache2 배포 후 브라우저 확인 (언어 전환, 반응형)
5. Cloudflare Pages 배포 가이드 정리 및 전달
