function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    const errorSpan = document.getElementById('error');
    const temperatureValue = temperatureInput.value.trim();

    if (isNaN(temperatureValue) || temperatureValue === '') {
        errorSpan.textContent = 'Please enter a valid number.';
    } else {
        errorSpan.textContent = ''; // Clear any previous error message.
    }
}

function convertTemperature() {
    validateInput();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');

    let result = 0;
    let explanation = '';

    if (fromUnit === toUnit) {
        result = temperature;
        explanation = 'No conversion needed.';
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'kelvin') {
            result = temperature + 273.15;
            explanation = 'To convert Celsius to Kelvin, add 273.15.';
        } else if (toUnit === 'fahrenheit') {
            result = (temperature * 9/5) + 32;
            explanation = 'To convert Celsius to Fahrenheit, use the formula: (C × 9/5) + 32.';
        } else if (toUnit === 'rankine') {
            result = (temperature + 273.15) * 9/5;
            explanation = 'To convert Celsius to Rankine, first add 273.15, then multiply by 9/5.';
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
            explanation = 'To convert Kelvin to Celsius, subtract 273.15.';
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
            explanation = 'To convert Kelvin to Fahrenheit, first subtract 273.15, then use the formula: (K - 273.15) × 9/5 + 32.';
        } else if (toUnit === 'rankine') {
            result = temperature * 9/5;
            explanation = 'To convert Kelvin to Rankine, multiply by 9/5.';
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * 5/9;
            explanation = 'To convert Fahrenheit to Celsius, use the formula: (F - 32) × 5/9.';
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
            explanation = 'To convert Fahrenheit to Kelvin, first use the formula: (F - 32) × 5/9, then add 273.15.';
        } else if (toUnit === 'rankine') {
            result = temperature + 459.67;
            explanation = 'To convert Fahrenheit to Rankine, simply add 459.67.';
        }
    } else if (fromUnit === 'rankine') {
        if (toUnit === 'celsius') {
            result = (temperature - 491.67) * 5/9;
            explanation = 'To convert Rankine to Celsius, use the formula: (R - 491.67) × 5/9.';
        } else if (toUnit === 'kelvin') {
            result = temperature * 5/9;
            explanation = 'To convert Rankine to Kelvin, multiply by 5/9.';
        } else if (toUnit === 'fahrenheit') {
            result = temperature - 459.67;
            explanation = 'To convert Rankine to Fahrenheit, subtract 459.67.';
        }
    }

    resultDiv.innerHTML = `<p>${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)}: ${temperature}${fromUnit === 'fahrenheit' ? '°' : ''}</p><p>${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}: ${result}${toUnit === 'fahrenheit' ? '°' : ''}</p>`;
    explanationDiv.innerHTML = `<p>Explanation: ${explanation}</p>`;
}
function resetFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('error').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('explanation').textContent = '';
    document.getElementById('fromUnit').selectedIndex = 0;
    document.getElementById('toUnit').selectedIndex = 0;
}