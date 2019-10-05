// let allLetters
// (funtion ($){
//     allLetters = (letters) = > {
//         $(#size).html(allLetters)
//     }
// })(jQuery)

$(document).ready(function(){
$("button#submit").click(function(event){
    event.preventDefault();
    var size = $("#size").val;
    var crust =$("#crust").val;
    var toppings =$("toppings").val;

    alert(size + crust + topping);
});
});
 //creating a constructor
 function order(size,crust,toppings){
     this.size = size;
     this.crust = crust;
     this.toppings = toppings;
     this.price = 0;
 }

 var size =["small", "medium", "large"];
 var crust = ["cripsy","stuffed","Gluten-free", "cheese-filled","deep"];
 var toppings= ["pepperoni","mushroom","onions","bacon","extra cheese", "Green peppes", "spinach"];

 //prototypes
 order.prototype.print = function (){
     console.log(Which + size do you want)
 }
