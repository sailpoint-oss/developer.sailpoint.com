# NetworkConfiguration

# NetworkConfiguration

Import this model from the entry point of its package:

```typescript
import { NetworkConfiguration } from '@sailpoint/angular-sdk/global_tenant_security_settings';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **(optional)** `Array<string>` | The collection of ip ranges. | [default to undefined]
**geolocation** | **(optional)** `Array<string>` | The collection of country codes. | [default to undefined]
**whitelisted** | **(optional)** `boolean` | Denotes whether the provided lists are whitelisted or blacklisted for geo location. | [default to false]

