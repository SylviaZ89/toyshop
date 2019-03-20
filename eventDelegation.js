function eventDelegation (element, targetSelector, eventType, func) {
    function action (e) {
      let el = e.target
      let bindEl = e.currentTarget
      while (!el.matches(targetSelector)) {
        if (el === bindEl){
          el = null
          break
        }  
        el = el.parentNode
      }
      el && func.call(el, e)
      
    }
    element.addEventListener(eventType, action)
  
}
eventDelegation(list,'li','click', (e)=>{console.log(e)})