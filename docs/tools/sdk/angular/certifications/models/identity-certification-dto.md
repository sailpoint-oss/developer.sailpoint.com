# IdentityCertificationDto

# IdentityCertificationDto

Import this model from the entry point of its package:

```typescript
import { IdentityCertificationDto } from '@sailpoint/angular-sdk/certifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | id of the certification | [default to undefined]
**name** | **(optional)** `string` | name of the certification | [default to undefined]
**campaign** | **(optional)** `CampaignReference` |  | [default to undefined]
**completed** | **(optional)** `boolean` | Have all decisions been made? | [default to undefined]
**identitiesCompleted** | **(optional)** `number` | The number of identities for whom all decisions have been made and are complete. | [default to undefined]
**identitiesTotal** | **(optional)** `number` | The total number of identities in the Certification, both complete and incomplete. | [default to undefined]
**created** | **(optional)** `string` | created date | [default to undefined]
**modified** | **(optional)** `string` | modified date | [default to undefined]
**decisionsMade** | **(optional)** `number` | The number of approve/revoke/acknowledge decisions that have been made. | [default to undefined]
**decisionsTotal** | **(optional)** `number` | The total number of approve/revoke/acknowledge decisions. | [default to undefined]
**due** | **(optional)** `string` | The due date of the certification. | [default to undefined]
**signed** | **(optional)** `string` | The date the reviewer signed off on the Certification. | [default to undefined]
**reviewer** | **(optional)** `Reviewer` |  | [default to undefined]
**reassignment** | **(optional)** `Reassignment` |  | [default to undefined]
**hasErrors** | **(optional)** `boolean` | Identifies if the certification has an error | [default to undefined]
**errorMessage** | **(optional)** `string` | Description of the certification error | [default to undefined]
**phase** | **(optional)** `CertificationPhase` |  | [default to undefined]

