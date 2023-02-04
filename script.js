// console.dir( document.getElementById(listWrapper))

// console.log( document.querySelector("li")  )

// console.log( document.getElementsByTagName("li")[1]  )

// console.log( document.querySelectorAll(".listItem")  )

// const heading = document.querySelector("h1");

// console.log( heading.textContent);

// heading.textContent = "My Title";

// const heading = document.getElementById("heading");

// heading.addEventListener("click", () => {
//     console.log("Hello")

//     if(heading.textContent === "CLICKED"){
//         heading.textContent = "JS DOM"
//     } else {
//     heading.textContent = "CLICKED"
// }
// })

// document.addEventListener('keypress', (event) => {
//     console.log( event )
// })


// // Activity 1:

// const button = document.getElementById('button')

// button.addEventListener("click", () => {
//     const image = document.getElementById('myImage').style.visibility = "hidden";
// })

// let button = document.getElementById('button')
// let image = document.getElementById('myImage')

// button.addEventListener("click", () => {
//     if (button == 'click') {
//     image.style.visibility = "hidden";
// } else {
//     image.style.visibility = "visible"
// }
// })

// // John's example - Activity 1:
// const toggleBtn = document.getElementById("toggleBtn")
// const toggleImg = document.querySelector("#toggleImg")


// toggleBtn.addEventListener("click", () => {
    
//     if(toggleImg.style.display === "none"){
//         toggleImg.style.display = "block";
//     } else { 
//         toggleImg.style.display = "none"
//     }
// })


// // Activity 2:

// const imageToChange = document.getElementsByClassName("imageToChange")[0]
// const inputImg = document.querySelector(".inputImg")
// const submitImg = document.getElementById("submitImgID")

// submitImg.addEventListener("click", () => {
//     imageToChange.src = inputImg.value

//     inputImg.value = "";
// })



// // Activity 3:

// const header = document.getElementById("header")
// const button = document.getElementById("changeColor")
// const inputBar = document.getElementById("inputBar")

// button.addEventListener("click", () => {
//     header.style.color = inputBar.value;
//     inputBar.value = "";
// })


// // John's explanation Activity 3:
// const colHeading = document.getElementById("colHeading");
// const inputCol = document.querySelector("#inputCol");
// const submitCol = document.getElementById("submitCol");

// submitCol.addEventListener("click", () => {
//     colHeading.style.color = inputCol.value
// })



// // Activity 4:

// let screenLog = document.getElementById("screenLog");
// document.addEventListener('click', logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }

// John's example: Activity 4:
// const coords = document.getElementById("coords");

// document.addEventListener("click", (event) => {
//     coords.textContent = `Coordinates of click are: X-${event.clientX} Y-${event.clientY}`
// })



// JSDOM KeyCode Challenge:

// let code = document.getElementById("code");
// let key = document.getElementById("key");
// let charCode = document.getElementById("charCode");

// code.addEventListener("keydown", () => {
//     KeyboardEvent.code = 'block'
// })


// This one works! (KeyCode):
document.addEventListener("keydown", (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}' | charCode='${event.keyCode}'`;
    document.getElementById("output").appendChild(p);
})




// //To do list activity:
// const submitBtn = document.getElementById("submitBtn");
// const toDoInput = document.getElementById("toDoInput");
// const list = document.getElementById("list");

// submitBtn.addEventListener("click", () => {
//     let listItem = document.createElement("li");

//     listItem.textContent = toDoInput.value;

//     list.appendChild(listItem);
// })

// // const allListItems = document.querySelectorAll("li");

// // allListItems.forEach((listItem) => {
// // listItem.addEventListener("click", (event) => {
// //     list.removeChild(event.target);
// // })
// // })

// list.addEventListener("mouseover", (event) {
//     event.target.textContent = event.target.textContent.toUpperCase();
// })