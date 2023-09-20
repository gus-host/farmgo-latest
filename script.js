const productNavLinks = document.querySelector(".main-nav-link-products");
const productsIcon = document.querySelector(".products-icon");
const navCta = document.querySelector(".nav-cta");
const footerInput = document.querySelector(".footer-input");
const form = document.querySelector(".footer-form");
const footer = document.querySelector("footer");
const newsLetter = document.querySelector("register-newsletter");
// document.querySelector(".footer-btn").addEventListener("click", postEmail);

// for posting users newletter emails
const postEmail = function () {
  const addEmail = {
    email: footerInput.value,
  };
  fetch("https://mail.farmgo.co/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "User 1",
      email: footerInput.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data;
    });
};

function formSubmit(event) {
  postEmail();
  footerInput.value = "";
  footer.classList.add("success");
  setTimeout(() => {
    footer.classList.remove("success");
  }, "5000");
  event.preventDefault();
}

form.addEventListener("submit", formSubmit);

/*****************************/

const image = document.querySelector(".logo");
image.addEventListener("click", () => {
  image.animate({ opacity: 0 }, { duration: 300, easing: "ease-out" });
  window.location.href = "/index.html";
});

function hover(element) {
  element.forEach(function (link) {
    link.addEventListener("mouseenter", (e) => {
      link.style.color = "#1daa62";
      navCta.style.color = "#fff";
    });
    link.addEventListener("mouseleave", (e) => {
      link.style.color = "#484848";
      navCta.style.color = "#fff";
    });
  });
}

const sublinksOpen = (e) => {
  products.style.opacity = "1";
  products.style.pointerEvents = "auto";
  products.style.visibility = "visible";
  // box-shadow: 0 1.2rem 4.2rem -0.4rem #18274B1F;
  products.style.boxShadow = "0 1.2rem 4.2rem -0.4rem #18274B1F";
  products.style.boxShadow = "0 1.2rem 4.2rem -0.4rem #18274B1F";
  products.style.zIndex = "99";
};
const sublinksClose = (e) => {
  products.style.opacity = "0";
  products.style.pointerEvents = "none";
  products.style.visibility = "hidden";
};

function hoverProduct(element) {
  element.addEventListener("mouseenter", sublinksOpen);

  element.addEventListener("mouseleave", sublinksClose);
}

function changeIcon(element) {
  element.addEventListener("mouseenter", (e) =>
    productsIcon.setAttribute("name", "caret-down-outline")
  );

  element.addEventListener("mouseleave", (e) =>
    productsIcon.setAttribute("name", "caret-forward-outline")
  );
}

const header = document.querySelector(".header");
hover(document.querySelectorAll(".main-nav-link"));

const products = document.querySelector(".product-sublinks");

hoverProduct(productNavLinks);
changeIcon(productNavLinks);
