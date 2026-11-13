# ManagerCorrelationMapping

# ManagerCorrelationMapping

Import this model from the entry point of its package:

```typescript
import { ManagerCorrelationMapping } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountAttributeName** | **(optional)** `string` | Name of the attribute to use for manager correlation. The value found on the account attribute will be used to lookup the manager\'s identity. | [default to undefined]
**identityAttributeName** | **(optional)** `string` | Name of the identity attribute to search when trying to find a manager using the value from the accountAttribute. | [default to undefined]

