링크 to 링크 기능을 통해서 찾기 어려웠던 정보들은 1개의 페이지로, one-page 구축

명칭 : LETS DAPA 
1. 방위사업 법령조회
2. 대한민국 국회 실시간 조회 서비스
3. DAPA 거래장터 : 직원들끼리 신뢰있는 중고거래를 원한다면? Let's Go
4. 정부과천청사 오늘 점심 메뉴는?(구내식당)
5. 정부과천청사 숨겨진 복지시설 어디까지 알고있니?

6. 오늘 구내식당 점심 메뉴는?
----------------------------------------------
1. 추후 VERCEL로 최종 배포예정
2. CSS , 프레임워크 : SHADCN UI, TAILWIND CSS, 앱 아이콘 연결을 통해서 카카오톡과 연동, 링크 바로가기 버튼
3. 홈 화면에 바로가기 버튼 설치 기능을 통해서 안드로이드, 아이폰까지 연동되도록 실행 
4. 지디웹을 참고해서 히어로 섹션 기능 구현

----------------------------------------------

LETS DAPA
참고 사이트 : https://taptap.inpix.com/Magazine, https://taptap.inpix.com/Archive, https://taptap.inpix.com/About

1. 방위사업 법령 조회 챗봇
- 다파로우 : 생성형AI를 통한 방위사업법 등 신속 조회하기(https://www.dapa.go.kr/dapa/page/selectPage.do?menuSeq=3087&pageSeq=3246)
- 링크 : https://chatgpt.com/g/g-69c3d57a773c819192629f1968b393a5-dapa-law

2. 대한민국 국회 정보 실시간 조회 챗봇
- 대한민국 국회 정보(의원 명단, 회의록 등) 실시간 조회 서비스 
- 링크 : https://chatgpt.com/g/g-69db6c0fc1a48191a09f8a99241b82de-daehanmingug-gughoe-silsigan

3. 다파 거래장터(카카오톡 바로가기)
- 내부망에서 답답했던 거래장터, 직원들끼리 신뢰있는 중고거래를 원했다면 들어오세요
- "이름 / 0동 / 지역" (예시 : 홍길동 / 4동 / 대전 또는 과천) 필수 작성
- 이왕이면 청사 직원들과 나눔, 당근하는 거 어떤가요?
- 카카오톡 링크 : 제공 예정
- 공지사항(주의사항)
  1) 실명(0동) / 지역(대전 또는 과천)
  2) 다른 사람의 시간도 내 시간만큼 소중하니, 약속은 반드시 지키기
  3) 물건 올리는 것은 반드시 사진과 함께 올리기(터무니 없는 판매는 삭제 조치)

4. 과천청사 오늘 점심 뭐먹지?(구내식당)
구내식당 : https://www.gbmo.go.kr/chungsa/dv/dietView/selectDietCalendarView.do?mi=1277
1) 링크 접속 하기
2) css element 선택하기 : '과천청사' '주간식단표(전체)'
- 과천청사 : select name 요소가 #gbd 중에서 #gbd > option:nth-child(4) 클릭
- 주간식단표(전체) : select name 요소가 #rc 중에서 #rc > option:nth-child(2) 클릭

5. 정부과천청사 복지시설, 아직도 몰랐어?
- 청사에도 숨겨진 복지시설이 있는데, 아직도 몰랐어?
링크 : https://gbmo.go.kr/chungsa/bl/cvntl/selectCvntlList.do?gbdId=CD004&mi=1144