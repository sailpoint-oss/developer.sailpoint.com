# Responseactioncreaterequest

# Responseactioncreaterequest

Import this model from the entry point of its package:

```typescript
import { Responseactioncreaterequest } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionType** | `string` | Which response action to run. | [default to undefined]
**identityType** | `string` | Subject type of the response action. v1 supports HUMAN. | [default to undefined]
**identityId** | `string` | ISC identity id, resolved by the caller from a prior intelligence query. | [default to undefined]
**accountIds** | **(optional)** `Array<string>` | One or more account ids. Required for DISABLE_ACCOUNT (1-50 after trim/dedupe); must be omitted for DISABLE_IDENTITY. A single account is sent as a one-element array.  | [default to undefined]
**context** | `Responseactioncontext` |  | [default to undefined]

