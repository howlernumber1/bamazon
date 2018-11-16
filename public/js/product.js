$(function() {

  // render function for initial data
  const render = function(inventory) {
    // log to make sure we have data from api
    console.log(inventory);

    // loop through data and then append to table body
    for (let i = 0; i < inventory.length; i++) {
      $('.productContent').append(buildTable(inventory[i]));
    }
  }

  // ajax request to get data from api then call render function
  $.ajax({
    url: 'api/products',
    method: 'GET'
  }).then(render);


  // build table function
  const buildTable = function(product) {

    // create and append table row
    const id = product.id;
    const items = $('<tr>')
      .attr('data-name', id);

    // create table header and append inputbox
    items.append($('<th scope="row"><input class="qtyBox form-control" type="number" min="0" max="99"></th>'));

    // append description
    const des = product.product_name;
    items.append($('<td>').text(des));

    // append In Stock
    const inStock = product.stock_quantity;
    items.append($('<td>').text(inStock));

    // append price
    const price = product.price;
    items.append($('<td>').text("$" + " " + price));

    // append add to cart button

    items.append($('<td><button class="btn btn-secondary addCart">Add to Cart</button></td>'))

    // return appended data

    return items;

  }

  // render function for modal
  const renderModal = function (cart) {


  }


  // add to cart function
  const add = function(event) {
    event.preventDefault();

    //get quantity input
    const qtyInput = function () {

    }

    $('#cartModal').modal('toggle')
  }


  const clear = function() {
    $('#cartContent').empty();
    $('#cartContentTotal').empty();
  }


  // CLICK HANDLERS
  // ==========================================================

  // .on('click') function associated with add function. Add items to cart
  $('#viewCart').on('click', add)

  // .on('click') function associated with checkout function. Clear cart
  $('#clearCart').on('click', clear)

});
