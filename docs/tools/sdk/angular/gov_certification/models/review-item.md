# ReviewItem

# ReviewItem

Import this model from the entry point of its package:

```typescript
import { ReviewItem } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The review item\'s ID | [default to undefined]
**type** | **(optional)** `CertificationItemType` |  | [default to undefined]
**completed** | **(optional)** `boolean` | Indicates whether the review item is complete | [default to false]
**newAccess** | **(optional)** `boolean` | Indicates whether the review item is for new access to a source | [default to false]
**decision** | **(optional)** `CertificationDecision` |  | [default to undefined]
**proposedEndDate** | **(optional)** `string` | The end date proposed as part of decision to sunset a user\'s access | [default to undefined]
**comments** | **(optional)** `string` | Comments for this review item | [default to undefined]
**reviewData** | **(optional)** `ReviewData` |  | [default to undefined]
**certificationSubjectSummary** | **(optional)** `CertificationSubjectSummary` |  | [default to undefined]
**actor** | **(optional)** `IdentityReference` |  | [default to undefined]
**accountName** | **(optional)** `string` | The name of the account to which this access profile belongs | [default to undefined]
**sourceName** | **(optional)** `string` | The name of the source for which this access profile belongs | [default to undefined]
**reauthRequired** | **(optional)** `boolean` | Indicates whether the review item requires a reauthentication for the approver | [default to false]

