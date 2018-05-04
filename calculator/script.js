var display = document.getElementById('display')
var wrapper = document.getElementById('wrapper')

wrapper.addEventListener('click', function(e){
  var el = e.target
  // data- attribute to differentiate numbers from !numbers
  var keyAction = el.dataset.action
  var keyType = el.dataset.type
  var displayed = display.textContent

  // number will have no action
  if(!keyAction) {
    // remove leading zero
    if (displayed === '0' /*|| keyType === 'operator'*/) {
      display.textContent = el.textContent
    } else {
      display.textContent += el.textContent
    }
  }

  // append decimal
  if (keyAction === 'decimal') {
    if (displayed === '0') {
      display.textContent += el.textContent      
    } else {
    display.textContent = displayed + '.'
    }
    if (displayed.endsWith('.') && keyType) {
      display.textContent = displayed + '0' + el.textContent
    }
  }
  // if (action === 'decimal' && displayed !== '0') {
  //   display.textContent += el.textContent
  // }

  /**********multi decimals*************
   * **********************************/
  // if (displayed.includes('.')) {
  //   display.textContent = displayed
  // }
  // if (action === 'decimal' && displayed !== '0') {
  //   display.textContent += el.textContent
  // }

  if (keyType) {
  // prevent double operator signs  
  var lastChar = el.textContent
    if (displayed.endsWith('–') || 
        displayed.endsWith('+') || 
        displayed.endsWith('×') || 
        displayed.endsWith('÷') ||
        displayed.endsWith('.')) {
      displayed = displayed.slice(0, -1)
      display.textContent = displayed + el.textContent
    }
     else {
      display.textContent += el.textContent
    }
  }

  if(keyAction === 'delete') {
    del()
  }

  if (keyAction === 'clear') {
    display.textContent = 0
  }
})

function del() {
  if (display.textContent !== '0') {
    display.textContent = display.textContent.slice(0, -1)
  }
  if (display.textContent.length === 0) {
    display.textContent = 0
  }
}

// no multi decimals