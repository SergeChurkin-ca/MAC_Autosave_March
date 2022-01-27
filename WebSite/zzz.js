// Array.from(document.querySelectorAll('input')).map(x => x.addEventListener('keydown', zzz))

// // let arrayOfInputs = Array.from(document.querySelectorAll('input'))
// // console.log(arrayOfInputs.values)

// function zzz(event) {
//     console.log(event.target.value)
// }



// add event listener to every inputs
Array.from(document.querySelectorAll('input')).map(x => x.addEventListener('keydown', myFunctionBloggo))

function myFunctionBloggo(e) {

    // Declare variables
    var input, filter, blogUl, blogli, a, i, txtValue;

    input = Array.from(document.querySelectorAll('#blogInput'))


    blogUl = Array.from(document.querySelectorAll("#blogUL"))
    blogli = Array.from(document.querySelectorAll(".blogLi"))


    filter = e.target.value.toUpperCase()

    console.log(filter)


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < blogli.length; i++) {

        a = blogli[i].getElementsByTagName("h2")[0];
        b = blogli[i].getElementsByTagName("p")[0];
        //join two strings 
        txtValue = a.textContent + b.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            (blogli[i].style.display = "") && (div.style.float = "none");
        } else {
            blogli[i].style.display = "none";
        }
    }
}


// 1 - all inputs have event listeners now
// 2 - filter applies to all containers



// filter has to lister only input within his own scope only

// get the element in question