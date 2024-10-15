const newItemInput = document.getElementById('newItem');
const itemList = document.getElementById('itemList');

let items = [];

function addItem() {
  const newItem = newItemInput.value.trim();
  if (newItem !== '') {
    items.push(newItem);
    renderList();
    newItemInput.value = '';
  }
}

function removeItem(item) {
  items = items.filter(i => i !== item);
  renderList();
}

function renderList() {
  itemList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => removeItem(item));
    itemList.appendChild(li);
  });
}