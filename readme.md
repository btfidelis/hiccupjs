A tiny utility that makes it easy to create new HTML elements using JS arrays.

Inspired by James Reeves's wonderful [Clojure project of the same name](https://github.com/weavejester/hiccup).

# Why?

The syntax of arrays is surprisingly not far off something like React's JSX, but already exists in the browser without transpilation. This library occupies a middle ground between the encumbering approach of creating elements [using `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), appending children manually, and so on; and pulling in a larger library like React.

If you like Lisp, you may also be a fan of the nesting style of lists (which is similar to [s-expressions](https://en.wikipedia.org/wiki/S-expression)).

# Installation
```sh 
$ npm i hiccupjs
```

# Usage

`hiccupjs` has a single default export which is a function, `h`, that updates the content of an element with the given hiccup data structure.

## Data structures

Hiccup data structures are lists containing an element name, an attribute map, and any number of children. For example, a paragraph element that also contains some bold text looks like the following:

```js
const boldMonth = ['p', {},
  ['b', {}, 'February'],
  ['span', {}, ' 15th, 2022']
];
```

## Rendering

Once a data structure has been defined, it can be rendered as the content of any element in the document:

```js
  import h from 'hiccupjs'
  
  const click = () => console.log('clicked!');

  const form = ['div', {},
    ['label', {for: 'abc'}, 'type something: '],
    ['input', {type: 'text', id: 'abc'}, ''],
    ['button', { click }, 'send']
  ]
  
  // renders the form
  const formHtmlElment = h(document.getElementById('app'), form) 
```

## Event listeners

In the button in the previous example, the `click` attribute is an example of an event listener. If the value of one of the entries in the attribute map is a function, then it will be set as the event listener that has the name of the key.

A list of all events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Events).

