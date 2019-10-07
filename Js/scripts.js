//contacts 
$(document).ready(function() {
    $("form").submit(function(event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      event.preventDefault();
      if (name && email != "") {
        alert("Thank you "  + name +  " for buying with us");
      }
    });
  });
  //pizza 

$(document).ready(function(){
$("form").submit(function(event){
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


 