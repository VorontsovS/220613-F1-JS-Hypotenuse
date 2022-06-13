const elSide1 = document.querySelector('input[name=side1]');
const elSide2 = document.querySelector('input[name=side2]');
const elSubmit = document.querySelector('input[name="submit"]');
const rootEl = document.querySelector('.root');

elSubmit.addEventListener('click', () => {
    let leg1 = Number(elSide1.value);
    let leg2 = Number(elSide2.value);
    if (leg1 > 0 && leg2 > 0) {
        let sqrt =  Math.sqrt(leg1 * leg1 + leg2 * leg2);
        html = '<p>The length of the hypotenuse with sides ' + leg1 + ' and ' + leg2 + ' is : ' + sqrt + '</p>';
    } else {html = '<p>Please, enter correct data</p>';};

    rootEl.innerHTML = html;
});