
function Movie() {
    let name = document.getElementById("moviename").value;
    let rating = document.getElementById("ratingList").value;

    var movieChars = document.getElementById("moviename").value;
    if (movieChars == "") {
        document.getElementById("message").innerHTML= "Not a valid movie title. Please try again.";
        return false;
    }

    let review = name + " with rating " + rating;
    movieArray.push(review);

    let myUl = document.getElementById("list");
    myUl.innerHTML = "";
    for (let i = 0; i < movieArray.length; i++) {
        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(movieArray[i]));

        myUl.appendChild(anotherLi);
    }

}
