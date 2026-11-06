# Intelidentitygraphlink

# Intelidentitygraphlink

Import this model from the entry point of its package:

```typescript
import { Intelidentitygraphlink } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | `string` | Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity` and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity` for Human responses and `machine_identity` for NHI responses.  | [default to undefined]

