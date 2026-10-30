# IdentityReference

# IdentityReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type can only be IDENTITY. This is read-only | [optional] 
**id** | **str** | Identity id. | [optional] 
**name** | **str** | Human-readable display name of identity. This is read-only | [optional] 
**email** | **str** | Email address of identity. This is read-only | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.identity_reference import IdentityReference

identity_reference = IdentityReference(
type='IDENTITY',
id='5168015d32f890ca15812c9180835d2e',
name='Alison Ferguso',
email='alison.ferguso@identitysoon.com'
)

```
[[Back to top]](#) 

