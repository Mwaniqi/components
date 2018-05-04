var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
var input = document.getElementById('input')
var dialog = document.getElementById('dialog')

function loadDialog() {
  for (var i = 0; i < countries.length; i++) {
    dialog.innerHTML += 
      `<div class='country'>${countries[i]}</div>`
  }
}

function clearDialog() {
  dialog.innerHTML = ''
}

input.addEventListener('click', function() {
  dialog.classList.add('show')
})

input.addEventListener('input', function() {
  var value = input.value.toLowerCase()

  clearDialog()
  
  countries.forEach(function(country){
    if (country.toLowerCase().startsWith(value)) {
    dialog.innerHTML += 
      `<div class='country'>${country}</div>`
    }
  })


  // var countryArr = document.querySelectorAll('.country')
  // })
  // var filtered = countries.filter(function(str) {
  //   str = str.toLowerCase()
  //   return str.startsWith(value.toLowerCase())
  // }) 

  // for (var i = 0; i < filtered.length; i++) {
    // dialog.innerHTML += `
  //     <div class='country'>${filtered[i]}</div>
  //   `
  // }

})

dialog.addEventListener('click', function (e) {
  if (e.target.className === 'country') {
    input.value = e.target.innerText
    dialog.classList.remove('show')
    // clearDialog()
  }
})

document.addEventListener('click', function (e) {
  if (e.target !== input
    && e.target.className !== 'country'
    && e.target.innerText !== 'Submit') {
    dialog.classList.remove('show')
  }
})

loadDialog()