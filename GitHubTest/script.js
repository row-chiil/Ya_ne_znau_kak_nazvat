let div = document.getElementById('div'), but = document.getElementById('but')

function OnclFun(){
    if (div.innerText == "Привет!"){
        div.innerText = "Пока!"
        but.innerText = "Привет!"
    } else{
        div.innerText = "Привет!"
        but.innerText = "Пока!"
    }
}