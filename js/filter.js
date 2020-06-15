var filterItems = document.getElementsByClassName("filter__item");
var showBtn =  document.getElementsByClassName("filter__show")[0];
var lineWrapper = document.getElementsByClassName("line__wrapper")[0];
var filterTitles = document.getElementsByClassName("filter__title");
var status = "false";

function selectorItem(a) {
  var tempElem = a.parentElement.parentElement.children[0];
  if (status=="false") {
    tempElem.className = "filter__title filter__title--selected";
    if (tempElem.innerHTML.indexOf("<br>")>-1) {
      tempElem.innerHTML=tempElem.innerHTML.slice(0,tempElem.innerHTML.indexOf("<br>"));
    }
    tempElem.innerHTML += "<br><span class=\"selected-item\">"+a.innerHTML+"</span>";
    if (tempElem.innerHTML.indexOf("Not selected")>-1) {
      tempElem.className = "filter__title";
      tempElem.innerHTML = tempElem.innerHTML.slice(0,tempElem.innerHTML.indexOf("<br>"));
    }
  } else {
    var  classP = a.parentElement.classList.item(1);
    for (var i = 0; i < filterItems.length; i++) {
      if (filterItems[i].parentElement.classList.item(1)==classP) {
        filterItems[i].className = "filter__item";
      }
    }
    if (a.innerHTML!="Not selected") {
      a.className = "filter__item filter--selected";
    } else {
      a.className = "filter__item filter--not-selected";
    }
  }
  var tempSItem =  document.getElementsByClassName("short__item"+a.parentElement.classList.item(1).slice(a.parentElement.classList.item(1).indexOf("--")))[0];
  if (a.innerHTML!="Not selected") {
    tempSItem.innerHTML = a.innerHTML;
    if (a.parentElement.classList.item(1)!="filter__scroll--price") tempSItem.innerHTML+=",";
    tempSItem.classList.add("filter--selected");
  } else {
      tempSItem.innerHTML = a.parentElement.parentElement.children[0].innerHTML;
      if (a.parentElement.classList.item(1)!="filter__scroll--price") tempSItem.innerHTML+=",";
      tempSItem.classList.remove("filter--selected");
  }
}

(function(){
var time;
window.onresize = function(e){
  if (window.innerWidth>=1024) {
    status = "false";
    var filter =  document.getElementsByClassName("lists__wrapper")[0];
    var selIt = document.getElementsByClassName("filter__item filter--selected");
    var k = 0;
    if (selIt.length>0) {
      for (var i = 0; i < filterTitles.length; i++) {
        if ((selIt[k].parentElement.parentElement.children[0].innerHTML==filterTitles[i].innerHTML)&&(filterTitles[i].innerHTML.indexOf("<br>")==-1)) {
          if (selIt[k].innerHTML!="Not selected") {
            filterTitles[i].innerHTML += "<br><span class=\"selected-item\">"+selIt[k].innerHTML+"</span>";
            filterTitles[i].className = "filter__title filter__title--selected";
          } else {
            filterTitles[i].className = "filter__title";
          }
          selIt[k].className = "filter__item";
          if (k==selIt.length) break;
        }
      }
    }
    filter.style.display = "flex";
  } else {
    var filter =  document.getElementsByClassName("lists__wrapper")[0];

    showBtn.style.background = "url(\"./img/filter-icon.png\") no-repeat center center";
    lineWrapper.style.justifyContent = "";
    filter.style.display = "none";
  }
}
})();

function showFilter(a) {
  var filter =  document.getElementsByClassName("lists__wrapper")[0];
  if (status=="false") {
    filter.style.display = "flex";
    a.style.background = "url(\"./img/ico_close.png\") no-repeat center center";
    lineWrapper.style.justifyContent = "space-between";
    for (var i = 0; i < filterTitles.length; i++) {
      var tempHtml = filterTitles[i].innerHTML.slice(filterTitles[i].innerHTML.indexOf("class=\"selected-item\">")+22,filterTitles[i].innerHTML.indexOf("</span>"));
      var  tempScroll =  filterTitles[i].parentElement.children[1];
      if (!tempHtml=="") {
        for (var j = 0; j < tempScroll.children.length; j++) {
          if (tempScroll.children[j].innerHTML==tempHtml) {
            tempScroll.children[j].className = "filter__item filter--selected";
          }
        }
        filterTitles[i].innerHTML = filterTitles[i].innerHTML.slice(0,filterTitles[i].innerHTML.indexOf("<br>"));
      }
      // tempScroll.style.listStyleImage = "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)";
    }
    status = "true";
  } else {
    filter.style.display = "none";
    a.style.background = "url(\"./img/filter-icon.png\") no-repeat center center";
    lineWrapper.style.justifyContent = "";
    status = "false";
  }

}

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {selectorItem(this)}, false);
}

showBtn.addEventListener('click', function() {showFilter(this)}, false);
