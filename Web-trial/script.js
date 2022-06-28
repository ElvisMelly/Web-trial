
  const name = document.getElementById('name')``
  const form = document.getElementById('frm')
  const regno= document.getElementById('regNo')
  const phoneno= document.getElementById('phoneNo') 
  const errorElement = document.getElementById('error')
  form.addEventListener('Submit',(e))
    let Messages=[]
    if(name.value==='' || name.value==null){
      Messages.push('Name is required')
    }
    if(regNo.value==='' || regNo.value==null) {
        Messages.push('Phone number is required')
      }
    if(regNo.value.length<=6) {
      Messages.push('RegNo must be longer than 6 characters')
    }
    if(regNo.value.length>=20) {
      Messages.push('RegNo must be less than 20 characters')
    }
    if(phoneNo.value==='' || PhoneNo.value==null) {
      Messages.push('Phone number is required')
    }
    if(Messages.length>0) {
      e.preventDefault()
      errorElement.innerText = Messages.join(',')
    }
