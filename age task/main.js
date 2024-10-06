document.getElementById("ageCalculator").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const age = `${years} years, ${months} months, ${days} days`;
    document.getElementById("result").textContent = `Your age is: ${age}`;
  });
