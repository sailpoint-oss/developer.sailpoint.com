# ReelectRequest

# ReelectRequest

Import this model from the entry point of its package:

```typescript
import { ReelectRequest } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerId** | **(optional)** `string` | The UUID of the identity proposed to be re-elected as the resource owner. | [default to undefined]
**campaignName** | **(optional)** `string` | The name of the campaign or election process for re-electing the owner. | [default to undefined]
**reviewers** | **(optional)** `Array<string>` | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [default to undefined]

