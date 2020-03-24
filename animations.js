const primary = getComputedStyle(document.body).getPropertyValue("--primary");
const textPrimary = getComputedStyle(document.body).getPropertyValue(
  "--text-primary"
);
const secondary = getComputedStyle(document.body).getPropertyValue(
  "--secondary"
);

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
wrapText(".details");

const animateLetterEnter = letterEl => {
  anime.remove(letterEl);
  anime({
    targets: letterEl,
    scale: 1.3,
    rotateZ: -5,
    duration: 500,
    easing: "easeOutElastic(2.5, 0.3)"
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
    easing: "easeOutElastic"
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
  scale: [1, 0.8, 1]
});

let shadowObj = {
  prop1: 0.4
};

// Neon Glowing for Contact Page
const glowElems = document.querySelectorAll(".glow");
anime({
  targets: shadowObj,
  loop: true,
  direction: "alternate",
  prop1: 0.8,
  easing: "easeOutQuad",
  duration: 1000,
  update: () => {
    glowElems.forEach(elem => {
      if (elem.classList.contains("contact-text")) {
        elem.style.textShadow = `0 0 ${shadowObj.prop1*1.2}rem var(--primary)`;
      } else {
        elem.style.boxShadow = `0 0 ${shadowObj.prop1}rem var(--primary)`;
      }
    });
  }
});

// function animateBars() {
//   let interval = Math.floor((Math.random()*6)+5);
// interval = Math.floor(Math.random()*2) == 0 ? interval : -interval;
//   const tl = anime.timeline()
//   tl.add({
//     targets: '.bar',
//     translateX: [0, anime.stagger([`${interval}%`, `${interval*0.4}%`], {from: 'center'})],
//     easing: "easeOutElastic(2, .5)",
//     delay: anime.stagger(60),
//     duration: 800,
//   })
//   .add({
//     targets: '.bar',
//     translateX: [anime.stagger([`${interval}%`, `${interval*0.4}%`], {from: 'center'}), 0],
//     easing: "easeOutElastic(2, .5)",
//     delay: anime.stagger(60, {direction: 'reverse'}),
//     duration: 800,
//   })
//   tl.complete = animateBars;
// }

// animateBars();
