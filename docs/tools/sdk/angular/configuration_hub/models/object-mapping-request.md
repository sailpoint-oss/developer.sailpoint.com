# ObjectMappingRequest

# ObjectMappingRequest

Import this model from the entry point of its package:

```typescript
import { ObjectMappingRequest } from '@sailpoint/angular-sdk/configuration_hub';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | `string` | Type of the object the mapping value applies to, must be one from enum | [default to undefined]
**jsonPath** | `string` | JSONPath expression denoting the path within the object where the mapping value should be applied | [default to undefined]
**sourceValue** | `string` | Original value at the jsonPath location within the object | [default to undefined]
**targetValue** | `string` | Value to be assigned at the jsonPath location within the object | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether or not this object mapping is enabled | [default to false]

