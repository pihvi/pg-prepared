### Usgae

[![Greenkeeper badge](https://badges.greenkeeper.io/pihvi/pg-prepared.svg)](https://greenkeeper.io/)

```javascript
var prep = require('pg-prepared')

var item = prep('SELECT * from item WHERE id = ${id}')
client.query(item({id: 5}), function(err, result) {...})
```
