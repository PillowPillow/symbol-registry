# symbol-registry 
angular-property-binder
=======================

Tiny library which help you to create reference variables and keep them intact. 
  
Don't use you're controller as a MODEL - [Best Practice](http://toddmotto.com/rethinking-angular-js-controllers/).  
*Controllers should bind references to Models only (and call methods returned from promises)*

### Installation
------------

`npm install symbol-registry`  

````javascript
var registry = require('symbol-registry');
````

### API Reference
------------

Here is the full list of accessible methods:

## Service **[require('symbol-registry')]**

###`registry( keys )`

#### Params:
 - **keys**: String or Array. key(s) to retrieve as symbol.  

#### Returns:
 - String or Array. symbol(s)

---

## Methods

###`erase( keys )`

> Clear the symbol cache
#### Params:
 - **keys**: *(Optional)* String or Array. key(s) to delete.  

---

## Properties

###`caseSensitive`
*Boolean*

> Determine if the storage's case sensitive  
> [OnValueChange]: triggers a clear cache

---

### Modify and build
--------------------

`npm install`

Build command: `grunt es6`
It will create js files from the es6 sources.

Unit tests: `grunt unit`

