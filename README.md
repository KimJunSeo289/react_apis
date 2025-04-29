# React API 활용 프로젝트

이 프로젝트는 React를 사용하여 다양한 API를 활용하는 웹 애플리케이션입니다.

## 프로젝트 구조

```
src/
├── assets/         # 정적 파일 (CSS, 이미지 등)
├── camping/        # 캠핑장 정보 관련 컴포넌트
├── hooks/          # 커스텀 훅
├── layout/         # 레이아웃 관련 컴포넌트
├── router/         # 라우팅 설정
└── weather/        # 날씨 정보 관련 컴포넌트
```

## 주요 기능

### 1. 날씨 정보 (WeatherPage)

- 현재 위치 기반 날씨 정보 제공
- 주요 도시별 날씨 정보 조회
- 실시간 날씨 업데이트

### 2. 캠핑장 정보 (CampingPage)

- 전국 캠핑장 정보 조회
- 상세 정보 모달 제공
- 페이지네이션을 통한 데이터 관리
- 반응형 디자인 적용

## 기술 스택

### Frontend

- React 19
- React Router 7
- React Query 5
- Axios
- CSS Modules

### Development Tools

- Vite
- ESLint
- Prettier
- TypeScript

## 주요 특징

1. **반응형 디자인**

   - 화면 크기에 따른 레이아웃 자동 조정
   - 모바일 친화적인 UI/UX

2. **상태 관리**

   - React Query를 활용한 서버 상태 관리
   - 효율적인 데이터 캐싱 및 업데이트

3. **컴포넌트 구조**

   - 재사용 가능한 컴포넌트 설계
   - CSS Modules를 활용한 스타일 관리

4. **성능 최적화**
   - 코드 스플리팅
   - 지연 로딩
   - 효율적인 API 호출

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 환경 변수 설정

프로젝트를 실행하기 위해서는 다음 환경 변수를 설정해야 합니다:

- `VITE_WEATHER_API_KEY`: OpenWeatherMap API 키
- `VITE_CAMPING_API_KEY`: 캠핑장 정보 API 키

## 라이센스

MIT
