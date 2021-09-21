/*
  setTimeout vs setImmediate 1
  ---
  이벤트 루프 상 timers 페이즈인 setTimeout이 check phase인 setImmediate 보다 먼저 실행될 것 같지만
  결과는 어느 게 먼저 실행될지 장담하지 못함 (메인 모듈이 실행되고 타이머를 못 찾을 수도 있음)
*/

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});
