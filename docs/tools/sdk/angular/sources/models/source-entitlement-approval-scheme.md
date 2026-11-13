# SourceEntitlementApprovalScheme

# SourceEntitlementApprovalScheme

Import this model from the entry point of its package:

```typescript
import { SourceEntitlementApprovalScheme } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW** is not supported in source-level entitlement request configuration. Use the entitlement-level [Replace entitlement request config](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1) endpoint to configure a workflow approver. A source-level request that contains `WORKFLOW` is rejected with a 400. | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [default to undefined]

