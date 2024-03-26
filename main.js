// main.js
function copyEmail() {
    var email = document.getElementById('email').innerText;
    navigator.clipboard.writeText(email).then(function() {
        alert('Email copied to clipboard');
    }).catch(function() {
        alert('Failed to copy email');
    });
}
