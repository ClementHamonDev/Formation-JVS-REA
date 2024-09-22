let array = [1,2,3,4]

let arrayCopy = [10, ...array , 10]

let [a,b,c] = arrayCopy


/********************** */


let obj = {
    message : "value"
}

let objCopy = {...obj, newKey : "new value"}

obj.key = "new value"

/************************* */

function testVar() {
    var x = 1
    if (true){
        var x = 2
        console.log(x)
    }
    console.log(x)
}

function testLet() {

    let x = 1
    if (true){
        let x = 2
        console.log(x)
    }
    console.log(x)
}

const maConst = 3

/** maConst = 9 */

const mafunction = () => {
    console.log("Hello world")
}

let arrayTest = [10,20,30,40]

/**
for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
}

arrayTest.map( (value, index) => { console.log(value, index)} )
 */

const func1 = (a, b) =>  a > b ? a : b

const func2 = (a,b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

/***************************** */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))


const syncroneFunction = () => {
    console.log("start")
    sleep(1000)
    .then( () => {
        console.log("Finish")
    })
    console.log("end")
}


const asyncFunction = async() => {
    console.log("start")
    console.log( await sleep(3000))
    console.log("end")
}


const asyncFunction2 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const rand = Math.random() 

            if ( rand > 0.5){
                resolve(rand)
            } else {
                reject(new Error("Une erreur s'est produite !"))
            }
        }, 1000)
    })
}


const execAsyncFunction = () => {
    asyncFunction2()
    .then( (value) => console.log("Resolve : " + value))
    .catch( (err) => console.log(err))
}

const execAsyncFunction2 = async () => {
    try {
        let result = await asyncFunction2()
        console.log("Resolve : " + result)    
    } catch (err) {
        console.log(err)
    }

}


/*execAsyncFunction2()*/

/******************** */


const userobj = {
    user : {
        nom: "Toto"
    }
}

console.log(userobj.user.nom)
console.log(userobj.user?.prenom?.toto)

let string = "a" + "b" // "ab"

let strA = "a"
let strB = "b"

let string2 = `${strA} - ${strB}` // "a - b"
