const wrapper = document.querySelector(".wrapper");
const headTitle = document.querySelector(".head-title");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {
  headTitle.innerHTML ="<h1>Okayyyy!</h1><div><h2>I'll See you On 23th Febuary 2024!!</h2></div>";
  gif.src ="end.gif";
});



noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
