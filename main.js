const input_todo = document.getElementById('input_todo');
const btn_add = document.getElementById('btn_add');
const output = document.getElementById('output');
const ul = document.createElement('ul');
output.append(ul);

const todoElements = [];
const count = 1;


const pushValue = (todoElements) => {
    btn_add.addEventListener('click', () => {
        todoElements.push(input_todo.value);
        input_todo.value = ''
        
        const li = document.createElement('li');
        ul.append(li);
        li.classList.add('list');

        todoElements.forEach( (item, index) => {
            li.innerHTML = todoElements[index]
            const btn_remove = document.createElement('button')
            li.append(btn_remove);
            btn_remove.innerText = 'Remove';

            btn_remove.onclick = () => {
                todoElements.splice(index, 1);
                console.log('test');
                // li.innerHTML = `${count++}:  ${todoElements[index]}`;
            }
        })
    })
}

pushValue(todoElements)