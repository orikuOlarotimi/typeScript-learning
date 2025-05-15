
// variable declearations in typescript
const rotimi: string = "jejje"
console.log(rotimi)

const num: number = 122
console.log(num)

const bool: boolean = true
console.log(bool)


// function declearations

function  greet() {
    return "hello"
}
let callGreet: string = greet()
console.log(callGreet)


function hey(greet: string): string {
    return greet.toUpperCase()
}
hey("hello world ")


const login = (password: string, name: string, isAvail: boolean = false) => {
    console.log(`your password is ${password}, and your name is ${name} `)

}
login("rotimi", "912921290218")
export {}
