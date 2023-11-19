let btn = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let srcBtn = document.querySelector("#search");
let todoArr = [];

let yanlis = "Xahiş olunur bir ediləcək iş əlavə edin!";

btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        showErrorMessage(yanlis);
        return;
    }

    let li = document.createElement("li");
    li.innerText = input.value;
    ul.append(li);

    let div = document.createElement("div");
    li.append(div);

    input.value = "";

    let i = document.createElement("i");
    i.className = "bi bi-trash3";
    div.append(i);

    let i2 = document.createElement("i");
    i2.className = "bi bi-pen";
    div.append(i2);
    todoArr.push(input.value);

    i.addEventListener("click", () => {
        li.remove();
    });
});

function showErrorMessage(message) {
    let errorMessage = document.createElement("div");
    errorMessage.innerText = message;
    errorMessage.style.color = "red"; 
    input.parentNode.append(errorMessage);

    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}





document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (input.value.trim() === "") {
            alert("Xahiş olunur bir ediləcək iş əlavə edin!");
            return;
        }
    
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.append(li);
    
        let div = document.createElement("div");
        li.append(div);
    
        input.value = "";
    
        let i = document.createElement("i");
        i.className = "bi bi-trash3";
        div.append(i);
    
        let i2 = document.createElement("i");
        i2.className = "bi bi-pen";
        div.append(i2);
    
        i.addEventListener("click", () => {
            li.remove();
        });
    
    }
})


