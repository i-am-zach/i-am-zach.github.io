const primary = getComputedStyle(document.body).getPropertyValue("--primary");
const textPrimary = getComputedStyle(document.body).getPropertyValue(
  "--text-primary"
);
const secondary = getComputedStyle(document.body).getPropertyValue(
  "--secondary"
);

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
  prop1: 1.2,
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


//? ANIMATE SKILLS

const skilltl = anime.timeline({autoplay: false})
skilltl
.add({
  targets: ".skill-text",
  opacity: [0, 1],
  easing: "linear",
  duration: 1000,
})
.add({
  targets: '.skill',
  translateX: function(el, i, l) {
    if(el.className.includes('even')){
      return [1000, 0]
    } else {
      return [-1000, 0]
    }
  },
  easing: "easeOutElastic(.3, 3)",
  delay: anime.stagger(500),
})
.add({
  targets: '.skill .skill-name .skill-trail',
  scale: [0, 1],
  duration: 1000,
})
.add({
  targets: ".skill .skill-icon",
  keyframes: [
    {scale: 0.75},
    {scale: 1.5},
    {scale: 1},
  ],
  duration: 500,
  easing: 'easeOutQuad',
})

const skillsSection = document.querySelector("section.skills")

const enterSkillIcon = (skillEl) => {
  anime.remove(skillEl)
  anime({
    targets: [skillEl],
    scale: 1.5,
    duration: 500,
  })
}

const leaveSkillIcon = (skillEl) => {
  anime.remove(skillEl)
  anime({
    targets: skillEl,
    scale: 1,
    duration: 500,
  })
}

const skillIcons = document.querySelectorAll('.skill-icon')
skillIcons.forEach(skillEl => {
  skillEl.addEventListener('mouseenter', () => {
    enterSkillIcon(skillEl);
  })
  skillEl.addEventListener('mouseleave', () => {
    leaveSkillIcon(skillEl);
  })
})


// Animate About section
const aboutAnimation  = anime({
  autoplay: false,
  targets: "#about",
  opacity: {value: [0, 1], easing: 'linear', duration: 1200},
  translateX: ['-100%', 0],
  easing: "easeOutQuad",
  duration: 800,
})

// Animate contact section
const contactAnimation = anime({
  targets: "section.contact .contact-wrapper",
  autoplay: false,
  opacity: {value: [0, 1], easing: 'linear', duration: 1200},
  translateX: ['100%', 0],
  easing: "easeOutQuad",
  duration: 800,
})


function handleScroll() {
  const scrollY = window.scrollY;
  const skillsTop = document.querySelector("section.skills .skill-text").getBoundingClientRect().y - 100;
  const contactTop = document.querySelector("section.contact .contact-text").getBoundingClientRect().y + 100;

  if(scrollY > skillsTop) {
    if(!skilltl.began) {
      skilltl.play();
    }
  } else {
    skilltl.reset();
  }

  if(scrollY >  contactTop) {
    if(!contactAnimation.began) {
      contactAnimation.play();
    }
  } else {
    contactAnimation.reset();
  }

  if(scrollY <= 5) {
    aboutAnimation.reset();
  } else {
    if(!aboutAnimation.began) {
      aboutAnimation.play();
    }
  }
  
}

window.addEventListener("scroll", handleScroll)