# cursor-demo

이메일 검증·추출 유틸과 로그인 검증을 제공하는 Node.js 데모 프로젝트입니다.

## 설치 및 실행

```bash
npm install
npm test
```

## 릴리스 노트

### v1.0.0

이메일 검증·추출 유틸과 로그인 검증을 포함한 첫 정식 릴리스입니다.

#### ✨ 기능

- **RFC 5322 이메일 검증** (`isValidEmail`) — 로컬 파트 64자, 전체 254자 길이 제한 적용
- **이메일 추출·필터링** — 멤버 배열에서 이메일 추출(`extractEmails`), 유효 이메일만 필터(`getValidEmails`), 중복 제거(`uniqueValidEmails`)
- **로그인 검증** (`login`) — 이메일 형식·비밀번호 입력 여부 검사 후 결과 반환
- **테스트** — Node.js 내장 테스트 러너로 이메일 모듈 단위 테스트 추가 (`npm test`)
- **문서** — `validator.js` 스펙 및 검증 규칙 문서 (`docs/validator.md`)

#### 🧹 기타

- ES Module(`"type": "module"`) 프로젝트 구성
- 코딩 스타일 규칙 추가 (한국어 JSDoc, ESM 전용)

## 모듈

| 파일 | 설명 |
|------|------|
| `src/validator.js` | RFC 5322 이메일 형식 검증 |
| `src/email.js` | 멤버 배열에서 이메일 추출·필터·중복 제거 |
| `src/auth.js` | 이메일·비밀번호 로그인 검증 |

자세한 검증 규칙은 [docs/validator.md](docs/validator.md)를 참고하세요.
