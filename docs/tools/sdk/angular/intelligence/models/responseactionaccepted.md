# Responseactionaccepted

# Responseactionaccepted

Import this model from the entry point of its package:

```typescript
import { Responseactionaccepted } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Tracking handle and correlation id for the response action. | [default to undefined]
**status** | `string` | Aggregate status of the response action. SUBMITTED at creation (registered; no correlated workflow execution observed yet). | [default to undefined]
**statusUrl** | `string` | Relative URL to poll for the current status of the response action. | [default to undefined]

