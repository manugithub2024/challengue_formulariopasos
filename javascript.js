let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    const tabs = document.querySelectorAll(".tab");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    tabs.forEach(tab => tab.style.display = "none");
    
    tabs[n].style.display = "block";

    prevBtn.style.display = n === 0 ? "none" : "inline";
    nextBtn.textContent = n === tabs.length - 1 ? "Enviar" : "Siguiente";
    
    updateStepIndicator(n);
}
function nextPrev(step) {
    if (step === 1 && !validateForm()) return;

    const tabs = document.querySelectorAll(".tab");
    tabs[currentTab].style.display = "none";

    currentTab += step;

    if (currentTab >= tabs.length) {
        document.getElementById("regForm").submit();
    } else {
        showTab(currentTab);
    }
}

function validateForm() {
    const inputs = document.querySelectorAll(`.tab:nth-of-type(${currentTab + 1}) input`);
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("invalid");
            valid = false;
        } else {
            input.classList.remove("invalid");
        }
    });

    if (valid) {
        document.querySelectorAll(".step")[currentTab].classList.add("finish");
    }

    return valid;
}

function updateStepIndicator(n) {
    const steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === n);
    });
}
