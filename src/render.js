export default (appEl, htmlDataStructure) => 
  htmlDataStructureToString(...htmlDataStructure)

const oneTagElements = new Set([
  'input'
])

const parseTag = htmlTag => document.createElement(htmlTag)
const isFunction = x => typeof x === 'function'

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

const htmlDataStructureToString = (tag, attrs, ...value) => {
const parsed = mergeElementWithAttrs(parseTag(tag), attrs)
const resolveValue = val => {
return val
  .map(x => {
    if (x.length === 0 && Array.isArray(x)) {
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
