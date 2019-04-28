### Usage
```
const memoize = require('level-memoize')('./levelDB_location')

function returnsPromise(x){
  return Promise.resolve(x*2)
}

const cachedFunction = memoize(returnsPromise)

cachedFunction(2).then(console.log) // promise returns 4
cachedFunction(6).then(console.log) // promise returns 12
cachedFunction(2).then(console.log) // cache returns 4

```
### Potential improvements
* Expiry for cached results
* Manual clear of cache
