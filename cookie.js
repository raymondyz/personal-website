const popup = document.getElementById("cookie-popup");
const acceptButton = document.getElementById("accept-button");
const declineButton = document.getElementById("decline-button");

const cookieContainer = document.body;

let cookieLevel = 0;
const cookiePhrase = [
  "More",
  "Even More",
  "Lots More",
  "Too Many More",
  "The Whole Box Of",
  "Gluttonous Amounts Of",
  "A Disturbing Quantity Of",
  "A Whole Season Of Bake Off Worth Of",
  "Costco Pallet Loads Of",
  "The Whole Warehouse Of",
  "The Cookie Monster’s Monthly Ration Of",
  "The Entire Oreo Factory Output Of",
  "The Nationwide Supply Of",
  "Unholy Amounts Of",
  "Willy Wonka’s Lifetime Inventory Of",
  "Forbidden, Eldritch, Reality-Bending Quantities Of",
  "Cookie Clicker Amounts Of",
];

const cookieList = [];

function addCookie() {
  cookie = document.createElement("div");
  cookie.classList.add("draggable-cookie");
  cookie.innerText = "🍪";
  cookie.style.top = Math.random() * window.innerHeight + "px";
  cookie.style.left = Math.random() * window.innerWidth + "px";

  cookieList.push(cookie);
  cookieContainer.appendChild(cookie);
}

function removeAllCookies() {
  for (const cookie of cookieList) {
    cookie.remove();
  }
}

declineButton.addEventListener("click", (event) => {
  popup.style.right = "-800px";
  popup.style.pointerEvents = "none";

  removeAllCookies();

  setTimeout(() => {
    popup.remove();
  }, 1000);
});

acceptButton.addEventListener("click", (event) => {
  addCookie();

  acceptButton.innerText = `Accept ${
    cookiePhrase[Math.floor(cookieLevel)]
  } Cookies`;
  cookieLevel = Math.min(cookieLevel + 0.5, cookiePhrase.length - 1);
});

window.addEventListener("mousemove", (event) => {
  // dragged with left mouse button
  if (event.buttons == 1) {
    const targetElement = event.target;

    if (targetElement.classList.contains("draggable-cookie")) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      targetElement.style.top = `${mouseY}px`;
      targetElement.style.left = `${mouseX}px`;

      const parentElement = targetElement.parentNode;
      parentElement.appendChild(targetElement);
    }
  }
});

window.addEventListener("load", (event) => {
  setTimeout(() => {
    popup.style.display = "block";
    popup.style.right = "50px";
    popup.style.pointerEvents = "auto";
  }, 2000);
});
