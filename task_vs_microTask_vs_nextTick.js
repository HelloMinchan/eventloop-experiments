/*
  task vs microTask vs nextTick
  ---
  아래의 코드는 어떻게 동작할까
  예상과 다르게
    1. script start
    2. script end
    3. I am in nextTickQueue
    4. I am in microTaskQueue
    5. I am in taskQueue
  순으로 동작한다.

  그 이유는 각각의 태스크가 다른 큐에 저장 되기 때문인데,
  큐 끼리도 우선순위가 존재하며, nextTickQueue > microTaskQueue > taskQueue 순이다.
  따라서, 위와 같은 결과가 나타나게 된다.
*/

console.log("script start");

setTimeout(() => console.log("I am in taskQueue"), 0);

Promise.resolve().then(() => console.log("I am in microTaskQueue"));

process.nextTick(() => console.log("I am in nextTickQueue"));

console.log("script end");
