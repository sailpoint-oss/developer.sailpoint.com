# Campaign2AllOfRoleCompositionCampaignInfo

# Campaign2AllOfRoleCompositionCampaignInfo

Import this model from the entry point of its package:

```typescript
import { Campaign2AllOfRoleCompositionCampaignInfo } from '@sailpoint/angular-sdk/certification_campaigns';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewerId** | **(optional)** `string` | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the \"reviewer\" object. | [default to undefined]
**reviewer** | **(optional)** `Campaign2AllOfRoleCompositionCampaignInfoReviewer` |  | [default to undefined]
**roleIds** | **(optional)** `Array<string>` | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**remediatorRef** | `Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef` |  | [default to undefined]
**query** | **(optional)** `string` | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [default to undefined]
**description** | **(optional)** `string` | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [default to undefined]

