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
  console.warn(e, form)
  // todoList.modify(
  //   ['ul', {}, todoList.get('li').concat(e.component.input('list'))]
  // )
}

const form = ['div', {}, 
    ['label', {for: 'abc'}, 'Digite a tarefa: '],
    ['input', {type: 'text', id: 'abc'}, ''],
    ['button', { click }, 'enviar'  ]
]

console.warn(form)

r(document.getElementById('app'), form) 