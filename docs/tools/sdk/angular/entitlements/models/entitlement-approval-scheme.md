# EntitlementApprovalScheme

# EntitlementApprovalScheme

Import this model from the entry point of its package:

```typescript
import { EntitlementApprovalScheme } from '@sailpoint/angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. A workflow approver has these requirements.  - The Adaptive Approvals feature must be enabled for the tenant. - The workflow given in **approverId** must use the `idn:access-request-trigger` trigger. - `WORKFLOW` is exclusive of the other approver types. If you use it, it must be the only entry in **approvalSchemes**. - `WORKFLOW` is supported only in entitlement-level configuration. The source-level [Update source entitlement request configuration](https://developer.sailpoint.com/docs/api/update-source-entitlement-request-config-v-1) endpoint rejects it with a 400. | [default to undefined]
**approverId** | **(optional)** `string` | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW. For WORKFLOW this is the ID of the workflow to run. | [default to undefined]

