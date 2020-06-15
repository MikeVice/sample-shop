var size = document.getElementsByClassName("parameter__list--first")[0].getElementsByClassName("parameter__item");
var selectsize = document.getElementsByClassName("parameter__list--first")[0].getElementsByClassName("parameter__item--active");
var color = document.getElementsByClassName("parameter__list--second")[0].getElementsByClassName("parameter__item");
var selectcolor = document.getElementsByClassName("parameter__list--second")[0].getElementsByClassName("parameter__item--active");

var thumbnails = document.getElementsByClassName("item-dital__thumbnail");

var myFunction = function(item, selectelem) {
  for (var i = 0; i < selectelem.length; i++) {
    selectelem[i].classList.remove("parameter__item--active");
  }
  item.classList.add("parameter__item--active");
};
var addtoBag = function() {
  var BagString = document.getElementsByClassName("page-header__bag")[0].innerHTML;
  var price =document.getElementsByClassName("item-dital__price")[0].innerHTML;
  if (BagString.indexOf("(0)")>-1){

    document.getElementsByClassName("page-header__bag")[0].innerHTML = "Bag "+price+" (1)"
  }
  else {
    var BagPrice = BagString.slice(BagString.indexOf("£")+1, BagString.indexOf("("));
    var BagQuant = BagString.slice(BagString.indexOf("(")+1, BagString.indexOf(")"));
    var resPrice = parseFloat(BagPrice)+parseFloat(price.slice(1));
    BagQuant = parseInt(BagQuant, 10)+1;
    resPrice=resPrice.toString();
    if (resPrice.toString().indexOf(".")==-1) {resPrice = resPrice+".00";
  } else {
    resPrice = resPrice.slice(0, resPrice.indexOf(".")+3);
  }
  document.getElementsByClassName("page-header__bag")[0].innerHTML = "Bag £"+resPrice+" ("+BagQuant+")";
}
};

function changeImg(a) {
  a.parentElement.parentElement.children[0].children[0].src = a.children[0].src;
  document.getElementsByClassName("thumbnail--act")[0].className = "item-dital__thumbnail";
  a.className = "item-dital__thumbnail thumbnail--act";
};

for (var i = 0; i < size.length; i++) {
  size[i].addEventListener('click', function(){myFunction(this, selectsize)}, false);

}
for (var i = 0; i < color.length; i++) {
  color[i].addEventListener('click', function(){myFunction(this, selectcolor)}, false);

}
var buttonAdd = document.getElementsByClassName("button item-dital__add")[0];
buttonAdd.addEventListener('click', addtoBag, false);


for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function() {changeImg(this)}, false);
}
