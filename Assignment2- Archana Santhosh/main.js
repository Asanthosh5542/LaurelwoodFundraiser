let receipt = '<table id="receipt" height="40pvh" width="100%" border="2">';
receipt+= '<tr><th>Item Name</th><th>Price</th><th>Quantity</th><th>Total Price</th>';
var amt=0;
const tax = 0.13;
var donation = 10;
var total=0;
var qty;


function addtocart(item,rate) {

    if(rate==15)
    {
        qty=document.getElementById("quantity1").value;
    }
    else if(rate==32)
    {
       qty=document.getElementById("quantity2").value;
    }
    else if(rate==7.99)
    {
       qty=document.getElementById("quantity3").value;
    }
    else if(rate==5.6)
    {
       qty=document.getElementById("quantity4").value;
    }
    else if(rate==9.28)
    {
        qty=document.getElementById("quantity5").value;
    }
    else if(rate==42.7)
    {
        qty=document.getElementById("quantity6").value;
    }
    if ( isNaN(qty) || qty < 1 ) {
        document.getElementById('error').innerHTML =  "Invalid input." ;
    } 
    var cost = qty * rate;
    
    
    receipt+= '<tr>';
    receipt+= '<td width="50">' + item + '</td>';
    receipt+= '<td width="50">' + rate + '</td>';
    receipt+= '<td width="50">' + qty + '</td>';
    receipt+= '<td width="50">' + cost + '</td>';
    receipt+= '</tr>';
    amt = (amt + cost);
    total=amt;

    if(total*0.1 > donation)
    {
        donation = total*0.1;
    }

}



total=amt;
    

    function validateForm(){
        var pendingErrors = false;
        var custname = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var card = document.getElementById("card").value;
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        document.getElementById('error').innerHTML = "";
        
        
        var cardFormat = /^[\d]{4}[\-][\d]{4}[\-][\d]{4}[\-][\d]{4}$/;
        var monthFormat= /^[A-Z]{3}$/;
        var yearFormat = /^[\d]{4}$/;
        if(!cardFormat.test(card)) {
            document.getElementById('error').innerHTML +=  "Please enter valid credit card format </br>";
            pendingErrors = true;
           
        }
       if(!monthFormat.test(month)) {
        document.getElementById('error').innerHTML +=  "Please enter valid month format </br>";
        pendingErrors = true;
        
        }
        if(!yearFormat.test(year)) {
            document.getElementById('error').innerHTML +=  "Please enter valid year format </br>";
            pendingErrors = true;
          
        }


        total= (total + donation);
        
        if (!pendingErrors) {
            document.write("<br><p>Customer Name: " + custname + "</p>");
            document.write("<p>Customer Mail: " + email + "</p>");
            document.write("<p>Credit Card: XXXX-XXXX-XXX-" + card.substr(-4) + "</p>");
            receipt+= '<tr><td colspan="3">SUBTOTAL</td><td>$'+amt.toFixed(2)+'</td>';
            receipt+= '<tr><td colspan="3">Mandatory donation </td><td>$'+donation.toFixed(2)+'</td>';
            receipt+= '<tr><td colspan="3"> SUM TOTAL </td><td>$'+total.toFixed(2)+'</td>';
            document.write(receipt);

        }
        return false    
    }
   