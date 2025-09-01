// ========== PART 1: JavaScript Basics ==========
// Variable declarations and conditionals

/**
 * Checks if a user is eligible to vote based on their age
 * Demonstrates variable declarations and conditional statements
 */
function checkAge() {
    // Variable declaration
    let age = parseInt(document.getElementById('ageInput').value);
    let output = "";
    
    // Conditional logic
    if (isNaN(age)) {
        output = "Please enter a valid age.";
    } else if (age >= 18) {
        output = `You are ${age} years old. You are eligible to vote!`;
    } else {
        output = `You are ${age} years old. You are not yet eligible to vote.`;
    }
    
    // DOM interaction to display result
    document.getElementById('ageOutput').textContent = output;
}

// ========== PART 2: JavaScript Functions ==========
// Custom functions for reusability

/**
 * Converts Fahrenheit to Celsius
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} Temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

/**
 * Formats text based on selected option
 * @param {string} text - Text to format
 * @param {string} formatType - Format type: 'uppercase', 'lowercase', or 'capitalized'
 * @returns {string} Formatted text
 */
function formatText(text, formatType) {
    switch(formatType) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'capitalized':
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        default:
            return text;
    }
}

/**
 * Uses the fahrenheitToCelsius function to convert and display temperature
 */
function convertTemperature() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        document.getElementById('temperatureOutput').textContent = 
            `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('temperatureOutput').textContent = "Please enter a valid number.";
    }
}

/**
 * Uses the formatText function to format and display text
 */
function formatString() {
    const text = document.getElementById('stringInput').value;
    const formatType = document.getElementById('formatOption').value;
    const formattedText = formatText(text, formatType);
    document.getElementById('stringOutput').textContent = formattedText;
}

// ========== PART 3: JavaScript Loops ==========
// Loop examples

/**
 * Generates a multiplication table using a for loop
 */
function generateTable() {
    let number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
        document.getElementById('tableOutput').textContent = "Please enter a valid number.";
        return;
    }
    
    let output = `Multiplication table for ${number}:<br>`;
    // For loop example
    for (let i = 1; i <= 10; i++) {
        output += `${number} × ${i} = ${number * i}<br>`;
    }
    document.getElementById('tableOutput').innerHTML = output;
}

/**
 * Creates a countdown using a while loop
 */
function startCountdown() {
    let count = parseInt(document.getElementById('countdownInput').value);
    if (isNaN(count) || count < 1) {
        document.getElementById('countdownOutput').textContent = "Please enter a valid number greater than 0.";
        return;
    }
    
    let output = "";
    // While loop example
    while (count >= 0) {
        output += `Count: ${count}<br>`;
        count--;
    }
    output += "Countdown complete!";
    document.getElementById('countdownOutput').innerHTML = output;
}

// ========== PART 4: DOM Manipulation ==========
// DOM interactions

/**
 * Changes text content - DOM Interaction 1
 */
function changeText() {
    const textElement = document.getElementById('changeableText');
    textElement.textContent = "The text has been changed successfully!";
}

/**
 * Changes text color - DOM Interaction 2
 */
function changeColor() {
    const textElement = document.getElementById('changeableText');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    textElement.style.color = randomColor;
}

/**
 * Toggles text visibility - DOM Interaction 3
 */
function toggleVisibility() {
    const textElement = document.getElementById('changeableText');
    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
    } else {
        textElement.style.display = 'none';
    }
}

/**
 * Adds a new item to the list - DOM Interaction 4
 */
function addListItem() {
    const input = document.getElementById('newItemInput');
    const list = document.getElementById('itemList');
    
    if (input.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.innerHTML = `${input.value} <button onclick="removeItem(this)">Remove</button>`;
        list.appendChild(newItem);
        input.value = '';
    }
}

/**
 * Removes an item from the list - DOM Interaction 5
 * @param {HTMLElement} button - The button element that was clicked
 */
function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

// DOM Interaction 6: Event handling with mouse events
document.getElementById('colorBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('eventOutput').textContent = "Mouse over event triggered! Box color changed.";
});

document.getElementById('colorBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#6e8efb';
    document.getElementById('eventOutput').textContent = "Mouse out event triggered! Box color reset.";
});

// Additional DOM Interaction: Change page title on focus/blur
window.addEventListener('focus', function() {
    document.title = "JavaScript Fundamentals Assignment";
});

window.addEventListener('blur', function() {
    document.title = "Come back! 😊";
});