(function showContent(tab) {

  var tabs = document.querySelector('#tabs')
  var links = document.querySelectorAll('.link')
  var content = document.querySelectorAll('.content')

  tabs.addEventListener('click', function(e) {
    if (e.target.localName === 'a') {
      var showTab = document.querySelector(e.target.hash)
      
      // remove .active if present
      links.forEach(function(link) {
        link.classList.remove('active')
      })

      // re-hide tab contents
      content.forEach(function(div) {
        div.style.display = 'none'
      })

      e.target.classList.add('active')      
      showTab.style.display = 'block';;
    }
  })
})()