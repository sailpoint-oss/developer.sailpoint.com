# Intelblastradiussummary

# Intelblastradiussummary

Import this model from the entry point of its package:

```typescript
import { Intelblastradiussummary } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impactedSources** | `Array<string>` | Source systems that may be impacted if compromised. | [default to undefined]
**impactedAccounts** | `number` | Linked machine accounts that may be impacted if compromised. | [default to undefined]
**impactedHumans** | `number` | Unique owners and authorized humans potentially impacted if compromised. | [default to undefined]
**hasEntitlements** | **(optional)** `boolean` | Whether this NHI holds entitlements included in summary. | [default to false]
**environments** | **(optional)** `Array<string>` | Environment labels for impacted access in this summary. | [default to undefined]
**accessTypes** | **(optional)** `Array<string>` | Access type labels for impacted access in this summary. | [default to undefined]

