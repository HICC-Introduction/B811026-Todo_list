var todo = document.getElementById('todo')
var addBtn = document.getElementById('addBtn')
addBtn.id = 'addBtn';
var inputText = document.getElementById('inputText');

//할일목록의 요소를 생성하는 함수
//각각의 요소들을 content에 appendChild하고 최종적으로 content를 return
var createListItemElements = function(text){
  var content = document.createElement('li');

  var label = document.createElement('label');
  label.innerHTML = text;

  var checkbox = document.createElement('input');
  checkbox.type = 'checkBox';

  var editBtn =  document.createElement('button');
  editBtn.innerHTML = 'Edit';
  editBtn.className = 'btn';
  //edit버튼에 함수 연결
  editBtn.addEventListener('click', editListItem);

  var editText = document.createElement('input');
  editText.type = 'text';
  editText.className = 'editText';

  var delBtn = document.createElement('button');
  delBtn.innerHTML = 'Delete';
  delBtn.className = 'btn'
  delBtn.id = 'delBtn';
  //delete버튼에 함수 연결
  delBtn.addEventListener('click', delListItem);

  content.appendChild(checkbox);
  content.appendChild(label);
  content.appendChild(editText);
  content.appendChild(editBtn);
  content.appendChild(delBtn);

  return content;
}

//할일목록을 추가하는 함수
var addListItem = function(){
  var listItem = createListItemElements(inputText.value);
  todo.appendChild(listItem);
  ifYouClickBox(listItem,complete);
  inputText.value='';
}

//add버튼에 함수 연결
addBtn.addEventListener('click', addListItem);
//할일목록을 삭제하는 함수
var delListItem = function(){
  var listItem = this.parentNode;
  listItem.parentNode.removeChild(listItem);
}

//할일목록을 수정하는 함수
var editListItem = function(){
  var listItem = this.parentNode;
  var editText = listItem.querySelector('input[type="text"]');
  var label = listItem.querySelector('label')
  label.innerHTML = editText.value;
  editText.value='';
}

//체크박스를 체크했을때 동작을 지정하는 함수
var complete = function() {
   var listItem = this.parentNode;
   done.appendChild(listItem);
   ifYouClickBox(listItem,incomplete);
}

//체크박스를 체크해제했을때 동작을 지정하는 함수
var incomplete = function() {
  var listItem = this.parentNode;
  todo.appendChild(listItem);
  ifYouClickBox(listItem,complete);
}

//체크박스를 클릭하면 상태가 completed이 되는지 incomplete이 되는지를 지정하는 함수
var ifYouClickBox = function(listItem, state) {
  	var checkbox = listItem.querySelector('input[type="checkbox"]');
  	checkbox.onchange = state;
}
