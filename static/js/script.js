$(document).ready(function() {
    //BUSINESS LOGIC
    function placeOrder(size, crust, toppings) {
        this.pzSize = size;
        this.crSize = crust;
        this.tpSize= toppings;
    }
    placeOrder.prototype.summary = function() {
        return "pizzasize: " + this.pzSize + ", crust:" + this.crSize + ", toppings:" + this.tpSize;
    };
    //USER INTERFACE
    $("#sb").click(function() {
        $("#myForm").submit(function(event){
            event.preventDefault();
            var size = $('#sizeSelector').val();
            var crust = $('#crustSelector').val();
            
            console.log(size);
            var toppingsArr = [];
            $("input[type=checkbox]:checked").each(function() {
                toppingsArr.push($(this).val());
            });
            console.log(toppingsArr);
            var newOrder = new placeOrder(size, crust, toppingsArr);
            console.log(newOrder);

            var anotherTopping = 0;
            for (var i = 0; i < toppingsArr.length; i++) {
                anotherTopping += parseInt(toppingsArr[i]);
            }
            var finalTotal = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
            $("#total1").append("<p>"+finalTotal+"</p>");
            // $('#checksum').append("<p>"+newOrder.size+ "</p>");
            // $('#checksum').append("<p>"+newOrder.crust+ "</p>");
            // $('#checksum').append("<p>"+newOrder.toppingsArr+ "</p>");
        });

        }) 
       
  
 });
//js function
