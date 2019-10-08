//contacts
$(document).ready(function() {
    $("form").submit(function(event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      event.preventDefault();
      if (name && email != "") {
        alert("Thank you " + name + "thank you for reaching us");
      }
    });
  });
  

$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var size = $("#size").val;
    var crust = $("#crust").val;
    var toppings = [Bacon,peporoni,mushroom,];
    event.preventDefault();

    var newPizzaOrder = new Order("size", "crust", "toppings");
    newPizzaOrder.price();

    alert("You have ordered " + size + crust + toppings);
  });
});

//creating a constructor
function Order(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 0;
}

var size = ["small", "medium", "large"];
var crust = ["cripsy", "stuffed", "Gluten-free", "cheese-filled", "deep"];
var toppings = ["pepperoni", "mushroom", "onions", "bacon", "extra cheese"];

//prototypes
Order.prototype.price = function() {
  if (this.size === [0]) {
    this.price += 1000;
  } else if (this.size === size[1]) {
    this.price = +1500;
  } else if (this.size === [1]) {
    this.price += 10000;
  }
  if (this.crust === crust[0]) {
    this.price += 200;
  } else if (this.crust === crust[1]) {
    this.price += 150;
  } else if (this.crust === crust[2]) {
    this.price += 100;
  } else if (this.crust === crust[3]) {
    this.price += 50;
  } else if (this.crust === crust[4]) {
    this.price += 100;
  } else if (this.toppings === toppings[0]) {
    this.price += 100;
  } else if (this.toppings === toppings[1]) {
    this.price += 100;
  } else if (this.toppings === toppings[2]) {
    this.price += 100;
  } else if (this.toppings === toppings[3]) {
    this.price += 100;
  } else if (this.toppings === toppings[4]) {
    this.price += 100;
  }
  return this.price;
};
