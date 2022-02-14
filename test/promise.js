class myPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  
  constructor(func) {
      this.PromiseState = myPromise.PENDING;
      this.PromiseResult = null;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
      try {
          func(this.resolve.bind(this), this.reject.bind(this));
      } catch (error) {
          this.reject(error)
      }
  }
  
  resolve(result) {
      if (this.PromiseState === myPromise.PENDING) {
          setTimeout(() => {
              this.PromiseState = myPromise.FULFILLED;
              this.PromiseResult = result;
              this.onFulfilledCallbacks.forEach(callback => {
                  callback(result)
              })
          });
      }
  }
  
  reject(reason) {
      if (this.PromiseState === myPromise.PENDING) {
          setTimeout(() => {
              this.PromiseState = myPromise.REJECTED;
              this.PromiseResult = reason;
              this.onRejectedCallbacks.forEach(callback => {
                  callback(reason)
              })
          });
      }
  }
  
  then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      onRejected = typeof onRejected === 'function' ? onRejected : reason => {
          throw reason;
      };

      let promise2 = new myPromise((resolve, reject) => {
          if (this.PromiseState === myPromise.FULFILLED) {
              setTimeout(() => {
                  try {
                      let x = onFulfilled(this.PromiseResult);
                      resolvePromise(promise2, x, resolve, reject);
                  } catch (e) {
                      reject(e);
                  }
              });
          } else if (this.PromiseState === myPromise.REJECTED) {
              setTimeout(() => {
                  try {
                      let x = onRejected(this.PromiseResult);
                      resolvePromise(promise2, x, resolve, reject);
                  } catch (e) {
                      reject(e)
                  }
              });
          } else if (this.PromiseState === myPromise.PENDING) {
              this.onFulfilledCallbacks.push(() => {
                  setTimeout(() => {
                      try {
                          let x = onFulfilled(this.PromiseResult);
                          resolvePromise(promise2, x, resolve, reject)
                      } catch (e) {
                          reject(e);
                      }
                  });
              });
              this.onRejectedCallbacks.push(() => {
                  setTimeout(() => {
                      try {
                          let x = onRejected(this.PromiseResult);
                          resolvePromise(promise2, x, resolve, reject);
                      } catch (e) {
                          reject(e);
                      }
                  });
              });
          }
      })

      return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
      return reject(new TypeError('Chaining cycle detected for promise'));
  }

  if (x instanceof myPromise) {
      if (x.PromiseState === myPromise.PENDING) {
          x.then(y => {
              resolvePromise(promise2, y, resolve, reject)
          }, reject);
      } else if (x.PromiseState === myPromise.FULFILLED) {
          resolve(x.PromiseResult);
      } else if (x.PromiseState === myPromise.REJECTED) {
          reject(x.PromiseResult);
      }
  } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
      try {
          var then = x.then;
      } catch (e) {
          return reject(e);
      }

      if (typeof then === 'function') {
          let called = false;
          try {
              then.call(
                  x,
                  y => {
                      if (called) return;
                      called = true;
                      resolvePromise(promise2, y, resolve, reject);
                  },
                  r => {
                      if (called) return;
                      called = true;
                      reject(r);
                  }
              )
          } catch (e) {
              if (called) return;
              called = true;

              reject(e);
          }
      } else {
          resolve(x);
      }
  } else {
      return resolve(x);
  }
}
