var inflect = require('i')();

function useFilter(swig, filter) {
  if (filter === undefined) {
    return Object.getOwnPropertyNames(inflect).forEach(function(action) {
      if (itHas(action)) {
          useFilter(swig, action)
      }
    });
  }
  
  if (Array.isArray(filter)) {
    return filter.forEach(function(f) {
      useFilter(swig, f)
    });
  }

  if (itHas(filter)) {
      swig.setFilter(filter, inflect[filter])
  }    
  else {
      throw new Error(filter + " is not a function")
  }
}

function itHas(functionName) {
  return (inflect[functionName] && typeof inflect[functionName] === 'function')
}

module.exports = {
  useFilter: useFilter
}