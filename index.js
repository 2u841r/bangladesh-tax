// Bangladeshs' tax rule as per 2023-24 financial year. if there are any change you just change these value, and TADA, this converter will be still valid after that.
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
step6Taka = "rest";
step6Tax = 25;

const check1 = (event) => {
  event.preventDefault();
  document.querySelector("#submitbtn").classList.add("gopon");
  document.querySelector("#submitbtn").classList.add("gopon");
  document.querySelector("#goponbtn").classList.remove("gopon");
  document.querySelector("#resetbtn").classList.remove("gopon");
  document.querySelector("#aay").disabled = true;
  document.querySelector("#aay").classList.add("gopon");
  aay = Number(document.querySelector("#aay").value);
  if (aay <= step1Taka) {
    createTd(step1Taka, step1Tax, aay, step1Tax);
    console.log("c1 done");
  }
  check2();
  document.querySelector("#aay").value = "";
};

const check2 = () => {
  if (aay > step1Taka) {
    createTd(step1Taka, step1Tax, step1Taka, step1Tax);
    korjoggoAay2 = step2Taka - step1Taka;
    step2TaxinTaka = (korjoggoAay2 / 100) * step2Tax;
    createTd(step2Taka, step2Tax, korjoggoAay2, step2TaxinTaka);
    console.log("c2 done");
  }
  check3();
};

const check3 = () => {
  if (aay > step2Taka) {
    korjoggoAay3 = step3Taka - step2Taka;
    step3TaxinTaka = (korjoggoAay3 / 100) * step3Tax;
    createTd(step3Taka, step3Tax, korjoggoAay3, step3TaxinTaka);
    console.log("c3 done");
  }
  check4();
};

const check4 = () => {
  if (aay > step3Taka) {
    korjoggoAay4 = step4Taka - step3Taka;
    step4TaxinTaka = (korjoggoAay4 / 100) * step4Tax;
    createTd(step4Taka, step4Tax, korjoggoAay4, step4TaxinTaka);
    console.log("c4 done");
  }

  check5();
};

const check5 = () => {
  if (aay > step4Taka) {
    korjoggoAay5 = step5Taka - step4Taka;
    step5TaxinTaka = (korjoggoAay5 / 100) * step5Tax;
    createTd(step5Taka, step5Tax, korjoggoAay5, step5TaxinTaka);
    console.log("c5 done");
  }

  check6();
};

const check6 = () => {
  if (aay > step5Taka) {
    korjoggoAay6 = aay - step5Taka;
    step6TaxinTaka = (korjoggoAay6 / 100) * step6Tax;
    createTd(step6Taka, step6Tax, korjoggoAay6, step6TaxinTaka);
    console.log("c6 / final check done");
  }
};

const createTd = (range, taxpercent, awtay, tax) => {
  if (
    typeof range === "number" &&
    typeof taxpercent === "number" &&
    typeof awtay === "number" &&
    typeof tax === "number"
  ) {
    range = range.toLocaleString();
    taxpercent = taxpercent.toLocaleString();
    awtay = awtay.toLocaleString();
    tax = tax.toLocaleString();
  }
  const result = document.createElement("tr");
  result.innerHTML = `<td> ${range} </td> <td> ${taxpercent} </td> <td> ${awtay} </td> <td class='totaltax'> ${tax} </td>`;
  document.getElementById("resulT").appendChild(result);
};


function total() {
  const totaltax = document.querySelectorAll(".totaltax");

  let sum = 0;
  totaltax.forEach((element) => {
    const value = parseInt(element.innerText.replace(/,/g, ""), 10);
    if (!isNaN(value)) {
      sum += value;
    }
  });
  console.log(sum);
  createTd("Total", "", "", sum);
  document.querySelector("#goponbtn").classList.add("gopon");

}

document.querySelector("#taxf").addEventListener("submit", check1);
