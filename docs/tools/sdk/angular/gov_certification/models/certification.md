# Certification

# Certification

Import this model from the entry point of its package:

```typescript
import { Certification } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignRef** | `CampaignReference` |  | [default to undefined]
**phase** | `CertificationPhase` |  | [default to undefined]
**reviewProgress** | **(optional)** `CertificationReviewProgress` |  | [default to undefined]
**dueDate** | `string` | The due date of the certification. | [default to undefined]
**dateSigned** | **(optional)** `string` | The date the reviewer signed off on the certification. Omitted until the certification is signed off. | [default to undefined]
**dateFinished** | **(optional)** `string` | The date the certification was finished. | [default to undefined]
**reviewer** | `CertificationReviewer` |  | [default to undefined]
**reassignment** | **(optional)** `Reassignment` |  | [default to undefined]
**completed** | `boolean` | Indicates if all certification decisions have been made. | [default to undefined]
**decisionsMade** | `number` | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [default to undefined]
**decisionsTotal** | `number` | The total number of approve/revoke/acknowledge decisions for the certification. | [default to undefined]
**completedSubjects** | `number` | The number of subjects (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [default to undefined]
**totalSubjects** | `number` | The total number of subjects (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [default to undefined]
**id** | **(optional)** `string` | The certificationId | [default to undefined]
**name** | **(optional)** `string` | The name of the certification | [default to undefined]
**created** | **(optional)** `string` | The date the certification was created | [default to undefined]
**modified** | **(optional)** `string` | The date the certification was last modified | [default to undefined]
**reauthRequired** | **(optional)** `boolean` | Indicates whether any review items within this certification requires reauthentication before sign-off or completion | [default to false]

