# AccessProfileApprovalScheme

# AccessProfileApprovalScheme

Import this model from the entry point of its package:

```typescript
import { AccessProfileApprovalScheme } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approverType** | **(optional)** `string` | Describes the individual or group that is responsible for an approval step. Values are as follows. **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [default to undefined]
**approverId** | **(optional)** `string` | ID of the specific approver, used only when approverType is GOVERNANCE_GROUP | [default to undefined]

