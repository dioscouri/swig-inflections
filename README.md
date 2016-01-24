# swig-inflections

Use [i](https://www.npmjs.com/package/i) functions as [swig](http://paularmstrong.github.io/swig/) filters.

##Install
`npm install --save swig-inflections`

##Usage

```javascript
var swigInflections = require('swig-inflections'), swig = require('swig')

//Add all i functions
swigInflections.useFilter(swig)

//Add only one i function
swigInflections.useFilter(swig, 'camelize')

//Add multiple i functions
swigInflections.useFilter(swig, ['singularize', 'pluralize'])
```

Now you can use the i functions as a swig filter.

```swig
<p class="cup">{{ cups|singularize }}</p>
```