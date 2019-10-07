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



 //creating a constructor
 function order(size,crust,toppings){
     this.size = size;
     this.crust = crust;
     this.toppings = toppings;
     this.price = 0;
 }

 var size =["small", "medium", "large"];
 var crust = ["cripsy","stuffed","Gluten-free", "cheese-filled","deep"];
 var toppings= ["pepperoni","mushroom","onions","bacon","extra cheese"];

 //prototypes
 order.prototype.price = function(){
     if (this.size === [0]){
         this.price +=1000;
     }
     else if (this.size === size[1]){
         this.price = +1500;

     }
     else if (this.size === [1]){
         this.price += 10000
     }
     if (this.crust === crust[0]){
         this.price += 200;
     }
     else if(this.crust ===crust[1]){
         this.price +=150;
     }
     else if( this.crust === crust[2]){
         this.price +=100;
     }
     else if (this.crust === crust[3]){
         this.crust +=50;
     } 
     else if (this.crust === crust[4]){
         this.crust +=100;
     }
     else if (this.toppings ===toppings[0]){
         this.toppings += 100;
     }
     else if (this.toppings === toppings[1]){
         this.toppings += 100;
     }
     else if (this.toppings === toppings[2]){
         this.toppings +=100;
     }
     else if (this.toppings === toppings[3]){
        this.toppings +=100;
    }
    else if (this.toppings === toppings[4]){
        this.toppings +=100;
    }
    else(this.price === total)
    
 }
 $(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var size = $("#size").val;
        var crust =$("#crust").val;
        var toppings =$("toppings").val;
    
        alert(size + crust + topping);
    });
    });




 