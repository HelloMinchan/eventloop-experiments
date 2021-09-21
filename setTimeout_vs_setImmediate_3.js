/*
  setTimeout vs setImmediate 3
  ---
  foo()와 foo2() 함수 모두 폴링 딜레이가 0이므로 동일한 속도로 작동할 것처럼 보이지만,
  foo()의 Execution time은 23,
  foo2()의 Execution time은 1337이다.
  이러한 큰 차이가 나는 이유는 setTimeout의 경우 아무리 지연 시간이 0이더라도,
  타이머 스크립트를 등록하는 시간, 타이머를 실행할 시간이 되었는지 확인하는 시간등을
  매 이터레이션마다 반복하고 있기 때문이다.
  하지만, setImmediate의 경우 이런 CPU 바운드 작업이 없으므로 훨씬 빠르게 동작한다.
*/

let i = 0;
const start = new Date();

function foo() {
  i++;
  if (i < 1000) {
    setImmediate(foo);
  } else {
    const end = new Date();
    console.log("Execution time: ", end - start);
  }
}
foo();

let j = 0;
const start2 = new Date();

function foo2() {
  j++;
  if (j < 1000) {
    setTimeout(foo2, 0);
  } else {
    const end2 = new Date();
    console.log("Execution2 time: ", end2 - start2);
  }
}
foo2();
