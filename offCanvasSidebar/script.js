var sidebarToggle = document.getElementById('sidebar-toggle');
var sidebar = document.getElementById('nav')
var main = document.getElementById('main')
var close = document.getElementById('close')

sidebarToggle.addEventListener('click', function() {
  sidebar.style.transform = 'translateX(0)'
  main.style.marginLeft = '12em'
  
})

close.addEventListener('click', function() {
  sidebar.style.transform = 'translateX(-12em)'
  main.style.marginLeft = '0'  
})
