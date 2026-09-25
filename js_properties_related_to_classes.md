Topic:- Classes, Inline Styles & Visual State1 Queston-1:Explain the difference between element.className and element.classList. When would you prefer each?

# Difference Between `element.className` and `element.classList`

| `element.className` | `element.classList` |
| --- | --- |
| Returns or sets the entire `class` attribute as a string. | Returns a `DOMTokenList` object for managing individual classes. |
| Replaces all existing classes when assigned a new value. | Adds, removes, toggles, or checks classes without affecting others. |
| Uses string operations. | Uses methods like `add()`, `remove()`, `toggle()`, and `contains()`. |

## Example

```javascript
element.className = "active";      // Replaces all classes
element.classList.add("active");   // Adds only the "active" class
```

## When to Prefer Each?

- `className` → Use when you want to replace or read the entire class list.
- `classList` → Use when you want to add, remove, or toggle individual classes dynamically.

Question-2:-Explain classList.add(), remove(), toggle(), contains() and replace() with examples.

Answer:-# `classList` Methods in JavaScript

`classList` is used to add, remove, toggle, check, and replace CSS classes of an HTML element.

## 1. `classList.add()`

Adds a new CSS class to an element.

```javascript
element.classList.add("active");
```

**Example:** Adds the `active` class.

---

## 2. `classList.remove()`

Removes a CSS class from an element.

```javascript
element.classList.remove("active");
```

**Example:** Removes the `active` class.

---

## 3. `classList.toggle()`

Adds the class if it is not present; removes it if it is present.

```javascript
element.classList.toggle("dark");
```

**Example:** Toggles Dark Mode.

---

## 4. `classList.contains()`

Checks whether an element has a specific class.

```javascript
element.classList.contains("active");
```

**Output:** `true` or `false`.

---

## 5. `classList.replace()`

Replaces one existing class with another.

```javascript
element.classList.replace("red", "blue");
```

**Example:** Changes the `red` class to `blue`.

---

## Exam Summary

| Method | Purpose |
| --- | --- |
| `add()` | Adds a class. |
| `remove()` | Removes a class. |
| `toggle()` | Adds or removes a class automatically. |
| `contains()` | Checks if a class exists. |
| `replace()` | Replaces one class with another. |

Question:-3:-What is the difference between changing a CSS class and setting an inline style through element.style?

Answer:-# Difference Between CSS Class and Inline Style (`element.style`)

| **CSS Class** | **Inline Style (**`element.style`**)** |
| --- | --- |
| Applies predefined styles from CSS. | Applies styles directly to the element. |
| Can apply multiple styles at once. | Changes one CSS property at a time. |
| Easy to reuse and maintain. | Harder to maintain for many styles. |
| Best for themes, animations, and UI changes. | Best for small or temporary style changes. |

## Example

### Using CSS Class

```css
.active {
  color: red;
  font-weight: bold;
}
```

```javascript
element.classList.add("active");
```

### Using Inline Style

```javascript
element.style.color = "red";
element.style.fontWeight = "bold";
```

## When to Use?

- **CSS Class:** For reusable and multiple style changes.
- `element.style`**:** For quick or dynamic changes to individual CSS properties.

# Why are CSS classes preferred for reusable visual states?

Question4-:Why are CSS classes generally preferred for reusable visual states such as active, open, error and dark?

Answer:- CSS classes are preferred because they make styling **reusable, clean, and easy to manage**.

## Reasons

- **Reusable:** The same class can be applied to multiple elements.
- **Easy to Maintain:** Update the CSS once, and all elements using the class change automatically.
- **Cleaner Code:** Keeps styling in CSS and logic in JavaScript.
- **Multiple Styles Together:** One class can apply many CSS properties at once.

## Example

**CSS**

```css
.active {
  background: blue;
  color: white;
}

.dark {
  background: black;
  color: white;
}
```

**JavaScript**

```javascript
button.classList.add("active");
body.classList.toggle("dark");
```

## Exam Answer (2–3 Marks)

CSS classes are preferred for states like **active, open, error, and dark** because they are reusable, easier to maintain, keep JavaScript code clean, and allow multiple style changes with a single class.

Question-5:How can you read an inline style using element.style? How is this different from getComputedStyle()? Answer:-

# `element.style` vs `getComputedStyle()`

## Difference

| `element.style` | `getComputedStyle()` |
| --- | --- |
| Reads only **inline styles**. | Reads the **final applied style** (inline + CSS + browser styles). |
| Returns only styles set directly on the element. | Returns all computed CSS properties. |

## Example

```javascript
// Inline style
element.style.color = "red";
console.log(element.style.color); // red

// Computed style
console.log(getComputedStyle(element).color);
```

## Workflow

```text
HTML Element
      │
      ├── Inline Style → element.style
      │
      └── CSS + Inline + Browser CSS
                 │
        getComputedStyle(element)
                 │
          Final Applied Style
```

## Exam Answer (2–3 Marks)

- `element.style` reads or sets only inline CSS styles.
- `getComputedStyle()` returns the final computed style after combining inline styles, external/internal CSS, and browser default styles.

Question:-6:- Explain accessible show/hide patterns. Why are aria-expanded, aria-controls, and the HTML hidden attribute useful?

Answer:-

# Accessible Show/Hide Patterns

An accessible show/hide component should communicate its state to both visual users and users of assistive technology.

## Important Attributes

| Attribute | Purpose |
| --- | --- |
| `aria-expanded` | Tells whether the control currently shows (`true`) or hides (`false`) the content. |
| `aria-controls` | Identifies the `id` of the element controlled by the button. |
| `hidden` | Hides the element visually and removes it from the accessibility tree when present. |

## Example: Accessible Accordion

```html
<button
  id="details-button"
  aria-expanded="false"
  aria-controls="details-panel">
  Show details
</button>

<section id="details-panel" hidden>
  <p>Additional information is available here.</p>
</section>
```

```javascript
const detailsButton = document.querySelector("#details-button");
const detailsPanel = document.querySelector("#details-panel");

detailsButton.addEventListener("click", () => {
  const isExpanded = detailsButton.getAttribute("aria-expanded") === "true";

  detailsButton.setAttribute("aria-expanded", String(!isExpanded));
  detailsPanel.hidden = isExpanded;
  detailsButton.textContent = isExpanded ? "Show details" : "Hide details";
});
```

## How the Pattern Works

```text
User clicks button
        |
        v
Read current aria-expanded value
        |
        v
Toggle aria-expanded: false <-> true
        |
        v
Toggle panel.hidden: true <-> false
        |
        v
Screen reader and visual UI receive the same state
```

## Best Practices

- Use a real `<button>` for an action that opens or closes content.
- Keep `aria-expanded` synchronized with the visible state.
- Set `aria-controls` to the controlled element's exact `id`.
- Use the `hidden` property for content that should be completely unavailable while closed.
- Do not use only `opacity: 0` or `visibility: hidden` when the content should be removed from keyboard and screen-reader interaction.
- If content remains available for assistive technology, use a different pattern and make sure focus and keyboard behavior are handled correctly.

## Exam Answer (2–3 Marks)

`aria-expanded` communicates whether a control is open or closed, while `aria-controls` identifies the content controlled by that element. The HTML `hidden` attribute hides content visually and removes it from the accessibility tree. Keeping these values synchronized makes show/hide interfaces understandable and usable with screen readers and keyboards.

---

Question:-7:-What are the advantages of CSS custom properties (`--variable`) in a theme-switching architecture?

Answer:-

# CSS Custom Properties in Theme Switching

CSS custom properties are variables defined with names beginning with `--`. They allow a theme to change shared design values without rewriting every individual CSS rule.

## Example Theme Architecture

```text
Theme selector on <html>
        |
        v
CSS custom properties (--color-background, --color-text)
        |
        v
Components use var(--property)
        |
        v
One theme change updates the whole interface
```

### CSS

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f4;
  --color-text: #111111;
  --color-accent: #1565c0;
}

:root[data-theme="dark"] {
  --color-background: #111111;
  --color-surface: #222222;
  --color-text: #ffffff;
  --color-accent: #90caf9;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-accent);
}
```

### JavaScript

```javascript
const themeButton = document.querySelector("#theme-button");
const page = document.documentElement;

themeButton.addEventListener("click", () => {
  const isDark = page.dataset.theme === "dark";
  page.dataset.theme = isDark ? "light" : "dark";
  themeButton.setAttribute("aria-pressed", String(!isDark));
});
```

## Advantages

- **Centralized values:** Colors, spacing, fonts, and sizes can be stored in one place.
- **Easy theme switching:** Changing one attribute such as `data-theme` updates all components using the variables.
- **Less duplication:** Light and dark themes can reuse the same component rules.
- **Better maintainability:** A designer can change a theme value without searching through every selector.
- **Cascading and inheritance:** Variables can be defined globally or overridden for a specific component.
- **Runtime updates:** JavaScript can change a variable or theme attribute without generating new stylesheets.
- **Reusable components:** Components depend on meaningful tokens such as `--color-text`, rather than hard-coded colors.
- **Fallback values:** `var()` can provide a fallback when a custom property is missing.

```css
.button {
  color: var(--button-text, #ffffff);
}
```

## Exam Answer (2–3 Marks)

CSS custom properties centralize theme values and allow the entire interface to switch themes by changing a small number of variables or a `data-theme` attribute. They reduce repeated CSS, improve maintainability, support inheritance and component-level overrides, and allow JavaScript to update visual values at runtime.

Topic:- Creating, Inserting & Removing Elements

# Creating, Inserting & Removing Elements

Question:-1:-What does `document.createElement()` do? Does it automatically add the element to the page?

Answer:-

`document.createElement()` creates a new element node in memory.

```javascript
const listItem = document.createElement("li");
listItem.textContent = "Learn JavaScript";
```

The element is not automatically added to the page. It must be inserted into an existing DOM element using methods such as `append()`, `appendChild()`, or `prepend()`.

```javascript
const list = document.querySelector("ul");
list.append(listItem); // Now the <li> appears on the page.
```

## Exam Answer

`document.createElement()` creates a new HTML element in memory. It does not insert the element into the document automatically; an insertion method is required.

---

Question:-2:-Differentiate between `append()` and `appendChild()` with examples.

Answer:-

| `append()` | `appendChild()` |
| --- | --- |
| Can append nodes and text strings. | Accepts only a `Node`. |
| Can append multiple values at once. | Appends one node at a time. |
| Returns `undefined`. | Returns the appended node. |
| Modern and flexible. | Older and widely supported DOM method. |

```javascript
const list = document.querySelector("ul");
const firstItem = document.createElement("li");
firstItem.textContent = "First item";

list.append(firstItem, "End of list"); // Node and text are allowed.

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";
const insertedItem = list.appendChild(secondItem); // Only a Node is allowed.
```

Use `append()` for flexible insertion and `appendChild()` when you specifically want to append one node and receive that node as the return value.

---

Question:-3:-What is the purpose of `element.remove()`?

Answer:-

`element.remove()` removes an element from its parent in the DOM.

```javascript
const message = document.querySelector(".message");
message.remove();
```

It is useful for deleting cards, closing notifications, removing completed tasks, or clearing generated content. It does nothing if the element is already detached from the document.

---

Question:-4:-Why is it useful to store UI data as an array of objects?

Answer:-

An array of objects keeps data separate from the code that creates the interface. Each object represents one record, such as a product or student.

```javascript
const products = [
  { id: 1, name: "Keyboard", price: 40 },
  { id: 2, name: "Mouse", price: 25 }
];
```

## Advantages

- **Reusable rendering:** The same function can render every object.
- **Easy updates:** Add, edit, or remove data without rewriting HTML.
- **Clear structure:** Related values stay together in one object.
- **Scalability:** The same pattern works for two records or thousands of records.
- **Separation of concerns:** Data, DOM creation, and user interaction can be managed separately.

```text
Array of objects
        |
        v
Rendering function
        |
        v
DOM elements and cards
```

---

Question:-5:-What is a `DocumentFragment`, and how can it improve repeated DOM insertion?

Answer:-

`DocumentFragment` is a lightweight container for DOM nodes. It is not part of the document itself. Nodes can be assembled inside it and then inserted into the page in one operation.

```javascript
const fragment = document.createDocumentFragment();

for (let index = 1; index <= 3; index += 1) {
  const item = document.createElement("li");
  item.textContent = `Item ${index}`;
  fragment.append(item);
}

document.querySelector("ul").append(fragment);
```

## Benefits

- Builds several elements away from the live document.
- Reduces repeated updates to the document tree.
- Keeps repeated insertion code organized.
- The fragment itself disappears after its children are moved into the page.

`DocumentFragment` is especially useful when rendering a list of many cards, rows, or list items.

---

Question:-6:-Write JavaScript to create an `<li>` dynamically and add it to an existing `<ul>`.

Answer:-

```html
<ul id="task-list"></ul>
```

```javascript
const taskList = document.querySelector("#task-list");
const taskItem = document.createElement("li");

taskItem.textContent = "Practice DOM manipulation";
taskList.append(taskItem);
```

---

Question:-7:-Create a function that receives a product object and returns a complete product-card DOM element.

Answer:-

```javascript
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;

  const title = document.createElement("h2");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("strong");
  price.textContent = `$${product.price}`;

  card.append(title, description, price);
  return card;
}

const productCard = createProductCard({
  id: 1,
  name: "Keyboard",
  description: "A compact wireless keyboard.",
  price: 40
});

document.querySelector("#product-list").append(productCard);
```

The function creates the complete card but does not decide where it should be inserted. This makes it reusable in different lists or views.

---

Question:-8:-Render five student objects as cards using `createElement()` and `append()`.

Answer:-

```html
<section id="student-list"></section>
```

```javascript
const students = [
  { name: "Asha", course: "JavaScript", score: 88 },
  { name: "Ravi", course: "JavaScript", score: 76 },
  { name: "Mina", course: "JavaScript", score: 91 },
  { name: "Omar", course: "JavaScript", score: 84 },
  { name: "Sara", course: "JavaScript", score: 95 }
];

const studentList = document.querySelector("#student-list");

students.forEach((student) => {
  const card = document.createElement("article");
  card.className = "student-card";

  const name = document.createElement("h2");
  name.textContent = student.name;

  const course = document.createElement("p");
  course.textContent = `Course: ${student.course}`;

  const score = document.createElement("p");
  score.textContent = `Score: ${student.score}`;

  card.append(name, course, score);
  studentList.append(card);
});
```

---

Question:-9:-Add a Remove button to every dynamically created product card so that only the clicked card is removed.

Answer:-

```javascript
function createRemovableProductCard(product) {
  const card = createProductCard(product);
  const removeButton = document.createElement("button");

  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    card.remove();
  });

  card.append(removeButton);
  return card;
}

const productList = document.querySelector("#product-list");

products.forEach((product) => {
  productList.append(createRemovableProductCard(product));
});
```

The button closes over its own `card` variable, so clicking it removes only the card created for that product.

---

Question:-10:-Modify the product-card practical so that all cards are first assembled in a `DocumentFragment` and then inserted into the page with one DOM operation.

Answer:-

```javascript
const productList = document.querySelector("#product-list");
const productFragment = document.createDocumentFragment();

products.forEach((product) => {
  productFragment.append(createRemovableProductCard(product));
});

productList.append(productFragment);
```

## Complete Rendering Flow

```text
Product objects
        |
        v
createRemovableProductCard(product)
        |
        v
Product cards assembled in DocumentFragment
        |
        v
productList.append(fragment)
        |
        v
All cards inserted into the page
```

Only the final `append()` inserts the assembled group into the live document. The Remove buttons still work because their event listeners were attached while each card was being created.

## Practical Summary

| Task | Main DOM API |
| --- | --- |
| Create an element | `document.createElement()` |
| Insert nodes or text | `append()` |
| Insert one node | `appendChild()` |
| Remove an element | `element.remove()` |
| Batch repeated insertion | `DocumentFragment` |

---

# DOM Traversal

DOM traversal means moving through the document tree to find related elements. Common traversal properties and methods include `parentElement`, `children`, `childNodes`, and `closest()`.

```text
document
   |
   v
parent element
   |
   v
current element
   |
   v
children and descendants
```

# DOM Debugging Checklist

Use this checklist when an element cannot be selected, traversed, updated, or removed as expected.

## 1. Selection

- Is the selector correct?
- Does the element exist before the script runs?
- Is `defer` used when the script is in the `<head>`?
- Is `querySelector()` returning `null`?

```javascript
const card = document.querySelector(".card");
console.log(card); // Check whether the element was found.
```

If the result is `null`, check the selector, spelling, element `id` or class, and script timing.

## 2. Traversal

- Is `parentElement` the parent you expect?
- Does `children` contain the expected elements?
- Are you accidentally using `childNodes` when you only want elements?
- Does `closest()` match the intended ancestor?

```javascript
console.log(card.parentElement);
console.log(card.children);
console.log(card.childNodes);
console.log(card.closest(".card-container"));
```

### `children` vs `childNodes`

- `children` returns element children only.
- `childNodes` also includes text nodes, including whitespace between HTML elements.
- `closest(selector)` searches the current element and then its ancestors.

## 3. Events

- Is the event listener attached?
- Is the event firing?
- What is `event.target`?
- What does `event.currentTarget` refer to?
- Does `closest()` return `null` for the clicked target?

```javascript
document.addEventListener("click", (event) => {
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);

  const clickedCard = event.target.closest(".card");
  console.log("clicked card:", clickedCard);
});
```

`event.target` is the element that originally received the event. `event.currentTarget` is the element whose listener is currently running. Always check the result of `closest()` before using it because it can be `null`.

```javascript
const clickedCard = event.target.closest(".card");

if (clickedCard) {
  clickedCard.classList.add("selected");
}
```

## 4. Content and Attributes

- Should the update use `textContent` or `innerHTML`?
- Is the attribute name correct?
- Check `getAttribute()` and `setAttribute()`.
- For `data-*` attributes, check the `dataset` object.

```javascript
element.textContent = "Safe text content";
element.setAttribute("aria-label", "Open menu");

console.log(element.getAttribute("aria-label"));
console.log(element.dataset);
```

Use `textContent` for plain text. Use `innerHTML` only when HTML markup is intentionally required and the content is trusted or safely sanitized.

## 5. Classes and State

- Is the expected class present?
- Check `classList.contains()`.
- Check whether `toggle()` changed the state.
- Inspect computed styles in DevTools.

```javascript
console.log(element.classList.contains("active"));
element.classList.toggle("active");
console.log(getComputedStyle(element).display);
```

Check both the DOM class list and the computed style. A class can be present but overridden by another CSS rule.

## 6. Dynamic Elements

- Was the element actually created?
- Was it appended to the correct parent?
- Does the generated element have the expected classes and attributes?
- Is event delegation needed for dynamically created elements?

```javascript
const newCard = document.createElement("article");
newCard.className = "card";
newCard.dataset.id = "42";

console.log(newCard);
console.log(newCard.className);
console.log(newCard.dataset.id);

document.querySelector("#card-list").append(newCard);
```

For elements created after the initial page load, attach a listener when creating them or use event delegation on a stable parent.

```javascript
document.querySelector("#card-list").addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-button");

  if (removeButton) {
    removeButton.closest(".card")?.remove();
  }
});
```

## 7. Rendering Architecture

- Is the data correct?
- Is the logic producing the expected result?
- Is the render function receiving the correct data?
- Are repeated DOM writes organized efficiently?

```javascript
console.log("data:", products);
console.log("number of products:", products.length);

products.forEach((product) => {
  console.log("rendering:", product);
});
```

Keep data preparation, element creation, and insertion clear. For many repeated elements, build them in a `DocumentFragment` before inserting the fragment into the page.

## 8. Console and DevTools

Useful checks:

```javascript
console.log(element);
console.dir(element);
console.log(element.parentElement);
console.log(element.children);
console.log(element.closest(".card"));
```

Also inspect the following DevTools areas:

- **Elements panel:** Confirm the element, structure, classes, and attributes.
- **Console:** Check values, `null` results, and runtime errors.
- **Event Listeners:** Confirm that the expected listener is attached.
- **Computed styles:** Find the final CSS values and overridden rules.
- **Breakpoints:** Pause execution and inspect variables step by step.

## Quick Debugging Flow

```text
1. Confirm the element exists
          |
          v
2. Inspect parent, children, and closest ancestor
          |
          v
3. Confirm the event and target values
          |
          v
4. Check content, attributes, and classes
          |
          v
5. Inspect generated DOM and computed styles
          |
          v
6. Verify data and rendering logic
```

## Exam Summary

DOM debugging should proceed from selection to traversal, events, content and attributes, classes, dynamic elements, rendering logic, and finally DevTools inspection. Logging the element, its parent, its children, and its closest matching ancestor quickly reveals where the DOM logic is failing.

---

# DOM Traversal Practicals

## 1. Build an FAQ Accordion Using `closest()`

This practical creates an expandable FAQ item. The click listener is attached to the list container, and `closest()` finds the question and its related answer even when the user clicks nested content inside the button.

```html
<section id="faq-list">
  <article class="faq-item">
    <button class="faq-question" type="button" aria-expanded="false">
      What is the DOM?
    </button>
    <p class="faq-answer" hidden>The DOM is the browser's object representation of an HTML document.</p>
  </article>
</section>
```

```javascript
const faqList = document.querySelector("#faq-list");

faqList.addEventListener("click", (event) => {
  const question = event.target.closest(".faq-question");

  if (!question) {
    return;
  }

  const faqItem = question.closest(".faq-item");
  const answer = faqItem.querySelector(".faq-answer");
  const isOpen = question.getAttribute("aria-expanded") === "true";

  question.setAttribute("aria-expanded", String(!isOpen));
  answer.hidden = isOpen;
});
```

`closest()` lets one listener find the clicked question and its containing FAQ item, even when the question contains nested markup such as an icon or `<span>`.

## 2. Create a Profile Card Dynamically from an Object

This practical converts one profile object into a complete DOM card. Keeping the data in an object makes the same function reusable for many different profiles.

```javascript
const profile = {
  id: "profile-1",
  name: "Priya Sharma",
  role: "Frontend Developer",
  bio: "Builds accessible interfaces with JavaScript.",
  location: "Pune"
};

function createProfileCard(profileData) {
  const card = document.createElement("article");
  card.className = "profile-card";
  card.dataset.id = profileData.id;

  const name = document.createElement("h2");
  name.textContent = profileData.name;

  const role = document.createElement("p");
  role.textContent = profileData.role;

  const bio = document.createElement("p");
  bio.textContent = profileData.bio;

  const location = document.createElement("p");
  location.textContent = `Location: ${profileData.location}`;

  card.append(name, role, bio, location);
  return card;
}

document.querySelector("#profile-container").append(createProfileCard(profile));
```

## 3. Toggle a Highlight Class on the Profile Card

This practical changes the profile card's visual state without changing its content. `classList.toggle()` adds the `highlight` class when it is missing and removes it when it is already present.

```javascript
const profileContainer = document.querySelector("#profile-container");
const highlightButton = document.createElement("button");

highlightButton.type = "button";
highlightButton.textContent = "Highlight profile";
highlightButton.addEventListener("click", () => {
  const profileCard = profileContainer.querySelector(".profile-card");
  profileCard.classList.toggle("highlight");
});

profileContainer.append(highlightButton);
```

Example CSS:

```css
.profile-card.highlight {
  border: 2px solid orange;
  background-color: #fff4cc;
}
```

## 4. Render a List of Skills from an Array

This practical loops through an array and creates one list item for each skill. The array controls the data, while the rendering loop creates and inserts the matching DOM elements.

```html
<ul id="skill-list"></ul>
```

```javascript
const skills = ["HTML", "CSS", "JavaScript", "Accessibility"];
const skillList = document.querySelector("#skill-list");

skills.forEach((skill, index) => {
  const skillItem = document.createElement("li");
  skillItem.dataset.id = `skill-${index + 1}`;
  skillItem.textContent = skill;
  skillList.append(skillItem);
});
```

## 5. Create a Random Quote Generator from Quote Objects

This practical selects one quote object at random and displays its text and author. Each button click generates a new random index and updates the existing elements instead of creating unnecessary duplicate markup.

```html
<blockquote id="quote-text"></blockquote>
<p id="quote-author"></p>
<button id="quote-button" type="button">New quote</button>
```

```javascript
const quotes = [
  { id: "quote-1", text: "Great things are built one step at a time.", author: "Unknown" },
  { id: "quote-2", text: "Make it work, then make it clear.", author: "Unknown" },
  { id: "quote-3", text: "Small improvements compound over time.", author: "Unknown" }
];

const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-button");

function renderRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.dataset.id = quote.id;
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

quoteButton.addEventListener("click", renderRandomQuote);
renderRandomQuote();
```

## 6. Use Event Delegation for Buttons in Dynamic Cards

This practical demonstrates event delegation for cards that may be created after the page loads. A single parent listener identifies the clicked action button and then finds the correct card with `closest()`.

Event delegation attaches one listener to a stable parent instead of adding separate listeners to every button.

```javascript
const cardList = document.querySelector("#card-list");

cardList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-action]");

  if (!actionButton) {
    return;
  }

  const card = actionButton.closest(".card");
  const action = actionButton.dataset.action;

  if (action === "remove") {
    card?.remove();
  }

  if (action === "highlight") {
    card?.classList.toggle("highlight");
  }
});
```

This works for buttons that already exist and buttons added later because the listener belongs to `cardList`.

## 7. Add a `data-id` Attribute to Dynamic Items

This practical gives every generated item a stable identifier that connects the DOM element to its original data record. The identifier can later be used to update, select, or remove the correct item.

Use `dataset` to create a `data-id` attribute.

```javascript
function createTaskItem(task) {
  const item = document.createElement("li");
  item.dataset.id = task.id;
  item.textContent = task.title;
  return item;
}

const taskItem = createTaskItem({ id: "task-7", title: "Review DOM traversal" });
console.log(taskItem.dataset.id); // task-7
```

The generated HTML contains `data-id="task-7"`, and JavaScript can read it through `element.dataset.id`.

## 8. Remove a Dynamic Card Using `closest()` and `remove()`

This practical removes only the card related to the clicked button. `closest()` travels from the button to its card ancestor, and `remove()` deletes that card from the document.

```javascript
cardList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-button");

  if (!removeButton) {
    return;
  }

  const card = removeButton.closest(".card");
  card?.remove();
});
```

The first `closest()` finds the clicked Remove button, and the second finds its containing card. The optional chaining operator prevents an error if no card is found.

## 9. Inspect a Component with `parentElement` and `children`

This practical helps debug a component's DOM structure. It checks the component's parent and loops through its direct element children so the actual hierarchy can be compared with the expected design.

```javascript
const component = document.querySelector(".profile-card");

console.log("Parent:", component.parentElement);
console.log("Child count:", component.children.length);

Array.from(component.children).forEach((child, index) => {
  console.log(`Child ${index + 1}:`, child);
});
```

`parentElement` moves one level upward to the containing element. `children` returns only element children, excluding text nodes and whitespace nodes.

## 10. Refactor a DOM Script into Data, Logic, and Rendering Functions

This practical separates the application into three responsibilities: data stores records, logic creates one element, and rendering inserts the collection into the page. This separation reduces duplication and makes each part easier to test and maintain.

```javascript
// Data: application records.
const tasks = [
  { id: "task-1", title: "Learn selectors", completed: true },
  { id: "task-2", title: "Practice closest", completed: false }
];

// Logic: creates one complete item from one task.
function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = "task-item";
  item.dataset.id = task.id;

  const title = document.createElement("span");
  title.textContent = task.title;

  if (task.completed) {
    item.classList.add("completed");
  }

  item.append(title);
  return item;
}

// Rendering: clears the view and inserts the current data.
function renderTasks(taskData, container) {
  container.replaceChildren();
  const fragment = document.createDocumentFragment();

  taskData.forEach((task) => {
    fragment.append(createTaskElement(task));
  });

  container.append(fragment);
}

const taskContainer = document.querySelector("#task-list");
renderTasks(tasks, taskContainer);
```

## Refactoring Architecture

```text
Data
  |
  v
Logic: createTaskElement(task)
  |
  v
Rendering: renderTasks(tasks, container)
  |
  v
DOM view
```

This structure makes the script easier to test and update. Data describes what should appear, logic creates individual elements, and rendering controls when and where the elements are inserted.