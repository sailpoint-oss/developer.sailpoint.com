# JWK

# JWK

Import this model from the entry point of its package:

```typescript
import { JWK } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **(optional)** `string` | Algorithm intended for use with the key (e.g. RS256). | [default to undefined]
**e** | **(optional)** `string` | RSA public exponent (Base64url encoded). | [default to undefined]
**kid** | **(optional)** `string` | Key ID - unique identifier for the key. | [default to undefined]
**kty** | **(optional)** `string` | Key type (e.g. RSA). | [default to undefined]
**n** | **(optional)** `string` | RSA modulus (Base64url encoded). | [default to undefined]
**use** | **(optional)** `string` | Intended use of the key (e.g. sig for signature verification). | [default to undefined]

