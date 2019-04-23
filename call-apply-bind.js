Function.prototype.myCall = function(context, ...args) {
  let context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function(context, arr) {
  let context = context || window
  context.fn = this
  arr = arr || []
  const result = context.fn(...arr)
  delete context.fn
  return result 
}

Function.prototype.myBind = function() {
  let fn = this
  let argsParent = [...arguments]
  return function() {
      fn.call(...argsParent, ...arguments)
  }
}


// MDN polifill
Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") { 
      // 与 ECMAScript 5 最接近的内部 IsCallable 函数 
    throw new TypeError( "Function.prototype.bind - what is trying " + "to be bound is not callable");
  }
  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function () {},
    fBound = function () {
      return fToBind.apply((this instanceof fNOP && oThis ? this : oThis), aArgs.concat(Array.prototype.slice.call(arguments));
    };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};

