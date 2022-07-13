import "./styles.css";
const handleResize = () => {
  const maxWidth = 1280;
  let currentWidth = window.outerWidth;
  if (currentWidth <= maxWidth * 0.6) {
    document.body.style.backgroundColor = "black";
  } else if (currentWidth <= maxWidth * 0.9) {
    document.body.style.backgroundColor = "blue";
    console.log(currentWidth);
  } else {
    console.log(currentWidth);
    document.body.style.backgroundColor = "red";
  }
  console.log(window.outerWidth);
};
window.onresize = handleResize;
