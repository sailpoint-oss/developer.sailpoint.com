# ReviewRecommendation

# ReviewRecommendation

Import this model from the entry point of its package:

```typescript
import { ReviewRecommendation } from '@sailpoint/angular-sdk/certifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation** | **(optional)** `string` | The recommendation from IAI at the time of the decision. This field will be null if no recommendation was made. | [default to undefined]
**reasons** | **(optional)** `Array<string>` | A list of reasons for the recommendation. | [default to undefined]
**timestamp** | **(optional)** `string` | The time at which the recommendation was recorded. | [default to undefined]

