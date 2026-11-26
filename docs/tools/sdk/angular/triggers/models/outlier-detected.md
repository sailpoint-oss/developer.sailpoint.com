# OutlierDetected

# OutlierDetected

Import this model from the entry point of its package:

```typescript
import { OutlierDetected } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | `OutlierDetectedIdentity` |  | [default to undefined]
**outlierType** | `string` | Identity\'s outlier type. | [default to undefined]
**score** | `number` | Dissimilarity score that determines whether the identity is an outlier, ranging from `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier. | [default to undefined]

