function scaleCalc() {
    updateOutput("dexterity", "acrobatics", "acrobaticsCheckbox");
    updateOutput("wisdom", "animalHand", "animalHandCheckbox");
    updateOutput("intelligence", "arcana", "arcanaCheckbox");
    updateOutput("strength", "athletics", "athleticsCheckbox");
    updateOutput("charisma", "deception", "deceptionCheckbox");
    updateOutput("intelligence", "history", "historyCheckbox");
    updateOutput("wisdom", "insight", "insightCheckbox");
    updateOutput("charisma", "intimidation", "intimidationCheckbox");
    updateOutput("intelligence", "investigation", "investigationCheckbox");
    updateOutput("wisdom", "medicine", "medicineCheckbox");
    updateOutput("intelligence", "nature", "natureCheckbox");
    updateOutput("wisdom", "perception", "perceptionCheckbox");
    updateOutput("charisma", "performance", "performanceCheckbox");
    updateOutput("charisma", "persuasion", "persuasionCheckbox");
    updateOutput("intelligence", "religion", "religionCheckbox");
    updateOutput("dexterity", "soh", "sohCheckbox");
    updateOutput("dexterity", "stealth", "stealthCheckbox");
    updateOutput("wisdom", "survival", "survivalCheckbox");
};

function updateOutput(inputId, outputId, checkboxId) {
    var inputValue = parseInt(document.getElementById(inputId).value);
    var outputElement = document.getElementById(outputId);
    var outputText = '';
    
    // Retrieve proficiency bonus value
    var proficiencyBonus = parseInt(document.getElementById("proficiencyBonus").value);

    if (inputValue < 2) {
        outputText = '-5';
    } else if (inputValue >= 2 && inputValue <= 3) {
        outputText = '-4';
    } else if (inputValue >= 4 && inputValue <= 5) {
        outputText = '-3';
    } else if (inputValue >= 6 && inputValue <= 7) {
        outputText = '-2';
    } else if (inputValue >= 8 && inputValue <= 9) {
        outputText = '-1';
    } else if (inputValue >= 10 && inputValue <= 11) {
        outputText = '0';
    } else if (inputValue >= 12 && inputValue <= 13) {
        outputText = '+1';
    } else if (inputValue >= 14 && inputValue <= 15) {
        outputText = '+2';
    } else if (inputValue >= 16 && inputValue <= 17) {
        outputText = '+3';
    } else if (inputValue >= 18 && inputValue <= 19) {
        outputText = '+4';
    } else if (inputValue === 20) {
        outputText = '+5';
    } else {
        outputText = 'error';
    }

    // Check if checkbox is checked and add proficiency bonus
    if (document.getElementById(checkboxId).checked) {
        outputText = parseInt(outputText) + proficiencyBonus;
    }

    outputElement.textContent = outputText;
}

// Event listener for the skills dropdown
document.getElementById("skillsDropdown").addEventListener("change", function() {
    var selectedSkill = this.value;
    
    if (selectedSkill) {
        var proficiencyBonus = parseInt(document.getElementById("proficiencyBonus").value);
        var outputBox = document.getElementById("outputBox" + selectedSkill.charAt(0).toUpperCase() + selectedSkill.slice(1));
        var currentOutput = outputBox.textContent;
        var currentNumber = parseInt(currentOutput);
        
        if (!isNaN(currentNumber)) {
            var updatedNumber = currentNumber + proficiencyBonus;
            outputBox.textContent = updatedNumber;
        }
    }
});