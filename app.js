var todo = document.getElementById('todo')
var addBtn = document.getElementById('addBtn')
var deleteBtn = document.getElementById('deleteBtn')
var inputText = document.getElementById('inputText');

var createListItemElements = function(text){
  var content = document.createElement('li');
  content.innerHTML = text;
  content.id = 'content';

  var editBtn=  document.createElement('button');
  editBtn.innerHTML = 'Edit';

  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.id = 'deleteBtn';
  deleteBtn.addEventListener('click', delListItem);

  content.appendChild(editBtn);
  content.appendChild(deleteBtn);

  return content;
}

var addListItem = function(){
  var listItem = createListItemElements(inputText.value);
  todo.appendChild(listItem);
  inputText.value='';
}
addBtn.addEventListener('click', addListItem);

var delListItem = function(){
  var listItem = document.getElementById('content');
  listItem.parentNode.removeChild(listItem);
}
