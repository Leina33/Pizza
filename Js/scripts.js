function order(size,crust,price,topping){
    this.size = size;
    this.crust = crust;
    this.price = price;
    this.topping = topping;
};
var size = ["small","medium","large"];
var crust = ["cripsy", "thick","thin"];
var price = [""];
var topping = ["spinach", "mushroom","peppono"];

order.prototype.price = function(){
    //loop
}