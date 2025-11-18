function addTwo(num: number): number{
    return num + 2
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser(name: string, email:string, isPaid: boolean){}

let  loginUser = (name: string, email: string, isPaid: boolean = false) => {
    if(isPaid === void 0){isPaid = false;}
    
};

let myValue = addTwo(5)
getUpper("divya")

signUpUser("divya", "divyad.com", true)
loginUser("divya", "divya.com")

function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
    return "200 ok"
}

const getHello = (s: string): string => {
    return ""
}

const heros = [1, 2 ,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string){
    console.log(errmsg);
}

function handleError(errmsg: string){
    console.log(errmsg);
}
export {}