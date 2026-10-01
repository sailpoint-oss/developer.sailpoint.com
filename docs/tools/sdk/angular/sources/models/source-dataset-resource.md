# SourceDatasetResource

# SourceDatasetResource

Import this model from the entry point of its package:

```typescript
import { SourceDatasetResource } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Resource identifier. Server-generated on create. | [readonly] [default to undefined]
**name** | **(optional)** `string` | Display name of the resource. Required on create. | [default to undefined]
**features** | **(optional)** `Array<string>` | Feature identifiers supported by this resource. | [default to undefined]
**type** | **(optional)** `string` | Resource type. Required on create. | [default to undefined]
**datasetId** | **(optional)** `string` | Dataset identifier to associate this resource with. Required on create. | [default to undefined]
**schema** | **(optional)** `Schema` |  | [default to undefined]

