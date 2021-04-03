var todo = document.getElementById('todo')
var addBtn = document.getElementById('addBtn')
var deleteBtn = document.getElementById('deleteBtn')
var inputText = document.getElementById('inputText');

// 할일목록의 요소를 생성하는 함수
// 각각의 요소들을 content에 appendChild하고 최종적으로 content를 return
var createListItemElements = function(text){
  var content = document.createElement('li');
  content.innerHTML = text;

  var checkbox = document.createElement('input');
  checkbox.type = 'checkBox';

  var editBtn=  document.createElement('button');
  editBtn.innerHTML = 'Edit';

  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.id = 'deleteBtn';
  // delete버튼에 함수 연결
  deleteBtn.addEventListener('click', delListItem);

  content.appendChild(checkbox);
  content.appendChild(editBtn);
  content.appendChild(deleteBtn);

  return content;
}

// 할일목록을 추가하는 함수
var addListItem = function(){
  var listItem = createListItemElements(inputText.value);
  todo.appendChild(listItem);
  ifYouClickBox(listItem,complete);
  inputText.value='';
}

// add버튼에 함수 연결
addBtn.addEventListener('click', addListItem);

// 할일목록을 삭제하는 함수
var delListItem = function(){
  var listItem = this.parentNode;
  listItem.parentNode.removeChild(listItem);
}

// 체크박스를 체크했을때 동작을 지정하는 함수
var complete = function() {
   var listItem = this.parentNode;
   done.appendChild(listItem);
   ifYouClickBox(listItem,incomplete);
}

// 체크박스를 체크해제했을때 동작을 지정하는 함수
var incomplete = function() {
  var listItem = this.parentNode;
  todo.appendChild(listItem);
  ifYouClickBox(listItem,complete);
}

// 체크박스를 클릭했을때 상태(completed인지 incomplete인지)를 지정하는 함수
var ifYouClickBox = function(listItem, state) {
  	var checkbox = listItem.querySelector('input[type="checkbox"]');
  	checkbox.onchange = state;
}
