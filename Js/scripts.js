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
 order.prototype.price = function(){
     if (this.size === [0]){
         this.price +=1000;
     }
     else if (this.size === size[1]){
         this.price = +1500;

     }
     else (this.size === [2])
 }
 console.log(this.size[0])
 function submit(){
     var size = prompt("please enter the size of pizza");
     if (size != null){
         document.getElementById("#p").innerHTML
         "enter your pizza size in box above"
     }
 }