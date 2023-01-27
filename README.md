# openapi-filters

```javascript
import { makeFilters } from '@hckrnews/openapi-filters'
import openAPISpecification from './openapi-spec.json' assert { type: 'json' }

const openAPIspec = openAPISpecification.paths['/test'].get

const filters = makeFilters(openAPIspec);
const params = {
    page: 1,
    size: 42,
};
const result = filters(params);
```
