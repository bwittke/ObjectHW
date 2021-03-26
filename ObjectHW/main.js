let movieArray = [];

let ratingArray = ["1", "2", "3", "4", "5"];

PersonArray = [];



document.addEventListener("DOMContentLoaded", function (event) {
    let mySelect = document.getElementById("ratingList");

    for (let i = 0; i < ratingArray.length; i++) {
        let anotherOption = document.createElement("option");
        anotherOption.appendChild(document.createTextNode(ratingArray[i]));
        mySelect.appendChild(anotherOption);
    }
   
});