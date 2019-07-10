// анимация появления формы ориентир(1)
var serch = document.querySelector(".serch-buttom");
var popup = document.querySelector(".form-back");

var textadults = popup.querySelector("[name=textadults]");
var textchildren = popup.querySelector("[name=textchildren]");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("textadults");
  } catch (err) {
    isStorageSupport = false;
  }
// анимация появления формы
serch.addEventListener("click", function (evt) {
  popup.classList.toggle("hidden");
  // popup.classList.toggle("square");

  popup.classList.remove("modal-error");

  if (storage) {
      textadults.value.value = storage;
      textchildren.value = storage;
    }
});

popup.addEventListener("submit", function (evt) {
  if (!textadults.value || !textchildren.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else if (isStorageSupport) {
      localStorage.setItem("textadults", textadults.value);
      localStorage.setItem("textchildren", textchildren.value);
  }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     popup.classList.toggle("hidden");
     if (
       popup.classList.contains("form-back")) {

       popup.classList.remove("modal-error");
     }
   }
 });
