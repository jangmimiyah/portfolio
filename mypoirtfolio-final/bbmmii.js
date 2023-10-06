function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please enter valid values for age, weight, and height.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiCategory = getBMICategory(bmi);

    const resultText = `Your BMI: ${bmi.toFixed(2)} - ${bmiCategory}`;
    document.getElementById("result").textContent = resultText;
}

function getBMICategory(bmi) {
    if (bmi < 16) {
        return "Severely Underweight";
    } else if (bmi >= 16 && bmi < 16.9) {
        return "Underweight";
    } else if (bmi >= 17 && bmi < 18.4) {
        return "Mildly Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
        return "Obese (Class 1)";
    } else if (bmi >= 35 && bmi < 39.9) {
        return "Obese (Class 2)";
    } else {
        return "Severely Obese (Class 3)";
    }
}

function goBack() {
    const firstPageURL = "damn.html";
    window.location.href = firstPageURL;
}
document.getElementById("customBackButton").addEventListener("click", goBack);