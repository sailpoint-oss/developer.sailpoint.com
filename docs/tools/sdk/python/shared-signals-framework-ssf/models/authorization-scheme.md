# AuthorizationScheme

# AuthorizationScheme

Authorization scheme supported by the transmitter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_urn** | **str** | URN describing the authorization specification. OAuth 2.0: `urn:ietf:rfc:6749`; Bearer token: `urn:ietf:rfc:6750`.  | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.authorization_scheme import AuthorizationScheme

authorization_scheme = AuthorizationScheme(
spec_urn='urn:ietf:rfc:6749'
)

```
[[Back to top]](#) 

