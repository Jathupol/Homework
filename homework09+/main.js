function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function show(n) {
    console.log(n);
    await delay(1000);
  
    if (n <= 1000) {
      await show(n * 2);
    } else {
      console.log('end');
    }
  }
  
  (async () => {
    await show(1);
    await show(8);
    await show(30);
  })();
  