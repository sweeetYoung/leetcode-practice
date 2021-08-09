// 防抖
function debounce (fn, wait = 500) {
  let timer = null;
  let context = this;
  let args = arguments;
  return function () {
    timer && clearTimeout();
    timer = setTimeout(() => {
      fn.call(context, args)
    }, wait)
  }
}

// 节流
function throttle(fn, wait= 500) {
  let preTime = null;
  let nowTime = new Date().getTime();
  return function () {
    if (nowTime - preTime >= wait) {
      preTime = new Date().getTime();
      fn.call(this, ...arguments)
    }
  }
}
function throttle_timer(fn, wait= 500) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        timer = null
        fn.apply(this, [...arguments])
      }, wait)
    }
  }
}