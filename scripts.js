$(document).ready(function (){
    'use strict';

    for (let i = 0; i < productos.length; i++) {
        
        $('#productos').append(
            '<div class="col-6 col-md-4">' +
                '<div class="sc-product-item mb-3">' +
                    '<img class="img-fluid pb-3" data-name="product_image" src="img/shop/' + productos[i]['Imagen'] + '" alt=" ' + productos[i]['nombre'] + '">' +
                    '<h3 id="nombreProducto" class="fs-5" data-name="product_name">' + productos[i]['Nombre'] + '</h3>' +
                    '<p data-name="product_desc" class="m-auto">' + productos[i]['Descripcion'] + '</p>' + 
                    '<input name="product_price" value="' + productos[i]['Precio'] +'" type="hidden">' + 
                    '<input name="product_id" value="' + productos[i] + '" type="hidden">' + 
                    '<div class="mb-2">$ '+ productos[i]['Precio'] + '</div>' +
                    '<button id="botonAgregar" class="sc-add-to-cart btn mb-2">Agregar</button>' +
                    '</div>' +
                    '</div>'
        );
        
    }

    $('#smartcart').smartCart({
        cartItemTemplate: '<div class="d-flex">' + 
        '<h3 class="h5 list-group-item-heading">{product_name}</h3>' + 
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove: 'x',
            cartEmpty: 'Todavía no hay productos en tu carrito.'
        }
        
    })
} )

$("#smartcart").on("cartSubmitted", function(e) {
  window.location.href = "https://wa.me/1234567890";
});
