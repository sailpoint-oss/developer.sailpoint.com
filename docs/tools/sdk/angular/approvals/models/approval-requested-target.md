# ApprovalRequestedTarget

# ApprovalRequestedTarget

Import this model from the entry point of its package:

```typescript
import { ApprovalRequestedTarget } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Target ID (for example a role ID or access profile ID). | [default to undefined]
**ids** | **(optional)** `Array<string>` | Target IDs when the approval request applies to multiple targets. | [default to undefined]
**name** | **(optional)** `string` | Target name (for example a role name or access profile name). | [default to undefined]
**names** | **(optional)** `Array<string>` | Target names when the approval request applies to multiple targets. | [default to undefined]
**targetType** | **(optional)** `string` | Target type (for example Role or Access Profile). | [default to undefined]
**targetTypes** | **(optional)** `Array<string>` | Target types when the approval request applies to multiple targets. | [default to undefined]
**description** | **(optional)** `string` | Optional description for the requested target. | [default to undefined]
**epLevelAtCreation** | **(optional)** `string` | Effective privilege (EP) level at approval creation. | [default to undefined]
**currentEPLevel** | **(optional)** `string` | Current effective privilege (EP) level for the requested target. | [default to undefined]
**currentEPModifiedDate** | **(optional)** `string` | Date and time when the current effective privilege level was last modified. | [default to undefined]
**requestType** | **(optional)** `string` | Access request type (for example GRANT_ACCESS or REVOKE_ACCESS). | [default to undefined]
**forcedAuthSignature** | **(optional)** `string` | Signature required for forced authentication. | [default to undefined]
**reauthRequired** | **(optional)** `boolean` | Indicates whether forced reauthentication is required upon approval. | [default to false]
**startDate** | **(optional)** `string` | When temporary access will be granted, if applicable. | [default to undefined]
**removalDate** | **(optional)** `string` | When temporary access will be removed, if applicable. | [default to undefined]
**modifiedStartDate** | **(optional)** `string` | Updated start date when startDate is edited during the approval request. | [default to undefined]
**modifiedRemovalDate** | **(optional)** `string` | Updated removal date when removalDate is edited during the approval request. | [default to undefined]

