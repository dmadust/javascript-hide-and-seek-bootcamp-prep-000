function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var elements = document.querySelector(".ranked-list li");
  console.log(elements.length);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = (parseInt(elements[i].innerHTML, 10) + n).toString();
  }
}