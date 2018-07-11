window.onload = function() {
  var btn = document.querySelector(".btn");
  var obj = {
    test: 1,
    test: 1,
    test: 1
  };
  let code;
  btn.addEventListener("click", function() {
    alert("Hello world");
    code=({ ...obj });
  });
};
