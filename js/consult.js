const scriptURL = 'https://script.google.com/macros/s/AKfycbwxE4H4q4NNOWbE0WFqkjR-anuI91RobNuEU9Yj5cqKyeTlfUfipN3OR5Ko1U4_ODnndg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST' ,  body:   new FormData(form)})
    .then(response => alert("Thank You! You have Successfully submitted the form."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message ))
})