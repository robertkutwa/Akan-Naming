document.getElementById('akan-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
  
    if (!dob) {
      alert("Please enter your date of birth.");
      return;
    }
  
    if (!gender) {
      alert("Please select your gender.");
      return;
    }
  
    const date = new Date(dob);
    const dayOfWeek = date.getDay();
  
    if (date > new Date()) {
      alert("The date cannot be in the future. Please enter a valid date.");
      return;
    }
  
    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    };
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const akanName = akanNames[gender][dayOfWeek];
    
    const dayName = days[dayOfWeek];

    const result = document.getElementById('result');
    result.textContent = `You were born on a ${dayName}, and your Akan name is ${akanName}.`;
  });
  