"use strict"

const changeColor = () => {
  let color = document.body.style.color;
  if (color === 'black') {
    document.body.style.color = 'green';
  } else {
    document.body.style.color = 'black';
  }
}