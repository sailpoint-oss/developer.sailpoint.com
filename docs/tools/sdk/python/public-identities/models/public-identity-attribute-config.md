# PublicIdentityAttributeConfig

# PublicIdentityAttributeConfig

Maps an identity attribute key to its display name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Attribute / search field key (e.g. email, manager.displayName). | [required]
**name** | **str** | Human-readable display name for the attribute. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identity_attribute_config import PublicIdentityAttributeConfig

public_identity_attribute_config = PublicIdentityAttributeConfig(
key='country',
name='Country'
)

```
[[Back to top]](#) 

