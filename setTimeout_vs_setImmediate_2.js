/*
  setTimeout vs setImmediate 2
  ---
  I/O 작업의 내부에서 실행 시 setImmediate가 반드시 먼저 실행됨

  * 순서
    1. 파일 읽기 작업이 OS 커널상 비동기 API가 없어서 libUV 라이브러리를 통해 별도 스레드로 처리됨
    2. 작업이 완료되면 pending callbacks 페이즈의 큐에 콜백이 추가됨
    3. 이벤트 루프가 pending callbacks 페이즈일 때 콜백이 실행됨
    4. setTimeout이 timers 페이즈의 큐에 추가됨 (다음 이벤트 루프의 timers 페이즈에 실행될 예정)
    5. setImmediate의 콜백이 check 페이즈의 큐에 추가됨
    6. poll 페이즈에서 할 일이 없고, check 페이즈의 큐에 작업이 있으므로 바로 check 페이즈로 이동
    7. setImmediate 콜백 실행 ("setImmediate" 콘솔 출력)
    8. close callbacks 페이즈가 실행되고, timers 페이즈에 남은 작업이 있으므로 다음 이벤트 루프 실행
    9. timers 페이즈에서 타이머를 확인 지연 시간이 0이므로 setTimeout 콜백 실행 ("setTimeout 콘솔 출력")
*/

const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  setImmediate(() => {
    console.log("setImmediate");
  });
});
