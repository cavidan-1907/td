let btn = document.getElementById("btn");
let input = document.getElementById("input");
btn.addEventListener("click", () => {
    if (input.value === "")
    {
        alert("xahis olunur bir edilecek is elave edin!")
        return;
    }
    let li = document.createElement("li")
    li.innerText = input.value;
    ul.append(li)
    let div = document.createElement("div")
    li.append(div)
    input.value = ""
    let i = document.createElement("i")
    i.className = "bi bi-trash3"
    div.append(i)
    let i2 = document.createElement("i")
    i2.className = "bi bi-pen"
    div.append(i2)
    i.addEventListener("click", () => {
        li.remove()
    })
    i2.addEventListener("click", () => {
        li.style.textDecoration=line-through;
    })
})
document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (input.value === "")
        {
            alert("xahis olunur bir edilecek is elave edin!")
            return;
        }
        let li = document.createElement("li")
        li.innerText = input.value;
        ul.append(li)
        let div = document.createElement("div")
        li.append(div)
        input.value = ""
        let i = document.createElement("i")
        i.className = "bi bi-trash3"
        div.append(i)
        let i2 = document.createElement("i")
        i2.className = "bi bi-pen"
        div.append(i2)
        i.addEventListener("click", () => {
            li.remove()
        })
    
    
        i2.addEventListener("click", () => {
            li.style.textDecoration=line-through;
        })
    }
})


