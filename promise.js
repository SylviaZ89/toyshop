function MyPromise (fn) {
  const self = this

  this.callback = []
  this.isResolved = false
  
  function resolve (val) {
    if (self.isResolved) return
    self.isResolved = true

    if (self.callback.length > 0) {
      self.callback.forEach((item) => {
        let res
        let cb = item.cb
        let resolve = item.resolve
        
        cb && (res = cb(val))
        if (typeof res === 'object' && res.then) {
          res.then(resolve)
        } else {
          resolve && resolve(res)
        }
      })
    }
  }
  
  fn(resolve)
}

MyPromise.prototype.then = function (cb) {
  return new MyPromise((resolve) => {
    this.callback.push({
      cb: cb,
      resolve: resolve
    })
  })
}

const pro = new MyPromise((resolve) => {
  console.log('start promise')
  setTimeout(() => {
    resolve('1s later')
  }, 1000)
})

pro.then((value) => {
  console.log(value)
})
