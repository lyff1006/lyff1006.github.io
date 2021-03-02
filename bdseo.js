(function(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://api.sulg.top/bdseo",true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange=function(){
        console.log(xhr.responseText)
    }
    console.log(window.location)
    let params = {
        site:"https://my.sulg.top",
        token:"CO9ijQgYIoEQXJmr",
        list:[window.location.href]
    }
    xhr.send(params)
})()