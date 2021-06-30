function httpGet(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    return xmlhttp.response;
}

function getInputValue() {
    var value = document.getElementById("url").value
    var html = httpGet(value)
    getBio(html)
}

function getBio(html) {
    var htmlDoc = (new DOMParser).parseFromString(html, "text/html");
    var bio = htmlDoc.querySelector('meta[name="description"]').content
    console.log(bio)
}