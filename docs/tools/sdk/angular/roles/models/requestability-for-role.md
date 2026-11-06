# RequestabilityForRole

# RequestabilityForRole

Import this model from the entry point of its package:

```typescript
import { RequestabilityForRole } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Indicates whether reauthorization is required for the request. | [default to false]
**requireEndDate** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide access end date. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `AccessDuration` |  | [default to undefined]
**approvalSchemes** | **(optional)** `Array<ApprovalSchemeForRole>` | List describing the steps in approving the request | [default to undefined]
**dimensionSchema** | **(optional)** `DimensionSchema` |  | [default to undefined]
**formDefinitionId** | **(optional)** `string` | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [default to undefined]

