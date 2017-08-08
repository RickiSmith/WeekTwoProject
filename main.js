// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  var price = 0;
  for (var i=0; i<data.length; i++){
    price += data[i].price;
  }
  console.log((price/data.length).toFixed(2));
  //Answer: 23.625999999999998
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  var items = [];
  for (var j=0; j<data.length; j++){
    if(data[j].price >=14.00 && data[j].price <=18.00){
      items.push(data[j].title);
    }
  }
  console.log(items);
  // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  var gbp = [];
  for (var k = 0; k < data.length; k++) {
    if(data[k].currency_code=="GBP"){
      gbp.push(data[k].title + " costs " + data[k].price + " pounds.");
    }
  }
  console.log(gbp);
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  var wood = [];
  for (var l = 0; l < data.length; l++) {
    for (var m = 0; m < data[l].materials.length; m++) {
    if(data[l].materials[m]=="wood"){
      wood.push(data[l].title + " is made of wood.");
    }
  }
}console.log(wood);
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for (var n = 0; n < data.length; n++) {
    if(data[n].materials.length >=8){
      console.log(data[n].title + " has " + data[n].materials.length + " materials.");
      for (var p = 0; p < data[n].materials.length; p++) {
      console.log("- " + data[n].materials[p]);
      }
    }
  }
  // Answer:
}

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  var question6 = 0;
  for (var p = 0; p < data.length; p++) {
    if(data[p].who_made =="i_did"){
      question6++;
    }
  }console.log(question6 + " items were made by their sellers.");
  // Answer:
}
