const itemId = document.getElementById("itemId");
const image = document.getElementById("Image");
const name = document.getElementById("Name");
const price = document.getElementById("Price");
const mrp = document.getElementById("Discount");
const description = document.getElementById("Description");
const categoryId = document.getElementById("MenuId");
const addButton = document.getElementById("addButton");

const database = firebase.database();

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/Item/'+itemId.value).set({
        Name: name.value,
        Image: image.value,
        Price: price.value,
        Discount: mrp.value,
        Description: description.value,
        MenuId: categoryId.value
    });
});