var figArr = document.querySelectorAll('figure')
var prevBtn = document.getElementById('prev-btn')
var nextBtn = document.getElementById('next-btn')
var index = 0

figArr[index].style.display = 'block'

nextBtn.addEventListener('click', function(){
  index = index + 1

  if (index === figArr.length) {
    index = 0
  }
  
  slideFig()
})

prevBtn.addEventListener('click', function() {
  index = index - 1
  
  if (index < 0) {
    index = figArr.length - 1
  }

  slideFig()
})

function slideFig() {
  for (let i = 0; i < figArr.length; i++) {
    figArr[i].style.display = 'none'
  }

  figArr[index].style.display = 'block'
}