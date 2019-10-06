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
  $(function() {
    $('#order-form').change(function(){
      var str = "Name: " + $( "input#names" ).val() + "<br><br>Email: " + $( "input#email" ).val() +"<br><br>Telephone N.O: " + $( "input#telephone").val()+
      "<br><br>Sizes you chose: "+$( "select#pizza-size option:selected" ).text()+
      "<br><br>Crusts you chose: "+$( "select#pizza-crust option:selected" ).text()+
      "<br><br>Tops you chose: "+$( "select#pizza-top option:selected" ).text()+
      "<br><br>Place of Delivery: "+$( "select#place-nairobi option:selected" ).text();      
      $("#results").html(str);
    });
  });

  $("#add-topping").click(function() {
    var $newDivTop=$('<div class="form-group">'+
    '<label for="pizza-top">Pizza Topping:</label>'+
    '<select class="form-control" id="pizza-top">'+
                '<option value="0">Select a Topping:</option>'+
                '<option value="300">Green Pepper @300/=</option>'+                
                '<option value="420">Bacon @420/=</option>'+                
                '<option value="480">Extra Cheese @480/=</option>'+
                '<option value="500">Pepporoni @500/=</option>'+
                '<option value="600">Chicken @600/=</option>'+                
            '</select>'+      
  '</div>');
  $newDivTop.attr("id", "newDivTop" + counter2++);
  $(".add-top").append($newDivTop);
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
  '<div class="add-top">'+
    '<div class="form-group">'+
      '<label for="pizza-top">Pizza Topping:</label>'+
      '<select class="form-control" id="pizza-top">'+
                '<option value="0">Select a Topping:</option>'+
                '<option value="300">Green Pepper @300/=</option>'+                
                '<option value="420">Bacon @420/=</option>'+                
                '<option value="480">Extra Cheese @480/=</option>'+
                '<option value="500">Pepporoni @500/=</option>'+
                '<option value="600">Chicken @600/=</option>'+                
            '</select>'+                  
    '</div>'+    
  '</div>');
  $newDiv.attr("id", "newDiv" + counter++);
  $("#new-orders").append($newDiv);

  });

  $("#deliver-yes").click(function() {
    $("#deliver-to-place").append('<h3>Only select one county and place</h3>'+
    '<div class="nairobi">'+
    '<label for="place-nairobi">Nairobi</label>'+     
    '<select id="place-nairobi" class="form-control">'+
      '<option value="0">Choose the place of delivery:</option>'+
      '<option value="50">KFC Kimathi Street @50/=</option>'+
      '<option value="50">Serena Hotel @50/=</option>'+
      '<option value="100">Yaya Centre @100/=</option>'+
      '<option value="200">Subway Hotel @200/=</option>'+
      '<option value="200">Java Hurlingham Plaza @200/=</option>'+
      '<option value="200">Embakasi Mall @200/=</option>'+
      '<option value="200">Sarit Centre @200/=</option>'+
      '<option value="250">Lavington Mall @250/=</option>'+
    '</select>'+
    '</div>');
  });
  
    $("#deliver-no").click(function() {
      alert("Pick your Order at Our Company");
  });

  $("form#order-form").submit(function (event) {
    event.preventDefault();
    var inputpersonName = $("input#names").val();
    var inputpersonEmail = $("input#email").val();
    var inputpersonTelephone = $("input#telephone").val();
     
      var size =parseInt($('#pizza-size').find('option:selected').val());   
      var size1=parseInt($('#newDiv1 #pizza-size').find('option:selected').val());
      var size2=parseInt($('#newDiv2 #pizza-size').find('option:selected').val());
      var size3=parseInt($('#newDiv3 #pizza-size').find('option:selected').val());
      var size4=parseInt($('#newDiv4 #pizza-size').find('option:selected').val());
          
      
      if (isNaN(size1)) size1=0;
      if (isNaN(size2)) size2=0;
      if (isNaN(size3)) size3=0;
      if (isNaN(size4)) size4=0;      

      var totalSize = size+size1+size2+size3+size4
    
  
    var crust =parseInt($('#pizza-crust').find('option:selected').val());   
      var crust1=parseInt($('#newDiv1 #pizza-crust').find('option:selected').val());
      var crust2=parseInt($('#newDiv2 #pizza-crust').find('option:selected').val());
      var crust3=parseInt($('#newDiv3 #pizza-crust').find('option:selected').val());
      var crust4=parseInt($('#newDiv4 #pizza-crust').find('option:selected').val());
            
      if (isNaN(crust1)) crust1=0;
      if (isNaN(crust2)) crust2=0;
      if (isNaN(crust3)) crust3=0;
      if (isNaN(crust4)) crust4=0;

      var totalCrust = crust+crust1+crust2+crust3+crust4
    
//first order
      var topOrder1=parseInt($('#pizza-top').find('option:selected').val());
      var top1Order1=parseInt($('#newDivTop1 #pizza-top').find('option:selected').val());
      var top2Order1=parseInt($('#newDivTop2 #pizza-top').find('option:selected').val());
      var top3Order1=parseInt($('#newDivTop3 #pizza-top').find('option:selected').val());
      var top4Order1=parseInt($('#newDivTop4 #pizza-top').find('option:selected').val());
      if (isNaN(topOrder1)) topOrder1=0;
      if (isNaN(top1Order1)) top1Order1=0;
      if (isNaN(top2Order1)) top2Order1=0;
      if (isNaN(top3Order1)) top3Order1=0;
      if (isNaN(top4Order1)) top4Order1=0;

//second order
      var topOrder2=parseInt($('#newDiv1 #pizza-top').find('option:selected').val());
      var top1Order2=parseInt($('#newDiv1 #newDivTop1 #pizza-top').find('option:selected').val());
      var top2Order2=parseInt($('#newDiv1 #newDivTop2 #pizza-top').find('option:selected').val());
      var top3Order2=parseInt($('#newDiv1 #newDivTop3 #pizza-top').find('option:selected').val());
      var top4Order2=parseInt($('#newDiv1 #newDivTop4 #pizza-top').find('option:selected').val());
      if (isNaN(topOrder2)) topOrder2=0;
      if (isNaN(top1Order2)) top1Order2=0;
      if (isNaN(top2Order2)) top2Order2=0;
      if (isNaN(top3Order2)) top3Order2=0;
      if (isNaN(top4Order2)) top4Order2=0;

//third order      
      var topOrder3=parseInt($('#newDiv2 #pizza-top').find('option:selected').val());
      var top1Order3=parseInt($('#newDiv2 #newDivTop1 #pizza-top').find('option:selected').val());
      var top2Order3=parseInt($('#newDiv2 #newDivTop2 #pizza-top').find('option:selected').val());
      var top3Order3=parseInt($('#newDiv2 #newDivTop3 #pizza-top').find('option:selected').val());
      var top4Order3=parseInt($('#newDiv2 #newDivTop4 #pizza-top').find('option:selected').val());
      if (isNaN(topOrder3)) topOrder3=0;
      if (isNaN(top1Order3)) top1Order3=0;
      if (isNaN(top2Order3)) top2Order3=0;
      if (isNaN(top3Order3)) top3Order3=0;
      if (isNaN(top4Order3)) top4Order3=0;

//forth order    
      var topOrder4=parseInt($('#newDiv3 #pizza-top').find('option:selected').val());
      var top1Order4=parseInt($('#newDiv3 #newDivTop1 #pizza-top').find('option:selected').val());
      var top2Order4=parseInt($('#newDiv3 #newDivTop2 #pizza-top').find('option:selected').val());
      var top3Order4=parseInt($('#newDiv3 #newDivTop3 #pizza-top').find('option:selected').val());
      var top4Order4=parseInt($('#newDiv3 #newDivTop4 #pizza-top').find('option:selected').val());
      if (isNaN(topOrder4)) topOrder4=0;
      if (isNaN(top1Order4)) top1Order4=0;
      if (isNaN(top2Order4)) top2Order4=0;
      if (isNaN(top3Order4)) top3Order4=0;
      if (isNaN(top4Order4)) top4Order4=0;

//fifth order
      var topOrder5=parseInt($('#newDiv4 #pizza-top').find('option:selected').val());
      var top1Order5=parseInt($('#newDiv4 #newDivTop1 #pizza-top').find('option:selected').val());
      var top2Order5=parseInt($('#newDiv4 #newDivTop2 #pizza-top').find('option:selected').val());
      var top3Order5=parseInt($('#newDiv4 #newDivTop3 #pizza-top').find('option:selected').val());
      var top4Order5=parseInt($('#newDiv4 #newDivTop4 #pizza-top').find('option:selected').val());      

      if (isNaN(topOrder5)) topOrder5=0;
      if (isNaN(top1Order5)) top1Order5=0;
      if (isNaN(top2Order5)) top2Order5=0;
      if (isNaN(top3Order5)) top3Order5=0;
      if (isNaN(top4Order5)) top4Order5=0;
      

      var totalTopsOrder1= topOrder1+top1Order1+top2Order1+top3Order1+top4Order1
      var totalTopsOrder2=topOrder2+top1Order2+top2Order2+top3Order2+top4Order2
      var totalTopsOrder3=topOrder3+top1Order3+top2Order3+top3Order3+top4Order3
      var totalTopsOrder4=topOrder4+top1Order4+top2Order4+top3Order4+top4Order4
      var totalTopsOrder5=topOrder5+top1Order5+top2Order5+top3Order5+top4Order5

    var placeNairobi = parseInt($('#place-nairobi').find('option:selected').val());
    if (isNaN(placeNairobi)) placeNairobi=0;
      
    var grandTotal=totalSize+totalCrust+totalTopsOrder1+totalTopsOrder2+totalTopsOrder3+totalTopsOrder4+totalTopsOrder5+placeNairobi
    
    $(".grand-total").html(grandTotal);
    
    alert(inputpersonName+" : Your Order has been received.Thanks for shopping with us.")
    alert("Your total cost is "+ grandTotal+". See the Summary below.")
  });
  
  $("form#message").submit(function (event) {
    event.preventDefault();
    var commentName=$("input.name").val();
    var commentEmail=$("input.email").val();
    var commentText=$("textarea.message").val();
    alert(commentName+", Your message has been delivered."+"Thank you for visiting us");
  });
});
