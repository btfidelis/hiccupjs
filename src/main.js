import hiccup from './hiccup'

const todoList = ['ul', {}, []]

const click = (e) => {
  alert('oi')
}

const form = ['div', {},
  ['label', {for: 'abc'}, 'type something: '],
  ['input', {type: 'text', id: 'abc'}, ''],
  ['button', { click }, 'send']
]


const app = hiccup(document.getElementById('app'), form) 