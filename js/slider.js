include("./data/catalog.js");
include("./data/best-offer.js");

var arrowsUp = document.getElementsByClassName("best-offer__arrow-up");
var arrowsDown = document.getElementsByClassName("best-offer__arrow-down");
var firstSummand = 0;
var secondSumamand = 0;

function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
}

function zeroAdd(tempClass) {
  var diff = document.getElementsByClassName(tempClass)[0].innerHTML.length-1-document.getElementsByClassName(tempClass)[0].innerHTML.indexOf(".");
  if (document.getElementsByClassName(tempClass)[0].innerHTML.indexOf(".")==-1) {
    diff = 2;
    document.getElementsByClassName(tempClass)[0].innerHTML += ".";
  }
  if (diff<=2) {
    for (var i = 0; i < diff; i++) {
      document.getElementsByClassName(tempClass)[0].innerHTML += "0";
    }
  }
}

function changeItem(a) {
  var summand = a.parentElement;
  if (summand.classList.item(2)=="best-offer__summand--left") {
    if (a.className == "best-offer__arrow-up") {firstSummand--;} else {firstSummand++;};
    if (firstSummand<0) firstSummand = window.bestOffer.left.length-1;
    if (firstSummand==window.bestOffer.left.length) firstSummand = 0;
    for (var i = 0; i < window.catalog.length; i++) {
      if  (window.catalog[i].id==window.bestOffer.left[firstSummand]) {
        var tempName = window.catalog[i].title;
        var tempPrice =  window.catalog[i].price;
        var tempImg  = window.catalog[i].thumbnail;
        document.getElementsByClassName("best-offer__img goods__img")[0].src = tempImg;
        document.getElementsByClassName("best-offer__name")[0].innerHTML = tempName;
        document.getElementsByClassName("best-offer__price")[0].innerHTML = "£"+tempPrice;
      }
    }
  } else {
    if (a.className == "best-offer__arrow-up") {secondSumamand--;} else {secondSumamand++;};
    if (secondSumamand<0) secondSumamand = window.bestOffer.right.length-1;
    if (secondSumamand==window.bestOffer.right.length) secondSumamand = 0;
    for (var i = 0; i < window.catalog.length; i++) {
      if  (window.catalog[i].id==window.bestOffer.right[secondSumamand]) {
        var tempName = window.catalog[i].title;
        var tempPrice =  window.catalog[i].price;
        var tempImg  = window.catalog[i].thumbnail;
        document.getElementsByClassName("best-offer__img goods__img")[1].src = tempImg;
        document.getElementsByClassName("best-offer__name")[1].innerHTML = tempName;
        document.getElementsByClassName("best-offer__price")[1].innerHTML = "£"+tempPrice;
      }
    }
  }
  var totalPrice = parseFloat(document.getElementsByClassName("best-offer__price")[0].innerHTML.slice(1)) + parseFloat(document.getElementsByClassName("best-offer__price")[1].innerHTML.slice(1));
  document.getElementsByClassName("best-offer__total--old")[0].innerHTML = "£"+totalPrice.toString();
  zeroAdd("best-offer__total--old");
  var totalDisPrice = (totalPrice*((100-window.bestOffer.discount)/100)).toFixed(2);
  document.getElementsByClassName("best-offer__total--new")[0].innerHTML = "£"+totalDisPrice.toString();
  // zeroAdd("best-offer__total--new");
}



for (var i = 0; i < arrowsUp.length; i++) {
  arrowsUp[i].addEventListener('click', function() {changeItem(this)}, false);
  arrowsDown[i].addEventListener('click', function() {changeItem(this)}, false);
}
