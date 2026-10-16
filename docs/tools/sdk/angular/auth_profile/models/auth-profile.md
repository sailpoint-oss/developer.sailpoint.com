# AuthProfile

# AuthProfile

Import this model from the entry point of its package:

```typescript
import { AuthProfile } from '@sailpoint/angular-sdk/auth_profile';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Authentication Profile name. | [default to undefined]
**offNetwork** | **(optional)** `boolean` | Use it to block access from off network. | [default to false]
**untrustedGeography** | **(optional)** `boolean` | Use it to block access from untrusted geoographies. | [default to false]
**applicationId** | **(optional)** `string` | Application ID. | [default to undefined]
**applicationName** | **(optional)** `string` | Application name. | [default to undefined]
**type** | **(optional)** `string` | Type of the Authentication Profile. | [default to undefined]
**strongAuthLogin** | **(optional)** `boolean` | Use it to enable strong authentication. | [default to false]

