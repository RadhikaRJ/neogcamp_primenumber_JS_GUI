var inputref = document.querySelector("#input");
var outputref = document.querySelector("#output");
var btnref = document.querySelector("#submit");

btnref.addEventListener("click", clickHandler);

function clickHandler() {
    var inputData = inputref.value;
    var checkip = checkformat(inputData);
    if (checkip == true) {
        var date = setDate(inputData);
        var primeResult = checkPrime(date);
        if (primeResult == true) {
            outputref.innerText = "Yes, the combination of your birthday & month number is a prime number.";
        } else {
            outputref.innerText = "No, the combination of your birthday & month number is not a prime number.";
        }
    } else {
        alert("Invalid or empty input.\nEnter the date in DD/MM format.");
        

    }




}

function checkformat(ip) {
    var [daycheck, monthcheck] = ip.toString().split("/");

    if (Number(monthcheck) === null ||
        Number(monthcheck) == " " ||
        Number(monthcheck) < 1 ||
        Number(monthcheck) > 12 ||
        Number(daycheck) < 1 ||
        Number(daycheck) > 31 ||
        Number(daycheck) == " " ||
        Number(daycheck) === null ||
        isNaN(daycheck) == true ||
        isNaN(monthcheck) == true ||
        monthcheck == 02 && daycheck == 30) {
        return false;
    } else {
        return true;
    }
}

function setDate(ipdate) {
    var [daycheck, monthcheck] = ipdate.toString().split("/");
    var finalDate = daycheck + monthcheck;
    return finalDate;
}

function checkPrime(ipdate) {
    var birthdate = Number(ipdate);
    var flag = 0;

    for (var i = 1; i < birthdate; i++) {
        if (birthdate % i == 0) {
            flag++;
        }
        if (flag > 1) {
            break;
        }
    }
    if (flag > 1) {
        return false
    } else {
        return true;
    }

}