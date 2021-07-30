// /*
// *The correct usage for storing data in the Map is through the set(key, value) method.
// ****************************************************************************************
// */
// const contacts = new Map()
// contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})

// console.log(contacts.get('Jessie'));
// contacts.has('Jessie') // true

// contacts.get('Hilary') // undefined
// contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
// contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond') // false
// //contacts.delete('Jessie') // true
// console.log(contacts.size) // 1
// console.log(contacts.keys()); // keys of map
// console.log(contacts.values()); // check values of map 
// console.log(contacts.entries()); // check all  the entries of map

// console.log(contacts.clear()); // clear all map entries 
// console.log(contacts) // show map entries after deletion

// /*Examples
// ******************************************************************************************************************
// *Using the Map object
// */ 
// const myMap = new Map()

// const keyString = 'a string'
// const keyObj    = {}
// const keyFunc   = function() {}

// // setting the values
// myMap.set(keyString, "value associated with 'a string'")
// myMap.set(keyObj, 'value associated with keyObj')
// myMap.set(keyFunc, 'value associated with keyFunc')

// //console.log(myMap);
// myMap.size              // 3

// // getting the values
// myMap.get(keyString)    // "value associated with 'a string'"
// myMap.get(keyObj)       // "value associated with keyObj"
// myMap.get(keyFunc)      // "value associated with keyFunc"

// myMap.get('a string')    // "value associated with 'a string'"
//                          // because keyString === 'a string'
// myMap.get({})            // undefined, because keyObj !== {}
// myMap.get(function() {}) // undefined, because keyFunc !== function () {}

/************************* ******************************************
*Iterating Map with for..of
Maps can be iterated using a for..of loop:
*
*/
const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one


/* **********************************************************************************
 * 
 * iterating using for each mathod 
 */
myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value)
  })
  // 0 = zero
  // 1 = one