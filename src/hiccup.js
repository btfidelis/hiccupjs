export default (el, dt) => 
  update(el, htmlDataStructureToString(...dt))

const update = (element, component) => {
  element.innerHTML = ''
  element.appendChild(component)
}

const oneTagElements = new Set([
  'input'
])

const parseTag = htmlTag => document.createElement(htmlTag)
const isFunction = x => typeof x === 'function'

/**
 * Adds a dictionary representation of the HTMLElement
 * to the element
 * EX:
 * input | { click: (event) => alert('hello') }
 * 
 * @param {HTMLElement} el
 * @param {Object} attrs 
 */
const mergeElementWithAttrs = (el, attrs) => {
  if (oneTagElements.has(el.tagName.toLowerCase())) {
    attrs.value = ''
  }

  Object
    .entries(attrs)
    .forEach(ent => { 
      if (isFunction(ent[1])) {
        const [ eventName, fn ] = ent
        el.addEventListener(eventName.toLowerCase(), fn)
      } else {
        el.setAttribute(...ent)
      }
    })

  return el
}

/**
 * Entry point
 * @param {string} tag 
 * @param {object} attrs 
 * @param {object} value 
 */
const htmlDataStructureToString = (tag, attrs, ...value) => {
  const parsed = mergeElementWithAttrs(parseTag(tag), attrs)
  const resolveValue = val => {
    return val
      .map(x => {
        if (Array.isArray(x) && x.length === 0 ) {
          return ''
        }

        return x
      })
      .map(x => {
        if (typeof x === 'string') {  
          return val
        }
      
        return htmlDataStructureToString(...x)
      })
  } 

  return resolveValue(value)
    .reduce((ac, x) => { 
      ac.append(x)
      return ac
    }, parsed)
}
