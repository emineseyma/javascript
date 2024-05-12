let firstName = ""

function greetings() {
    //console.log (`Merhaba ${firstName ? firstName : ""}`)
    console.log (`Merhaba ${firstNam}`)
}
console.log(firstName)
greetings() 

let greetingsImfo = greetings2("Ad", "Soyad")
console.log(greetingsImfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`# ${id}`)
    domObject.innerHTML = info

    
}