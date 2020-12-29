//select elements
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//add item event
form.addEventListener('submit', addItem);

//remove item event
itemList.addEventListener('click', removeItem); //it fires the click event whenever we click on the list.

//add filter event
filter.addEventListener('keyup', filterItems);

//addItem
function addItem(e) {
  e.preventDefault();

  //To get the input value
  let newItem = document.getElementById('item').value;
  //console.log(newItem);

  //create new list
  let li = document.createElement('li');

  //add className
  li.className = 'list-group-item';

  //add text Node
  li.appendChild(document.createTextNode(newItem));

  //create delete button
  let deleteButton = document.createElement('button');

  //add button classname
  deleteButton.className = 'btn btn-danger btn-sm float-right ml-2 delete';

  //add text node to deleteButton
  deleteButton.appendChild(document.createTextNode('X'));

  //append deleteButton to li
  li.appendChild(deleteButton);

  //create input date
  let input = document.createElement('input');

  //add classname for input
  input.setAttribute('type', 'date');
  input.id = 'date';
  input.setAttribute('min', '2020-01-01');
  input.setAttribute('max', '2020-12-31');
  input.className = 'float-right align-self-center';

  //append input to lis
  li.appendChild(input);

  //append li to itemList;
  itemList.appendChild(li);

  //reset form
  form.reset();
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    //checking this condition to ensure, it only fire the click/delete event when click on the button only.
    if (confirm('Are You Sure?')) {
      let li = e.target.parentElement; // refer to target button's parent i.e. li
      itemList.removeChild(li);
    }
  }
}

//Filter item
function filterItems(e) {
  //convert the text to lower case
  let text = e.target.value.toLowerCase();

  //get lis
  let items = itemList.getElementsByTagName('li');
  //console.log(items); is HTML collection, need to convert to Array

  //convert lis to Array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    //console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
