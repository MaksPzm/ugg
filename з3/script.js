const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const buttonNo = document.querySelector(".no");
  const buttonYes = document.querySelector(".yes");
  const img = document.querySelectorAll(".img");
  const resultQuestion = document.querySelector(".result-question")
  console.log(img);
  

  buttonNo.addEventListener("mouseover", function() {
    buttonNo.style.left = `${random(10, 90)}%`;
    buttonNo.style.top = `${random(5,95)}%`;
    img.forEach((value) => {
        value.classList.remove('active');
        
    })
    img[1].classList.add('active');
  })

  buttonYes.addEventListener("mouseover", function() {
    img.forEach((value) => {
        value.classList.remove('active');
    })
    img[0].classList.add('active');
  })

  buttonYes.addEventListener("click", function() {
    img.forEach((value) => {
        value.classList.remove('active');
    })
    img[2].classList.add('active');
    img[2].setAttribute('style', 'width:400px; height:200px;');
    remove(buttonNo);
    remove(buttonYes);
    resultQuestion.classList.add('active');
  })

  function remove(rem) {
    rem.classList.add('hidden');
  }
