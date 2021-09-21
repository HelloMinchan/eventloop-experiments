/*
    timer phase
    ---
    setTimeout 임계값보다 지연되어 실행 되는 경우
    while 루프에 의해 10ms 지연되어 약 105ms에 실행된다.
*/

const fs = require("fs");

function someAsyncOperation(callback) {
  // 이 작업이 완료되는데 95ms가 걸린다고 가정함.
  fs.readFile("/path/to/file", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// 완료하는데 95ms가 걸리는 someAsyncOperation를 실행함.
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log("startCallback : ", startCallback);

  // 10ms가 걸리는 작업 실행함.
  while (Date.now() - startCallback < 10) {
    const now = Date.now();

    console.log(
      "loop condition :",
      now - startCallback < 10,
      "Date.now() :",
      now,
      "startCallback :",
      startCallback
    );
  }
});
