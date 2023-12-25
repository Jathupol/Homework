function delayLog(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, delay);
    });
  }
  
  delayLog(1, 1000)
    .then(() => delayLog(2, 1000))
    .then(() => delayLog(3, 1000))
    .then(() => delayLog(4, 1000));
  