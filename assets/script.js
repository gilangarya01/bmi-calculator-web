

const calcBtn = document.querySelector('.calcBtn');
const resetBtn = document.querySelector('.resetBtn');


resetBtn.addEventListener('click', function(){ 
    document.querySelector('.inputWeight').value = '';
    document.querySelector('.inputHeight').value = '';
    document.querySelector('.result').value = '';
    document.querySelector('.categories b').innerHTML = '';
})


calcBtn.addEventListener('click', function() {
    const inputHeight = document.querySelector('.inputHeight').value;
    const inputWeight = document.querySelector('.inputWeight').value;
    
    const bmi = hitungBMI(inputWeight, inputHeight);
    const ket = ketBMI(bmi);

    document.querySelector('.result').value = bmi;
    document.querySelector('.categories b').textContent = ket;
});

function hitungBMI(weight, height){
    return (weight / ((height/100) * (height/100))).toFixed(2);
}

function ketBMI(result) {
    if (result < 18.5) {
        return 'Underweight';
    } else if (result >= 18.5 && result <= 24.9) {
        return 'Normal';
    } else if (result >= 25 && result <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}