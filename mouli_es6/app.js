
// Array

let array = [1, 2 ,3]

console.log(array)

let copy = [... array, 4,5,6]

console.log(copy)

let [first, sec] = copy

console.log(first)
console.log(sec)

let c = copy[2]
console.log(c)

// object

let obj = {
  message: "Hello world"
}

console.log(obj)

console.log(obj.message)

obj.type = "success"

console.log(obj)

let objCopy = {... obj, id : 5 }

console.log(objCopy)

const { type, id } = objCopy
// const type = objCopy.type;
// const id = objCopy.id;

console.log(type , id)

const b = "b"


function varTest(){
  var x = 1
  if (true){
    var x = 2
    console.log(x)
  }
  console.log(x)
}

function letTest(){
  let x = 1
  if (true){
    let x = 2
    console.log(x)
  }
  console.log(x)
}

letTest()

varTest()


function old() {
  console.log("hello world")
}

const method = () => {
  console.log("hello world")
} 

const method2 = () => console.log("hello world")

// const array = [1,2,3,4,5,6]

for (let i = 0; i < array.length; i++){
  console.log(array[i])
}

array.forEach(value => console.log(value))



const a = (param, param2) => (

  "hello"
)


console.log( a(8, 8) )



