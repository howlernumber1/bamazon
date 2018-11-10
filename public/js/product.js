$(function() {

// render function




$.ajax({
  url: 'api/products',
  method: 'GET'
}).then(function(result) {
  console.log(result);
});







// build table function
const buildTable = function (product) {

// create and append table row
  const items = $('<tr>');

  // create and append table header
  items.append($('<th scope="row">'))

// append input box
  const qty = items.append($('<td>'))
  items.append($('<td>').text(qty))

// append description
  const qty = product.stock_quantity
  items.append($('<td>').text(qty))

// append In Stock
  const qty = product.stock_quantity
  items.append($('<td>').text(qty))




}

  // $.ajax({
  //   url: 'api/products',
  //   method: 'GET'
  // }).then(render);
  // console.log(render);
}
// buildTable();











// add to cart function








// toggle model


















































})
