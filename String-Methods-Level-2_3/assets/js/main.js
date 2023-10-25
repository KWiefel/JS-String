"use strict";

function highlight() {
  let text = document.body.querySelector("#article");
  let input = document.body.querySelector("#search-input");

  // console.log(text.innerText.replaceAll("a", "X"));
  // console.log(input.value);

  // let textNew =

  text.innerHTML = text.innerText.replaceAll(
    `${input.value}`,
    `<span class="highlight">${input.value}</span>`
  );
}
