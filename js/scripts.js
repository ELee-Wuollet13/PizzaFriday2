// Business Logic for kitchen ---------
function kitchen() {
  this.order = [],
  this.currentId = 0
}

kitchen.prototype.addPizza = function(Pizza) {
  Pizza.id = this.assignId();
  this.order.push(Pizza);
      console.log(pizza);
}

kitchen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

kitchen.prototype.findPizza = function(id) {
  for (var i=0; i< this.order.length; i++) {
    if (this.order[i]) {
      if (this.order[i].id == id) {
        return this.order[i];
      }
    }
  };
  return false;
}

kitchen.prototype.deletePizza = function(id) {
  for (var i=0; i< this.order.length; i++) {
    if (this.order[i]) {
      if (this.order[i].id == id) {
        delete this.order[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for order ---------
function Pizza(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
      console.log(pizza);
}

Pizza.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic ---------
var kitchen = new kitchen();

function displayPizzaDetails(kitchenToDisplay) {
  var orderList = $("ul#order");
  var htmlForPizzaInfo = "";
  kitchenToDisplay.order.forEach(function(Pizza) {
    htmlForPizzaInfo += "<li id=" + Pizza.id + ">" + Pizza.firstName + " " + Pizza.lastName + "</li>";
        console.log(pizza);
  });
  orderList.html(htmlForPizzaInfo);
};

$(document).ready(function() {
  $("form#new-Pizza").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Pizza(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    kitchen.addPizza(newPizza);
    displayPizzaDetails(kitchen);
    console.log(pizza);
  })
})
