const output = document.querySelector('.output')

setInterval(showTime, 1000)

function showTime() {
    const date = new Date()

    const item = date.toLocaleTimeString()
    
    output.innerHTML = `${item}`
}

const darkModeBtns = document.querySelectorAll('.theme-btn')

darkModeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) {
        localStorage.setItem('backMe', 'enabled')
    } else {
        localStorage.setItem('backMe', 'disabled')
    }
    })
})


if(localStorage.getItem('backMe') === 'enabled') {
    document.body.classList.toggle('dark') 
}


const modal = document.querySelector('.modal')
function drawElement(id) {
    return document.getElementById(id)
}
function showModal() {
    modal.classList.add('show-modal')
}
drawElement('send').addEventListener('click', function(e) {
    e.preventDefault()
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "7cb8cd35208499",
        Password: "33515185e0599c",
        To: "godwinalugbin004@gmail.com",
        From: drawElement('form').elements['email'].value,
        Subject: "Send me message",
        Body: drawElement('form').elements['mes'].value + "<br>" +  drawElement('form').elements['name'].value  
    })
    .then(msg => showModal())
    .catch(msg => alert("An error occured"))
    
    setTimeout(drawElement('form').reset(), 2000)
    
})