# BulkUpdatePersonalAccessTokensRequest

# BulkUpdatePersonalAccessTokensRequest

Import this model from the entry point of its package:

```typescript
import { BulkUpdatePersonalAccessTokensRequest } from '@sailpoint/angular-sdk/personal_access_tokens';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | `Array<string>` | The IDs of the personal access tokens to update. All IDs must reference personal access tokens that exist in the current tenant. Duplicate and blank values are not allowed. | [default to undefined]
**patch** | `Array<JsonPatchOperation>` | A single [JSON Patch](https://tools.ietf.org/html/rfc6902) document that is applied identically to every personal access token referenced in `ids`. Only the following paths are allowed for bulk updates: * `/expirationDate` - Set (`replace`) or clear (`remove`) the token\'s expiration. * `/userAwareTokenNeverExpires` - Explicit acknowledgment required when clearing `expirationDate`. Any other path (for example `/name` or `/scope`) results in a `400` response. | [default to undefined]

