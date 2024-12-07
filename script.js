document.getElementById("health-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const steps = parseInt(document.getElementById("steps").value) || 0;

    const bmi = calculateBMI(weight, height);
    const tips = generateHealthTips(age, bmi, steps);

    displayResults(bmi, tips);
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function generateHealthTips(age, bmi, steps) {
    let tips = [];
    if (bmi < 18.5) tips.push("Your BMI indicates you are underweight. Consider a nutrient-rich diet.");
    else if (bmi < 25) tips.push("Your BMI is normal. Maintain a balanced lifestyle!");
    else tips.push("Your BMI indicates you are overweight. Focus on exercise and healthy eating.");

    if (steps < 5000) tips.push("Aim for at least 10,000 steps daily for better health.");
    else tips.push("Great job on staying active!");

    if (age > 50) tips.push("Regular check-ups are essential. Stay active and eat healthily.");
    
    return tips;
}

function displayResults(bmi, tips) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Your BMI is: <strong>${bmi}</strong></p>
        <ul>
            ${tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
    `;
}
