function getpin() {
    let pin = generatepin();
    let getpinstring = pin + '';
    if (getpinstring.length === 4) {
        return pin;
    }else{
        return getpin();
    }
}


function generatepin() {
    let random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getpin();
    console.log(pin);
    let displaypin = document.getElementById('display-pin');
    displaypin.value = pin;
})

document.getElementById('calculator').addEventListener('click', (event)=>{
    let number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    let typedNumbervalue = typedNumber.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }else if(number === '<'){
            const digit = typedNumbervalue.split('');
            digit.pop();
            const remainigdigit = digit.join('');
            typedNumber.value = remainigdigit;
        }
    }else{
        let newtypednumber = typedNumbervalue + number ;
        typedNumber.value = newtypednumber;
    }
})



document.getElementById('verify-pin').addEventListener('click', function () {
    let ganareteinput = document.getElementById('display-pin');
    let genaratevalue = ganareteinput.value;

    let inputcerify = document.getElementById("typed-number");
    let inputcerifyvalue = inputcerify.value;

    if (genaratevalue === inputcerifyvalue) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
            inputcerify.value = '';
            ganareteinput.value = '';


    }else{
        document.getElementById('not-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';

    }
})