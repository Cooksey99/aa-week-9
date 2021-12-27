
window.addEventListener("DOMContentLoaded", () => {
  // Your code here
    
    // Problem 1
    const button = document.getElementById('make-circle-blue');
    const circle = document.getElementById('blue-border-circle');
    button.addEventListener('click', e => {
        circle.setAttribute('class', 'blue-fill');
    });
    
    // Problem 2
    const checkbox = document.getElementById('will-not-check');
    checkbox.addEventListener("click" , e => {
      e.preventDefault()
    });
    
    // Problem 3
    const noBanana = document.getElementById('change-bananas-status');
    
    noBanana.addEventListener('click', e => {
        document.getElementById('bananas-div').innerHTML = 'No Bananas Today!';
        document.createElementd('img').setAttribute('src', './images/no-bananas.png');
        let picture = document.getElementById('bananas-image-div');
        picture.appendChild(img);
    });
});

    const bananaButton = document.getElementById("change-bananas-status")
    bananaButton.addEventListener("click", e => {
      let textBanana = document.querySelector("#bananas-div")
      textBanana.innerHTML = `
      <code>No Bananas Today!</code>
      `
      let img = document.createElement("img")
      img.setAttribute("src", "./images/no-bananas.png")

      let bananaPic = document.getElementById("bananas-image-div")

      bananaPic.appendChild(img)
        
        
    // Problem 5
//    const pieButton = document.getElementById('save-pie')
//    const favInput = document.getElementById('fav-ice-cream');
//        
//    pieButton.addEventListener('click', e => {
//        if (favInput.value) {
//            let pie = document.createElement('li');
//            pie.innerText = favInput.value;
//            document.getElementsByClassName('pie-list').appendChild(pie);
//            favInput.value = '';
//        }
//    })
    const pieButton = document.querySelector('#save-pie')
    const pieInput = document.querySelector('#pie-type')
    const listOfPies = document.querySelector('.pie-list')

    pieButton.addEventListener('click', () => {
      if (pieInput.value) {
      let pieLi = document.createElement('li');
      pieLi.innerText = pieInput.value;
      listOfPies.appendChild(pieLi);
      pieInput.value = '';
      }
    })

    // Problem 6

    const iceCreamInput = document.querySelector('#fav-ice-cream')
    const iceCreamButton = document.querySelector('#save-ice-cream')

    if (window.localStorage.getItem('favIceCream')) {
      iceCreamInput.value = window.localStorage.getItem('favIceCream')
    }
    iceCreamButton.addEventListener('click', () => {
      window.localStorage.setItem('favIceCream', iceCreamInput.value)
    })
        
    // Problem 7
    const applesButton = document.getElementById('add-apple');
    const orangesButton = document.getElementById('add-orange');
    const emptyBasket = document.getElementById('reset-basket');
    const fruitBasket = document.getElementById('fruit-storage');
    const totalFruit = document.getElementById('total-fruit');
        
    let count = 0;
    if (count <= 25) {
        applesButton.addEventListener('click', e => {
            count += 1;
            fruitBasket.append(':apple:');
            totalFruit.innerText = count;
        })
    }

    // Problem 8
        
    // Problem 9
    
        
    }); // End


//
//window.addEventListener("DOMContentLoaded", () => {
//  // Your code here
//  const button = document.getElementById("make-circle-blue")
//  const circle = document.getElementById('blue-border-circle')
//  button.addEventListener('click', e => {
//    circle.setAttribute('class', 'blue-fill')
//  })
//
//
//  const checkbox = document.getElementById('will-not-check');
//    checkbox.addEventListener("click" , e => {
//      e.preventDefault()
//    })
//
//    const bananaButton = document.getElementById("change-bananas-status")
//    bananaButton.addEventListener("click", e => {
//      let textBanana = document.querySelector("#bananas-div")
//      textBanana.innerHTML = `
//      <code>No Bananas Today!</code>
//      `
//      let img = document.createElement("img")
//      img.setAttribute("src", "./images/no-bananas.png")
//
//      let bananaPic = document.getElementById("bananas-image-div")
//
//      bananaPic.appendChild(img)
//    })
//
//    const cookieInput = document.getElementById('fav-cookie')
//    const cookieButton = document.getElementById('store-cookie')
//
//    cookieButton.addEventListener('click', () => {
//      document.cookie = `favCookie=${cookieInput.value}`
//      // console.log(document.cookie)
//      // console.log(input.value)
//    })
//    let cookie = document.cookie.split('=')
//    if (cookie) {
//      cookieInput.value = cookie[1]
//    }
//
//    const pieButton = document.querySelector('#save-pie')
//    const pieInput = document.querySelector('#pie-type')
//    const listOfPies = document.querySelector('.pie-list')
//
//    pieButton.addEventListener('click', () => {
//      if (pieInput.value) {
//      let pieLi = document.createElement('li')
//      pieLi.innerText = pieInput.value
//      listOfPies.appendChild(pieLi)
//      pieInput.value = ''
//      }
//    })
//
//    const iceCreamInput = document.querySelector('#fav-ice-cream')
//    const iceCreamButton = document.querySelector('#save-ice-cream')
//
//    if (window.localStorage.getItem('favIceCream')) {
//      iceCreamInput.value = window.localStorage.getItem('favIceCream')
//    }
//    iceCreamButton.addEventListener('click', () => {
//      window.localStorage.setItem('favIceCream', iceCreamInput.value)
//    })
//
//  // "Add Apples" button id: add-apple
//  // "Add Oranges" button id: add-orange
//  // "Empty Basket" button id: reset-basket
//  // "Fruit Basket" div id: fruit-storage
//  // "Pieces of Fruit" span id: total-fruit
//
//  const addApples = document.querySelector('#add-apple');
//  const addOranges = document.querySelector('#add-orange');
//  const resetButton = document.querySelector('#reset-basket');
//  const fruitStorage = document.querySelector('#fruit-storage');
//  const fruitPieces = document.querySelector('#total-fruit');
//  let fruitCount = 0;
//  addApples.addEventListener('click', () => {
//    fruitCount += 1;
//    fruitStorage.append(':apple:')
//    fruitPieces.innerText = fruitCount;
//  })
//  addOranges.addEventListener('click', () => {
//    fruitCount += 1;
//    fruitStorage.append(':tangerine:')
//    fruitPieces.innerText = fruitCount;
//  })
//  resetButton.addEventListener('click', () => {
//    fruitCount = 0;
//    fruitStorage.remove()
//    fruitPieces.innerText = fruitCount;
//  })
//
//  const bubbleButton = document.querySelector('#bubble-maker')
//
//  bubbleButton.addEventListener('click', e => {
//    e.stopPropagation()
//  })
//
//  const fetchButton = document.querySelector('#dictionary-fetch')
//  const dictDiv = document.querySelector('#results-area')
//  const ul = document.createElement('ul')
//  dictDiv.appendChild(ul)
//
//  fetchButton.addEventListener('click', e => {
//    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
//    .then(res => res.json())
//    .then(res => {
//      const word = res[0]
//      createList(`Word: ${word.word}`)
//      createList(`Origin: ${word.origin}`)
//      createList(`Definition: ${word.meanings[0].definitions[0].definition}`)
//      createList(`Example: ${word.meanings[0].definitions[0].example}`)
//
//
//
//      console.log(word)
//    })
//
//    const createList = result => {
//      const wordList = document.createElement('li');
//      wordList.innerText = result;
//      ul.appendChild(wordList)
//    }
//  })
//});
//
//



