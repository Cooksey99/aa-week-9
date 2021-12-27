
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
      let pieLi = document.createElement('li')
      pieLi.innerText = pieInput.value
      listOfPies.appendChild(pieLi)
      pieInput.value = ''
      }
    })

    // Problem 6
    const iceCreamButton = document.getElementById('save-ice-cream');
        
    }); // End