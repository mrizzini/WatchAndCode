var todos = ['item 1', 'item 2', 'item 3'];


undefined
todos
(3) ["item 1", "item 2", "item 3"]
console.log ('hello there', 'gordon');
VM72:1 hello there gordon
undefined
todos.push('item 4');
4
todos
(4) ["item 1", "item 2", "item 3", "item 4"]
todos.push('item 5');
5
todos
(5) ["item 1", "item 2", "item 3", "item 4", "item 5"]
todos[0]
"item 1"
todos[1]
"item 2"
todos[2]
"item 3"
todos[4]
"item 5"
todos[5]
undefined
todos[0] = 'item 1 updated'
"item 1 updated"
todos[0]
"item 1 updated"
todos
(5) ["item 1 updated", "item 2", "item 3", "item 4", "item 5"]
todos.splice(0, 1);
["item 1 updated"]
todos
(4) ["item 2", "item 3", "item 4", "item 5"]
todos.splice(3, 1);
["item 5"]
todos
(3) ["item 2", "item 3", "item 4"]
todos.splice(3, 1);
[]