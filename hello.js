function hello() {
  var target = document.querySelector('#hello');
  target.innerHTML = "Hello, World!";
};

if (document.readyState == "complete") {
  hello();
} else {
  document.addEventListener("DOMContentLoaded", hello);
}
