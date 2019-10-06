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

    var inputTop = $("input#pizza-top").val();
    if (inputTop=="Onions"){
      var top0=100;
    }else if (inputTop=="Sausage"){
      var top0=200;
    }else if(inputTop=="Pineapple"){
      var top0=250;
    }else if(inputTop=="Green Pepper"){
      var top0=300;
    }else if(inputTop=="Black Olives"){
      var top0=400;
    }else if(inputTop=="Bacon"){
      var top0=420;
    }else if(inputTop=="Mushroom"){
      var top0=450;
    }else if(inputTop=="Extra Cheese"){
      var top0=480;
    }else if(inputTop=="Pepporoni"){
      var top0=500;
    }else if(inputTop=="Chicken"){
      var top0=600;
    }else if(inputTop=="Beef"){
      var top0=650;
    }
    
    var inputTop = $("#newDiv1 input#pizza-top").val();
    if (inputTop=="Onions"){
      var top1=100;
    }else if (inputTop=="Sausage"){
      var top1=200;
    }else if(inputTop=="Pineapple"){
      var top1=250;
    }else if(inputTop=="Green Pepper"){
      var top1=300;
    }else if(inputTop=="Black Olives"){
      var top1=400;
    }else if(inputTop=="Bacon"){
      var top1=420;
    }else if(inputTop=="Mushroom"){
      var top1=450;
    }else if(inputTop=="Extra Cheese"){
      var top1=480;
    }else if(inputTop=="Pepporoni"){
      var top1=500;
    }else if(inputTop=="Chicken"){
      var top1=600;
    }else if(inputTop=="Beef"){
      var top1=650;
    }

    var inputTop = $("#newDiv2 input#pizza-top").val();
    if (inputTop=="Onions"){
      var top2=100;
    }else if (inputTop=="Sausage"){
      var top2=200;
    }else if(inputTop=="Pineapple"){
      var top2=250;
    }else if(inputTop=="Green Pepper"){
      var top2=300;
    }else if(inputTop=="Black Olives"){
      var top2=400;
    }else if(inputTop=="Bacon"){
      var top2=420;
    }else if(inputTop=="Mushroom"){
      var top2=450;
    }else if(inputTop=="Extra Cheese"){
      var top2=480;
    }else if(inputTop=="Pepporoni"){
      var top2=500;
    }else if(inputTop=="Chicken"){
      var top2=600;
    }else if(inputTop=="Beef"){
      var top2=650;
    }

    var inputTop = $("#newDiv3 input#pizza-top").val();
    if (inputTop=="Onions"){
      var top3=100;
    }else if (inputTop=="Sausage"){
      var top3=200;
    }else if(inputTop=="Pineapple"){
      var top3=250;
    }else if(inputTop=="Green Pepper"){
      var top3=300;
    }else if(inputTop=="Black Olives"){
      var top3=400;
    }else if(inputTop=="Bacon"){
      var top3=420;
    }else if(inputTop=="Mushroom"){
      var top3=450;
    }else if(inputTop=="Extra Cheese"){
      var top3=480;
    }else if(inputTop=="Pepporoni"){
      var top3=500;
    }else if(inputTop=="Chicken"){
      var top3=600;
    }else if(inputTop=="Beef"){
      var top3=650;
    }

    var inputTop = $("#newDiv4 input#pizza-top").val();
    if (inputTop=="Onions"){
      var top4=100;
    }else if (inputTop=="Sausage"){
      var top4=200;
    }else if(inputTop=="Pineapple"){
      var top4=250;
    }else if(inputTop=="Green Pepper"){
      var top4=300;
    }else if(inputTop=="Black Olives"){
      var top4=400;
    }else if(inputTop=="Bacon"){
      var top4=420;
    }else if(inputTop=="Mushroom"){
      var top4=450;
    }else if(inputTop=="Extra Cheese"){
      var top4=480;
    }else if(inputTop=="Pepporoni"){
      var top4=500;
    }else if(inputTop=="Chicken"){
      var top4=600;
    }else if(inputTop=="Beef"){
      var top4=650;
    }
    
    var inputTop = $("#newDivTop1 input#pizza-top").val();
    if (inputTop=="Onions"){
      var ptop1=100;
    }else if (inputTop=="Sausage"){
      var ptop1=200;
    }else if(inputTop=="Pineapple"){
      var ptop1=250;
    }else if(inputTop=="Green Pepper"){
      var ptop1=300;
    }else if(inputTop=="Black Olives"){
      var ptop1=400;
    }else if(inputTop=="Bacon"){
      var ptop1=420;
    }else if(inputTop=="Mushroom"){
      var ptop1=450;
    }else if(inputTop=="Extra Cheese"){
      var ptop1=480;
    }else if(inputTop=="Pepporoni"){
      var ptop1=500;
    }else if(inputTop=="Chicken"){
      var ptop1=600;
    }else if(inputTop=="Beef"){
      var ptop1=650;
    }
    
    var inputTop = $("#newDivTop2 input#pizza-top").val();
    if (inputTop=="Onions"){
      var ptop2=100;
    }else if (inputTop=="Sausage"){
      var ptop2=200;
    }else if(inputTop=="Pineapple"){
      var ptop2=250;
    }else if(inputTop=="Green Pepper"){
      var ptop2=300;
    }else if(inputTop=="Black Olives"){
      var ptop2=400;
    }else if(inputTop=="Bacon"){
      var ptop2=420;
    }else if(inputTop=="Mushroom"){
      var ptop2=450;
    }else if(inputTop=="Extra Cheese"){
      var ptop2=480;
    }else if(inputTop=="Pepporoni"){
      var ptop2=500;
    }else if(inputTop=="Chicken"){
      var ptop2=600;
    }else if(inputTop=="Beef"){
      var ptop2=650;
    }

    var inputTop = $("#newDivTop3 input#pizza-top").val();
    if (inputTop=="Onions"){
      var ptop3=100;
    }else if (inputTop=="Sausage"){
      var ptop3=200;
    }else if(inputTop=="Pineapple"){
      var ptop3=250;
    }else if(inputTop=="Green Pepper"){
      var ptop3=300;
    }else if(inputTop=="Black Olives"){
      var ptop3=400;
    }else if(inputTop=="Bacon"){
      var ptop3=420;
    }else if(inputTop=="Mushroom"){
      var ptop3=450;
    }else if(inputTop=="Extra Cheese"){
      var ptop3=480;
    }else if(inputTop=="Pepporoni"){
      var ptop3=500;
    }else if(inputTop=="Chicken"){
      var ptop3=600;
    }else if(inputTop=="Beef"){
      var ptop3=650;
    }

    var inputTop = $("#newDivTop4 input#pizza-top").val();
    if (inputTop=="Onions"){
      var ptop4=100;
    }else if (inputTop=="Sausage"){
      var ptop4=200;
    }else if(inputTop=="Pineapple"){
      var ptop4=250;
    }else if(inputTop=="Green Pepper"){
      var ptop4=300;
    }else if(inputTop=="Black Olives"){
      var ptop4=400;
    }else if(inputTop=="Bacon"){
      var ptop4=420;
    }else if(inputTop=="Mushroom"){
      var ptop4=450;
    }else if(inputTop=="Extra Cheese"){
      var ptop4=480;
    }else if(inputTop=="Pepporoni"){
      var ptop4=500;
    }else if(inputTop=="Chicken"){
      var ptop4=600;
    }else if(inputTop=="Beef"){
      var ptop4=650;
    }

    var inputTop = $("#newDivTop5 input#pizza-top").val();
    if (inputTop=="Onions"){
      var ptop5=100;
    }else if (inputTop=="Sausage"){
      var ptop5=200;
    }else if(inputTop=="Pineapple"){
      var ptop5=250;
    }else if(inputTop=="Green Pepper"){
      var ptop5=300;
    }else if(inputTop=="Black Olives"){
      var ptop5=400;
    }else if(inputTop=="Bacon"){
      var ptop5=420;
    }else if(inputTop=="Mushroom"){
      var ptop5=450;
    }else if(inputTop=="Extra Cheese"){
      var ptop5=480;
    }else if(inputTop=="Pepporoni"){
      var ptop5=500;
    }else if(inputTop=="Chicken"){
      var ptop5=600;
    }else if(inputTop=="Beef"){
      var ptop5=650;
    }

    $("form#order-form").submit(function(event) {
      event.preventDefault();
      var add=function(size0,size1,size2,size3,size4,crust0,crust1,crust2,crust3,crust4,top0,top1,top2,top3,top4,ptop1,ptop2,ptop3,ptop4,ptop5) {
        return size0+size1+size2+size3+size4+crust0+crust1+crust2+crust3+crust4+top0+top1+top2+top3+top4+ptop1+ptop2+ptop3+ptop4+ptop5
      }
      
    var result1 = add(size0,size1,size2,size3,size4,crust0,crust1,crust2,crust3,crust4,top0,top1,top2,top3,top4,ptop1,ptop2,ptop3,ptop4,ptop5);
    alert(result1);
    });
  
    // (size0+size1+size2+size3+size4+crust0+crust1+crust2+crust3+crust4+top0+top1+top2+top3+top4+ptop1+ptop2+ptop3+ptop4+ptop5);




    var placeNairobi = $("input#place-nairobi").val();
    var placeNakuru = $("input#place-nakuru").val();
    var placeMombasa = $("input#place-mombasa").val();
  
  });
  $("form#message").submit(function (event) {
    event.preventDefault();
    var commentName=$("input.name").val();
    var commentEmail=$("input.email").val();
    var commentText=$("textarea.message").val();
    var car1=parseInt(document.getElementById("car1").value);
    var car2=parseInt(document.getElementById("car2").value);
    var car3=parseInt(document.getElementById("car3").value);
    
    var res= car1+car2+car3
    alert(res)
    // alert(commentName+", Your message has been delivered."+"Thank you for visiting us");
  });
});
