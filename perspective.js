const cardList = document.getElementsByClassName("js-perspective");

console.log(cardList.length);
for (let i = 0; i < cardList.length; i++) {
  const card = cardList.item(i);

  card.style.transformStyle = "preserve-3d";
  card.style.perspective = "700px";
}

// Updates card rotations when the mouse moves
window.addEventListener("mousemove", (event) => {
  // Max tilt angle along an axis (deg)
  const maxAngle = 20;

  // Mouse pos
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  for (let i = 0; i < cardList.length; i++) {
    const card = cardList.item(i);

    const box = card.getBoundingClientRect();

    // Center pos of card
    const centerX = (box.left + box.right) / 2;
    const centerY = (box.top + box.bottom) / 2;
    const width = box.right - box.left;
    const height = box.bottom - box.top;

    // Relative mouse pos to center
    const relativeX = mouseX - centerX;
    const relativeY = mouseY - centerY;

    // Percent (in decimal) of mouse pos (center to edge)
    const percentX = (2 * relativeX) / width;
    const percentY = (2 * relativeY) / height;

    const angleX = Math.min(Math.max(percentY, -1), 1) * maxAngle;
    const angleY = -Math.min(Math.max(percentX, -1), 1) * maxAngle;

    // Whether to face towards or away from the mouse (default towards)
    if (card.classList.contains("js-flip-perspective")) {
      card.style.setProperty("--js-rotateX", `${angleX}deg`);
      card.style.setProperty("--js-rotateY", `${angleY}deg`);
    } else {
      card.style.setProperty("--js-rotateX", `${-angleX}deg`);
      card.style.setProperty("--js-rotateY", `${-angleY}deg`);
    }
  }
});
