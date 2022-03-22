
buttonCopy = document.querySelector("#copy")



buttonCopy.addEventListener("click", function (e) {
    e.preventDefault();
    const copyField1 = document.querySelector("#titleField").value;
    console.log(copyField1)
    const copyField2 = document.querySelector("#descriptionField").value;
    console.log(copyField2)
    const copyField3 = document.querySelector("#linkField").value;
    console.log(copyField3)

    if (copyField1 == "" || copyField2 == "" || copyField3 == "") {
        alert("Preencha todos os campos!");
    } else {
        const cardsDiv = document.createElement("div");
        document.body.appendChild(cardsDiv);
        cardsDiv.setAttribute("class", "cards");

        // create de card it self and appended to the card div
        const cardCategory = document.createElement("div");
        cardsDiv.appendChild(cardCategory);
        cardCategory.setAttribute("class", "card-category");

        // add style to the card-category div
        cardCategory.setAttribute("style", "background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url()");
        // add the text of the card
        cardCategory.appendChild(document.createTextNode(copyField1));
        cardCategory.appendChild(document.createTextNode(copyField2));

    }
})










