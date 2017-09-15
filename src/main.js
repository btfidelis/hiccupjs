import r from './render'
/*
import render as r from 'render'

component = r(['div', {}, 
  ['label', {for: 'abc'}, 'Abc'],
  ['input', {type: text, id: 'abc'}, '']
  ['button',{onClick(event) { } } } ]
])

component.json() // { email: '' }
component.forms() = // []
component.inputs() = // []
*/


const todoList = ['ul', {}, []]

const click = (e) => {
  console.warn(e, app)
  // todoList.modify(
  //   ['ul', {}, todoList.get('li').concat(e.component.input('list'))]
  // )
}

const form = ['div', {},
  todoList,
  ['label', {for: 'abc'}, 'Digite a tarefa: '],
  ['input', {type: 'text', id: 'abc'}, ''],
  ['button', { click }, 'enviar'  ]
]


const app = r(document.getElementById('app'), form) 