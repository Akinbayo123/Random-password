function getpassword() {
    var char =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/!@#$%^&*()_+?;:{}[]";
    var passwordlength = 10;
    var password = "";
    for (var i = 0; i < passwordlength; i++) {
        var randomNumber = Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").innerHTML = password;
}