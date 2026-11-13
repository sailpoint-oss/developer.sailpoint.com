# RequestedItemAccountSelections

# RequestedItemAccountSelections

Import this model from the entry point of its package:

```typescript
import { RequestedItemAccountSelections } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | The description for this requested item | [default to undefined]
**accountsSelectionBlocked** | **(optional)** `boolean` | This field indicates if account selections are not allowed for this requested item. * If true, this field indicates that account selections will not be available for this item and identity combination. In this case, no account selections should be provided in the access request for this item and identity combination, irrespective of whether the identity has single or multiple accounts on a source. * An example is where a user is requesting an access profile that is already assigned to one of their accounts. * For machine identities, this can be true with reason `NO_ACCOUNT_ON_SOURCE` when the machine has no account on a requested source. Empty `sources[].accounts` on the accounts-selection response is valid in that blocked case; submitting empty accounts on create is not valid.  | [default to false]
**accountsSelectionBlockedReason** | **(optional)** `string` | If account selections are not allowed for an item, this field will denote the reason. * `ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT` - access profile already assigned on an account. * `NO_ACCOUNT_ON_SOURCE` - no account found on at least one requested source (only for machine identities).  | [default to undefined]
**type** | **(optional)** `string` | The type of the item being requested. | [default to undefined]
**id** | **(optional)** `string` | The id of the requested item | [default to undefined]
**name** | **(optional)** `string` | The name of the requested item | [default to undefined]
**sources** | **(optional)** `Array<SourceAccountSelections>` | The details for the sources and accounts for the requested item and identity combination | [default to undefined]

