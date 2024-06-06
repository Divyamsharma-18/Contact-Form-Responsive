document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
 
        event.preventDefault();


        const name = document.getElementById("name").value;
        alert("Message Sent!  Thanks for completing the form. We'll be in touch soon!");

    });
});
