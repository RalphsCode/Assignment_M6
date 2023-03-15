//  Ralph Godkin
//  COMP 690 - Module 6 Assignment
//  ===============================

const myForm = document.getElementById('myForm');                           // Creates the variable myForm from the HTML form

myForm.addEventListener('submit', (e) => {                                  // JS listens for the Submit btn to be clicked
    e.preventDefault();                                                     // Stop the submit from taking on browser default functions
        let id = document.getElementById("id").value                        // The arrow function dictates what to do with the form
        let empName = document.getElementById("empName").value
        let ext = document.getElementById("ext").value                      // Retrieve the HTML for entries and assign them to variables
        let email = document.getElementById("email").value                  // variables are within the function
        let department = document.getElementById("department").value
    console.log("ID: " + id + "\nName: " + empName + "\nExtension: " + ext + "\nemail: " + email + "\nDepartment: " + department);
});                                                                         // The retrieved HTML form contents are presented