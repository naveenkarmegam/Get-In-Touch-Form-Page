
const headpara = document.getElementById('description')
headpara.innerHTML = 'Welcome to our User Form Page! This form is designed to gather essential personal information and provide you with an opportunity to express your food preferences. Please take a moment to fill out the fields below with your first and last name, address, pincode, gender, and select your favorite foods from the options provided. We also need to know your state and country. Your input will help us serve you better and tailor our offerings to your liking. Thank you for sharing your details with us!'





const form = document.getElementById("form");
const table = document.getElementById("dataTable");
const tbody = table.querySelector("tbody");

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const foodInputs = document.querySelectorAll('input[name="food"]:checked');
    const foods = Array.from(foodInputs).map(input => input.value).join(", ");
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;



    const newRow = tbody.insertRow(tbody.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foods;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    form.reset(); // Clear the form fields
});