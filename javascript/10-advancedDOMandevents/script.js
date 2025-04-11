"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnscrollto = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabscontent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const message = document.createElement("div");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
///////////////////////////////////////
// Page navigation //
///////////////////////////////////////
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const Id = this.getAttribute("href");
//     document.querySelector(Id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// add eventlistener to common parent element
// Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const Id = e.target.getAttribute("href");
    document.querySelector(Id).scrollIntoView({ behavior: "smooth" });
  }
});

btnscrollto.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(s1coords.top);
  // console.log(s1coords.top + window.pageYOffset);
  // console.log(s1coords.left);
  // // console.log(e.target.getBoundingClientRect());
  // console.log("current scroll(x/y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // // window.scrollTo(
  // //   s1coords.left + window.pageXOffset,
  // //   s1coords.top + window.pageYOffset
  // // );
  // window.scrollTo({
  //   top: s1coords.top + window.pageYOffset,
  //   left: s1coords.left + window.pageXOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // Guard clause //
  if (!clicked) return; //this means if clicked becomes falsy then condition in if statement will become true and no code after that will be executed
  // we had to put guard clause here becoz clicking on tab which contains all buttons i'e tabscontainer gave us null(error) therefore to fix that in our code we had to put this clause
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  tabscontent.forEach((t) => t.classList.remove("operations__content--active"));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
const handlehover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handlehover.bind(0.5));
nav.addEventListener("mouseout", handlehover.bind(1));

// Sticky navigation //
// const initialcoords = section1.getBoundingClientRect();
// console.log(initialcoords);
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialcoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//Sticky navigation:Interaction observer API //
// const obscallback = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };
// const obsoptions = {
//   root: null,//keeping root null means root is viewport
//   threshold: [0, 0.2], //% of section1 that we want to be visible in our viewport when callback function is called
// };
// const observer = new IntersectionObserver(obscallback, obsoptions);
// observer.observe(section1);
const navheight = nav.getBoundingClientRect().height;
// console.log(navheight);
const stickynav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerobserver = new IntersectionObserver(stickynav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
});
headerobserver.observe(header);

// Reveal sections //
const allsections = document.querySelectorAll(".section");

const reveal = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionobserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.15,
});
allsections.forEach(function (section) {
  sectionobserver.observe(section);
  // section.classList.add("section--hidden");
});

// Lazy loading //

const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replacing images //
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgobserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
imgTargets.forEach((img) => imgobserver.observe(img));

// Slider //
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnleft = document.querySelector(".slider__btn--left");
  const btnright = document.querySelector(".slider__btn--right");
  const dotcontainer = document.querySelector(".dots");
  let curslide = 0;
  const maxslide = slides.length;
  // Functions //
  const createdots = function () {
    slides.forEach(function (_, i) {
      dotcontainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const gotoslide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  const nextslide = function () {
    if (curslide === maxslide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    gotoslide(curslide);
    activateDot(curslide);
  };
  const prevslide = function () {
    if (curslide === 0) {
      curslide = maxslide - 1;
    } else {
      curslide--;
    }
    gotoslide(curslide);
    activateDot(curslide);
  };

  const init = function () {
    gotoslide(0);
    createdots();
    activateDot(0);
  };
  init();
  btnright.addEventListener("click", nextslide);
  btnleft.addEventListener("click", prevslide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevslide();
    e.key === "ArrowRight" && nextslide();
  });
  console.log(dotcontainer);
  dotcontainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      console.log("dot");
      const { slide } = e.target.dataset;
      gotoslide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// DOM //

// every single node in DOM tree is of the type node and each node in javascript is represented by an object and this object gets access to special node methods and properties such as textcontent, childnodes,parentnode, clonenode
//there are different types of nodes and these nodes have child types and these are element type,text type ,comment type , document type
// so whenever there is text inside any element it gets it's own node and that node will be of text and same goes for comments in html because everything in html must go into DOM as well.similarly,elements also get their node (element type node) and each element will be represented internally as an object
// element type has internally htmlelement childtype and that htmlelement itself has one childtype for each html element that exists in html
// queryselector is available on both document type and element type
// inheritance means all child types will also get access to mehods and properties of all their parent node types e'g htmlelement will get access to everything from element type and will also get access to node type because node type is also it's parent type
// there is a special type of node called eventtarget which is a parent to both node type and window type and eventlistener is actually a method of this node and due to inheritance we can call eventlistener on every single type of node

// selecting,creating and deleting elments //
// console.log(document.documentElement); //selects whole page
// // we can select special types of elements like body and head directly
// console.log(document.body);
// console.log(document.head);

// const allsections = document.querySelectorAll(".section");
// console.log(allsections);
// document.getElementById("section--1");
// const allbuttons = document.getElementsByTagName("button"); //this gives an html collection and it is a live collection which means that if DOM changes then this collection changes automatically
// nodelist doesn't update itself automatically
// console.log(allbuttons);
// console.log(document.getElementsByClassName("btn")); //this will also return a live html collection
// creating and inserting elements //
// .insertAdjacentHTML
//we need to pass a string which is actually tag name we want to create and this creates a DOM object and this DOM object is not yet in DOM itself(it's nowhere on our webpage yet)
message.classList.add("cookie--message");
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML = `We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message); //prepend adds element as first child of header element(in this case)i'e adds at very beggining of header
header.append(message); //adds message element as last child of header element i'e adds at very last of header
// above message element instead of being two times in our DOM is rather only once because it's now a live element living in DOM and it can't be present at two places therefore the append method didn't insert message element again because it was inserted already by prepend method but it only moved it from top to bottom thus prepend and append can also be used to move elements in DOM

// if we want to insert multiple copies of same element into DOM then we first need to copy first element
// header.append(message.cloneNode(true));
// header.before(message); //this will insert element before header(as sibling)
// header.after(message); //this will insert element after header(as sibling)

// Delete elements //
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();//this method is recently included javascript
    message.parentElement.removeChild(message); //same as above
  });

// Styles //
// using style property only works for inline styles
// message.style.backgroundColor = "pink"; //these styles are inline styles
// message.style.width = "90%"; //these styles are inline styles
// we can also read style property if it is inline
// console.log(message.style.backgroundColor); //gives background color because it has an inline style background color
// console.log(message.style.height); //gives nothing because it has no inline style as height
// we can't use above style property to read style that is hidden inside of a class

// console.log(getComputedStyle(message)); //gives an abject which contains all style properties of element
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes //
// const logo = document.querySelector(".nav__logo");
// logo variable contains all attributes of selected element
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.src); //different from what we have in our html file because url given by logo.src is absolute and the url we have used is only relative to our folder in which we have stored our image
// console.log(logo.className); //instead of class we have to write classname to access class attribute because of historical reasons
// non standard attributes don't work
// console.log(logo.designer); //gives undefined because it's non standard

// but we can access non standard attributes using getattribute
// console.log(logo.getAttribute("designer"));

// we can also set attributes
// logo.alt = "beautiful minimalist logo";

// logo.setAttribute("Company", "Bankist"); //sets attribute Company='Bankist'
// we can get url of logo same as url we have in our html file by using getAttribute
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href); //returns absolute href
// console.log(link.getAttribute("href")); //returns href as written in html(i'e #)

// Data Attributes //
// Attributes starting with name data- are data attributes
// these special attributes are always stored in dataset object
//name after data- should be in camelcase
// console.log(logo.dataset.versionNumber); //gives 3.0

// Classes //

// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c", "j");
// logo.classList.contains("c", "j");

// logo.className = "adnan"; //don't use this because it will overwrite all existing classes and allows us to put only one class on any element

// implementing smooth scrolling //

// Events //

// const h1 = document.querySelector("h1");
// const alertHI = function (e) {
//   alert("addeventlistener: Great! You are reading the heading :D");
// h1.removeEventListener("mouseenter", alertHI); //removes eventlistener
// };
// h1.addEventListener("mouseenter", alertHI);
// setTimeout(() => h1.removeEventListener("mouseenter", alertHI), 3000);
// old way
// h1.onmouseenter = function (e) {
//   alert("addeventlistener: Great! You are reading the heading :D");
// };

//events are generated not at target element but at parent element to know more about this topic watch video 185

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomcolor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomcolor());
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomcolor();
//   console.log("link", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// stop propagation
// e.stopPropagation();//not a good idea to use this(generally)
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomcolor();
//   console.log("container", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomcolor();
//     console.log("nav", e.target, e.currentTarget);
//   }
//true
// ); //now .nav is listening to events while they travel down DOM and other two are listening to events while they travel up therefore .nav listens events first
// e.currenttarget gives element to which eventhandler is attached
// e.target gives element at which event happened
//eventlistener only picks events in bubbling phase not in capturing phase by default but if we want to catch events in capturing phase then we need to add third argument in addeventlistener function(true)

// DOM traversing //

// const h1 = document.querySelector("h1");
// // going downwards:child
// console.log(h1.querySelectorAll(".highlight")); //gives all elements inside h1 that contain highlight class and it can go as deep in DOM tree as required
// console.log(h1.childNodes);
// console.log(h1.children); //gives htmlcollection which is a live collection and we only get elements that are inside h1 but this only works for direct children
// h1.firstElementChild.style.color = "white"; //selects first element child of h1
// h1.lastElementChild.style.color = "orangered"; //selects last element child of h1

// Going upwards: parents //
// console.log(h1.parentNode); //gives direct parent
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)"; //selects closest parent element of h1 with class .header
// h1.closest("h1").style.background = "var(--gradient-primary)"; //the closest element to h1 with element name h1 is h1 itself therefore h1 itself is selected

//Going sideways : siblings //
// In javascript we can only access direct siblings i'e previous one and next one
// console.log(h1.previousElementSibling); //gives previous sibling(sibling before h1)
// console.log(h1.nextElementSibling); //gives sibling after h1
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children); //gives all siblings of h1 including itself(htmlcollection)
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

// lifecycle of DOM events //

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built", e);
});
window.addEventListener("load", function (e) {
  console.log("page fully loaded", e);
});
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

// we should not put javascript file src in html head
