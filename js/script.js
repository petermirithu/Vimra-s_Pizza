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

$(document).ready(function() {
  $("#another-pizza").click(function() {
    var $newDiv = $('<div class="form-group">'+
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
  $newDiv.attr("id", "newDiv" + counter++);
  $("#new-orders").append($newDiv);

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
      var size0 = 100;
    }else if (inputSize=="Medium") {
      var size0 = 200;
    }else if (inputSize=="Large") {
      var size0= 300
    }else{
      var size0=0;
    }
    
    var inputSize =$("#newDiv1 input#pizza-size").val();
    if (inputSize == "Small") {
      var size1 = 100;
    }else if (inputSize=="Medium") {
      var size1 = 200;
    }else if (inputSize=="Large") {
      var size1= 300
    }else{
      var size1=0;
    }

    var inputSize =$("#newDiv2 input#pizza-size").val();
    if (inputSize == "Small") {
      var size2 = 100;
    }else if (inputSize=="Medium") {
      var size2 = 200;
    }else if (inputSize=="Large") {
      var size2= 300
    }else{
      var size2=0;
    }

    var inputSize =$("#newDiv3 input#pizza-size").val();
    if (inputSize == "Small") {
      var size3 = 100;
    }else if (inputSize=="Medium") {
      var size3 = 200;
    }else if (inputSize=="Large") {
      var size3= 300
    }else{
      var size3=0;
    }

    var inputSize =$("#newDiv4 input#pizza-size").val();
    if (inputSize == "Small") {
      var size4 = 100;
    }else if (inputSize=="Medium") {
      var size4 = 200;
    }else if (inputSize=="Large") {
      var size4= 300
    }else{
      var size4=0;
    }

    var inputCrust = $("input#pizza-crust").val();
    if (inputCrust=="Cripsy crust") {
      var crust0=400;
    }else if (inputCrust=="Craker Crust"){
      var crust0=420;
    }else if (inputCrust=="Pizza Bagels"){
      var crust0=450;
    }else if (inputCrust=="Detroit Crust"){
      var crust0=500;
    }else if (inputCrust=="Sicilian Style"){
      var crust0=550;
    }else if (inputCrust=="Flat-bread Crust"){
      var crust0=580;
    }else if (inputCrust=="Chicago Deep Dish"){
      var crust0=650;  
    }else if (inputCrust=="Pretzel Crust"){
      var crust0=700;
    }else if (inputCrust=="NYC-Style Crust"){
      var crust0=750;
    }else if (inputCrust=="Stuffed Dough"){
      var crust0=750;
    }else if (inputCrust=="Focaccia"){
      var crust0=800;
    }else{
      var crust0=0;
    }

    var inputCrust =$("#newDiv1 input#pizza-crust").val();
    if (inputCrust=="Cripsy crust") {
      var crust1=400;
    }else if (inputCrust=="Craker Crust"){
      var crust1=420;
    }else if (inputCrust=="Pizza Bagels"){
      var crust1=450;
    }else if (inputCrust=="Detroit Crust"){
      var crust1=500;
    }else if (inputCrust=="Sicilian Style"){
      var crust1=550;
    }else if (inputCrust=="Flat-bread Crust"){
      var crust1=580;
    }else if (inputCrust=="Chicago Deep Dish"){
      var crust1=650;  
    }else if (inputCrust=="Pretzel Crust"){
      var crust1=700;
    }else if (inputCrust=="NYC-Style Crust"){
      var crust1=750;
    }else if (inputCrust=="Stuffed Dough"){
      var crust1=750;
    }else if (inputCrust=="Focaccia"){
      var crust1=800;
    }else{
      var crust1=0;
    }

    var inputCrust =$("#newDiv2 input#pizza-crust").val();
    if (inputCrust=="Cripsy crust") {
      var crust2=400;
    }else if (inputCrust=="Craker Crust"){
      var crust2=420;
    }else if (inputCrust=="Pizza Bagels"){
      var crust2=450;
    }else if (inputCrust=="Detroit Crust"){
      var crust2=500;
    }else if (inputCrust=="Sicilian Style"){
      var crust2=550;
    }else if (inputCrust=="Flat-bread Crust"){
      var crust2=580;
    }else if (inputCrust=="Chicago Deep Dish"){
      var crust2=650;  
    }else if (inputCrust=="Pretzel Crust"){
      var crust2=700;
    }else if (inputCrust=="NYC-Style Crust"){
      var crust2=750;
    }else if (inputCrust=="Stuffed Dough"){
      var crust2=750;
    }else if (inputCrust=="Focaccia"){
      var crust2=800;
    }else{
      var crust2=0;
    }
    
    var inputCrust =$("#newDiv3 input#pizza-crust").val();
    if (inputCrust=="Cripsy crust") {
      var crust3=400;
    }else if (inputCrust=="Craker Crust"){
      var crust3=420;
    }else if (inputCrust=="Pizza Bagels"){
      var crust3=450;
    }else if (inputCrust=="Detroit Crust"){
      var crust3=500;
    }else if (inputCrust=="Sicilian Style"){
      var crust3=550;
    }else if (inputCrust=="Flat-bread Crust"){
      var crust3=580;
    }else if (inputCrust=="Chicago Deep Dish"){
      var crust3=650;  
    }else if (inputCrust=="Pretzel Crust"){
      var crust3=700;
    }else if (inputCrust=="NYC-Style Crust"){
      var crust3=750;
    }else if (inputCrust=="Stuffed Dough"){
      var crust3=750;
    }else if (inputCrust=="Focaccia"){
      var crust3=800;
    }else{
      var crust3=0;
    }

    var inputCrust =$("#newDiv4 input#pizza-crust").val();
    if (inputCrust=="Cripsy crust") {
      var crust4=400;
    }else if (inputCrust=="Craker Crust"){
      var crust4=420;
    }else if (inputCrust=="Pizza Bagels"){
      var crust4=450;
    }else if (inputCrust=="Detroit Crust"){
      var crust4=500;
    }else if (inputCrust=="Sicilian Style"){
      var crust4=550;
    }else if (inputCrust=="Flat-bread Crust"){
      var crust4=580;
    }else if (inputCrust=="Chicago Deep Dish"){
      var crust4=650;  
    }else if (inputCrust=="Pretzel Crust"){
      var crust4=700;
    }else if (inputCrust=="NYC-Style Crust"){
      var crust4=750;
    }else if (inputCrust=="Stuffed Dough"){
      var crust4=750;
    }else if (inputCrust=="Focaccia"){
      var crust4=800;
    }else{
      var crust4=0;
    }
    alert(crust0+crust1+crust2+crust3+crust4);

    var inputTop = $("input#pizza-top").val();

    var placeNairobi = $("input#place-nairobi").val();
    var placeNakuru = $("input#place-nakuru").val();
    var placeMombasa = $("input#place-mombasa").val();
  
  });
});
