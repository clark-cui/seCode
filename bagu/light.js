// js 实现红绿灯
//红灯3s,绿灯1s，黄灯2s

function red() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('red');
      resolve();
    }, 3000)
  })
}

function yellow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('yellow');
      resolve();
    }, 2000)
  })
}

function green() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('green');
      resolve();
    }, 1000)
  })
}

function light() {
  red().then(() => {
    yellow().then(() => {
      green().then(() => {
        light();
      })
    })
  })
}
light();