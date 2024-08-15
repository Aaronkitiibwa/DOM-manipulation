//READING DOM CONTENTS

//firstly this is how to access or read an element in the DOM using querySelector
//for example accesing h1, we use 
document.querySelector('h1') // and this will display our h1 as an object 
//however, you may also want to display the specific heading using ID 
document.querySelector('id')

//CREATING IMAGE ELEMENT USING DOM MANIPULATION
//In this example we created the image element using DOM manipulation
imgElement = document.createElement('img') //step1
//In the above step we firstly created the image element
imgElement.setAttribute('src', "https://plus.unsplash.com/premium_photo-1721304069909-fc8d264e04c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8") //step 2
//In step 2, we set the element properties


parentElement = document.querySelector('body') //step 3
//In step 3 we selected where we want to add the image elemenent
parentElement.append(imgElement) //step 4
// parentElement.prepend('imgElement')
//step 4 we added element into the DOM


//UPDATING CONTENTS OF THE DOM
// - Step 1: we first access the element we want to update using a selector
//- Step 2: then we introduce the new text we want to see displayed
document.getElementById('heading2').innerHTML = "hello world";
// - the above code will display change the h1 heading with id="heading2" to hello world

// DELETING CONTENT FROM DOM
// - Step 1: You need to firstly access the element you want to delete using the getElementByID() selector
let element =  document.getElementById("heading2")
// -Then next you use the remove() method to delete 
element.remove();

