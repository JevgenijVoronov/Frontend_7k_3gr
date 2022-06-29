// local variables:

// button click event handler:

// saveToLocalStorage:

// LoadFromLocalStorage:

// clear btn click function:

// operator btn click function:

// symbol btn click function:

// equal btn click function:

// number btn click function:

// keyboard event enter:
let keepScoreString = "";

const updateDisp = (input) => {
    let output = document.getElementById("outputs")

    if (input == "C") {
        output.innerHTML = ""
        keepScoreString = "";
    } else if (input == "=") {
        console.log(Number(keepScoreString))
    } else{
        output.innerHTML += input;
        keepScoreString += input;
    }
};

const number = (number) => {
    console.log(number.path[0].innerHTML)
    updateDisp(number.path[0].innerHTML)
} 

const btn = document.getElementsByClassName("btn");
for (let pressed of btn) [
    pressed.addEventListener("click", number)
]

document.addEventListener("keydown", (button) => {
    var name = button.key;
    console.log(name)
})



function test(btn) {
    console.log(btn.path[0].innerHTML)
}


const numberButtons = document.querySelectorAll('[number]')
for (let pressed of numberButtons) [
    pressed.addEventListener("click", function test() {console.log("numberButtons")})
]


