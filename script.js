let boxes = document.querySelectorAll('.box')
let paragraph = document.getElementById('para')
let container = document.querySelector(".msg-con")
let button = document.getElementById("btn")
let tryAgain = document.getElementById("btn1")



const winPattnern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = true;
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turnO == true) {
            box.innerText = 'X'
            turnO = false
        } else {
            box.innerText = '0'
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
})

const showinner =()=>{
paragraph.innerText="You Won The Game"
container.classList.remove("hide")
boxdisable()
}

const boxdisable = () => {
    for (box of boxes) {
        box.disabled = true
    }
}
const enableboxes=()=>{
for(box of boxes){
    box.disabled=false
    box.innerText=""
}
}
let restG=()=>{
    turnO =true
    enableboxes()
    container.classList.add('hide')
}

const checkWinner = () => {
    for (pattnern of winPattnern) {
        let pos1 = boxes[pattnern[0]].innerText
        let pos2 = boxes[pattnern[1]].innerText
        let pos3 = boxes[pattnern[2]].innerText
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 == pos2 && pos2 == pos3) {
                showinner()
               
            }
        }
    }
}
button.addEventListener("click",restG)
tryAgain.addEventListener("click",restG)