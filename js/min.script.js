var link=document.querySelector(".write-us-link"),popup=document.querySelector(".write-us-form"),close=document.querySelector(".close-button"),login=popup.querySelector("[name=full-name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),popup.addEventListener("submit",function(e){login.value&&email.value?localStorage.setItem("login",login.value):(e.preventDefault(),console.log("Необходимо ввести имя и электронную почту"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&popup.classList.remove("modal-show")});var mapLink=document.querySelector(".big-map-js"),mapPopup=document.querySelector(".big-map"),mapClose=mapPopup.querySelector(".close-button");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show")});
