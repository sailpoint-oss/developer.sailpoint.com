# EntitlementAccessRequestConfig

# EntitlementAccessRequestConfig

Import this model from the entry point of its package:

```typescript
import { EntitlementAccessRequestConfig } from '@sailpoint/angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalSchemes** | **(optional)** `Array<EntitlementApprovalScheme>` | Ordered list of approval steps for the access request. Empty when no approval is required. | [default to undefined]
**requestCommentRequired** | **(optional)** `boolean` | If the requester must provide a comment during access request. | [default to false]
**denialCommentRequired** | **(optional)** `boolean` | If the reviewer must provide a comment when denying the access request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Is Reauthorization Required | [default to false]
**requireEndDate** | **(optional)** `boolean` | If true, then remove date or sunset date is required in access request of the entitlement. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `EntitlementAccessRequestConfigMaxPermittedAccessDuration` |  | [default to undefined]
**formDefinitionId** | **(optional)** `string` | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [default to undefined]

