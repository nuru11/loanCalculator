let parent = document.querySelector(".parent")
let btn = document.querySelector(".btn")
let loan = document.querySelector(".loan")
let interest = document.querySelector(".interest")
let monthly = document.querySelector(".monthly")
let years = document.querySelector(".years")


btn.addEventListener("click", function() {
let disabled = 0;

    let loanvalue = loan.value;
    let interestvalue = interest.value;
    let monthlyvalue = monthly.value;
    let yearsvalue = years.value;

    let result = document.createElement("h1")
    let monthlypay = document.createElement("div")
    let total = document.createElement("div")
    let totalinterest = document.createElement("div")
    let canyou = document.createElement("div")


    result.setAttribute("class", "result")
    monthlypay.setAttribute("class", "monthlypay")
    total.setAttribute("class", "total")
    totalinterest.setAttribute("class", "totalinterest")
    canyou.setAttribute("class", "canyou")


    if(loanvalue == "" || interestvalue == "" || monthlyvalue == "" || yearsvalue == "") {
        alert("fill the input first")
    } else {
        result.textContent = "Result"
    monthlypay.textContent = monthlyvalue / 360;
    total.textContent = loanvalue + monthly.value;
    totalinterest.textContent = interestvalue;
    canyou.textContent = "can afford: yes"

    parent.appendChild(result)
    parent.appendChild(monthlypay)
    parent.appendChild(total)
    parent.appendChild(totalinterest)
    parent.appendChild(canyou)

    parent.style.height = "600px" 
    
    disabled = 1
    }

    if(disabled > 0) {
        btn.disabled = true
    }

})