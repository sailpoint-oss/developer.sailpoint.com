# PublicIdentitiesCompositeEntry

# PublicIdentitiesCompositeEntry

Import this model from the entry point of its package:

```typescript
import { PublicIdentitiesCompositeEntry } from '@sailpoint/angular-sdk/public_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryType** | `string` | Entry type discriminator. Must be COMPOSITE for nested query sets. | [default to undefined]
**textQuery** | `PublicIdentitiesTextQuery` | Text query clause for this TEXT entry. | [default to undefined]
**querySet** | `PublicIdentitiesNestedQuerySet` | Nested query set for this COMPOSITE entry. | [default to undefined]

