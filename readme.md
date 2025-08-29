
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:getElementById :Selects one element by its id.
Example:
<div id="header">Hello</div>
const element = document.getElementById("myId");

getElementsByClassName:Selects all elements with a specific class.
const elements = document.getElementsByClassName("myClass");
<div class="box">Box 1</div>
<div class="box">Box 2</div>
const boxes = document.getElementsByClassName("box");

querySelector:Returns the first matching element.
querySelectorAll:Returns all matching elements as a NodeList


2. How do you **create and insert a new element into the DOM**?

Ans:
 Creating and Inserting a New Element into the DOM
Steps:
1. Create element
const newDiv = document.createElement("div");
2. Add content or attributes
newDiv.textContent = "Hello World!";
newDiv.id = "myDiv";
newDiv.className = "box";

3. Insert it into the DOM
document.body.appendChild(newDiv);
const reference = document.getElementById("header");
document.body.insertBefore(newDiv, reference);
Other insertion methods: appendChild(), prepend(), insertBefore(newNode, existingNode)

3. What is **Event Bubbling** and how does it work?
Ans:
Definition: An event starts from the target element and propagates upwards through its parent elements.
Example:
<div id="parent"> <button id="child">Click me</button> </div>
document.getElementById("parent").addEventListener("click", () => { console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => { console.log("Child clicked"); });
Clicking the button logs: Child clicked, Parent clicked

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:
Event Delegation
Definition: Instead of adding event listeners to many child elements, attach a single listener to the parent and handle events using event.target.
Why useful: Saves memory,Works for dynamically added elements
Example:
<ul id="list"> <li>Item 1</li> <li>Item 2</li> </ul>
document.getElementById("list").addEventListener("click", (e) => { if (e.target.tagName === "LI") {
console.log("Clicked:", e.target.textContent); } });

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans:
Difference Between preventDefault() and stopPropagation()
Method | Purpose | Example
preventDefault() | Stops the default browser action | <a href="https://google.com"> clicking normally
navigates, but using preventDefault() prevents navigation
stopPropagation() | Stops the event from bubbling or capturing further | Clicking a button inside a
parent div prevents parent's click listener from firing
Example combined:
const link = document.querySelector("a");
link.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); console.log("Link
clicked"); });
