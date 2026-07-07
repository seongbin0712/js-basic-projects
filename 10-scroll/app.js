// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
})

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link")
  } else {
    topLink.classList.remove("show-link")
  }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach( (link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault(); // <a></a> 링크 이동 막음
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // 이벤트 발생한 a 태그의 href="#name" # 제외하고 나머지 문자열 추출
    const element = document.getElementById(id); // 뽑아낸 문자열로 이동할 section 가져오기

    const navHeight = navbar.getBoundingClientRect().height; // navbar의 높이를 navHeight에 저장 (82)
    const containerHeight = linksContainer.getBoundingClientRect().height; //  links-container의 높이를 containerHeight에 저장 
    const fixedNav = navbar.classList.contains("fixed-nav"); // navbar가 상단에 고정된 상태인지 확인 (true or false)
    let position = element.offsetTop - navHeight; // 움직여야하는 섹션의 top - navHeight (navbar의 높이만큼)
    
    if (!fixedNav) { // navbar가 고정되지 않은 경우
      position = position - navHeight;
    }
    
    if (navHeight > 82) { // linksContainer가 메뉴에서 펼쳐져 있을 경우
      position = position + containerHeight;
    }

    // css scroll-bahavior: smooth;
    window.scrollTo({
      left: 0,
      top: position,
    });

    // close
    linksContainer.style.height = 0; // 메뉴 닫힘
  })
})