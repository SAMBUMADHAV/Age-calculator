document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // 0-indexed
  const year = parseInt(document.getElementById("year").value);

  const resultDiv = document.getElementById("result");

  const birthDate = new Date(year, month, day);
  const today = new Date();

  // Validation
  if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    birthDate > today || day < 1 || day > 31 || month < 0 || month > 11
  ) {
    resultDiv.textContent = "Please enter a valid date of birth.";
    resultDiv.style.color = "red";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  resultDiv.style.color = "#333";
  resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
