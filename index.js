function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var elements = document.querySelector(".ranked-list li");
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML;
  }
}