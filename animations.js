const primary = getComputedStyle(document.body).getPropertyValue('--primary');
const textPrimary = getComputedStyle(document.body).getPropertyValue('--text-primary');
const secondary = getComputedStyle(document.body).getPropertyValue('--secondary');

console.log(textPrimary);

const wrapText = s => {
  const textWrapper = document.querySelector(s);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
};

wrapText(".hello-text");
wrapText(".i-am-text");
wrapText('.details')

const animateLetterEnter = letterEl => {
  anime.remove(letterEl);
  anime({
    targets: letterEl,
    scale: 1.3,
    rotateZ: -5,
    duration: 500,
    easing: 'easeOutElastic(2.5, 0.3)',
  });
};

const animateLetterLeave = letterEl => {
  anime.remove(letterEl);
  anime({
    targets: letterEl,
    scale: 1,
    rotateZ: 0,
    duration: 500,
    opacity: 1,
    easing: 'easeOutElastic',
  });
};

const letters = document.querySelectorAll(".letter");
letters.forEach(letterEl => {
  letterEl.addEventListener("mouseenter", () => {
    // console.log("Enter");
    animateLetterEnter(letterEl);
  });
  letterEl.addEventListener("mouseleave", () => {
    // console.log("Leave");
    animateLetterLeave(letterEl);
  });
});

anime({
    targets: ".square",
    rotate: 90,
    duration: 2000,
    loop: true,
    delay: anime.stagger(15),
    scale: [1, 0.8, 1],
})