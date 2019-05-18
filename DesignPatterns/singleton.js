/** 单例模式
 * 唯一实例，并可全局访问
 * window对象、线程池、全局缓存
 * 
 */
const createSingle = function(fn) {
  let single
  return function (){
    console.log(...arguments)
    return single || (single = fn.apply(this, arguments))
  }
}

const createModal = function(color) {
  let modal = document.createElement('div')
  modal.innerHTML = '模态框'
  modal.classname = 'modal'
  modal.style.color = color
  modal.style.display = 'none'
  document.body.appendChild(modal)
  return modal
}

const getUniqueModal = createSingle(createModal)

document.getElementById('showModal').addEventListener('click', function() {
  let modal = getUniqueModal(color)
  modal.style.display = 'block'
})