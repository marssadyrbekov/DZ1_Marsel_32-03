//1 part

const inputGmail = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResults = document.querySelector('#gmail_result')

const writeGmail = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/

gmailBtn.onclick = () => {
    if (writeGmail.test(inputGmail.value)){
        gmailResults.innerHTML = `OK`
        gmailResults.style.color = 'green'
    } else {
        gmailResults.innerHTML = `Not ok`
        gmailResults.style.color = 'red'
    }
}

//2 part

let counter = 0
function moveBlock(){
    const child = document.querySelector('.child_block')
    child.style.left = `${counter}px`
    counter++
    if (counter <= 450){
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()