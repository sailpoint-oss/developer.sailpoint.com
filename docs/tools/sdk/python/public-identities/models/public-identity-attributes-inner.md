# PublicIdentityAttributesInner

# PublicIdentityAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The attribute key | [optional] 
**name** | **str** | Human-readable display name of the attribute | [optional] 
**value** | **str** | The attribute value | [optional] 
\}

## Example

```python
from sailpoint.public_identities.models.public_identity_attributes_inner import PublicIdentityAttributesInner

public_identity_attributes_inner = PublicIdentityAttributesInner(
key='country',
name='Country',
value='US'
)

```
[[Back to top]](#) 

