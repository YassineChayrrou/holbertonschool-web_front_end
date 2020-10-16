function createElement (data) {
    const body = document.body;
    const paragraph = document.createElement("p");
    const node = document.createTextNode(data);
    paragraph.appendChild(node);
    body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
       if (xhr.readyState == XMLHttpRequest.DONE) {
           callback(xhr.responseText)
       }
    }
    xhr.open('GET', URL);
    xhr.send("");
}

queryWikipedia(createElement);