

let one = localStorage.getItem("one") || 0;
let two = localStorage.getItem("two") || 0;
let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");
let result = document.getElementById("result");

let imageOneSelected = document.getElementById("imageOneSelected")
let imageTwoSelected = document.getElementById("imageTwoSelected")
playerOneScore.textContent = JSON.parse(one);
playerTwoScore.textContent = JSON.parse(two);
let computerSelected = document.getElementById("computerSelected")
let personSelected = document.getElementById("personSelected")
const selectionDiv = document.getElementById("selectionDiv");
const resultDiv = document.getElementById("resultDiv");

let mainScreen = document.getElementById("mainScreen");
let hurrayScreen = document.getElementById("hurrayScreen");
let next=document.getElementById("next")
hurrayScreen.classList.add("hidden")
resultDiv.classList.add("hidden")
next.classList.add("hidden")
function textToDisplay(num) {
    if (num == 0) {
        return "Rock"
    }
    if (num == 1) {
        return "Paper"
    }
    if (num == 2) {
        return "Scissors"
    }

}
function imageToDisplay(num) {
    if (num == 0) {
        return "https://husseinhewehii.github.io/Rock_Paper_Scissors/rock.png"
    }
    if (num == 1) {
        return "https://husseinhewehii.github.io/Rock_Paper_Scissors/paper.png"
    }
    if (num == 2) {
        return "https://husseinhewehii.github.io/Rock_Paper_Scissors/scissors.png"
    }

}
function handleNext() {
    next.classList.add("hidden")
    mainScreen.classList.add("hidden")
    hurrayScreen.classList.remove("hidden")
}
function playAgain() {
    hurrayScreen.classList.add("hidden")
    resultDiv.classList.add("hidden")
    mainScreen.classList.remove("hidden")
    next.classList.add("hidden")
    selectionDiv.classList.remove("hidden")
    
    personSelected.classList.remove("shadow")
    computerSelected.classList.remove("shadow")

}

function handlePlay(a) {
    resultDiv.classList.remove("hidden")
    selectionDiv.classList.add("hidden")
    next.classList.remove("hidden")
    let ai = Math.floor(Math.random() * 3)

    imageOneSelected.src = imageToDisplay(a)
    imageTwoSelected.src = imageToDisplay(ai)
    if (ai === a) {
        result.textContent = "Draw"
    }
    //rock wins over scissor
    else if (ai === 2 && a === 0) {
        one++
        playerOneScore.textContent = one;
        personSelected.classList.add("shadow")
        result.textContent = "You Win"
    } else if (ai === 0 && a === 2) {
        two++
        playerTwoScore.textContent = two;
        computerSelected.classList.add("shadow")
        result.textContent = "You Loose"
    }
    //paper wins over rock
    else if (ai === 0 && a === 1) {
        one++
        playerOneScore.textContent = one;
        personSelected.classList.add("shadow")
        result.textContent = "You Win"
    } else if (ai === 1 && a === 0) {
        two++
        playerTwoScore.textContent = two;
        computerSelected.classList.add("shadow")
        result.textContent = "You Loose"
    }
    //scissor wins over papper
    else if (ai === 1 && a === 2) {
        one++
        playerOneScore.textContent = one;
        personSelected.classList.add("shadow");
        result.textContent = "You Win"
    } else if (ai === 2 && a === 1) {
        two++
        playerTwoScore.textContent = two;
        computerSelected.classList.add("shadow")
        result.textContent = "You Loose"
    }

    localStorage.setItem("one", one)
    localStorage.setItem("two", two)

}

function handleRockClick() {
    handlePlay(0)
}

function handlePaperClick() {
    handlePlay(1)
}

function handleScissorClick() {
    handlePlay(2)
}


const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("modal");

function openModal() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Optional: Disable body scrolling
}

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Optional: Enable body scrolling
}

openModalButton.addEventListener("click", openModal);

modal.querySelector(".close-button").addEventListener("click", closeModal);
