var liList = document.querySelectorAll('li')
/* ----------------------
  the forEach version
 -----------------------*/
liList.forEach(function(li) {
  li.addEventListener('click', function() {
    // show/hide paragraph
    this.children[1].classList.toggle('hide')
    // rotate arrow
    this.children[0].children[1].classList.toggle('active')
  })
})

/* ----------------------
  the for-loop version
 -----------------------*/

// for (let i = 0; i < liList.length; i++) {
//   liList[i].addEventListener('click', function() {
//     // show/hide paragraph
//     this.children[1].classList.toggle('hide')
//     // rotate arrow
//     this.children[0].children[1].classList.toggle('active')
//   }) 
// }

//-----------------------------------------
// var ul = document.querySelector('ul')

// ul.addEventListener('click', function(e) {
//   var elClicked = e.target
//   console.log(this)
//   console.log(elClicked.closest(e.target))

  // if (elClicked.className === 'arrow' || elClicked.className ===  'arrow active') {
  // // if (elClicked.closest('li')) {
  //   // debugger
  //     // console.log(arrows)
  //     span.classList.toggle('active')
  //     para.classList.toggle('hide')
  //   }
// })