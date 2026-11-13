# AccountUpdated

# AccountUpdated

Import this model from the entry point of its package:

```typescript
import { AccountUpdated } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | `AccountUpdatedEvent` |  | [default to undefined]
**source** | `AccountSourceReference` |  | [default to undefined]
**account** | `AccountV2` |  | [default to undefined]
**identity** | `IdentityReference2` |  | [default to undefined]
**accountChangeTypes** | `Array<string>` | The types of changes that occurred to the account. | [default to undefined]
**singleValueAttributeChanges** | `Array<AccountUpdatedSingleValueAttributeChangesInner>` | Details about the single-value attribute changes that occurred to the account. | [default to undefined]
**multiValueAttributeChanges** | `Array<AccountUpdatedMultiValueAttributeChangesInner>` | Details about the multi-value attribute changes that occurred to the account. | [default to undefined]
**entitlementChanges** | `Array<AccountUpdatedEntitlementChangesInner>` | Details about the entitlement changes that occurred to the account. | [default to undefined]

