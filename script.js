function storeLogin() {
    var username = document.getElementById("usernameH").value;
    var password = document.getElementById("password").value;

    // Retrieve login information from JSON file
    var loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    if (loginInfo === null) {
        loginInfo = [];
    }

    // Append new login information to loginInfo
    loginInfo.push({
        username: username,
        password: password
    });

    // Store login information in JSON file
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
}
  
  // DOM XSS attack function
  function domXSS() {
    // Retrieve login information from JSON file
    var loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    if (loginInfo === null || loginInfo.length === 0) {
        document.getElementById('data').innerHTML = 'Error: No login information found';
    } else {
        var data = '';
        for (var i = 0; i < loginInfo.length; i++) {
            data += `username: ${loginInfo[i].username} password: ${loginInfo[i].password}<br>`;
        }
    }
    document.getElementById('data').innerHTML = data;
}