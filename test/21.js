setTimeout(() => {
  console.log(1)
}, 1000)
console.log(2);

let x = new Promise((resolve, reject) => {
  console.log(3)
  resolve();
})
x.then(() => {
  console.log(4);
})

//MDN

//2 3 4 1 

function test() {
  setTimeout(() => test(), 1);
}
test();
// 堆栈溢出
// 

// 不会报错，相应不了
// 

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ccc');
    }, 300);
  })
}

function get(value) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${value}get`);
    },300)
  })
}
login().then((value)=>{
  get(value).then((res)=>{
    console.log(res)
  })
})

async function(){
  let value = await login();
  let res=get(value);
  console.log(res);
}();


const STATUS={
  PENDING:'pending',
  FULFILLED:'fulfilled',
  REJECTED:'rejected'
}

class myPromise{
  constructor(executor){
    this._status=STATUS.PENDING;
    this._value=undefined;
    this.resolveQueue=[];
    this.rejectQueue=[];

    const resolve=value=>{
      const run = ()=>{
        if(this._status==='pending'){
          this._status='fulfilled';
          this._value=value;
          while(this.resolveQueue){
            const fn =this.resolveQueue.shift();
            fn(value);
          }
        }
      }
      setTimeout(run)
    }

    executor(resolve,reject);

  }
}