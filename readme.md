# Rendy
Small lib for that allows hml style element creation

# Installation
```sh 
$ npm i rendy
```

# Example usage
```js
  import r from 'rendy'

  const form = ['div', {},
    ['label', {for: 'abc'}, 'type something: '],
    ['input', {type: 'text', id: 'abc'}, ''],
    ['button', { click }, 'send']
  ]
  
  // renders the form
  const formHtmlElment = r(document.getElementById('app'), form) 
```

# Todo
  - Add tests
  - Improve documentation 