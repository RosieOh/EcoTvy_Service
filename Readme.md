# 🏫ECO_TVY
## 지역 내 쓰레기 객체 인식 분류 모델을 통한 스마트 시티 솔루션 구축
### 📚 Tech Stack
#### 💻 Development
<img src="https://skillicons.dev/icons?i=python,django,mysql,react,nextjs,pytorch,docker& perline="/>

#### ⌛ Developed Period
##### 2021.10.21 ~ 2021.12.16 - 공모전 진행기간
##### 2025.01.26 ~ 2025.02.02 - 리팩토링 기간

## 🧑‍🦲 팀원(가나다순)

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/RosieOh"><img src="https://github.com/SP0F0/.github/assets/62829894/89996fac-c626-44e8-ba10-3dcc17252079" width="100px;" alt=""/><br /><sub><b>오태훈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/icebear"><img src="https://github.com/SP0F0/.github/assets/62829894/fc0c73b5-3bdc-4edf-8c7f-b7b8eff9bf67" width="100px;" alt=""/><br /><sub><b>이승렬</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 진행 방식

**도커 파일 작성:**
```dockerfile
# 기본 이미지 선택
FROM some-base-image

# 추후 수정 요함!
# 작업 디렉토리 설정
WORKDIR /usr/src/app

# ARG 속성 추가 - 여러번 사용되는 문자열이나 숫자 등을 변수로 만들어주는 속성
ARG JAR_PATH=./build/libs

# 로컬 빌드 경로에서 JAR 파일을 이미지로 복사
COPY ./build/libs/kdt-0.0.1-SNAPSHOT.jar ./build/libs/kdt-0.0.1-SNAPSHOT.jar

# 애플리케이션 실행 명령어 설정
CMD ["java","-jar","./build/libs/kdt-0.0.1-SNAPSHOT.jar"]
```

### 도커 이미지 빌드
```
docker build -t springbootapp .
```

### 도커 컨테이너 생성 및 실행
```
docker run -d --name my_app_container springbootapp
```


# OCR 모델 사용 방법

<details>
 <summary><b>작성중</b></summary>

> 작성중
- 작성중

## 원인이 뭘까? 🧐
> 작성중

## 어떻게 해결하나요? 🧐
> 작성중
- 작성중
</details>

<br/>

<details>
 <summary><b>로그인 시 POST 요청에 따른 오류</b></summary>

> Security 내장 LoginPro 메서드로 활용시 오류 발생
- Security 내장 LoginPro 메서드로 활용시 Default 값으로 오류

## 원인이 뭘까? 🧐
> Spring Security 내에서 Http csrf.disabled 설정 해준 이후 로그인 작업 시 Parameter 요청이 어긋나는 현상 발생

## 어떻게 해결하나요? 🧐
> .loginPage("/member/login")
- Custom 로그인을 MemberController와 맞게 설정
> .loginProcessingUrl("/member/loginPro")
- loginProcessingUrl 경로를 member의 Security 내장 메서드인 LoginPro로 설정
> .usernameParameter("email")<br/>.passwordParameter("password")
- Parameter 값을 Entity 클래스에서 지정한 방식으로 따로 지정 해줌
</details>

## 💡 Commit Convention

|       Tags       |               Explanation               |
| :--------------: | :-------------------------------------: |
|       Feat       |            새로운 기능 추가             |
|       Fix        |                버그 수정                |
| !BREAKING CHANGE |         커다란 API 변경의 경우          |
|     !HOTFIX      |          급한 치명적 버그 수정          |
|      Build       |           빌드 관련 파일 수정           |
|      Design      |        CSS를 포함 UI 디자인 변경        |
|       Docs       |                문서 수정                |
|      Style       | 코드 포맷팅, 세미콜론 누락, 코드 변경 X |
|     Refactor     |              코드 리팩토링              |
|     Comment      |        필요한 주석 추가 및 변경         |
|       Test       |            테스트 코드 수정             |
|      Rename      |         파일, 폴더명 이름 수정          |
|      Remove      |             파일, 폴더 삭제             |
|      chore       |            빌드, 패키지 수정            |

