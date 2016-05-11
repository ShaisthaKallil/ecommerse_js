// JavaScript Document

/* Access DOM element*/
		function _(x){
		
			return document.getElementById(x);
			
		}

////////////////////////////////////////////////////////
// Declaration of variables                           //
// Arrays  : Product List, Product Price              //
//           Product Quantity - stores user input qty //
// answer : stores the total price with tax included  //
////////////////////////////////////////////////////////

		
	    var prodList = ["fire car", "hippo plush", "joker figure", 
						"taxi car", "superman figure", "reindeer plush", 
						"teddy bear", "girl doll", "elephant plush", 
						"merry go round", "princess doll", "snowman plush"];
						
		var prodPrice = [15.00, 20.00, 18.00, 15.00, 17.00, 23.99, 25.49, 25.00, 21.00, 30.30, 28.16, 12.29];
		
		var prodQty = [0,0,0,0,0,0,0,0,0,0,0,0];
		
		
		var answer = 0;
		
/////////////////////////////////////////////////////////
// FUNCTION : setProd(prod)                            //
//	Called when user click "ADD" button for any product//
//    prodId : Gets the value attribute of ADD button  //
//             of the specific product                 //
//    productName : Gets the name of the specific      //
//                  product                            //
//    productPrice : Gets the price of the specific    //
//                   product                           //
//  -Add one to the value corresponding to the specific//
//   product quantity and store inside prodQty variable//
//  -Display the quantity value to user                //
//  -Quantity value stored in 'tempQty'variable and    //
//   passed as an argument along with price to         //
//   calculateCost()function where Total Cost for the  //
//   specific product  is calculated                   //
//  -Display the total cost of specific product to user//
/////////////////////////////////////////////////////////    	
		
		function setProd(prod){
				
				var prodId = parseInt(prod.value);
				var productName = prodList[prodId];
		        var productPrice = prodPrice[prodId];
				
				prodQty[prodId] += 1;
				
				var tempQty = prodQty[prodId];
				var eleQtyName = "qty_"+prodId;
				_(eleQtyName).innerHTML = tempQty;
				var total = calculateCost(productPrice,tempQty);
				
			//	totalAmt +=parseFloat(total);
				var eleCostName = "cost_"+prodId;
				_(eleCostName).innerHTML = "$ "+total;
		}
/////////////////////////////////////////////////////////
// FUNCTION : removeQty(prod)                          //
// Called when user click "REMOVE" button for product  //
//-Many regards similar to setProd(prod) functionality //
//-But prodQty value for specific product decreased by //
// one only if previous value of prodQty for this      //
// product is greater than zero else alert ERROR       //
//-Total Cost of product after reducing quantity value //
// is calculated and displayed to user                 //
/////////////////////////////////////////////////////////
		
		function removeQty(prod){
				
				var prodRId = parseInt(prod.value);
				var productRPrice = prodPrice[prodRId];
				
				if(prodQty[prodRId]>0){
					
					prodQty[prodRId] -= 1;
					
					var tempRQty = prodQty[prodRId];
					var eleRQtyName = "qty_"+prodRId;
				    _(eleRQtyName).innerHTML = tempRQty;
				
				    var totalR = calculateCost(productRPrice,tempRQty);
				    var eleRCostName = "cost_"+prodRId;
				    _(eleRCostName).innerHTML = "$ "+totalR;
					
				}else{
					
					alert("ERROR");
				}
	    }
		
/////////////////////////////////////////////////////////
// FUNCTION : calculateCost(prodCost,numQty)           //
// Called from inside setProd(prod) and removeQty(prod)//
// function                                            //
// Performs calculation for totalCost of specific      //
// product                                             //
/////////////////////////////////////////////////////////		
		
		function calculateCost(prodCost, numQty){
			
				var totalPrice = (prodCost * numQty).toFixed(2);
				return totalPrice;
		}
		
/////////////////////////////////////////////////////////
// FUNCTION : showResult()                             //
// Called when MY BILL button is clicked               //
//-Displays to user the total price with tax included  //
//-Hides MY BILL button and Product list table from    //
// user                                                //
/////////////////////////////////////////////////////////
	
	    
		function showResult(){
			var tax = 0.13;
			for(var j = 0; j < prodQty.length; j++){
					answer += parseFloat(prodQty[j] * prodPrice[j]);
				
			
			}
		       var newPrice = answer + (answer * tax);
			
		    _("buyPrice").innerHTML = "Your bill : "+"<br/>"+"Please pay $ "+ newPrice.toFixed(2)+ " with tax 13% included. Thank                                       You for your purchase."
		    _("showResult").style.display = "none";
			_("list").style.display = "none";
		
		}
		
		
	
	
		
	
	