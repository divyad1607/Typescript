var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree("Divya")
function identityFour(val) {
    return val;
}
//identityFour<Bottle>({})
function getSearchProducts(products) {
    // do some database operation
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
