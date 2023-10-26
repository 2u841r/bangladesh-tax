// poriman 

step1Taka = 350000;
step1Tax = 0;
step2Taka = 450000;
step2Tax = 5;
step3Taka = 750000;
step3Tax = 10;
step4Taka = 1150000;
step4Tax = 15;
step5Taka = 1650000;
step5Tax = 20;
step6Taka = 'bakiay';
step6Tax = 25;




const check1 = (event) => {
    event.preventDefault();
    document.querySelector('#submitbtn').classList.add('gopon')
    document.querySelector('#goponbtn').classList.remove('gopon')
    aayfield = document.querySelector('#aay');
    aay = Number(document.querySelector('#aay').value);
    if (aay <= step1Taka) {
        createTd(step1Taka, step1Tax, aay, step1Tax)
    }

    check2(step1Taka, step1Tax)


}


const check2 = (step1Taka, step1Tax) => {
    if (aay > step1Taka && aay <= step2Taka) {
        createTd(step1Taka, step1Tax, step1Taka, step1Tax)
        korjoggoAay2 = (aay - step1Taka);
        step2TaxinTaka = korjoggoAay2 / 100 * 5
        createTd(step2Taka, step2Tax, korjoggoAay2, step2TaxinTaka)
    }

    check3(step2Taka, step2Tax, 100000, 5000)
}


const check3 = (step2Taka, step2Tax, korjoggoAay2, step2TaxinTaka) => {
    if (aay > step2Taka && aay <= step3Taka) {
        createTd(step1Taka, step1Tax, step1Taka, step1Tax)
        createTd(step2Taka, step2Tax, korjoggoAay2, step2TaxinTaka)
        console.log('f');
        korjoggoAay3 = (aay - step2Taka);
        step3TaxinTaka = korjoggoAay3 / 100 * 10
        createTd(step3Taka, step3Tax, korjoggoAay3, step3TaxinTaka)
    }
    check4(step3Taka, step3Tax, 300000, 30000)
};


const check4 = (step3Taka, step3Tax, korjoggoAay3, step3TaxinTaka) => {
    if (aay > step3Taka && aay <= step4Taka) {
        createTd(step1Taka, step1Tax, step1Taka, step1Tax)
        createTd(step2Taka, step2Tax, 100000, 5000)
        createTd(step3Taka, step3Tax, korjoggoAay3, step3TaxinTaka)

        korjoggoAay4 = (aay - step3Taka);
        step4TaxinTaka = korjoggoAay4 / 100 * 15
        createTd(step4Taka, step4Tax, korjoggoAay4, step4TaxinTaka)
    }

    check5(step4Taka, step4Tax, 400000, 60000)

}

const check5 = (step4Taka, step4Tax, korjoggoAay4, step4TaxinTaka) => {
    if (aay > step4Taka && aay <= step5Taka) {
        createTd(step1Taka, step1Tax, step1Taka, step1Tax)
        createTd(step2Taka, step2Tax, 100000, 5000)
        createTd(step3Taka, step3Tax, 300000, 30000)
        createTd(step4Taka, step4Tax, 400000, 60000)

        korjoggoAay5 = (aay - step4Taka);
        step5TaxinTaka = korjoggoAay5 / 100 * 20

        createTd(step5Taka, step5Tax, korjoggoAay5, step5TaxinTaka)

    }

    check6(step5Taka, step5Tax, 500000, 100000)


}

const check6 = (step5Taka, step5Tax, korjoggoAay5, step5TaxinTaka) => {
    if (aay > step5Taka) {
        createTd(step1Taka, step1Tax, step1Taka, step1Tax)
        createTd(step2Taka, step2Tax, 100000, 5000)
        createTd(step3Taka, step3Tax, 300000, 30000)
        createTd(step4Taka, step4Tax, 400000, 60000)
        createTd(step5Taka, step5Tax, 500000, 100000)

        korjoggoAay6 = (aay - step5Taka);
        step6TaxinTaka = korjoggoAay6 / 100 * 25

        createTd(step6Taka, step6Tax, korjoggoAay6, step6TaxinTaka)

    }


}





const createTd = (range, taxparcent, awtay, tax) => {
    result = document.createElement('tr');
    result.innerHTML = `<td> ${range} </td> <td> ${taxparcent} </td>   <td> ${awtay} </td> <td class='totaltax'> ${tax} </td> `;
    document.getElementById('resulT').appendChild(result);
}







function total() {
    let totaltax = document.querySelectorAll('.totaltax');
    let sum = 0;
    for (let tax of totaltax) {
        let taxValue = parseFloat(tax.textContent)
        if (!isNaN(taxValue)) {
            sum += taxValue;
        }
    }

    createTd('Total', '', '', sum)
}




document.querySelector('#taxf').addEventListener('submit', check1)
