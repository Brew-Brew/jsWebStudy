var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

window.onload = function () {
  var btn = document.querySelector(".btn");
  var obj = {
    test: 1,
    test: 1,
    test: 1
  };
  let code;
  btn.addEventListener("click", function () {
    alert("Hello world");
    code = _extends({}, obj);
  });
};