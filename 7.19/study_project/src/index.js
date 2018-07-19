async function cc() {
  console.log("hi");
}

function component() {
  var element = document.createElement("div");

  element.innerHTML = "스터디재밌aa따@";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
