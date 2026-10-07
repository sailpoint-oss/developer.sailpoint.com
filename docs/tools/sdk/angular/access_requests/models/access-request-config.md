# AccessRequestConfig

# AccessRequestConfig

Import this model from the entry point of its package:

```typescript
import { AccessRequestConfig } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**autoApprovalEnabled** | **(optional)** `boolean` | If this is true and the requester and reviewer are the same, the request is automatically approved.  This field has been moved to the approval configurations. Please use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint instead. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `RequestOnBehalfOfConfig` |  | [default to undefined]
**approvalReminderAndEscalationConfig** | **(optional)** `ApprovalReminderAndEscalationConfig` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `EntitlementRequestConfig` |  | [default to undefined]

