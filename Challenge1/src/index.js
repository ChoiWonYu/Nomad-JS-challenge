const title = document.querySelector(".hello h1");
const superEventHandler = (e) => {
  if (e.type === "contextmenu") {
    title.innerText = "That was a right click!";
    title.style.color = "blue";
  } else if (e.type === "mouseleave") {
    title.innerText = "The mouse is gone!";
    title.style.color = "red";
  } else if (e.type === "mouseenter") {
    title.innerText = "The mouse is here!";
    title.style.color = "purple";
  } else if (e.type === "resize") {
    title.innerText = "You just resize!";
    title.style.color = "black";
  }
};

title.addEventListener("mouseleave", superEventHandler);
title.addEventListener("mouseenter", superEventHandler);
window.addEventListener("resize", superEventHandler);
window.addEventListener("contextmenu", superEventHandler);
