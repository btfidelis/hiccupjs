import r from './render'

const todoList = ['ul', {}, []]

const click = (e) => {
  alert('oi')
}

const form = ['div', {},
  ['label', {for: 'abc'}, 'type something: '],
  ['input', {type: 'text', id: 'abc'}, ''],
  ['button', { click }, 'send']
]


const app = r(document.getElementById('app'), form) 