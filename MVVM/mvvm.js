// mvvm -> 双向数据绑定 -> 发布订阅模式
function Mvvm(options) {
  this.$options = options;
  let data = this._data = this.$options.data;
  observe(data);
  Object.keys(data).map(key => {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this._data[key];
      },
      set(newVal) {
        return this._data[key] = newVal;
      }
    })
  })
}
// 1、数据劫持（指遍历对象，给每个属性加上set和get方法）
// 实现Observe
function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).map(key => {
    defineObject(data, key, data[key])
  })
}
function defineObject(data, key, val) {
  // 递归监听data属性
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不可再define
    get: function () {
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      console.log('监听到变化了！')
      val = newVal;
      observe(newVal)
    }
  })
}
// 2、数据代理
// 3、数据编译
