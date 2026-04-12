<!-- ================= JAVASCRIPT : script.js ================= -->
let totalAmount = 0;
function addToCart(item,price){
 const li=document.createElement('li');
 li.textContent=`${item} - ₹${price}`;
 document.getElementById('cartItems').appendChild(li);
 totalAmount+=price;
 document.getElementById('total').textContent=`Total Amount: ₹${totalAmount}`;
}
function clearCart(){
 document.getElementById('cartItems').innerHTML='';
 totalAmount=0;
 document.getElementById('total').textContent='Total Amount: ₹0';
}
