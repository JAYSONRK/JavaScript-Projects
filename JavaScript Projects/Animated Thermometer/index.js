const thermometer = () => {
    let temp = document.getElementById('thermo');
    setTimeout(() => {
        temp.innerHTML = '&#xf2cb';
        temp.style.color = 'white';
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
        temp.style.color = 'yellow';
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c9';
        temp.style.color = 'orange';
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c7';
        temp.style.color = 'red';
    }, 4000);
}

thermometer();

setInterval(thermometer,5000);
