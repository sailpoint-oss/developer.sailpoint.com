# SODViolationMitigatedPayload

# SODViolationMitigatedPayload

Import this model from the entry point of its package:

```typescript
import { SODViolationMitigatedPayload } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliedControls** | **(optional)** `Array<SODViolationMitigatedPayloadAppliedControlsInner>` | Controls applied to mitigate the violation. For now this lists the currently active application(s). | [default to undefined]
**created** | **(optional)** `string` | When the violation record was created. | [default to undefined]
**expiration** | **(optional)** `string` | Violation-level expiration (may be a sentinel when not set). | [default to undefined]
**id** | **(optional)** `string` | Violation ID. | [default to undefined]
**lastEvaluatedDate** | **(optional)** `string` | When the violation was last evaluated. | [default to undefined]
**level** | **(optional)** `string` | Violation severity level. | [default to undefined]
**modified** | **(optional)** `string` | When the violation was last modified. | [default to undefined]
**name** | **(optional)** `string` | Human-readable violation name. | [default to undefined]
**owner** | **(optional)** `SODViolationMitigatedPayloadOwner` |  | [default to undefined]
**policy** | **(optional)** `SODViolationCreatedPayloadPolicy` |  | [default to undefined]
**status** | **(optional)** `string` | Violation lifecycle status after mitigation. | [default to undefined]
**target** | **(optional)** `SODViolationCreatedPayloadTarget` |  | [default to undefined]

