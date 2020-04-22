import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 id="title">Hello Vanilla!</h1>
`;

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  mouse: {
    mouseOver: function(event) {
      superEventHandler.textChange("title", "Hello Vanilla! Event: mouseOver");
      superEventHandler.colorChange("title", colors[0]);
    },
    mouseOut: function(event) {
      superEventHandler.textChange("title", "Hello Vanilla! Event: mouseOut");
      superEventHandler.colorChange("title", colors[1]);
    },
    mouseClick: function(event) {
      event.preventDefault();
      if (event.button === 0) {
        superEventHandler.textChange(
          "title",
          "Hello Vanilla! Event: mouseLeftClick"
        );
        superEventHandler.colorChange("title", colors[2]);
      } else if (event.button === 2) {
        superEventHandler.textChange(
          "title",
          "Hello Vanilla! Event: mouseRightClick"
        );
        superEventHandler.colorChange("title", colors[3]);
      }
    }
  },
  window: {
    resize: function(event) {
      superEventHandler.textChange(
        "title",
        "Hello Vanilla! Event: windowResized"
      );
      superEventHandler.colorChange("title", colors[4]);
    }
  },
  textChange: function(id, text) {
    document.getElementById(id).innerHTML = text;
  },
  colorChange: function(id, color) {
    document.getElementById(id).style.color = color;
  }
};

let title = document.getElementById("title");

title.addEventListener("mouseover", superEventHandler.mouse.mouseOver);
title.addEventListener("mouseout", superEventHandler.mouse.mouseOut);
window.addEventListener("resize", superEventHandler.window.resize);
window.addEventListener("mousedown", superEventHandler.mouse.mouseClick);
