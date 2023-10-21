//Access the form and result elements from the HTML
const bmiForm = document.getElementById('bmiForm');
const resultElement = document.getElementById('result');

//Add an event listener to the form submission
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault(); //Prevent form submission

    //Get the height and weight inputs are valid numbers
    if(isNaN(height) || isNaN(weight)) {
        resultElement.textContent = 'Please enter valid numbers.';
        return;
    }

    //Calculate the BMI
    const bmi = weight/(height/100) ** 2;

    //Determine the BMI category
    let category;
    if(bmi<18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    //Display the results
    resultElement.textContent = 'Your BMI is ${bmi.toFixed(2)}. Category: ${category}';
});