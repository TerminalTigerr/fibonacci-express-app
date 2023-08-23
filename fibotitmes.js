const math = require('./math')
for (let num = 1; num < 8000; num++) {
  let now = new Date().toISOString()
  console.log(`${now} Fibonacci for ${num} is ${math.fibonacciLoop(num)}`)
}

(async () => {
  for(let i = 1; i < 8000; i++) {
    await new Promise((resolve, reject) => {
      math.fibonacciAsync(num, (err, fibo) => {
        if (err) reject(err)
        else {
          let now = new Date().toISOString()
          console.log(`${now} fibonacci for ${num} = ${fibo}`)
          resolve()
        }
      })
    })
  }
})().catch(err => console.error(err))