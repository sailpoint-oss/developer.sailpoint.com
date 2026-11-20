# CorrelatedGovernanceEvent

# CorrelatedGovernanceEvent

Import this model from the entry point of its package:

```typescript
import { CorrelatedGovernanceEvent } from '@sailpoint/angular-sdk/identity_history';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the governance event, such as the certification name or access request ID. | [default to undefined]
**dateTime** | **(optional)** `string` | The date that the certification or access request was completed. | [default to undefined]
**type** | **(optional)** `string` | The type of governance event. | [default to undefined]
**governanceId** | **(optional)** `string` | The ID of the instance that caused the event - either the certification ID or access request ID. | [default to undefined]
**owners** | **(optional)** `Array<CertifierResponse>` | The owners of the governance event (the certifiers or approvers) | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierResponse>` | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [default to undefined]
**decisionMaker** | **(optional)** `CertifierResponse` |  | [default to undefined]

