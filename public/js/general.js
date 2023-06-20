
var streamName = [];
var streamPass = [];
var streamNameIn = false;
var streamPassIn = false;
var index = 0;
var i = 0;

document.getElementById('login-user').addEventListener('click', () => {

    fetch('/data')
        .then(response => response.json())
        .then(data => {
            for(i = 0; i < data.length; i++) {
                streamName.push(data[i].name)
                streamPass.push(data[i].password)
            }

            var uname = document.getElementById('username').value;
            var upass = document.getElementById('userpassword').value;

            for(i = 0; i < streamName.length; i++) {
                if (streamName[i] == uname) {
                    streamNameIn = true;
                    index = i;
                    break;
                }
            }

            if(uname != '' && upass != '') {
                if(streamNameIn) {
                    if(streamPass[index] == upass) {
                        document.getElementById('result-text').style.color = 'green'
                        document.getElementById('result-text').innerHTML = 'Credentially verified! Redirecting...'
                        window.location.href = "http://localhost:3000/h-content/data.html"
                    }else {
                        document.getElementById('result-text').style.color = 'red'
                        document.getElementById('result-text').innerHTML = 'Incorrect password.'
                    }
                }else {
                    document.getElementById('result-text').style.color = 'red'
                    document.getElementById('result-text').innerHTML = 'No user found with this username.'
                }
            }else {
                document.getElementById('result-text').style.color = 'red'
                document.getElementById('result-text').innerHTML = 'Enter the required information.'
            }
        })
        .catch(error => console.log(error))
});