// document.getElementById("sendMsg").addEventListener("click", sendMsg);

function sendMsg() {
    var XMLHttpRequest = require('xhr2');
    const Http = new XMLHttpRequest();
    const url='https://Wakaran-api.tarikyildiz366.repl.co/msg/111/Tarik/saas';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    }
}

sendMsg();