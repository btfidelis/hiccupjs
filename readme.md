# Hiccup.js
Small lib for that allows hml style element creation

# Installation
```sh 
$ npm i hiccupjs
```

# Example usage
```js
  import h from 'hiccupjs'

  const form = ['div', {},
    ['label', {for: 'abc'}, 'type something: '],
    ['input', {type: 'text', id: 'abc'}, ''],
    ['button', { click }, 'send']
  ]
  
  // renders the form
  const formHtmlElment = h(document.getElementById('app'), form) 
```

# Todo
  - Add tests
  - Improve documentation 