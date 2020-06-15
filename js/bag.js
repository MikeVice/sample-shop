var remove = document.getElementsByClassName("bag-list__remove");
var add = document.getElementsByClassName("bag-list__plus");
var minus = document.getElementsByClassName("bag-list__minus");
var buttonClear = document.getElementsByClassName("summary__empty")[0];
var buttonCheckout = document.getElementsByClassName("summary__checkout")[0];
function init() {
  var prices = document.getElementsByClassName("bag-list__price");
  var qt = document.getElementsByClassName("bag-list__number");
  var totalQ =0;
  var resP = 0.0;
  for (var i = 0; i < prices.length; i++) {
    var tempP = prices[i].innerHTML.slice(1);
    var tempQ = qt[i].innerHTML;
    totalQ = parseInt(tempQ, 10)+totalQ;
    resP = (parseFloat(tempP)*parseFloat(tempQ))+resP;
  }

  resP=resP-15;
  if (resP<0) resP =0.0;
  resP=resP.toString();
  document.getElementsByClassName("page-header__bag")[0].innerHTML = "Bag £" +resP+" ("+totalQ+")"
  if (resP.toString().indexOf(".")==-1) {
    resP = resP+".00";
    if (totalQ==0) {
      document.getElementsByClassName("summary__checkout")[0].setAttribute("disabled", "disabled");
      document.getElementsByClassName("summary__checkout")[0].className = "button summary__checkout checkout-dis";
    }
} else {
  resP = resP.slice(0, resP.indexOf(".")+3);
}
document.getElementsByClassName("summary__price")[0].innerHTML ="Total price: £"+ resP;
}
var removeDiv = function(ax) {
  ax.parentElement.parentElement.outerHTML = "";
  init();
}
var plusq = function(ax) {
  ax.parentElement.children[1].innerHTML= parseInt(ax.parentElement.children[1].innerHTML, 10)+1;
  init();
}
var minusq = function(ax) {

  var tempValue = ax.parentElement.children[1].innerHTML;
  tempValue= parseInt(tempValue, 10)-1;
  if (parseInt(tempValue, 10)<1) tempValue="1";
  ax.parentElement.children[1].innerHTML=tempValue;
  init();
}
for (var i = 0; i < remove.length; i++) {
  remove[i].addEventListener('click', function(){removeDiv(this)}, false);
}
for (var i = 0; i < add.length; i++) {
  add[i].addEventListener('click', function(){plusq(this)}, false);
}
for (var i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function(){minusq(this)}, false);
}

var bag = document.getElementsByClassName("bag-list")[0];

buttonClear.addEventListener('click', function(){
  bag.innerHTML="<h2 class=\"bag-list__title secondary-title\">Your shopping bag is empty. Use Catalog to add new items</h2>";
  if (bag.innerHTML.indexOf("<h2 class=\"bag-list__title secondary-title\">Your shopping bag is empty. Use Catalog to add new items</h2>")>-1) {
    document.getElementsByClassName("summary__checkout")[0].setAttribute("disabled", "disabled");
    document.getElementsByClassName("summary__checkout")[0].className = "button summary__checkout checkout-dis";
  }
  init();}, false);
buttonCheckout.addEventListener('click', function(){document.getElementsByClassName("bag-list")[0].innerHTML="<h2 class=\"bag-list__title secondary-title\">Thank you for your purchase</h2>"; init();}, false);
