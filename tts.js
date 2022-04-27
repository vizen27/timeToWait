"use strict"; 

const sleep = (tts) => {
  setInterval(function () {
    const now = new Date();
    const min = now.getMinutes();
    const sec = now.getMilliseconds();
    const format = `${min} min : ${sec} ms`;
    console.log(`Time to wait = ${format}`);
  }, tts);
}

sleep(3000);
