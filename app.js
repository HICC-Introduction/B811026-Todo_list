var todo = document.getElementById('todo')
var inputText = document.getElementById('inputText');

function addContent(){
  var content = document.createElement('li');
  content.innerText = inputText.value;
  todo.appendChild(content);
}
