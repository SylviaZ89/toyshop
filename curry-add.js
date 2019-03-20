const add = function(){
    let tempArgs = []
    const addHelper = function(...args){
        // console.log('inner', args)
        if (args.length === 0) {
            return calculate
        } else {
            tempArgs.push(...args)
            return add
        }
    }
    const calculate = function(){
        let result = 0
        for(let item of tempArgs) {
            result += item
        }
        tempArgs = []
        return result
    }
    addHelper.valueOf = () => calculate()
    addHelper.toString = () => calculate() + ''
    
    return addHelper
}()
console.log(add(1,2,3))
console.log(add(1)(2)(3)(4))
console.log(add(1)(2,3)(4))
