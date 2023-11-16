let btn = document.getElementById("btn");
let input = document.getElementById("input");







btn.addEventListener("click", () => {

    let li = document.createElement("li")
    li.innerText = input.value;
    ul.append(li)
    input.value = ""
    let i = document.createElement("i")
    i.className = "bi bi-trash3"
    li.append(i)
    let i2=document.createElement("i")
    i2.className="bi bi-crosshair2"
    li.append(i2)


    i.addEventListener("click", () => {
        li.remove()
    })
})




i2.addEventListener("click",()  => {
    li.style.textDecoration= "line-through"
    
    })








document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let li = document.createElement("li")
    li.innerText = input.value;
    ul.append(li)
    input.value = ""
    let i = document.createElement("i")
    i.className = "bi bi-trash3"
    li.append(i)
    i.addEventListener("click", () => {
        li.remove()
    })
    }
})
