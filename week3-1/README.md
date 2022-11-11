# 원티드 프리온보딩 코스 3-1 - 과제
질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

## 프로젝트의 실행 방법
```bash
# disease-name-search(폴더)
npm install
npm start

# json-server(폴더)
npm install
npm start
```

## packages 설정
axios: "1.1.3",\
dayjs: "1.11.6",\
react: "18.2.0",\
styled-components: "5.3.6",\
typescript: "4.8.4"

## 설명 
캐싱을 어떻게 기술했는지에 대한 내용 입니다.\
```new Map```을 사용해서 기본 5분 유효(만료)시간을 설명하고 서버로부터 받은 데이터 두 가지를 메모리에 저장해서\
cacheNode가 있다면 저장 되어있던 데이터를 불러오도록 했습니다.

https://github.com/younhoso/wanted-pre-onboarding-individual/blob/7b6f61a1531ffea64be93cbf57bc0b3add21bd0c/week3-1/disease-name-search/src/service/sickcdService.ts#L16-L65
