interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

const divya: User = {dbId: 22, email:"divya@google.com",
userId:2211,
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "divya10", off: 10) => {
    return 10
}
}
divya.email = "divya@google.com"
