# MachineIdentityAggregationRequest

# MachineIdentityAggregationRequest

Import this model from the entry point of its package:

```typescript
import { MachineIdentityAggregationRequest } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasetIds** | `Array<string>` | List of dataset Ids to aggregate machine identities | [default to undefined]
**disableOptimization** | **(optional)** `boolean` | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [default to false]

