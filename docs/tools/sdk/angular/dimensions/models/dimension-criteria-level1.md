# DimensionCriteriaLevel1

# DimensionCriteriaLevel1

Import this model from the entry point of its package:

```typescript
import { DimensionCriteriaLevel1 } from '@sailpoint/angular-sdk/dimensions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `DimensionCriteriaOperation` |  | [default to undefined]
**key** | **(optional)** `DimensionCriteriaKey` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<DimensionCriteriaLevel2>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

