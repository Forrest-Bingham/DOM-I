const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let Links = document.querySelectorAll("a");
console.log(Links);
//Links.setAttribute(siteContent["nav"]);
Links[0].textContent = siteContent["nav"]["nav-item-1"];
Links[1].textContent = siteContent["nav"]["nav-item-2"];
Links[2].textContent = siteContent["nav"]["nav-item-3"];
Links[3].textContent = siteContent["nav"]["nav-item-4"];
Links[4].textContent = siteContent["nav"]["nav-item-5"];
Links[5].textContent = siteContent["nav"]["nav-item-6"];

Links.forEach(element => {
  element.style.color = "green";
});

let ctaImage = document.getElementById("cta-img");
console.log(ctaImage);
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector("h1");
console.log(ctaH1);
//ctaH1.setAttribute("h1", siteContent["cta"]["h1"]);
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let Titles = document.querySelectorAll("h4");
console.log(Titles);

let Texts = document.querySelectorAll("p");
console.log(Texts);

Titles[0].textContent = siteContent["main-content"]["features-h4"];
Texts[0].textContent = siteContent["main-content"]["features-content"];

Titles[1].textContent = siteContent["main-content"]["about-h4"];
Texts[1].textContent = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

Titles[2].textContent = siteContent["main-content"]["services-h4"];
Texts[2].textContent = siteContent["main-content"]["services-content"];

Titles[3].textContent = siteContent["main-content"]["product-h4"];
Texts[3].textContent = siteContent["main-content"]["product-content"];

Titles[4].textContent = siteContent["main-content"]["vision-h4"];
Texts[4].textContent = siteContent["main-content"]["vision-content"];

Titles[5].textContent = siteContent["contact"]["contact-h4"];
Texts[5].textContent = siteContent["contact"]["address"];
Texts[6].textContent = siteContent["contact"]["phone"];
Texts[7].textContent = siteContent["contact"]["email"];

Texts[8].textContent = siteContent["footer"]["copyright"];

const Home = document.createElement("a");
Home.textContent = "Home";

const parentElement = document.querySelector("nav");
parentElement.prepend(Home);

Home.style.color = "green";

const Demo = document.createElement("a");
Demo.textContent = "Demo";

parentElement.appendChild(Demo);

Demo.style.color = "green";
