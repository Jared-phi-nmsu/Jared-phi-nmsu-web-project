modeBtn = document.getElementById("modeButton");

modeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
    
    modeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

invertBtn = document.getElementById("modeInvertButton");

invertBtn.addEventListener("click", () => {

    document.body.classList.toggle("invert-mode");
});

netherBtn = document.getElementById("modeNetherButton");

netherBtn.addEventListener("click", () => {

    if (document.body.classList.contains("end-mode")) {
        document.body.classList.remove("end-mode");
        endBtn.textContent = "End Mode";
    }

    document.body.classList.toggle("nether-mode");

    netherBtn.textContent = document.body.classList.contains("nether-mode")
    ? "Overworld Mode"
    : "Nether Mode";
});

endBtn = document.getElementById("modeEndButton");

endBtn.addEventListener("click", () => {

    if (document.body.classList.contains("nether-mode")) {
        document.body.classList.remove("nether-mode");
        netherBtn.textContent = "Nether Mode";
    }

    document.body.classList.toggle("end-mode");
        
    endBtn.textContent = document.body.classList.contains("end-mode")
    ? "Overworld Mode"
    : "End Mode";
});

function testResults(form) {
    var inputValue = form.inputValue.value;

    if (inputValue.trim() === "") {
        alert("Please enter text before testing.");
        return;
    }

    alert("You typed: " + inputValue);
}

function resetResults(form) {
    return form.inputValue.value = "";
}


function submitResults(form) {
    var inputValue = form.inputValue.value;

    if (inputValue.trim() === "") {
        alert("Please enter feedback before submitting.");
        return;
    }

    alert("Feedback submitted successfully!");

    console.log(inputValue);

    resetResults(form);
}







