function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 80) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}


// Po załadowaniu mini aplikacji
console.log("Mini aplikacja załadowana !")
const message = decodeURI(location.href.split('=')[1].split('&'));

const elem = document.getElementById("msg");
elem.innerText = message;
