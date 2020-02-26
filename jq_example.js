$(document).ready(function() {
  var products = [
    { id: 1, name: "Lightsaber", price: 100},
    { id: 2, name: "Yoda Sleeping Bag", price: 76},
    { id: 3, name: "Space Cowboy Laser Gun", price: 40}
  ];

  var productsList = "";

  products.forEach(function(product) {
    productsList += `<li>$${ product.price } - ${ product.name }</li>`;
  });

  $(".products").html(productsList);

  $('h1').on('click', function() {
    alert("You clicked on the header!");
  });
  
  $('p').on('mousemove', function(event) {
    $(".x-coord").html(event.clientX);
    $(".y-coord").html(event.clientY);
  });


  $('li').on('mouseover', function(event) {
      var colorString = "#"

      for(var i = 0; i < 6; i++) {
        var hexCharacters = "0123456789ABCDEF";
        var randomIndex = Math.floor((Math.random() * hexCharacters.length) + 0);
        var character = hexCharacters[randomIndex];
        colorString += character;
      }

      $(this).css("background-color", colorString);
  });
});