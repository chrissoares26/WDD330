const name = document.getElementById('name')
const password =  document.getElementById('password')
const password1 = document.getElementById('password1')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6 || password.value.length >= 20 ) {
        messages.push('Password must be between 6 and 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (password != password1) {
        messages.push('Password should match')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})