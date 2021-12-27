window.addEventListener("DOMContentLoaded", () => {
  // 1
  const circleButton = document.querySelector("#make-circle-blue");
  const circleDiv = document.querySelector("#blue-border-circle");

  circleButton.addEventListener("click", () => {
    // circle.classList.add("blue-fill");
    // circle.setAttribute("class", "blue-fill");
    circle.className = "blue-fill";
  });

  //2
  const checkbox = document.querySelector("#will-not-check");
  checkbox.addEventListener("click", (e) => {
    e.preventDefault();
  });

  const bananaButton = document.querySelector("#change-bananas-status");
  const bananaTextDiv = document.querySelector("#bananas-div");
  const bananaImageDiv = document.querySelector("#bananas-image-div");

  bananaButton.addEventListener("click", () => {
    bananaTextDiv.innerHTML = "No Bananas Today!";
    bananaImage = document.createElement("img");
    bananaImage.src = "./images/no-bananas.png";
    if (bananaImageDiv.children.length) return;
    bananaImageDiv.append(bananaImage);
  });

  const cookieButton = document.querySelector("#store-cookie");
  const cookieInput = document.querySelector("#fav-cookie");

  cookieButton.addEventListener("click", () => {
    document.cookie = `favCookie=${cookieInput.value};Max-Age=30`;
  });
  if (document.cookie) {
    const favCookieValue = document.cookie.split("=")[1];
    cookieInput.value = favCookieValue;
  }
  //5
  const unorderedList = document.querySelector(".pie-list");
  const pieInput = document.querySelector("#pie-type");
  const pieButton = document.querySelector("#save-pie");

  pieButton.addEventListener("click", () => {
    if (pieInput.value && unorderedList.children.length < 5) {
      const pieLi = document.createElement("li");

      pieLi.innerText = pieInput.value;
      console.log(pieLi);
      unorderedList.appendChild(pieLi);
      pieInput.value = "";
    }
  });

  //6
  const iceCreamInput = document.querySelector("#fav-ice-cream");
  const iceCreamButton = document.querySelector("#save-ice-cream");

  iceCreamButton.addEventListener("click", () => {
    localStorage.setItem("fav-flav", iceCreamInput.value);
  });

  if (localStorage.getItem("fav-flav")) {
    iceCreamInput.value = localStorage.getItem("fav-flav");
  }

  const appleButton = document.querySelector("#add-apple");
  const orangeButton = document.querySelector("#add-orange");
  const emptyBasketButton = document.querySelector("#reset-basket");
  const fruitBasketDiv = document.querySelector("#fruit-storage");
  const totalFruit = document.querySelector("#total-fruit");
  let fruitCount = 0;

  appleButton.addEventListener("click", () => {
    if (fruitCount >= 25) return;
    // fruitBasketDiv.innerHTML += "A";
    // fruitBasketDiv.append("A");
    fruitBasketDiv.innerText += "A";
    totalFruit.innerText = fruitCount +=1;
  });
  orangeButton.addEventListener("click", () => {
    if (fruitCount >= 25) return;
    fruitBasketDiv.innerText += "B";
    fruitCount++;
    totalFruit.innerText = fruitCount;
  });
  emptyBasketButton.addEventListener("click", () => {
    fruitCount = 0;
    totalFruit.innerText = fruitCount;
    fruitBasketDiv.innerText = "";
  });

  document
    .querySelector("#bubble-maker")
    .addEventListener("click", (banana) => {
      banana.stopPropagation();
    });

  const dictionaryButton = document.querySelector("#dictionary-fetch");
  const resultsArea = document.querySelector("#results-area");

  dictionaryButton.addEventListener("click",()=>{
  const dictUl = document.createElement("ul");
  const fetchedData = fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/dictionary"
  )
    .then((res) => res.json())
    .then((res) => {
      return [
        `Word: ${res[0].word}`,
        `Origin: ${res[0].origin}`,
        `Origin: ${res[0].meanings[0].definitions[0].definition}`,
        `Example: ${res[0].meanings[0].definitions[0].example}`,
      ];
    });

  fetchedData.then((res) =>
    res.forEach((ele) => {
      const listItem = document.createElement("li");
      listItem.innerText = ele;
      dictUl.append(listItem);
    })
  );

  resultsArea.append(dictUl);

  })
});
