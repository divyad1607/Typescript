let score: number | string | boolean = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

//let divya: User | Admin = {name: "divya", id: 334}

//divya = {username: "dd", id: 334}

//function getDbId(id: number | string){
    //maling some API calls
   // console.log(`DB id is: ${id}`);
    
//}
getDbId(3)
getDbId("4")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
    
}