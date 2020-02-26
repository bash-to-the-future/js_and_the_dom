document.addEventListener('DOMContentLoaded', function() {
  var products = [
    { id: 1, name: "Lightsaber", price: 100},
    { id: 2, name: "Yoda Sleeping Bag", price: 76},
    { id: 3, name: "Space Cowboy Laser Gun", price: 40}
  ];

  var productsList = "";

  products.forEach(function(product) {
    productsList += `<li>$${ product.price } - ${ product.name }</li>`;
  });

  var productsElement = document.querySelector(".products");
  productsElement.innerHTML = productsList;
  
  document.querySelector('p').addEventListener('mousemove', function(event) {
    console.log("X coordinate: ", event.clientX, ", Y coordinate: ", event.clientY);

    var xCoordSpan = document.querySelector(".x-coord");
    var yCoordSpan = document.querySelector(".y-coord");

    xCoordSpan.innerHTML = event.clientX;
    yCoordSpan.innerHTML = event.clientY;
  });

  document.querySelector('h1').addEventListener('click', function() {
    alert("You clicked on the header!");
  });

  var listItems = document.querySelectorAll('li');

  listItems.forEach(function(listItem) {
    listItem.addEventListener('mouseover', function() {
      var colorString = "#"

      for(var i = 0; i < 6; i++) {
        var hexCharacters = "0123456789ABCDEF";
        var randomIndex = Math.floor((Math.random() * hexCharacters.length) + 0);
        var character = hexCharacters[randomIndex];
        colorString += character;
      }

      console.log(colorString);
      listItem.style.backgroundColor = colorString;
    });
  });
});





  // function changeHTML() {
  //     var firstMessage = "Hey I'm here";
    
  //     var liCollection = document.querySelectorAll("li");

  //     console.log(liCollection);
  //     liCollection.forEach(function(liTag) {
  //       liTag.innerHTML = firstMessage;
  //     });
      

  //     var thingCollection = document.querySelectorAll(".thing");

  //     console.log(thingCollection);
  //     thingCollection.forEach(function(thingTag) {
  //       thingTag.style.color = "red";
  //     });
  //   }