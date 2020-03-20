const $ = document.querySelector.bind(document);

const form = $('#addForm');
const itemList = $('#items');
const input = $('#item');
const filterItem = $('#filter');

const addItem = (event) => {
  event.preventDefault();
  // Get input value
  const value = input.value;
  if (value.trim()) {
    // Create new li element
    const li = document.createElement('li');
    // Add class
    li.classList.add('list-group-item');
    // li.className = 'list-group-item';
    // Add text node with input value
    const text = document.createTextNode(value);
    li.appendChild(text);
    // Create delete button element
    const deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);
    input.value = '';
  }
};

const removeItem = (event) => {
  if (event.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

const searchItems = (event) => {
  // Convert text to lowercase
  const value = event.target.value.toLowerCase();
  // Get li's
  const items = itemList.getElementsByTagName('li');
  // Convert HTMLCollection to an array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(value) !== -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none';
    }
  });
};

// Form submit event
form.addEventListener('submit', addItem);
// Delete item
itemList.addEventListener('click', removeItem);
// Search item
filterItem.addEventListener('keyup', searchItems);