const calculate = document.querySelector('.button')
calculate.addEventListener('click',  function calculate() {
    const height = parseFloat(document.querySelector('.height').value);
    const weight = parseFloat(document.querySelector('.weight').value);
    const output = document.getElementById('output');

    if (!height || !weight) {
        output.innerText = "Please enter valid height and weight!";
        output.style.color = "red";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Healthy Weight';
    } else {
        category = 'Overweight';
    }

    output.innerText = `Your BMI is ${bmi} (${category})`;
    output.style.color = "black";
})