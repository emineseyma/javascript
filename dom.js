let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
    console.log("tikla")
    this.style.color == "orange" ? this.style.color = "black" : this.style.color = "orange" 
}