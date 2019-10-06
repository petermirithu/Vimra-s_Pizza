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

var counter= 1;
var counter2=1;


$(document).ready(function() {

  $("#add-topping").click(function() {
    var $newDivTop=$('<div class="form-group">'+
    '<label for="pizza-top">Pizza Topping:</label>'+
    '<select class="form-control" id="pizza-top">'+
                '<option value="0">Select a Topping:</option>'+
                '<option value="100">Onions @100/=</option>'+
                '<option value="200">Sausage @200/=</option>'+
                '<option value="250">Pineapple @250/=</option>'+
                '<option value="300">Green Pepper @300/=</option>'+
                '<option value="400">Black Olives @400/=</option>'+
                '<option value="420">Bacon @420/=</option>'+
                '<option value="450">Mushroom @450/=</option>'+
                '<option value="480">Extra Cheese @480/=</option>'+
                '<option value="500">Pepporoni @500/=</option>'+
                '<option value="600">Chicken @600/=</option>'+
                '<option value="650">Beef @650/=</option>'+
            '</select>'+
    '<span class="btn btn-outline-primary" id="remove-top">Remove Topping</span>'+
  '</div>');
  $newDivTop.attr("id", "newDivTop" + counter2++);
  $("#add-top").append($newDivTop);
  });

  $("#add-topping_x").click(function() {
    var $newDivTop=$('<div class="form-group">'+
    '<label for="pizza-top">Pizza Topping:</label>'+
    '<select class="form-control" id="pizza-top">'+
                '<option value="0">Select a Topping:</option>'+
                '<option value="100">Onions @100/=</option>'+
                '<option value="200">Sausage @200/=</option>'+
                '<option value="250">Pineapple @250/=</option>'+
                '<option value="300">Green Pepper @300/=</option>'+
                '<option value="400">Black Olives @400/=</option>'+
                '<option value="420">Bacon @420/=</option>'+
                '<option value="450">Mushroom @450/=</option>'+
                '<option value="480">Extra Cheese @480/=</option>'+
                '<option value="500">Pepporoni @500/=</option>'+
                '<option value="600">Chicken @600/=</option>'+
                '<option value="650">Beef @650/=</option>'+
            '</select>'+
    '<span class="btn btn-outline-primary" id="remove-top">Remove Topping</span>'+
  '</div>');
  $newDivTop.attr("id", "newDivTop_x" + counter2++);
  $("newDiv1").append($newDivTop);
  });

  $("#another-pizza").click(function() {
    var $newDiv = $('<div class="form-group">'+
    '<label for="pizza-size">Pizza Size:</label>'+
    '<select id="pizza-size" class="form-control">'+
            '<option value="0">Select a Size:</option>'+
            '<option value="100">Small @100/=</option>'+
            '<option value="200">Medium @200/=</option>'+
            '<option value="300">Large @300/=</option>'+
          '</select>'+
  '</div>'+
  '<div class="form-group">'+
    '<label for="pizza-crust">Pizza Crust:</label>'+
    '<select id="pizza-crust" class="form-control">'+
            '<option value="0">Select a Crust:</option>'+
            '<option value="400">Crispy crust @400/=</option>'+
            '<option value="420">Cracker Crust @420/=</option>'+
            '<option value="450">Pizza Bagels @450/=</option>'+
            '<option value="500">Detroit Crust @500/=</option>'+
            '<option value="550">Sicilian Style @550/=</option>'+
            '<option value="580">Flat-bread Crust @580/=</option>'+
            '<option value="650">Chicago Deep Dish @650/=</option>'+
            '<option value="700">Pretzel Crust @700/=</option>'+
            '<option value="720">Neopolitan Crust @720/=</option>'+
            '<option value="750">NYC-Style Crust @750/=</option>'+
            '<option value="780">Stuffed Dough @780/=</option>'+
            '<option value="800">Focaccia @800/=</option>'+
          '</select>'+
  '</div>'+
  '<div id="add-top">'+
    '<div class="form-group">'+
      '<label for="pizza-top">Pizza Topping:</label>'+
      '<select class="form-control" id="pizza-top">'+
                '<option value="0">Select a Topping:</option>'+
                '<option value="100">Onions @100/=</option>'+
                '<option value="200">Sausage @200/=</option>'+
                '<option value="250">Pineapple @250/=</option>'+
                '<option value="300">Green Pepper @300/=</option>'+
                '<option value="400">Black Olives @400/=</option>'+
                '<option value="420">Bacon @420/=</option>'+
                '<option value="450">Mushroom @450/=</option>'+
                '<option value="480">Extra Cheese @480/=</option>'+
                '<option value="500">Pepporoni @500/=</option>'+
                '<option value="600">Chicken @600/=</option>'+
                '<option value="650">Beef @650/=</option>'+
            '</select>'+
      '<span class="btn btn-outline-primary" id="add-topping_x">Add Topping</span>'+
      '<span class="btn btn-outline-primary" id="remove-top">Remove Topping</span>'+
    '</div>'+
  '</div>');
  $newDiv.attr("id", "newDiv" + counter++);
  $("#new-orders").append($newDiv);

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

    $("form#order-form").submit(function(event) {
      event.preventDefault();      
      var size =parseInt($('#pizza-size').find('option:selected').val());   
      var size1=parseInt($('#newDiv1 #pizza-size').find('option:selected').val());
      var size2=parseInt($('#newDiv2 #pizza-size').find('option:selected').val());
      var size3=parseInt($('#newDiv3 #pizza-size').find('option:selected').val());
      var size4=parseInt($('#newDiv4 #pizza-size').find('option:selected').val());
      var size5=parseInt($('#newDiv5 #pizza-size').find('option:selected').val());
      var size6=parseInt($('#newDiv6 #pizza-size').find('option:selected').val());
      var size7=parseInt($('#newDiv7 #pizza-size').find('option:selected').val());
      var size8=parseInt($('#newDiv8 #pizza-size').find('option:selected').val());
      var size9=parseInt($('#newDiv9 #pizza-size').find('option:selected').val());
      
      if (isNaN(size1)) size1=0;
      if (isNaN(size2)) size2=0;
      if (isNaN(size3)) size3=0;
      if (isNaN(size4)) size4=0;
      if (isNaN(size5)) size5=0;
      if (isNaN(size6)) size6=0;
      if (isNaN(size7)) size7=0;
      if (isNaN(size8)) size8=0;
      if (isNaN(size9)) size9=0;

      var totalSize = size+size1+size2+size3+size4+size5+size6+size7+size8+size9      
    });
  
    var crust =parseInt($('#pizza-crust').find('option:selected').val());   
      var crust1=parseInt($('#newDiv1 #pizza-crust').find('option:selected').val());
      var crust2=parseInt($('#newDiv2 #pizza-crust').find('option:selected').val());
      var crust3=parseInt($('#newDiv3 #pizza-crust').find('option:selected').val());
      var crust4=parseInt($('#newDiv4 #pizza-crust').find('option:selected').val());
      var crust5=parseInt($('#newDiv5 #pizza-crust').find('option:selected').val());
      var crust6=parseInt($('#newDiv6 #pizza-crust').find('option:selected').val());
      var crust7=parseInt($('#newDiv7 #pizza-crust').find('option:selected').val());
      var crust8=parseInt($('#newDiv8 #pizza-crust').find('option:selected').val());
      var crust9=parseInt($('#newDiv9 #pizza-crust').find('option:selected').val());
      
      if (isNaN(crust1)) crust1=0;
      if (isNaN(crust2)) crust2=0;
      if (isNaN(crust3)) crust3=0;
      if (isNaN(crust4)) crust4=0;
      if (isNaN(crust5)) crust5=0;
      if (isNaN(crust6)) crust6=0;
      if (isNaN(crust7)) crust7=0;
      if (isNaN(crust8)) crust8=0;
      if (isNaN(crust9)) crust9=0;

      var totalCrust = crust+crust1+crust2+crust3+crust4+crust5+crust6+crust7+crust8+crust9
    



    var placeNairobi = $("input#place-nairobi").val();
    var placeNakuru = $("input#place-nakuru").val();
    var placeMombasa = $("input#place-mombasa").val();
  
  });
  $("form#message").submit(function (event) {
    event.preventDefault();
    var commentName=$("input.name").val();
    var commentEmail=$("input.email").val();
    var commentText=$("textarea.message").val();
    // var car1=parseInt(document.getElementById("car1").value);
    // var car2=parseInt(document.getElementById("car2").value);
    // var car3=parseInt(document.getElementById("car3").value);


    var car1=parseInt($('#car1').find('option:selected').val());
    var car2=parseInt($('#car2').find('option:selected').val());
    var car4=parseInt($('#newDiv9 #pizza-size').find('option:selected').val());
    var car3=parseInt($('#car3').find('option:selected').val());
    
    if (isNaN(car4)) car4=0;

    var res=car1+car2+car4+car3
    alert(res);
    // alert(commentName+", Your message has been delivered."+"Thank you for visiting us");
  });
});
