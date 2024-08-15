# DOM MANIPULATION

- DOM Manipulation is best applied using the CRUD technique

##  CRUD Technique
- Create
- Read
- Update
- Delete

## READING THE DOM
- This enables us to display elements of the DOM into the Browser
>The following methods are used to read the DOM or style it.

>> getElementById()
>> getElementByClassName()
>> getElementByTagName()

-For example reading h1 contents from the DOM we can use;
**document.querySelector('h1')**
The result will be - *<h1>DOM MANIPULATION</h1>*

-OR we can use a CSS selector for example css ID in order to specify which content to read.
-- we can use the method **document.getElementByID('id')**
- So we can specify the output we desire, for example using h1 id="heading2"
- Use document.getElementByID('heading2')
The display in console will be **<h1 id="heading2">Kanzu code Foundation</h1>**

## CREATING ELEMENTS IN DOM
>> The following steps are involved in creating Elements into the DOM
 - **STEP 1: Create the new element**
 -Use the **document.createElement()** method to create a new HTML Eelement.
 -Pass the tagname of the element you want to create, for example 'p' for paragraph

 - **STEP 2: Set element properties**
 - For example **element.textContent** is used to set the text content of the element.
 - Also, **element.setAttribute** is used to se the attributes for example class, id or style or source for images
 in this example, the image is created using **imgElement.setAttribute('src', "Image_URL")** where imgElement represents the image element that was created in step 1

- **STEP 3: Add Content to the Element**
- use element.appendChild() to add elements or text nodes to the elements
- Use element.insertAdjacentHTML() to insert HTML content into the Element


- **STEP 4: Add  the Element to the DOM**
- Use parentElement.appendChild() to add the element to the parent element in the DOM
- Use parentElement.insetBefore() to insert content before the sibling element in the DOM

- **STEP 5: Update the DOM**
- The browser will automatically update the DOM and render the new element.

## UPDATING CONTENTS OF THE DOM
 - To update the contents of the DOM, you can use the following methods;
 - Method 1:  *textContent* property: updates the contents of an element and highlights the exising content.
-  For example

- Method 2: *innerHTML* property
- This works the same way as the *textContent* method

- Method 3: *AppendChild()* method
- Appends a node  to the end of the element.
- Adds new content without overwriting the existing content.

- Method 4: *InsertBefore()* Method
- Inserts a node before the reference node in an element.
- Adds new content without overwriting exixting content

- Method 5: *replaceChild* method
-Replaces a child node from the element.

-Method 6: setAttribute() meethod
-Updates an output node of an element

## DELETING CONTENT FROM THE DOM
- To delete content from the DOM you can use any of the following methods.
- Method 1:  *removeChild()* method
- This removes a child node from an element.

- Method 2: *remove()*
- Removes an element from the DOM

For more information, create check the **index.js** file for descriptive steps







