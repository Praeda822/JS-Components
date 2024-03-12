// The menu array contains objects, each representing a menu item. Each object has properties like id, title, category, price, img, and desc which hold the details of a menu item.

// The sectionCenter and container constants are references to HTML elements in the DOM. The sectionCenter is where the menu items will be displayed, and the container is where the category filter buttons will be placed.

// The window.addEventListener("DOMContentLoaded", function () {...}) is an event listener that waits for the HTML document to fully load before running the provided function. This function calls displayMenuItems(menu) and displayMenuButtons(), which populate the sectionCenter and container elements respectively.

// The displayMenuItems(menuItems) function takes an array of menu items as an argument. It uses the map() function to create an array of HTML strings, each representing a menu item. The join("") method is then used to convert this array into a single string, which is inserted into the sectionCenter element using innerHTML.

// The displayMenuButtons() function creates filter buttons for each unique category in the menu array. It uses the reduce() function to create an array of unique categories, then map() to create an array of HTML strings for the buttons. These buttons are inserted into the container element. An event listener is added to each button, which filters the displayed menu items based on the category of the clicked button. The filter() function is used to create a new array of menu items that match the selected category, and displayMenuItems(menuCategory) is called to display these items. If the "all" button is clicked, all menu items are displayed.

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Selecting the DOM elements where the menu items and buttons will be displayed
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// Adding an event listener for when the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  // Displaying all menu items and buttons when the page loads
  displayMenuItems(menu);
  displayMenuButtons();
});

// Function to display menu items
function displayMenuItems(menuItems) {
  // Mapping over the menu items to create HTML strings for each item
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title} />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });

  // Joining the array of HTML strings into a single string
  displayMenu = displayMenu.join("");

  // Setting the innerHTML of the sectionCenter to display the menu items
  sectionCenter.innerHTML = displayMenu;
}

// Function to display menu buttons
function displayMenuButtons() {
  // Reducing the menu array to a unique set of categories
  const categories = menu.reduce(
    function (values, item) {
      // If the category is not already in the values array, add it
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  ); // Starting with "all" in the array

  // Mapping over the categories to create buttons for each category
  const categoryBtns = categories
    .map(function (category) {
      // Returning a button element for each category
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join(""); // Joining the array of button elements into a single string

  // Setting the innerHTML of the button container to the category buttons
  container.innerHTML = categoryBtns;

  // Selecting the newly created filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Adding event listeners to filter buttons
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Getting the category from the data-id attribute of the clicked button
      const category = e.currentTarget.dataset.id;

      // Filtering the menu array based on the clicked category
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // Displaying the filtered menu items, or all items if "all" is selected
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
