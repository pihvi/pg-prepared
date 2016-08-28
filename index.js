module.exports = function(query) {
  return function(data) {
    var values = []
    return {
      text: query.replace(/\${(.+?)}/g, function(_, key) {
        if (key in data) {
          values.push(data[key])
          return '$' + values.length
        } else {
          throw new Error('Missing value for statement.\n' + key + ' not provided for statement:\n' + query + '\nthis was provided:\n' + JSON.stringify(data))
        }
      }),
      values: values
    }
  }
}
