const items = document.querySelector('.items');
const input =  document.querySelector('.inputText');
const addBtn = document.querySelector('.addButton');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    console.log("내용을 입력하세요");
    input.focus();
    return;
  }
  console.log(text);
  // 2. 새로운 아이템 만들기
  const item = createItem(text);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center'});
  // 5. 인풋 초기화
  input.value = "";
  input.focus();
}

function createItem(text) {
  let item_row = document.createElement('li');
  let item = document.createElement('div');
  let item_name = document.createElement('span');
  let button = document.createElement('button');
  let divider = document.createElement('div');
  item_row.classList.add('item_row');
  // item_row.setAttribute('class', 'item_row')
  item.classList.add('item');
  item_name.classList.add('item_name');
  item_name.innerText = text;
  button.classList.add('removeButton');
  button.innerHTML = `<i class="far fa-trash-alt"></i>`;
  button.addEventListener('click', () => {
    items.removeChild(item_row);
  })
  divider.classList.add('divider');
  // 3. 아이템스 컨테이너 안에 새로 만든 아이템을 추가한다
  item.appendChild(item_name);
  item.appendChild(button);
  item_row.appendChild(item);
  item_row.appendChild(divider);
  items.appendChild(item_row);
  return item_row;
}

function onDelete() {

}

addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', (e) => {
  if (e.keyCode !== 13) {
    // e.key == 'Enter'
    return;
  }
  onAdd();
})

