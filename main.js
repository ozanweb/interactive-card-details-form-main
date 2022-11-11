const date = new Date()
const nameErr = document.getElementById('name-err')
const noErr = document.getElementById('no-err')
const dateErr = document.getElementById('date-err')



function validateName() {
  const nameInput = document.getElementById("name").value;
 
  if(nameInput.length < 1) {
    nameErr.innerHTML = "Name is required";
    return false
  }

  if(!nameInput.match(/^[A-Za-z]*\s{1}[A-Za-z]{2,}$/)) {
    nameErr.innerHTML = "Write full name";
    return false
  }
  nameErr.innerHTML = 'valid'
  return true

}

function validateNo() {
  const noInput = document.getElementById('no').value

  if(!noInput.match(/[0-9]/)) {
    noErr.innerText = 'wrong format, numbers only'
    return false
  }
  if(noInput.length > 16) {
    noErr.innerText = 'too long'
    return false
  }

  if(noInput.length > 0) {
    noErr.innerText = `enter ${16 - noInput.length} more digit(s) to complete`
    return false
  }


  
  noErr.innerText = ''
  return true
 
}

function monthValidate() {

  if(event.target.value.length > 2 || event.target.value > 12 || event.target.value[1] == 0) {
    event.target.value = ''
    dateErr.innerText = "Month can't be blank"
    return false
  }

  if(event.target.value < 2) {
    dateErr.innerText = "Month can't be blank"
    return false
  }
  
  dateErr.innerText = ''
  return true
 
}

function yearValidate() {
  const month = document.getElementById('mm')
  if(event.target.value > 99 || event.target.value.length > 2) {
    event.target.value = ''
    dateErr.innerText = "Year can't be blank"
    return false
  }
  if(event.target.value.length > 1) {
    if(month.value < parseInt(date.getMonth().toString()) && event.target.value == parseInt(date.getFullYear().toString().substring(2))) {
      event.target.value = ''
      month.value = ''
      dateErr.innerText = "Year can't be blank"
      return false
    } else {
      return true
    }
    
  }

  dateErr.innerText = ''
  return true
}

function cvcValidate() {
  
}









