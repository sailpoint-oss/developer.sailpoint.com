# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

Import this model from the entry point of its package:

```typescript
import { GenericRequestApprovalConfig } from '@sailpoint/angular-sdk/generic_request_approval_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The approval configuration ID. Use it with the update API. | [default to undefined]
**targetType** | **(optional)** `string` | The kind of scope. | [default to undefined]
**targetId** | **(optional)** `string` | The scope target: the source resource ID for RESOURCE, the subtype ID for SUBTYPE, the source ID for SOURCE, and the tenant ID for GLOBAL. | [default to undefined]
**approvalConfig** | **(optional)**  | The approval setting for each action, keyed by action name (ACTIVATE, DEACTIVATE, CREATE, or DELETE, depending on the target type). An empty object means the action inherits the organization-level approval configuration. | [default to undefined]

