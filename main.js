const from = document.getElementById('from'),
    to = document.getElementById('to'),
    numOfGenerated = document.getElementById('numOfGenerated'),
    resultRandom = document.getElementById('resultRandom'),
    btn = document.getElementById('btn'),
    addData = document.getElementById('addData');
    
let arr = [];

function getRandom() {

    // выведение     
    let min = parseInt(from.value);
    let max = parseInt(to.value);
    let num = min + Math.floor(Math.random() * (max-min)); 
    resultRandom.innerHTML += (num + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

    arr.push(num);
}

function mathOperations() {
    // выводим минимальное число из полученного массива
    let minNum = Math.min.apply(null, arr);
    
    // выводим максимальное число из полученного массива
    let maxNum = Math.max.apply(null, arr);
    
    // выводим сумму чисел массива среднее арифметическое чисел из массива
    let sum = arr.reduce((a, b) => a + b, 0); 

    // выводим среднее арифметическое чисел из массива
    let avarageSum = sum / arr.length; // Делим её на длину массива

    // выводим произведение чисел массива
    let product = arr.reduce((a, b) => a * b);

    addData.innerHTML = `Для информации из приведенных выше чисел: <br/>
                        Минимальное число: ${minNum} <br />
                        Максимальное число: ${maxNum} <br />
                        Среднее арифметическое: ${avarageSum} <br />
                        Сумма чисел: ${sum} <br />
                        Произведение чисел: ${product} <br />`;
}


btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    resultRandom.innerHTML = '';    
    arr = [];
    // сделать проверку numOfGenerated.value что это число
    for(let i=0; i<Number(numOfGenerated.value); i++) {
        getRandom();      
    }
    mathOperations();
});
