function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = (parseInt(elements[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild() {
  var deepest = querySelector("#grand-node");
  while (deepest.querySelector("div") != undefined) {
    deepest = deepest.querySelector("div");
  }
  return deepest;
}