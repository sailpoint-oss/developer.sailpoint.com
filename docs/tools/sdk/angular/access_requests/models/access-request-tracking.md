# AccessRequestTracking

# AccessRequestTracking

Import this model from the entry point of its package:

```typescript
import { AccessRequestTracking } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `string` | The identity id in which the access request is for. | [default to undefined]
**requestedItemsDetails** | **(optional)** `Array<RequestedItemDetails>` | The details of the item requested. | [default to undefined]
**attributesHash** | **(optional)** `number` | a hash representation of the access requested, useful for longer term tracking client side. | [default to undefined]
**accessRequestIds** | **(optional)** `Array<string>` | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [default to undefined]

