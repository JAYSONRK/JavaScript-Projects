const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelect = document.getElementById('temp-diff');
    const valueTemp = tempSelect.options[tempSelect.selectedIndex].value;
    const result = document.getElementById('result')
    console.log(valueTemp);

    const celToFahrn = (val) => {
        return result.innerHTML = `= ${Math.round((val*9/5)+32) } Fahrenheit `
    }

    const fahrenToCel = (val) => {
        return result.innerHTML = `= ${Math.round((val - 32)*5/9) } Celcius`
    }

    if (valueTemp == 'cel') {
        celToFahrn(numberTemp);
    } else {
        fahrenToCel(numberTemp)
    }
}