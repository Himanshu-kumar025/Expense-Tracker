let submit = document.querySelector(".submit");
let clear = document.querySelector(".clear");
let result = document.querySelector(".result");

function localstore(item, price) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ item, price });
    localStorage.setItem('items', JSON.stringify(items));
}

function display() {
    result.innerHTML = '';
    let items = JSON.parse( localStorage.getItem('items')) || [];

    items.forEach(element => {

        let div = document.createElement("div");
        div.innerHTML = `${element.item} : $${element.price}`;
        div.setAttribute("class", "list");
        result.append(div);

    });
}


submit.addEventListener("click", () => {

    let item = document.querySelector(".item").value;
    let price = document.querySelector(".price").value;


    if (item && !isNaN(price) && price >= 0) {

        localstore(item, price);
        display();
        console.log("submit done!")
    }
    else {
        alert('first fill the items and prices properly');
    }
})

clear.addEventListener("click", () => {
    localStorage.removeItem('items');
    result.innerHTML = '';
    console.log("all data is clear from local storage ")
})






