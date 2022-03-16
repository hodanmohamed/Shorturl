const apiKey = '1df6b977e1eb45c29afc4b697c396eb6';
const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.querySelector('#url-input');
const shortenButton = document.querySelector('#shorten-btn');
const copyInput = document.querySelector('#copy-input');

const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({ destination: urlToShorten });

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
}

const displayShortUrl = (event) => {
    event.preventDefault();
    while (copyInput.firstChild) {
        copyInput.removeChild(copyInput.firstChild);
    }
    shortenUrl();
    inputField.setAttribute('placeholder', 'paste original URL here');
    inputField.value = '';
}

shortenButton.addEventListener('click', displayShortUrl);

const textInput = document.getElementById('copy-input');
const copyButton = document.getElementById('copy-btn');

copyButton.addEventListener('click', () => {
    textInput.select();
    navigator.clipboard.writeText(textInput.value);
    textInput.value = "copied!";
});