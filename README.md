<h1> Akan Naming Calculator</h1>

<h3>Description</h3>

The Akan naming calculator is a web application which is intended to calculate names based on the 
date of birth and gender that is provided by the user
The Akan people are known for naming children after the day of the week they were born. 
This tradition reflects the belief that the day of birth influences one's character and destiny.

<h3>Features</h3>

<li>Simple and intuitive user interface for seamless interaction.</li>
<li>Accepts user input for birth date and gender.</li>
<li>Validates the user input to ensure accuracy.</li>
<li>Generates and displays the corresponding Akan name based on the entered details.</li>
<li>Provides clear error messages for invalid inputs.</li>

<h3>Author</h3>

Robert Kutwa Onyango

<section id="bdd">
  <h2>Behavior Driven Development (BDD)</h2>
  
  <h3>Feature: Generate Akan Name Based on Birth Date and Gender</h3>
  <p>
    <strong>As a user,</strong> I want to input my birth date and gender, so that I can discover my corresponding Akan name.
  </p>

  <hr>
  
  <h4>Scenario 1: Valid Inputs</h4>
  <ul>
    <li><strong>Given:</strong> The user enters a valid birth date (e.g., "1995-12-15").</li>
    <li><strong>And:</strong> Selects a valid gender (e.g., "Male").</li>
    <li><strong>When:</strong> The user clicks the "Submit" button.</li>
    <li><strong>Then:</strong> The application should display the Akan name (e.g., "Kwame").</li>
  </ul>

  <h4>Scenario 2: Invalid Date Input</h4>
  <ul>
    <li><strong>Given:</strong> The user enters an invalid date (e.g., "2025-13-40").</li>
    <li><strong>When:</strong> The user clicks the "Submit" button.</li>
    <li><strong>Then:</strong> The application should display an error message: "Please enter a valid date."</li>
  </ul>

  <h4>Scenario 3: Missing Gender Selection</h4>
  <ul>
    <li><strong>Given:</strong> The user enters a valid birth date (e.g., "1990-01-01").</li>
    <li><strong>But:</strong> Does not select a gender.</li>
    <li><strong>When:</strong> The user clicks the "Submit" button.</li>
    <li><strong>Then:</strong> The application should display an error message: "Please select your gender."</li>
  </ul>

  <h4>Scenario 4: Invalid Month Input</h4>
  <ul>
    <li><strong>Given:</strong> The user enters an invalid month (e.g., "Month 0" or "Month 13").</li>
    <li><strong>When:</strong> The user clicks the "Submit" button.</li>
    <li><strong>Then:</strong> The application should display an error message: "Please enter a valid month."</li>
  </ul>

  <hr>
  
  <h3>Summary</h3>
  <p>
    The application ensures accurate results and provides clear error messages for invalid or incomplete inputs, enhancing the user experience.
  </p>
</section>

