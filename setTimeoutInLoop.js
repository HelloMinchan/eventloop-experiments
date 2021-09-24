/*
  setTimeout in loop
  ---
  아래의 결과는 어떻게 나올까?
  0 1 2 3 4 5 6을 기대했겠지만,
  정답은 7 7 7 7 7 7 7이다.

  그 이유는 타이머의 임계값인 1초 내에 반복문이 모두 돌아버리기 때문에,
  콜백이 실행될 때의 i 값은 이미 7로 변해있기 때문이다.

  만약, 원하는 기대값대로 출력하고 싶다면
  var 키워드를 let(매 이터레이션마다 새 컨텍스트 생성)으로 바꾸거나,
  IIFE를 사용해 i값을 setTimeout함수의 인자로 넘겨 해결할 수 있다.
*/

for (var i = 0; i < 7; i++) {
  setTimeout(() => {
    process.stdout.write(String(i) + " ");
  }, 1000);
} // 츨력 결과 : 7 7 7 7 7 7 7

/************/
/* 해결 방법 */
/************/

// 1. var 키워드를 let으로 변경
for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    process.stdout.write(String(i) + " ");
  }, 1000);
} // 츨력 결과 : 0 1 2 3 4 5 6

// 2. IIFE 사용
for (let i = 0; i < 7; i++) {
  ((arg) =>
    setTimeout(() => {
      process.stdout.write(String(i) + " ");
    }, 1000))(i);
} // 츨력 결과 : 0 1 2 3 4 5 6
