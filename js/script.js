  var link = document.querySelector(".write-us-link");
  var popup = document.querySelector(".write-us-form");
  var close = document.querySelector(".close-button");
  var login = popup.querySelector("[name=full-name]");
  var email = popup.querySelector("[name=email]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  popup.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      console.log("Необходимо ввести имя и электронную почту");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {

         popup.classList.remove("modal-show");
      }
    }
  });

  var mapLink = document.querySelector(".big-map-js");
  var mapPopup = document.querySelector(".big-map");
  var mapClose = mapPopup.querySelector(".close-button");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
