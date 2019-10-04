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
    '<input list="p-size" type="p-size" id="pizza-size" class="form-control">'+
    '<datalist id="p-size">'+
      '<option value="Small">@100/=</option>'+
      '<option value="Medium">@200/=</option>'+
      '<option value="Large">@300/=</option>'+
    '</datalist>'+
  '</div>'+
  '<div class="form-group">'+
    '<label for="pizza-crust">Pizza Crust:</label>'+
    '<input type="p-crust" list="p-crust" class="form-control" id="pizza-crust">'+
    '<datalist id="p-crust">'+
      '<option value="Crispy crust">@400/=</option>'+
      '<option value="Cracker Crust">@420/=</option>'+
      '<option value="Pizza Bagels">@450/=</option>'+
      '<option value="Detroit Crust">@500/=</option>'+
      '<option value="Sicilian Style">@550/=</option>'+
      '<option value="Flat-bread Crust">@580/=</option>'+
      '<option value="Chicago Deep Dish">@650/=</option>'+
      '<option value="Pretzel Crust">@700/=</option>'+
      '<option value="Neopolitan Crust">@700/=</option>'+
      '<option value="NYC-Style crust">@750/=</option>'+
      '<option value="Stuffed Dough">@750/=</option>'+
      '<option value="Focaccia">@800/=</option>'+
    '</datalist>'+
  '</div>'+
  '<div class="add-top">'+
    '<div class="form-group">'+
      '<label for="pizza-top">Pizza Topping:</label>'+
      '<input type="p-top" list="p-top" class="form-control" id="pizza-top">'+
      '<datalist id="p-top">'+
          '<option value="Onions">@100/=</option>'+
          '<option value="Sausage">@200/=</option>'+
          '<option value="Pineapple">@250/=</option>'+
          '<option value="Green Pepper">@300/=</option>'+
          '<option value="Black Olives">@400/=</option>'+
          '<option value="Bacon">@420/=</option>'+
          '<option value="Mushroom">@450/=</option>'+
          '<option value="Extra Cheese">@480/=</option>'+
          '<option value="Pepporoni">@500/=</option>'+
          '<option value="Chicken">@600/=</option>'+
          '<option value="Beef">@650/=</option>'+
      '</datalist>'+
    '</div>'+
  '</div>');
  });
  $("#add-topping").click(function() {
    $(".add-top").append('<div class="form-group">'+
    '<label for="pizza-top">Pizza Topping:</label>'+
    '<input type="p-top" list="p-top" class="form-control" id="pizza-top">'+
    '<datalist id="p-top">'+
        '<option value="Onions">@100/=</option>'+
        '<option value="Sausage">@200/=</option>'+
        '<option value="Pineapple">@250/=</option>'+
        '<option value="Green Pepper">@300/=</option>'+
        '<option value="Black Olives">@400/=</option>'+
        '<option value="Bacon">@420/=</option>'+
        '<option value="Mushroom">@450/=</option>'+
        '<option value="Extra Cheese">@480/=</option>'+
        '<option value="Pepporoni">@500/=</option>'+
        '<option value="Chicken">@600/=</option>'+
        '<option value="Beef">@650/=</option>'+
    '</datalist>'+
  '</div>');
  });
  $("#deliver-yes").click(function() {
    $("#deliver-to-place").append('<h3>Only select one county and place</h3>'+
    '<div class="nairobi">'+
    '<label for="place-nairobi">Nairobi</label>'+
    '<input type="naiorbi" list="nairobi" id="place-nairobi" class="form-control">'+
    '<datalist id="nairobi">'+
      '<option value="KFC Kimathi Street">@50/=</option>'+
      '<option value="Serena Hotel">@50/=</option>'+
      '<option value="Yaya Centre">@100/=</option>'+
      '<option value="Subway Hotel">@200/=</option>'+
      '<option value="Java Hurlingham Plaza">@100/=</option>'+
      '<option value="Embakasi Mall">@200/=</option>'+
      '<option value="Sarit Centre">@200/=</option>'+
      '<option value="Lavington Mall">@250/=</option>'+
    '</datalist>'+
    '</div>'+
    '<div class="nakuru">'+
        '<label for="place-nakuru">Nakuru</label>'+
        '<input type="nakuru" list="nakuru" id="place-nakuru" class="form-control">'+
        '<datalist id="nakuru">'+
          '<option value="Biashara Centre">@50/=</option>'+
          '<option value="Sokini Plaza">@50/=</option>'+
          '<option value="WestSide mall">@50/=</option>'+
          '<option value="Serena Hotel">@100/=</option>'+
          '<option value="Section 58">@100/=</option>'+
        '</datalist>'+
    '</div>'+
    '<div class="mombasa">'+
        '<label for="place-mombasa">Mombasa</label>'+
        '<input type="mombasa" list="mombasa" id="place-mombasa" class="form-control">'+
        '<datalist id="mombasa">'+
          '<option value="Nyali Mall">@50/=</option>'+
          '<option value="Fort Jesus">@100/=</option>'+
          '<option value="Mei Place Apartment">@100/=</option>'+
          '<option value="Wild Water park">@100/=</option>'+
          '<option value="Sarova WhiteSands Beach Resort">@200/=</option>'+
          '<option value="Voyage Beach Hotel">@200/=</option>'+
        '</datalist>'+
    '</div>');
  });

  $("form#order-form").submit(function (event) {
    event.preventDefault();
    var inputpersonName = $("input#names").val();
    var inputpersonEmail = $("input#email").val();
    var inputpersonTelephone = $("input#telephone").val();
   
    var newOrder = new Order(inputpersonName, inputpersonEmail, inputpersonTelephone)

    
    var inputSize = $("input#pizza-size").val();
    if (inputSize == "Small") {
      var smallP = 100;
    }else if (inputSize=="Medium") {
      var mediumP = 200;
    }else if (inputSize=="Large") {
      var largep= 300
    }else{
      alert("Please pick size from the menu only")
    }
    var inputCrust = $("input#pizza-crust").val();
    var inputTop = $("input#pizza-top").val();

    var placeNairobi = $("input#place-nairobi").val();
    var placeNakuru = $("input#place-nakuru").val();
    var placeMombasa = $("input#place-mombasa").val();
    
  });
});
