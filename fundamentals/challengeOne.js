function range(...props){
    var answer = []
    if(props[1] === undefined){
        n = 1
        while(n <= props[0]){
            answer.push(n)
            n++
        }
        return answer
    } else {
        if(props[0] < props[1]){
            if(props[2] === undefined){                
                num = props[0]
                while(num <= props[1]) {
                    answer.push(num)
                    num += 1
                }
                return answer
            } else {
                num = props[0]
                while(num <= props[1]) {
                    answer.push(num)
                    num += props[2]
                }

                return answer
            }
        } else {
            if(props[2] === undefined){  
                num = props[0]          
                while(num >= props[1]) {
                    answer.push(num)
                    num -= 1
                }
                return answer

            } else {
                num = props[0]
                while(num >= props[1]) {
                    answer.push(num)
                    num -= props[2]
                }

                return answer
            }
        }
    }
}

console.log(range(5))
console.log(range(5, 10))
console.log(range(5, 25, 5))
console.log(range(10, 5))
console.log(range(25, 10, 5))