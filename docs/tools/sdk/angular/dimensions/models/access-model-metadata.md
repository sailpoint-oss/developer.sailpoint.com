# AccessModelMetadata

# AccessModelMetadata

Import this model from the entry point of its package:

```typescript
import { AccessModelMetadata } from '@sailpoint/angular-sdk/dimensions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | Unique identifier for the metadata type | [default to undefined]
**name** | **(optional)** `string` | Human readable name of the metadata type | [default to undefined]
**multiselect** | **(optional)** `boolean` | Allows selecting multiple values | [default to false]
**status** | **(optional)** `string` | The state of the metadata item | [default to undefined]
**type** | **(optional)** `string` | The type of the metadata item | [default to undefined]
**objectTypes** | **(optional)** `Array<string>` | The types of objects | [default to undefined]
**description** | **(optional)** `string` | Describes the metadata item | [default to undefined]
**values** | **(optional)** `Array<AccessModelMetadataValuesInner>` | The value to assign to the metadata item | [default to undefined]

