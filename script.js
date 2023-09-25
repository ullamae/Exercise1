function calculate() {
    var currentAge = document.getElementById('age').value;
    var remainingYears = 90 - currentAge;
  
    if (remainingYears > 0) {
      var remainingDays = remainingYears * 365;
      var remainingWeeks = remainingYears * 52;
      var remainingMonths = remainingYears * 12;
  
      var result = "You have approximately " +remainingDays+  " days, " + remainingWeeks+ " weeks, and " + remainingMonths+ " months left to live, so cherish every moments and be happy!";
  
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = "INVALID AGE!";
    }
  }