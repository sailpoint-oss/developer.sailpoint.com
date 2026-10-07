# SpConfigObject

# SpConfigObject

Import this model from the entry point of its package:

```typescript
import { SpConfigObject } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **(optional)** `string` | Object type the configuration is for. | [default to undefined]
**referenceExtractors** | **(optional)** `Array<string>` | List of JSON paths within an exported object of this type, representing references that must be resolved. | [default to undefined]
**signatureRequired** | **(optional)** `boolean` | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [default to false]
**alwaysResolveById** | **(optional)** `boolean` | Indicates whether this object type must be always be resolved by ID. | [default to false]
**legacyObject** | **(optional)** `boolean` | Indicates whether this is a legacy object. | [default to false]
**onePerTenant** | **(optional)** `boolean` | Indicates whether there is only one object of this type. | [default to false]
**exportable** | **(optional)** `boolean` | Indicates whether the object can be exported or is just a reference object. | [default to false]
**rules** | **(optional)** `SpConfigRules` |  | [default to undefined]

