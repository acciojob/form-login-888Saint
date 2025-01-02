function getFormvalue() {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the form element by its ID
    const form = document.getElementById("form1");
    
    // Access the input fields using their `name` attributes
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;
    
    // Alert the full name
    alert(firstName + " " + lastName);
}
