const container = document.querySelector(".container");
const input = document.querySelector(".range");
const btnEnter = document.querySelector("button");
/**Creating an input field where the user can put how many 
 * grid squares he wants and also it's functions
 */
btnEnter.addEventListener("click", () => {
    const val = Number(input.value);
    grid(val);
})






//problem: create a 16x16 grid of square divs to be put into 
//container div but I want you to create a modifiable.
//understanding: create a function that'll generate a divs specific
//to the user needs and put them inside the container divs.

//create a function that can create a specific number of array that it has
//a specific-same number of element.

//plan: forloop to create a specific number of array and in that array it'll
//create the same number of element.


function grid(val) {
    let divs = [];
    for (let i = 0; i < val; i++) {
        let div = document.createElement("div");
        div.setAttribute(`class`, `box${i}`);
        div.style.cssText = "display: flex; flex: 1 1 0;";
        divs.push(div);
    }
    divs.forEach(div => {
        container.appendChild(div);
    });
    for (let i = 0; i < val; i++) {
       const div = document.querySelector(`.box${i}`);
       for (let j = 0; j < val; j++) {
            const smallDiv = document.createElement("div");
            smallDiv.style.cssText = "flex: 1; border: 1px solid black;";
            div.appendChild(smallDiv);
       } 
    }
    container.style.cssText = "border-collapse: collapse;"
}