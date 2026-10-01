# AccessRequestConfig2

# AccessRequestConfig2

Import this model from the entry point of its package:

```typescript
import { AccessRequestConfig2 } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvalsMustBeExternal** | **(optional)** `boolean` | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn\'t an org admin. | [default to false]
**reauthorizationEnabled** | **(optional)** `boolean` | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [default to false]
**requestOnBehalfOfConfig** | **(optional)** `RequestOnBehalfOfConfig2` |  | [default to undefined]
**entitlementRequestConfig** | **(optional)** `EntitlementRequestConfig2` |  | [default to undefined]
**govGroupVisibilityEnabled** | **(optional)** `boolean` | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group\'s approval. Up to the first 10 members of the group will be listed. | [default to false]
**machineIdentityAccessRequestEnabled** | **(optional)** `boolean` | If this is false, machine identity access requests and machine accounts-selection are rejected with 403 (for example, \"Machine identity access request is disabled in access request configuration.\"). Defaults to true. Exposed on access-request-config v2 only.  | [default to true]

