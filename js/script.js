function Order(name, email, telephone) {
this.personName = name;
this.personEmail = email;
this.personTelephone = telephone;
this.pizzaOrdered = [];
this.deliver = [];
}

Order.prototype.customer = function() {
  return this.personName +" "+this.personEmail;
}

function PizzaOrdered(size, crust) {
this.size = size;
this.crust = crust;
this.topping = [];
}

function Topping(top) {
  this.top = top;
}

function Deliver(county, place) {
  this.county = county;
  this.place = place;
}

$(document).ready(function() {
  $("#another-pizza").click(function() {
    $("#new-orders").append('<div class="form-group">'+
                              '<label for="pizza-size">Pizza Size:</label>'+
                              '<input type="text" class="form-control" id="pizza-size">'+
                            '</div>'+
                            '<div class="form-group">'+
                              '<label for="pizza-crust">Pizza Crust:</label>'+
                              '<input type="text" class="form-control" id="pizza-crust">'+
                            '</div>'+
                            '<div class="add-top">'+
                              '<div class="form-group">'+
                                '<label for="pizza-top">Pizza Topping:</label>'+
                                '<input type="text" class="form-control" id="pizza-top">'+
                              '</div>'+
                            '</div>');
  });
  $("#add-topping").click(function() {
    $(".add-top").append('<div class="form-group">'+
                              '<label for="pizza-top">Pizza Topping:</label>'+
                              '<input type="text" class="form-control" id="pizza-top">'+
                            '</div>');
  });
  $("#deliver-yes").click(function() {
    $("#deliver-to-place").append('<label for="county">Select County;</label>'+
                                  '<input type="text" class="form-control" id="county">'+
                                  '<label for="place">Select the deliver point:</label>'+
                                  '<input type="text" class="form-control" id="place">');
  });

  $("form#order-form").submit(function (event) {
    event.preventDefault();
    var inputpersonName = $("input#names").val();
    var inputpersonEmail = $("input#email").val();
    var inputpersonTelephone = $("input#telephone").val();
   
    var newOrder = new Order(inputpersonName, inputpersonEmail, inputpersonTelephone)

    var inputSize = $("input#pizza-size").val();
    
  });
});
