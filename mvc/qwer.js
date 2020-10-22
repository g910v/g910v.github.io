var сalculatorView = {
    firstNumber: function() {
        num1 = document.getElementById('firstNumber').value;
        return num1;
    },
    secondNumber: function() {
        num2 = document.getElementById('secondNumber').value;
        return num2;
    },
    sumNumbers: function(num3) {
        var sum = document.querySelector('.sum');
		sum.innerHTML = num3;
    }
}

var calculatorModel = {
    summa: function(n1, n2) {
        var n3 = n1 + n2;
        return n3;
    }
}

var calculatorController = {
    qwer: function () {
        let num1 = Number(сalculatorView.firstNumber());
        let num2 = Number(сalculatorView.secondNumber());
        if (isNaN(num1) || isNaN(num2)) {
            сalculatorView.sumNumbers("incorrect");
        } else {
            var s = calculatorModel.summa(num1, num2);
            сalculatorView.sumNumbers(s);
        }
        
    }
}
