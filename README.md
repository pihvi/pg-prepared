### Usgae

```javascript
var prep = require('pg-prepared')

var item = prep('SELECT * from item WHERE id = ${id}')
client.query(item({id: 5}), function(err, result) {...})
```
